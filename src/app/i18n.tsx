"use client";

import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

export type Locale = "en" | "ar" | "ru";

type Messages = {
  header: {
    home: string;
    about: string;
    service: string;
    whyUs: string;
    faq: string;
    contact: string;
  };
  hero: {
    title1: string; // Your
    title2: string; // trusted
    title3: string; // crypto
    title4: string; // transactions
    partner: string;
    p2p: string;
    inWord: string;
    description: string;
    cta: string;
  };
  bento: {
    title: string;
  };
  bentoCards?: Record<string, string>;
  testimonials: {
    title: string;
    description: string;
  };
  trading: {
    title: string;
    subtitle: string;
    features: {
      security: {
        title: string;
        description: string;
        bullets: string[];
      };
      speed: {
        title: string;
        description: string;
        bullets: string[];
      };
      pricing: {
        title: string;
        description: string;
        bullets: string[];
      };
      general: {
        title: string;
        description: string;
        bullets: string[];
      };
    };
  };
  about: {
    title: string;
    subtitle: string;
    storyTitle: string;
    storyP1: string;
    storyP2: string;
    missionTitle: string;
    missionText: string;
    visionTitle: string;
    visionText: string;
    valuesTitle: string;
    values: { title: string; description: string; }[];
  };
  contact: {
    title: string;
    subtitle: string;
    mapTitle: string;
    pinLabel: string;
    ctaTitle: string;
    ctaDesc: string;
    call: string;
    email: string;
    hq: string;
  };
  footer: {
    tagline: string;
    developedBy: string;
  };
  faq: {
    title: string;
    items: { q: string; a: string }[];
  };
};

