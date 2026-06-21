import { ArrowLeft } from '@phosphor-icons/react'
import { Link, useLocation } from 'react-router-dom'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

const PrivacyContent = () => (
  <div className="prose prose-neutral max-w-none font-body text-neutral-600 leading-relaxed space-y-6">
    <p>
      At Waltik Labs ("we", "our", or "us"), we respect your privacy and are committed to protecting the personal information you share with us. This Privacy Policy outlines how we collect, use, store, and safeguard your data when you interact with our website, services, and digital products.
    </p>

    <h2 className="text-2xl font-heading font-semibold text-black mt-12 mb-4">1. Information We Collect</h2>
    <p>
      We may collect various types of information from you, including:
    </p>
    <ul className="list-disc pl-5 space-y-2">
      <li><strong>Personal Information:</strong> Name, email address, phone number, and company details provided when you contact us or request a consultation.</li>
      <li><strong>Usage Data:</strong> Information automatically collected when you visit our website, such as IP address, browser type, operating system, and pages visited, using analytics tools to improve our digital experience.</li>
      <li><strong>Communication Records:</strong> Details of your correspondence with our team, including emails, messages, and support tickets.</li>
    </ul>

    <h2 className="text-2xl font-heading font-semibold text-black mt-12 mb-4">2. How We Use Your Information</h2>
    <p>
      The information we collect is used to:
    </p>
    <ul className="list-disc pl-5 space-y-2">
      <li>Provide, operate, and maintain our services.</li>
      <li>Respond to your inquiries, schedule discovery calls, and communicate project updates.</li>
      <li>Analyze usage trends and improve the performance, design, and functionality of our platform.</li>
      <li>Comply with legal obligations and enforce our terms and policies.</li>
    </ul>

    <h2 className="text-2xl font-heading font-semibold text-black mt-12 mb-4">3. Data Sharing and Disclosure</h2>
    <p>
      We do not sell, rent, or trade your personal information to third parties. We may share your data with trusted service providers who assist us in operating our business, such as hosting providers, analytics platforms, and communication tools. These third parties are bound by strict confidentiality agreements and are prohibited from using your data for any other purpose.
    </p>

    <h2 className="text-2xl font-heading font-semibold text-black mt-12 mb-4">4. Data Security</h2>
    <p>
      We implement industry-standard security measures, including encryption, secure servers, and regular security audits, to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, please be aware that no method of transmission over the internet or electronic storage is 100% secure.
    </p>

    <h2 className="text-2xl font-heading font-semibold text-black mt-12 mb-4">5. Your Privacy Rights</h2>
    <p>
      Depending on your jurisdiction, you may have the right to access, update, correct, or delete your personal information. If you wish to exercise any of these rights, please contact us using the information provided below.
    </p>

    <h2 className="text-2xl font-heading font-semibold text-black mt-12 mb-4">6. Changes to This Privacy Policy</h2>
    <p>
      We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any significant changes by posting the updated policy on our website and updating the "Last updated" date.
    </p>

    <h2 className="text-2xl font-heading font-semibold text-black mt-12 mb-4">7. Contact Us</h2>
    <p>
      If you have any questions, concerns, or requests regarding this Privacy Policy, please contact us via our <Link to="/contact" className="text-[#058789] hover:underline">Contact Page</Link>.
    </p>
  </div>
)

