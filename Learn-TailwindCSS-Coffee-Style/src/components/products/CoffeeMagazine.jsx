function CoffeeMagazine() {
  return (
    <div>
      <div className="ttm-subheadLine ">
        <div className="ttm-subheadLine-deco-line "></div>
        <div className="ttm-subheadLine-label ">
          BUY 2 MUGS AND GET A COFFEE MAGAZINE FREE
        </div>
        <div className="ttm-subheadLine-deco-line w-8 h-px bg-gray-200"></div>
      </div>
      <div className="coffe-magazine w-[95%] xl:w-[65%] mx-auto mb-20">
        <div className="flex flex-col md:flex-row justify-center items-center gap-5">
          <div className="ttm-magazine-img basis-1/2 md:flex md:flow-row gap-5 w-full h-full mb-5 md:mb-0">
            <div className="ttm-magazine-big-img basis-2/3  h-[280px] mb-3 xs:mb-5 md:mb-0 bg-[url('./assets/ImageMagazine1.jpg')] bg-cover bg-no-repeat bg-center"></div>
            <div className="ttm-magazine-small-img basis-1/3 flex flex-row md:flex-col gap-3 xs:gap-5 ">
              <div className="ttm-magazine-small-img-01 h-[130px] xs:h-[200px] md:h-[130px] basis-1/2 bg-[url('./assets/ImageMagazine2.jpg')] bg-cover bg-no-repeat bg-center"></div>
              <div className="ttm-magazine-small-img-02 h-[130px] xs:h-[200px] md:h-[130px] basis-1/2 bg-[url('./assets/ImageMagazine3.jpg')] bg-cover bg-no-repeat bg-center"></div>
            </div>
          </div>
          <div className="ttm-magazine-post basis-1/2 pl-8 xl:pl-14 text-center md:text-left  ">
            <div className="uppercase tracking-widest text-gray-500  font-medium text-xs mb-4">
              PREMIUM OFFER
            </div>
            <div className="text-4xl mb-6">Get our Coffee Magazine</div>
            <div className="text-gray-500 leading-7 mb-4">
              The most versatile furniture system ever created. Designed to fit
              your life.
            </div>
            <div className="ttm-button bg-gray-900 text-white w-max mx-auto md:mx-0">
              START SHOPPING
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoffeeMagazine;
