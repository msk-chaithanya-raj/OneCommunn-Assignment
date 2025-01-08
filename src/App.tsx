import AboutSection from "./components/AboutSection";
import FeaturesSection from "./components/FeaturesSection";
import Footer from "./components/Footer";
import InteriorDesignCarousel from "./components/InteriorDesignCarousel";
import Navbar from "./components/Navbar";
import ProcessSection from "./components/ProcessSection";
import ProductCard from "./components/ProductCard";
import SegmentsSection from "./components/SegmentsSection";
import TrendingProducts from "./components/TrendingProducts";

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <section className="min-h-full flex justify-center items-center">
          <img src="/src/assets/banner.png" alt="banner" />
        </section>
        <ProductCard />
        <SegmentsSection />
        <TrendingProducts />
        <InteriorDesignCarousel />
        <AboutSection />
        <ProcessSection />
        <FeaturesSection />
      </main>
      <Footer />
    </>
  );
};

export default App;
