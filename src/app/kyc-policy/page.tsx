import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "KYC & AML Policy | PEXAH",
  description:
    "PEXAH LTD Anti‑Money Laundering (AML) & Know Your Customer (KYC) Policy for Ras Al Khaimah Digital Assets Oasis (RAK DAO), UAE.",
};

export default function KycPolicyPage() {
  return (
    <main className="min-h-screen w-full" style={{ backgroundColor: "var(--site-bg)" }}>
      <div className="mx-auto max-w-4xl px-6 py-16">
        <div className="mb-6 flex justify-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-white/5 px-4 py-2 text-sm font-medium text-sky-300 hover:text-white hover:bg-white/10 transition-colors"
          >
            ← Back to website
          </Link>
        </div>
        <div className="flex justify-center mb-10">
          <Image
            src="/images/hazır-01.png"
            alt="PEXAH logo"
            width={220}
            height={66}
            priority
          />
        </div>

        <div className="rounded-2xl border border-sky-500/20 bg-gradient-to-b from-white/5 to-white/0 p-8 text-gray-200 shadow-[0_0_0_1px_rgba(10,145,230,.08)]">
          <h1 className="text-center text-3xl font-bold mb-6 text-gradient-blue">
            PEXAH LTD – Anti-Money Laundering (AML) & Know Your Customer (KYC) Policy
          </h1>

          <div className="space-y-1 text-sm text-gray-300 mb-8">
            <p><span className="font-semibold text-white">Company Name:</span> PEXAH LTD</p>
            <p><span className="font-semibold text-white">Registration No:</span> 01010647</p>
            <p><span className="font-semibold text-white">Incorporated on:</span> 29/05/2025</p>
            <p><span className="font-semibold text-white">Jurisdiction:</span> Ras Al Khaimah Digital Assets Oasis (RAK DAO), UAE</p>
            <p><span className="font-semibold text-white">Registered Address:</span> Office A, RAK DAO Business Centre, RAK BANK ROC Office, Ground Floor, Al Rifaa, Sheikh Mohammed Bin Zayed Road, Ras Al Khaimah, UAE</p>
            <p><span className="font-semibold text-white">Contact Email:</span> pexahuae@gmail.com</p>
          </div>

          <section className="space-y-6 leading-7">
            <div>
              <h2 className="text-xl font-semibold text-white mb-2">1. Purpose of the Policy</h2>
              <p className="text-gray-300">
                This AML/KYC Policy is established to prevent PEXAH LTD from being used for money laundering, terrorist financing, fraud,
                corruption, bribery, or other illegal financial activities. The policy ensures compliance with applicable UAE federal
                regulations, RAK DAO rules, and international AML/CFT standards.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-2">2. Scope</h2>
              <p className="text-gray-300">
                This policy applies to all customers, employees, partners, and counterparties of PEXAH LTD.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-2">3. Customer Due Diligence (CDD)</h2>
              <p className="text-gray-300 mb-2">
                PEXAH LTD requires all customers to undergo identity verification before engaging in trading activities. The following
                documents are collected via secure communication channels:
              </p>
              <ul className="list-disc ms-5 text-gray-300">
                <li>A valid Emirates ID or Passport</li>
                <li>A UAE mobile number for verification</li>
                <li>Other supporting documents if deemed necessary</li>
              </ul>
              <p className="text-gray-300 mt-2">
                Enhanced Due Diligence (EDD) will be performed on high-risk customers such as Politically Exposed Persons (PEPs) or those
                with unusual transaction behavior.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-2">4. Verification Process</h2>
              <p className="text-gray-300">
                Customers are required to submit identification documents and UAE mobile verification through the company’s official
                communication channels. All information is securely recorded and maintained in compliance with UAE data protection
                regulations. Verification is conducted before the execution of any trades.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-2">5. Ongoing Monitoring</h2>
              <p className="text-gray-300">
                PEXAH LTD continuously monitors transactions to detect unusual or suspicious activity. Any suspicious transactions are
                reviewed by the Compliance Officer and reported to the UAE Financial Intelligence Unit (FIU) if required.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-2">6. Record Keeping</h2>
              <p className="text-gray-300">
                All KYC records and transaction data are securely stored for a minimum of five (5) years, in accordance with UAE law.
                Records are updated periodically, and customers may be requested to re-submit documents when necessary.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-2">7. Sanctions Screening</h2>
              <p className="text-gray-300">
                PEXAH LTD does not engage with individuals or entities listed on international sanctions lists, including UN, EU, and
                OFAC. All customers are screened against updated sanction databases.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-2">8. Compliance Officer</h2>
              <p className="text-gray-300">
                The Compliance Officer of PEXAH LTD (currently appointed by the Board of Directors) is responsible for ensuring
                implementation and enforcement of this policy, reviewing suspicious activities, and liaising with regulatory authorities.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-2">9. Risk Assessment</h2>
              <p className="text-gray-300">
                PEXAH LTD adopts a risk-based approach, categorizing customers based on their risk profile. Low-risk customers are
                reviewed every five (5) years, while high-risk customers are reviewed annually.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-2">10. Refusal of Service</h2>
              <p className="text-gray-300">
                PEXAH LTD reserves the right to refuse service to any customer who fails to comply with KYC requirements or presents
                unverifiable or suspicious information.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-2">11. Policy Review</h2>
              <p className="text-gray-300">
                This AML/KYC Policy is reviewed annually by the Compliance Officer to ensure its effectiveness and compliance with
                updated legal requirements.
              </p>
            </div>

            <div className="mt-8 text-gray-300">
              <p><span className="font-semibold text-white">Date of Issue:</span> 16/09/2025</p>
              <p><span className="font-semibold text-white">Authorized by:</span> Board of Directors, PEXAH LTD</p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}


