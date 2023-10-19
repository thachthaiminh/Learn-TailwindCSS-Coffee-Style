import CoffeeMagazine from "./products/CoffeeMagazine";
import FeaturedMugs from "./products/FeaturedMugs";
import LifeStyle from "./products/LifeStyle";
import MoreProduct from "./products/MoreProduct";
import Slider from "./products/Slider";
import Story from "./products/Story";
import SubscribeUs from "./products/SubscribeUs";

function Main() {
  return (
    <div>
      <Slider></Slider>

      <Story></Story>

      <FeaturedMugs></FeaturedMugs>

      <MoreProduct></MoreProduct>

      <CoffeeMagazine></CoffeeMagazine>

      <div className="ttm-parallax  bg-[url('./assets/parallax.jpg')] bg-cover bg-no-repeat bg-center h-[340px] md:h-[440px] mb-24 bg-fixed w-[100vw] relative left-[calc(-50vw_+_50%)]"></div>

      <LifeStyle></LifeStyle>

      <SubscribeUs></SubscribeUs>
    </div>
  );
}

export default Main;
