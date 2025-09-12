import React from "react";
import "./faq.scss";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      q: "What is P2P?",
      a: "P2P (peer‑to‑peer) is a secure method where users can buy and sell crypto assets directly with each other via global exchanges. Trades are protected by the exchanges' official escrow systems.",
    },
    {
      q: "What is PEXAH's role?",
      a: "PEXAH serves as an official merchant (seller) in the P2P markets of global exchanges. You open a buy request on the exchange, and we fulfill the USDT sale.",
    },
    {
      q: "How is transaction security ensured?",
      a: "All transactions are secured by the exchange's escrow mechanism and KYC verification processes. This removes the need for mutual trust between counterparties.",
    },
    {
      q: "Is there a minimum transaction limit?",
      a: "Limits vary depending on the exchange you use and the amount requested. Contact us for specific details.",
    },
    {
      q: "Which cryptocurrencies do you sell?",
      a: "PEXAH currently focuses primarily on selling USDT (Tether).",
    },
    {
      q: "Is KYC required?",
      a: "Yes. Since transactions are carried out through global exchanges, the KYC policies of the relevant exchange apply.",
    },
    {
      q: "How long does a transaction take?",
      a: "After you complete the payment, transactions are typically finalized within minutes.",
    },
  ];

  return (
    <section id="faq" className="faq">
      <div className="faq-container">
        <h2 className="faq-title">Frequently Asked Questions (FAQ)</h2>
        <Accordion type="single" collapsible className="faq-list">
          {faqs.map((item, idx) => (
            <AccordionItem key={idx} value={`item-${idx}`} className="faq-item">
              <AccordionTrigger className="faq-question">{item.q}</AccordionTrigger>
              <AccordionContent className="faq-answer">{item.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;


