"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroLogo from '@/components/sections/hero/HeroLogo';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import PricingCardTwo from '@/components/sections/pricing/PricingCardTwo';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import SocialProofTwo from '@/components/sections/socialProof/SocialProofTwo';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Camera, Radio, Rocket, Users, Sparkles, Star, Moon, Zap, Heart } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-bubble"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
      contentWidth="small"
      sizing="medium"
      background="aurora"
      cardStyle="solid-bordered"
      primaryButtonStyle="radial-glow"
      secondaryButtonStyle="radial-glow"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          brandName="Cosmic Journeys"
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764607017994-w61pxixq.jpg"
          logoAlt="Cosmic Journeys logo"
          navItems={[
            { name: "Destinations", id: "destinations" },
            { name: "Tours", id: "tours" },
            { name: "About", id: "about" },
            { name: "FAQ", id: "faq" }
          ]}
          button={{ text: "Book Now", href: "contact" }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroLogo
          logoText="Cosmic Journeys"
          description="Experience the universe like never before. Book your journey to the stars today."
          buttons={[
            { text: "Explore Destinations", href: "destinations" },
            { text: "Learn More", href: "about" }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764607018789-6pkdv8h7.jpg"
          imageAlt="Earth viewed from space"
          showDimOverlay={true}
        />
      </div>

      <div id="about" data-section="about">
        <TextSplitAbout
          title="About Cosmic Journeys"
          description={[
            "We are pioneering the future of space tourism, making the dream of space travel accessible to adventurous travelers worldwide.",
            "Our partnerships with leading space agencies and private aerospace companies ensure safe, unforgettable experiences beyond Earth's atmosphere.",
            "From lunar landings to orbital stations, we curate exclusive journeys that push the boundaries of human exploration."
          ]}
          buttons={[{ text: "Our Mission", href: "#" }]}
          showBorder={true}
        />
      </div>

      <div id="destinations" data-section="destinations">
        <ProductCardTwo
          title="Featured Destinations"
          description="Choose from our exclusive space travel packages to remarkable cosmic destinations."
          tag="Popular"
          tagIcon={Star}
          textboxLayout="default"
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          products={[
            {
              id: "1",
              brand: "Lunar Experience",
              name: "Moon Surface Landing",
              price: "$250,000",
              rating: 5,
              reviewCount: "892",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764607019628-d9a7gst5.jpg",
              imageAlt: "Moon surface landing experience"
            },
            {
              id: "2",
              brand: "Orbital Adventure",
              name: "Space Station Visit",
              price: "$150,000",
              rating: 5,
              reviewCount: "1.2k",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764607023011-pwbziai9.jpg",
              imageAlt: "International space station"
            },
            {
              id: "3",
              brand: "Red Planet Tours",
              name: "Mars Expedition",
              price: "$500,000",
              rating: 5,
              reviewCount: "342",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764607020388-hsfrlcw3.jpg",
              imageAlt: "Mars planet expedition"
            }
          ]}
        />
      </div>

      <div id="tours" data-section="tours">
        <FeatureCardTwo
          title="What Makes Our Tours Special"
          description="Experience space travel with professional guidance, cutting-edge technology, and unforgettable moments."
          tag="Premium Service"
          tagIcon={Sparkles}
          textboxLayout="default"
          gridVariant="two-columns-alternating-heights"
          animationType="scale-rotate"
          features={[
            {
              title: "Expert Astronaut Training",
              description: "Comprehensive preparation programs led by experienced astronauts to ensure your safety and confidence.",
              icon: Users
            },
            {
              title: "State-of-the-Art Spacecraft",
              description: "Travel in specially designed spacecraft equipped with the latest technology and comfort features.",
              icon: Rocket
            },
            {
              title: "24/7 Mission Control Support",
              description: "Real-time monitoring and support from dedicated mission control teams throughout your journey.",
              icon: Radio
            },
            {
              title: "Cosmic Photo Memories",
              description: "Professional photography services capture stunning images of your space adventure and the universe.",
              icon: Camera
            }
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardTwo
          title="Choose Your Journey"
          description="Select the perfect space experience package for your adventure."
          tag="Pricing"
          tagIcon={Zap}
          textboxLayout="default"
          animationType="slide-up"
          plans={[
            {
              id: "1",
              badge: "Suborbital Flight",
              badgeIcon: Sparkles,
              price: "$50,000",
              subtitle: "Perfect for first-time space travelers",
              buttons: [
                { text: "Book Now", href: "contact" },
                { text: "Learn More", href: "#" }
              ],
              features: [
                "Brief weightlessness experience",
                "Views of Earth's curvature",
                "Certificate of spaceflight",
                "Professional footage of your flight"
              ]
            },
            {
              id: "2",
              badge: "Orbital Experience",
              badgeIcon: Star,
              price: "$150,000",
              subtitle: "Extended time in space",
              buttons: [
                { text: "Book Now", href: "contact" },
                { text: "Learn More", href: "#" }
              ],
              features: [
                "Multiple orbits around Earth",
                "3-day space station visit",
                "Spacewalk experience",
                "Professional astronaut training"
              ]
            },
            {
              id: "3",
              badge: "Lunar Adventure",
              badgeIcon: Moon,
              price: "$250,000",
              subtitle: "Walk on the Moon",
              buttons: [
                { text: "Book Now", href: "contact" },
                { text: "Learn More", href: "#" }
              ],
              features: [
                "Lunar surface landing",
                "7-day mission duration",
                "Lunar sample collection",
                "Premium training program"
              ]
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="What Space Travelers Say"
          description="Real experiences from adventurers who've journeyed beyond Earth."
          tag="Testimonials"
          tagIcon={Heart}
          textboxLayout="default"
          gridVariant="two-columns-alternating-heights"
          animationType="blur-reveal"
          testimonials={[
            {
              id: "1",
              name: "Commander James Mitchell",
              role: "Orbital Explorer",
              company: "Space Enthusiast",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764607024545-anvgiu44.jpg",
              imageAlt: "Commander James Mitchell"
            },
            {
              id: "2",
              name: "Dr. Sarah Chen",
              role: "Research Scientist",
              company: "Space Programs",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764607025229-5wd9m70f.jpg",
              imageAlt: "Dr. Sarah Chen"
            },
            {
              id: "3",
              name: "Michael Rodriguez",
              role: "Adventure Traveler",
              company: "Exploration Inc",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764607025930-txn3paaq.jpg",
              imageAlt: "Michael Rodriguez"
            },
            {
              id: "4",
              name: "Emma Thompson",
              role: "Aerospace Engineer",
              company: "Tech Ventures",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764607026985-nwmb1iuw.jpg",
              imageAlt: "Emma Thompson"
            }
          ]}
        />
      </div>

      <div id="partners" data-section="partners">
        <SocialProofTwo
          title="Trusted Partners"
          description="We collaborate with leading space agencies and aerospace companies worldwide."
          tag="Partners"
          textboxLayout="default"
          logos={[
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764607027779-v69rb4kk.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764607028503-6y7l2z13.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764607029221-bksnj7fa.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764607030130-nar54n2r.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764607030715-ibv3h6yi.jpg"
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitMedia
          title="Space Travel Questions"
          description="Common questions about our cosmic journeys and what to expect."
          tag="Help"
          textboxLayout="default"
          mediaPosition="left"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764607033103-aequ1ns8.jpg"
          imageAlt="Astronaut in space suit"
          faqs={[
            {
              id: "1",
              title: "Is space travel safe?",
              content: "Yes, our spacecraft undergo rigorous safety testing and are equipped with advanced systems. All travelers receive comprehensive training, and our mission control team monitors every flight continuously."
            },
            {
              id: "2",
              title: "What is the age requirement?",
              content: "Minimum age is 18 years old. We also offer family packages for younger participants with adult supervision and modified experience levels."
            },
            {
              id: "3",
              title: "How long is the training?",
              content: "Training duration varies by package: suborbital flights require 3 days, orbital experiences require 2 weeks, and lunar missions require 6 weeks of comprehensive astronaut training."
            },
            {
              id: "4",
              title: "What happens if I get motion sickness?",
              content: "We provide anti-nausea medication and specialized training to help manage space sickness. Most participants adjust quickly to microgravity environments."
            },
            {
              id: "5",
              title: "Can I bring personal items?",
              content: "Yes, within weight limits. We allow cameras, small personal mementos, and entertainment items. All items are screened for safety compliance."
            },
            {
              id: "6",
              title: "What is your cancellation policy?",
              content: "Cancellations within 30 days of departure receive a 50% refund. Cancellations more than 30 days in advance receive a full refund or booking transfer."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Ready to Launch"
          title="Book Your Space Adventure"
          description="Join us on an extraordinary journey beyond Earth. Complete our booking form to reserve your spot among the stars."
          tagIcon={Rocket}
          inputPlaceholder="your@email.com"
          buttonText="Reserve Your Journey"
          termsText="By booking, you agree to our space travel safety guidelines and terms of service."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="Cosmic Journeys"
          columns={[
            {
              items: [
                { label: "Destinations", href: "destinations" },
                { label: "Tours", href: "tours" },
                { label: "Pricing", href: "pricing" }
              ]
            },
            {
              items: [
                { label: "About Us", href: "about" },
                { label: "Our Team", href: "#" },
                { label: "Careers", href: "#" }
              ]
            },
            {
              items: [
                { label: "FAQ", href: "faq" },
                { label: "Contact", href: "contact" },
                { label: "Support", href: "#" }
              ]
            },
            {
              items: [
                { label: "Privacy Policy", href: "#" },
                { label: "Terms & Conditions", href: "#" },
                { label: "Safety Guidelines", href: "#" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}