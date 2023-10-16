function Main() {
  return (
    <div>
      <div className="slider h-[530px] bg-[url('./assets/bg_slider.png')] bg-cover bg-no-repeat bg-bottom">
        <div className="w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-40">
          <div className="mx-16 text-white text-center">
            <div className="mb-6">BEST PLACE TO BUY COFFEE</div>
            <div className="font-medium text-5xl">Coffee Mugs</div>
            <div className="font-medium text-lg mb-6">
              Now you can choose one of other and to buy it.
            </div>
            <div className="flex justify-center">
              <div className=" uppercase bg-white text-gray-900 w-max tracking-wider py-4 px-8 text-sm font-semibold cursor-pointer hover:opacity-95">
                Explore Our Products
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End slider */}
      <div className="story">
        <div className="w-full h-full flex justify-center items-center">
          <div className="px-4 sm:px-16 md:px-32 lg:px-64 xl:px-96 py-32 text-center">
            <div className="text-[28px] leading-10 mb-6 font-normal">
              Even the all-powerful Pointing has no control about the blind
              texts.
            </div>
            <div className="text-gray-500 leading-7 mb-6">
              It is a paradisematic country, in which roasted parts of sentences
              fly into your mouth. <br /> Even the all-powerful Pointing has no
              control about the blind texts it is an almost unorthographic life
              One day however a small line of blind text by the name of Lorem
              Ipsum decided to leave for the far World of Grammar.
            </div>
            <div className="">
              <a
                href="#"
                className="text-coffee-400 hover:text-coffee-600 relative after:absolute after:-bottom-2 after:left-0 after:bg-coffee-50 hover:after:bg-coffee-400 after:h-0.5 after:w-full hover:after:w-full after:transition-all after:ease-in-out after:duration-400"
              >
                Read the full Story
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* End story  */}
      <div className="ttm-subheadLine ">
        <div className="ttm-subheadLine-deco-line "></div>
        <div className="ttm-subheadLine-label ">Futured Mugs</div>
        <div className="ttm-subheadLine-deco-line w-8 h-px bg-gray-200"></div>
      </div>
      <div className="featured-mugs">featured-mugs</div>
      {/* End featured-mugs  */}
      <div className="ttm-subheadLine ">
        <div className="ttm-subheadLine-deco-line "></div>
        <div className="ttm-subheadLine-label ">More Products</div>
        <div className="ttm-subheadLine-deco-line w-8 h-px bg-gray-200"></div>
      </div>
      <div className="more-product">more-product</div>
      {/* End more-product  */}
      <div className="ttm-subheadLine ">
        <div className="ttm-subheadLine-deco-line "></div>
        <div className="ttm-subheadLine-label ">
          BUY 2 MUGS AND GET A COFFEE MAGAZINE FREE
        </div>
        <div className="ttm-subheadLine-deco-line w-8 h-px bg-gray-200"></div>
      </div>
      <div className="coffe-magazine">coffe-magazine</div>
      {/* End coffe-magazine  */}
      <div className="ttm-subheadLine ">
        <div className="ttm-subheadLine-deco-line "></div>
        <div className="ttm-subheadLine-label ">
          BEHIND THE MUGS, LIFESTYLE STORIES
        </div>
        <div className="ttm-subheadLine-deco-line w-8 h-px bg-gray-200"></div>
      </div>
      <div className="life-style">life-style</div>
      {/* End life-style */}
      <div className="subcribe-us">subcribe-us</div>
      {/* End subcribe-us */}
    </div>
  );
}

export default Main;
