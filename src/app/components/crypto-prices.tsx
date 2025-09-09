"use client"

import React, { useState, useEffect } from 'react'
import './crypto-prices.scss'

interface CryptoPrice {
  id: string
  symbol: string
  name: string
  current_price: number
  price_change_percentage_24h: number
  image: string
  display_price: number
  fluctuation: number
}

const CryptoPrices = () => {
  const [prices, setPrices] = useState<CryptoPrice[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [basePrices, setBasePrices] = useState<CryptoPrice[]>([])

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        setLoading(true)
        setError(null)
        
        // Fetch top cryptocurrencies by market cap
        const response = await fetch(
          'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false'
        )
        
        if (!response.ok) {
          throw new Error('Failed to fetch crypto prices')
        }
        
        const data = await response.json()
        
        // Add display_price and fluctuation properties
        const enhancedData = data.map((coin: {
          id: string
          symbol: string
          name: string
          current_price: number
          price_change_percentage_24h: number
          image: string
        }) => ({
          ...coin,
          display_price: coin.current_price,
          fluctuation: 0
        }))
        
        setBasePrices(enhancedData)
        setPrices(enhancedData)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred')
        console.error('Error fetching crypto prices:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchPrices()
    
    // Refresh prices every 30 seconds
    const interval = setInterval(fetchPrices, 30000)
    
    return () => clearInterval(interval)
  }, [])

  // Price fluctuation effect
  useEffect(() => {
    if (basePrices.length === 0) return

    const fluctuationInterval = setInterval(() => {
      setPrices(prevPrices => 
        prevPrices.map(coin => {
          const baseCoin = basePrices.find(bp => bp.id === coin.id)
          if (!baseCoin) return coin

          // Generate random fluctuation between -0.01% and +0.01% (only affects decimals)
          const fluctuationPercent = (Math.random() - 0.5) * 0.02 // -0.01 to +0.01
          const fluctuation = baseCoin.current_price * (fluctuationPercent / 100)
          const newDisplayPrice = baseCoin.current_price + fluctuation

          return {
            ...coin,
            display_price: newDisplayPrice,
            fluctuation: fluctuationPercent
          }
        })
      )
    }, 2000) // Update every 2 seconds

    return () => clearInterval(fluctuationInterval)
  }, [basePrices])

  const formatPrice = (price: number) => {
    if (price >= 1) {
      return `$${price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
    } else {
      return `$${price.toFixed(6)}`
    }
  }

  const getFluctuationColor = (fluctuation: number) => {
    if (fluctuation > 0) return 'positive'
    if (fluctuation < 0) return 'negative'
    return 'neutral'
  }

  const formatChange = (change: number) => {
    const isPositive = change >= 0
    return {
      value: `${isPositive ? '+' : ''}${change.toFixed(2)}%`,
      className: isPositive ? 'positive' : 'negative'
    }
  }

  if (loading) {
    return (
      <div className="crypto-prices">
        <div className="prices-header">
          <h3>Live Crypto Prices</h3>
        </div>
        <div className="prices-grid">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="price-card loading">
              <div className="coin-info">
                <div className="coin-icon skeleton"></div>
                <div className="coin-details">
                  <div className="coin-symbol skeleton"></div>
                  <div className="coin-name skeleton"></div>
                </div>
              </div>
              <div className="price-details">
                <div className="current-price skeleton"></div>
                <div className="price-change skeleton"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="crypto-prices">
        <div className="prices-header">
          <h3>Live Crypto Prices</h3>
        </div>
        <div className="error-message">
          <p>Unable to load crypto prices</p>
          <button onClick={() => window.location.reload()}>Retry</button>
        </div>
      </div>
    )
  }

  return (
    <div className="crypto-prices">
      <div className="prices-header">
        <h3>Live Crypto Prices</h3>
        <div className="last-updated">
          Updated just now
        </div>
      </div>
      <div className="prices-grid">
        {prices.slice(0, 6).map((coin) => {
          const change = formatChange(coin.price_change_percentage_24h)
          const fluctuationColor = getFluctuationColor(coin.fluctuation)
          return (
            <div key={coin.id} className="price-card">
              <div className="coin-info">
                <img 
                  src={coin.image} 
                  alt={coin.name}
                  className="coin-icon"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.style.display = 'none'
                  }}
                />
                <div className="coin-details">
                  <div className="coin-symbol">{coin.symbol.toUpperCase()}</div>
                  <div className="coin-name">{coin.name}</div>
                </div>
              </div>
              <div className="price-details">
                <div className={`current-price ${fluctuationColor}`}>
                  {formatPrice(coin.display_price)}
                </div>
                <div className="price-info-row">
                  <div className={`price-change ${change.className}`}>
                    {change.value}
                  </div>
                  <div className={`live-fluctuation ${fluctuationColor}`}>
                    {coin.fluctuation > 0 ? '↗' : coin.fluctuation < 0 ? '↘' : '→'}
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default CryptoPrices