const DICTIONARY: Record<Locale, Messages> = {
  en: {
    header: {
      home: "Home",
      about: "About us",
      service: "Our service",
      whyUs: "Why us?",
      faq: "FAQ",
      contact: "Contact",
    },
    hero: {
      title1: "Your",
      title2: "trusted",
      title3: "crypto",
      title4: "transactions",
      partner: "partner",
      p2p: "P2P",
      inWord: "in",
      description:
        "PEXAH offers fast, secure, and transparent solutions for your crypto P2P buy-sell transactions via global exchanges.",
      cta: "Contact us",
    },
    bento: {
      title: "Simple and Secure P2P Trading via Global Exchanges",
    },
    bentoCards: {
      trusted: "Trusted P2P via Global Exchanges",
      trustedDesc: "Escrow‑protected trades with exchange‑level KYC for secure, direct P2P buy/sell.",
      fast: "Fast settlement in minutes",
      fastDesc: "After payment is confirmed, most P2P trades complete within minutes — available 24/7.",
      transparent: "Transparent pricing",
      transparentDesc: "Clear quotes before every trade. No hidden fees and a simple, step‑by‑step flow.",
      merchant: "Official merchant & compliance",
      merchantDesc: "Operate as an official merchant on global exchanges with escrow and AML/KYC safeguards.",
      learn: "Learn more",
    },
    testimonials: {
      title: "Trusted by Professional Traders",
      description:
        "Join thousands of institutional investors and professional traders who trust our OTC platform",
    },
    trading: {
      title: "Our P2P Trading Features",
      subtitle:
        "Discover the key features that make PEXAH the trusted choice for secure P2P cryptocurrency trading",
      features: {
        security: {
          title: "Escrow‑Protected Security",
          description:
            "Trades are protected by the exchanges' official escrow and verified with KYC for maximum safety.",
          bullets: [
            "Exchange escrow protection",
            "KYC compliance",
            "Fraud prevention",
            "Clear dispute resolution",
          ],
        },
        speed: {
          title: "Fast Settlement",
          description:
            "After you complete payment, P2P trades are typically finalized within minutes.",
          bullets: [
            "Settlement in minutes",
            "24/7 availability",
            "Clear step‑by‑step flow",
          ],
        },
        pricing: {
          title: "Transparent Pricing",
          description:
            "Fees and rates are shared upfront before every trade — no surprises, no hidden costs.",
          bullets: [
            "Fixed quote before trade",
            "No hidden fees",
            "Market‑aligned pricing",
            "Clear proof of payment",
          ],
        },
        general: {
          title: "For All Users",
          description:
            "Official merchant on global exchanges with dedicated support for all P2P trading needs.",
          bullets: [
            "Official merchant status",
            "Dedicated support",
            "Multi‑exchange coverage",
            "Clear, step‑by‑step process",
          ],
        },
      },
    },
    about: {
      title: "About Us",
      subtitle: "PEXAH is a Ras Al Khaimah–based crypto P2P transaction provider.",
      storyTitle: "About Us",
      storyP1:
        "PEXAH is a crypto P2P transaction provider based in Ras Al Khaimah. Our primary goal is to enable individuals to buy and sell cryptocurrency through global exchanges in a secure, fast, and transparent way.",
      storyP2:
        "As the crypto world grows, the greatest need has been trust. At PEXAH, we meet this need — offering our clients not only a trading platform but also a business partner they can rely on.",
      missionTitle: "Our Mission",
      missionText:
        "To be a bridge where individuals can trade with confidence in P2P trading — one of the strongest areas of digital finance.",
      visionTitle: "Our Vision",
      visionText:
        "To become the regional leader and a trusted global brand in crypto P2P transactions.",
      valuesTitle: "Our Core Values",
      values: [
        { title: "Reliability", description: "All transactions are transparent, clear, and recorded." },
        { title: "Speed", description: "Users can finalize their transactions within minutes." },
        { title: "Transparency", description: "Fees and rates are clearly shared before the transaction." },
        { title: "Customer Focus", description: "We provide solutions tailored to each individual's needs." },
        { title: "Professionalism", description: "Our experienced team aims to deliver the best service." },
      ],
    },
    contact: {
      title: "Get in Touch",
      subtitle:
        "Ready to start trading? Our team is here to help you get started with institutional-grade OTC services.",
      mapTitle: "Find Us on the Map",
      pinLabel: "RAKBANK HQ - Ras Al Khaimah",
      ctaTitle: "Need Immediate Assistance?",
      ctaDesc:
        "Our trading desk is available 24/7 for urgent requests and large volume trades.",
      call: "Call Trading Desk",
      email: "Email Trading Team",
      hq: "HQ",
    },
    footer: {
      tagline:
        "Institutional-grade crypto trading infrastructure. Secure, fast, and reliable.",
      developedBy: "Design & Developed by",
    },
    faq: {
      title: "Frequently Asked Questions (FAQ)",
      items: [
        {
          q: "What is P2P?",
          a: "P2P (peer‑to‑peer) is a secure method where users can buy and sell crypto assets directly with each other via global exchanges. Trades are protected by the exchanges' official escrow systems.",
        },
        { q: "What is PEXAH's role?", a: "PEXAH serves as an official merchant (seller) in the P2P markets of global exchanges. You open a buy request on the exchange, and we fulfill the USDT sale." },
        { q: "How is transaction security ensured?", a: "All transactions are secured by the exchange's escrow mechanism and KYC verification processes. This removes the need for mutual trust between counterparties." },
        { q: "Is there a minimum transaction limit?", a: "Limits vary depending on the exchange you use and the amount requested. Contact us for specific details." },
        { q: "Which cryptocurrencies do you sell?", a: "PEXAH currently focuses primarily on selling USDT (Tether)." },
        { q: "Is KYC required?", a: "Yes. Since transactions are carried out through global exchanges, the KYC policies of the relevant exchange apply." },
        { q: "How long does a transaction take?", a: "After you complete the payment, transactions are typically finalized within minutes." },
      ],
    },
  },
  ar: {
    header: {
      home: "الرئيسية",
      about: "من نحن",
      service: "خدماتنا",
      whyUs: "لماذا نحن؟",
      faq: "الأسئلة",
      contact: "تواصل",
    },
    hero: {
      title1: "شريكك",
      title2: "الموثوق",
      title3: "للعملات المشفرة",
      title4: "المعاملات",
      partner: "شريك",
      p2p: "ند للند",
      inWord: "في",
      description:
        "تقدم PEXAH حلولاً سريعة وآمنة وشفافة لمعاملات البيع والشراء P2P عبر البورصات العالمية.",
      cta: "تواصل معنا",
    },
    bento: {
      title: "تداول P2P بسيط وآمن عبر البورصات العالمية",
    },
    bentoCards: {
      trusted: "تداول P2P موثوق عبر البورصات العالمية",
      trustedDesc: "معاملات محمية بالضمان والتحقق عبر KYC لضمان الأمان.",
      fast: "تسوية سريعة خلال دقائق",
      fastDesc: "بعد تأكيد الدفع تُنجز معظم المعاملات خلال دقائق — متاح 24/7.",
      transparent: "تسعير شفاف",
      transparentDesc: "عرض السعر قبل كل عملية، بدون رسوم مخفية وبخطوات واضحة.",
      merchant: "تاجر رسمي وامتثال",
      merchantDesc: "تاجر رسمي على البورصات مع ضمان وامتثال AML/KYC.",
      learn: "اعرف المزيد",
    },
    testimonials: {
      title: "موثوق من المتداولين المحترفين",
      description: "انضم إلى آلاف المستثمرين والمتداولين المحترفين الذين يثقون بمنصتنا",
    },
    trading: {
      title: "مزايا تداول P2P لدينا",
      subtitle:
        "اكتشف الميزات الرئيسية التي تجعل PEXAH الاختيار الموثوق للتداول الآمن للعملات المشفرة",
      features: {
        security: {
          title: "أمان محمي بالضمان",
          description:
            "المعاملات محمية بضمان البورصة الرسمي ومُوثّقة عبر KYC لأقصى درجات الأمان.",
          bullets: ["حماية الضمان", "التوافق مع KYC", "منع الاحتيال", "حل النزاعات"],
        },
        speed: {
          title: "تسوية سريعة",
          description:
            "بعد إكمال الدفع، تُنجز معظم معاملات P2P خلال دقائق.",
          bullets: ["تسوية خلال دقائق", "متاح 24/7", "خطوات واضحة"],
        },
        pricing: {
          title: "تسعير شفاف",
          description:
            "يتم مشاركة الرسوم والأسعار مسبقًا قبل كل عملية — بدون مفاجآت.",
          bullets: ["سعر ثابت مسبقًا", "بدون رسوم خفية", "أسعار وفق السوق", "إثبات دفع واضح"],
        },
        general: {
          title: "لكل المستخدمين",
          description:
            "تاجر رسمي على البورصات العالمية مع دعم مخصص لجميع احتياجات P2P.",
          bullets: ["تاجر رسمي", "دعم مخصص", "تعدد البورصات", "عملية واضحة"],
        },
      },
    },
    about: {
      title: "من نحن",
      subtitle: "PEXAH مزود معاملات P2P للعملات المشفرة مقرّه رأس الخيمة.",
      storyTitle: "من نحن",
      storyP1:
        "هدفنا تمكين الأفراد من الشراء والبيع عبر البورصات العالمية بشكل آمن وسريع وشفاف.",
      storyP2:
        "أهم احتياج في عالم العملات الرقمية هو الثقة — ونحن نوفرها لعملائنا.",
      missionTitle: "مهمتنا",
      missionText:
        "أن نكون الجسر الذي يتيح التداول بثقة في معاملات P2P.",
      visionTitle: "رؤيتنا",
      visionText:
        "أن نصبح رواداً إقليميين وعلامة موثوقة عالمياً في معاملات P2P.",
      valuesTitle: "قيمنا الأساسية",
      values: [
        { title: "الموثوقية", description: "جميع المعاملات شفافة ومُوثّقة." },
        { title: "السرعة", description: "إتمام المعاملات خلال دقائق." },
        { title: "الشفافية", description: "الرسوم والأسعار معلنة مسبقًا." },
        { title: "التركيز على العميل", description: "حلول مخصصة لكل عميل." },
        { title: "الاحترافية", description: "فريقنا يتمتع بخبرة عالية." },
      ],
    },
    contact: {
      title: "تواصل معنا",
      subtitle:
        "جاهز للبدء؟ فريقنا هنا لمساعدتك بخدمات OTC بمستوى مؤسسي.",
      mapTitle: "موقعنا على الخريطة",
      pinLabel: "RAKBANK HQ - رأس الخيمة",
      ctaTitle: "تحتاج مساعدة فورية؟",
      ctaDesc: "مكتب التداول متاح 24/7 للطلبات العاجلة والكميات الكبيرة.",
      call: "اتصل بمكتب التداول",
      email: "راسل فريق التداول",
      hq: "المقر",
    },
    footer: {
      tagline: "بنية تحتية مؤسسية لتداول العملات المشفرة — آمنة وسريعة.",
      developedBy: "التصميم والتطوير بواسطة",
    },
    faq: {
      title: "الأسئلة الشائعة",
      items: [
        { q: "ما هو الند للند؟", a: "الـ P2P هو طريقة آمنة يشتري ويبيع فيها المستخدمون العملات المشفرة مباشرة عبر البورصات، مع حماية الضمان (Escrow)." },
        { q: "ما دور PEXAH؟", a: "نعمل كتاجر رسمي في أسواق P2P بالبورصات العالمية. تفتح طلب شراء على البورصة ونحن ننفذ بيع USDT." },
        { q: "كيف يتم تأمين المعاملة؟", a: "جميع المعاملات محمية بنظام الضمان الخاص بالبورصة والتحقق عبر KYC، مما يلغي الحاجة للثقة المتبادلة." },
        { q: "هل يوجد حد أدنى؟", a: "تختلف الحدود حسب البورصة والمبالغ المطلوبة. تواصل معنا للتفاصيل." },
        { q: "ما العملات التي تبيعونها؟", a: "نركز حالياً بشكل أساسي على بيع USDT (Tether)." },
        { q: "هل التحقق KYC مطلوب؟", a: "نعم، تُطبق سياسات KYC الخاصة بالبورصة المستخدمة." },
        { q: "كم تستغرق العملية؟", a: "عادةً ما تكتمل المعاملة خلال دقائق بعد تأكيد الدفع." },
      ],
    },
  },
  ru: {
    header: {
      home: "Главная",
      about: "О нас",
      service: "Наши услуги",
      whyUs: "Почему мы?",
      faq: "FAQ",
      contact: "Контакты",
    },
    hero: {
      title1: "Ваш",
      title2: "надежный",
      title3: "крипто",
      title4: "трансфер",
      partner: "партнер",
      p2p: "P2P",
      inWord: "в",
      description:
        "PEXAH предлагает быстрые, безопасные и прозрачные решения для P2P сделок через мировые биржи.",
      cta: "Связаться",
    },
    bento: { title: "Простой и безопасный P2P‑трейдинг через мировые биржи" },
    bentoCards: {
      trusted: "Надёжный P2P через мировые биржи",
      trustedDesc: "Сделки под защитой эскроу и KYC для безопасности.",
      fast: "Быстрая сделка за минуты",
      fastDesc: "После оплаты сделки обычно завершаются в течение минут — 24/7.",
      transparent: "Прозрачные цены",
      transparentDesc: "Чёткие котировки без скрытых комиссий и понятный процесс.",
      merchant: "Официальный мерчант и комплаенс",
      merchantDesc: "Статус мерчанта на биржах, эскроу и AML/KYC.",
      learn: "Подробнее",
    },
    testimonials: {
      title: "Нам доверяют профессиональные трейдеры",
      description:
        "Тысячи институциональных инвесторов и трейдеров доверяют нашей OTC‑платформе",
    },
    trading: {
      title: "Наши возможности P2P‑трейдинга",
      subtitle:
        "Ключевые особенности, делающие PEXAH надежным выбором для безопасной торговли",
      features: {
        security: {
          title: "Безопасность с эскроу",
          description:
            "Сделки защищены официальным эскроу бирж и подтверждены KYC.",
          bullets: ["Эскроу биржи", "KYC", "Предотвращение мошенничества", "Разрешение споров"],
        },
        speed: {
          title: "Быстрая доставка",
          description: "После оплаты сделки обычно завершаются за минуты.",
          bullets: ["Минуты до завершения", "Доступно 24/7", "Пошаговый процесс"],
        },
        pricing: {
          title: "Прозрачные цены",
          description: "Комиссии и курсы известны заранее — без сюрпризов.",
          bullets: ["Фиксированный квот", "Без скрытых комиссий", "Рыночные цены", "Подтверждение оплаты"],
        },
        general: {
          title: "Для всех",
          description:
            "Официальный мерчант на мировых биржах с выделенной поддержкой.",
          bullets: ["Статус мерчанта", "Выделенная поддержка", "Несколько бирж", "Ясный процесс"],
        },
      },
    },
    about: {
      title: "О нас",
      subtitle: "PEXAH — провайдер P2P‑сделок с базой в Рас‑Аль‑Хайме.",
      storyTitle: "О нас",
      storyP1:
        "Наша цель — безопасные, быстрые и прозрачные сделки покупки/продажи через мировые биржи.",
      storyP2:
        "Главная потребность рынка — доверие. Мы обеспечиваем его клиентам.",
      missionTitle: "Наша миссия",
      missionText:
        "Быть мостом уверенного P2P‑трейдинга.",
      visionTitle: "Наше видение",
      visionText:
        "Стать региональным лидером и доверенным мировым брендом.",
      valuesTitle: "Наши ценности",
      values: [
        { title: "Надежность", description: "Сделки прозрачны и зафиксированы." },
        { title: "Скорость", description: "Сделки завершаются за минуты." },
        { title: "Прозрачность", description: "Комиссии и ставки известны заранее." },
        { title: "Клиентоориентированность", description: "Решения под нужды клиента." },
        { title: "Профессионализм", description: "Опытная команда и лучший сервис." },
      ],
    },
    contact: {
      title: "Свяжитесь с нами",
      subtitle:
        "Готовы начать? Команда поможет запустить услуги OTC уровня предприятий.",
      mapTitle: "Мы на карте",
      pinLabel: "RAKBANK HQ - Рас-Аль-Хайма",
      ctaTitle: "Нужна помощь сейчас?",
      ctaDesc: "Наш трейдинг‑деск доступен 24/7 для срочных запросов.",
      call: "Позвонить в трейдинг‑деск",
      email: "Написать команде",
      hq: "HQ",
    },
    footer: {
      tagline: "Инфраструктура для крипто‑трейдинга уровня предприятий.",
      developedBy: "Дизайн и разработка",
    },
    faq: {
      title: "Часто задаваемые вопросы (FAQ)",
      items: [
        { q: "Что такое P2P?", a: "P2P — это прямые сделки между пользователями через биржи, защищённые официальным эскроу биржи." },
        { q: "Роль PEXAH?", a: "Мы выступаем официальным мерчантом на P2P‑рынках. Вы открываете заявку на покупку, мы исполняем продажу USDT." },
        { q: "Безопасность сделки?", a: "Все операции защищены эскроу механикой биржи и подтверждением KYC." },
        { q: "Минимальный лимит?", a: "Зависит от биржи и суммы. Свяжитесь с нами за подробностями." },
        { q: "Какие монеты продаёте?", a: "В основном продаём USDT (Tether)." },
        { q: "Нужен ли KYC?", a: "Да, действуют правила KYC соответствующей биржи." },
        { q: "Сколько занимает сделка?", a: "Обычно несколько минут после подтверждения оплаты." },
      ],
    },
  },
};

type I18nContextValue = {
  locale: Locale;
  dir: "ltr" | "rtl";
  t: Messages;
  setLocale: (locale: Locale) => void;
};

const I18nContext = createContext<I18nContextValue | null>(null);

export const I18nProvider = ({ children }: { children: React.ReactNode }) => {
  const [locale, setLocaleState] = useState<Locale>(() => {
    if (typeof window === "undefined") return "en";
    const saved = window.localStorage.getItem("locale") as Locale | null;
    return saved ?? "en";
  });

  const dir: "ltr" | "rtl" = locale === "ar" ? "rtl" : "ltr";

  const setLocale = (l: Locale) => {
    setLocaleState(l);
    try {
      window.localStorage.setItem("locale", l);
    } catch {}
  };

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = locale;
      document.documentElement.dir = dir;
    }
  }, [locale, dir]);

  const value = useMemo<I18nContextValue>(() => ({
    locale,
    dir,
    t: DICTIONARY[locale],
    setLocale,
  }), [locale, dir]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};

export const useI18n = () => {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
};


