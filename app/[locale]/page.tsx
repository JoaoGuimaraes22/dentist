import { getDictionary } from "../../get-dictionary";
import type { Locale } from "../../i18n-config";
import Navbar from "../components/Navbar/Navbar";
import HeroContent from "../components/HeroContent/HeroContent";
import About from "../components/About/About";
import Services from "../components/Services/Services";
import Team from "../components/Team/Team";
import Technology from "../components/Technology/Technology";
import Insurance from "../components/Insurance/Insurance";
import Reviews from "../components/Reviews/Reviews";
import FAQ from "../components/FAQ/FAQ";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import BookingBar from "../components/BookingBar/BookingBar";

type Props = {
  params: Promise<{ locale: Locale }>;
};

export default async function Page({ params }: Props) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return (
    <>
      <Navbar dict={dict.navbar} locale={locale} />
      <main>
        <HeroContent dict={dict.hero} />
        <About dict={dict.about} />
        <Services dict={dict.services} />
        <Team dict={dict.team} />
        <Technology dict={dict.technology} />
        <Insurance dict={dict.insurance} />
        <Reviews dict={dict.reviews} />
        <FAQ dict={dict.faq} />
        <Contact dict={dict.contact} />
      </main>
      <Footer dict={dict.footer} />
      <BookingBar dict={dict.bookingBar} />
    </>
  );
}