const TermsContent = () => (
  <div className="prose prose-neutral max-w-none font-body text-neutral-600 leading-relaxed space-y-6">
    <p>
      These Terms of Service ("Terms") govern your access to and use of the Waltik Labs website and the services, products, and software (collectively, the "Services") provided by Waltik Labs. By accessing or using our Services, you agree to be bound by these Terms.
    </p>

    <h2 className="text-2xl font-heading font-semibold text-black mt-12 mb-4">1. Acceptance of Terms</h2>
    <p>
      By engaging with Waltik Labs, whether through our website, consultation, or formal project agreements, you acknowledge that you have read, understood, and agree to comply with these Terms. If you do not agree, you must refrain from using our Services.
    </p>

    <h2 className="text-2xl font-heading font-semibold text-black mt-12 mb-4">2. Description of Services</h2>
    <p>
      Waltik Labs provides digital agency services, including but not limited to software engineering, artificial intelligence integration, product design, and cloud infrastructure management. The specific scope, deliverables, timeline, and pricing for any project will be outlined in a separate Statement of Work (SOW) or Master Services Agreement (MSA) signed by both parties.
    </p>

    <h2 className="text-2xl font-heading font-semibold text-black mt-12 mb-4">3. Intellectual Property Rights</h2>
    <p>
      Unless otherwise specified in a formal agreement, all original code, designs, architectures, and intellectual property (IP) created by Waltik Labs during the execution of a project shall remain the property of Waltik Labs until full payment has been received. Upon final payment, the IP rights are transferred to the client as outlined in the respective agreement. Waltik Labs retains the right to use non-confidential project deliverables for portfolio and marketing purposes.
    </p>

    <h2 className="text-2xl font-heading font-semibold text-black mt-12 mb-4">4. User Responsibilities</h2>
    <p>
      When using our Services, you agree to:
    </p>
    <ul className="list-disc pl-5 space-y-2">
      <li>Provide accurate, current, and complete information during onboarding and project execution.</li>
      <li>Refrain from using our website or deliverables for any unlawful, unauthorized, or malicious activities.</li>
      <li>Ensure that you have the necessary rights and permissions for any third-party materials or data you provide to us.</li>
    </ul>

    <h2 className="text-2xl font-heading font-semibold text-black mt-12 mb-4">5. Limitation of Liability</h2>
    <p>
      To the fullest extent permitted by law, Waltik Labs shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or business opportunities, arising out of or related to your use of our Services. Our total liability for any claims arising from these Terms shall not exceed the amount paid by you to Waltik Labs for the specific services in question during the twelve (12) months preceding the claim.
    </p>

    <h2 className="text-2xl font-heading font-semibold text-black mt-12 mb-4">6. Termination</h2>
    <p>
      We reserve the right to suspend or terminate your access to our Services at any time, with or without notice, if you violate these Terms or engage in conduct that we deem harmful to our business or other users. Formal project agreements will contain specific termination clauses governing active client engagements.
    </p>

    <h2 className="text-2xl font-heading font-semibold text-black mt-12 mb-4">7. Governing Law</h2>
    <p>
      These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which Waltik Labs is officially registered, without regard to its conflict of law principles. Any legal disputes shall be resolved in the competent courts of that jurisdiction.
    </p>

    <h2 className="text-2xl font-heading font-semibold text-black mt-12 mb-4">8. Contact Us</h2>
    <p>
      If you have any questions regarding these Terms of Service, please contact us via our <Link to="/contact" className="text-[#058789] hover:underline">Contact Page</Link>.
    </p>
  </div>
)

export default function Legal({ title }: { title: string }) {
  const { pathname } = useLocation()
  
  return (
    <div className="bg-[#F3F4F6] min-h-screen flex flex-col">
      <div className="px-5 sm:px-8 pt-5 sm:pt-6">
        <Navbar inside />
      </div>
      
      <main className="flex-1 max-w-4xl mx-auto w-full px-5 sm:px-8 py-32 sm:py-40">
        <Link to="/" className="inline-flex items-center gap-2 text-sm font-body text-neutral-500 hover:text-black transition-colors mb-8">
          <ArrowLeft size={16} />
          Back to Home
        </Link>
        
        <h1 className="text-4xl sm:text-6xl font-heading font-bold tracking-tight mb-4">
          {title}
        </h1>
        
        <div className="flex items-center gap-4 text-sm font-body text-neutral-500 mb-12 pb-8 border-b border-black/10">
          <span>Last updated: June 2026</span>
          <span className="w-1 h-1 rounded-full bg-neutral-300" />
          <span>Waltik Labs Legal</span>
        </div>

        {title === "Privacy Policy" ? <PrivacyContent /> : <TermsContent />}
      </main>

      <Footer />
    </div>
  )
}
