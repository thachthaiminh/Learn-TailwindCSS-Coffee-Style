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

      <LifeStyle></LifeStyle>

      <SubscribeUs></SubscribeUs>
    </div>
  );
}

export default Main;
