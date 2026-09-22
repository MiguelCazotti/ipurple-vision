import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { ProductSection } from "@/components/site/ProductSection";
import { CategoryGrid } from "@/components/site/CategoryGrid";
import { TrustSection } from "@/components/site/TrustSection";
import { InstagramSection } from "@/components/site/InstagramSection";
import { WhyIpurple } from "@/components/site/WhyIpurple";
import { ExperienceSection } from "@/components/site/ExperienceSection";
import { CTA } from "@/components/site/CTA";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { ScooterSection } from "@/components/site/ScooterSection";
import { FacebookVideos } from "@/components/site/FacebookVideos";
import { CONTACT, INSTAGRAM_URL } from "@/config/site";

const TITLE = "IPurple Imports | iPhones, tecnologia e scooters elétricas";
const DESCRIPTION =
  "iPhones, smartphones, acessórios e scooters elétricas com atendimento especializado na IPurple Imports, em Duque de Caxias - RJ.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Store",
          name: "IPurple Imports",
          description: DESCRIPTION,
          telephone: "+55 21 97180-6102",
          sameAs: [INSTAGRAM_URL],
          address: {
            "@type": "PostalAddress",
            streetAddress: CONTACT.addressLine1,
            addressLocality: "Duque de Caxias",
            addressRegion: "RJ",
            addressCountry: "BR",
          },
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <ScooterSection />
        <FacebookVideos />
        <ProductSection />
        <CategoryGrid />
        <TrustSection />
        <InstagramSection />
        <WhyIpurple />
        <ExperienceSection />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
