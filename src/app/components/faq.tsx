"use client";
import React from "react";
import "./faq.scss";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { useI18n } from "@/app/i18n";

const FAQ = () => {
  const { t } = useI18n();
  const faqs = t.faq.items;

  return (
    <section id="faq" className="faq">
      <div className="faq-container">
        <h2 className="faq-title">{t.faq.title}</h2>
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


