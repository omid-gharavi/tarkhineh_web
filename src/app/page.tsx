import AboutBody from "@/components/shared/about/about-body";
import Branches from "@/components/shared/branches/branches";
import Footer from "@/components/shared/footer/footer";
import Header from "@/components/shared/header/header";
import Menu from "@/components/shared/menu/menu";
import Slider from "@/components/shared/slider/slider";

export default function Home() {

  return (
    <div className="mx-auto max-w-desktop">
      <Header />
      <Slider />
      <Menu />
      <AboutBody />
      <Branches />
      <Footer />
    </div>
  );
}
