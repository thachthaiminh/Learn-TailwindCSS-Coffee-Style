function LifeStyle() {
  return (
    <div>
      <div className="ttm-subheadLine ">
        <div className="ttm-subheadLine-deco-line "></div>
        <div className="ttm-subheadLine-label ">
          BEHIND THE MUGS, LIFESTYLE STORIES
        </div>
        <div className="ttm-subheadLine-deco-line w-8 h-px bg-gray-200"></div>
      </div>
      <div className="life-style w-[95%] xl:w-[65%] mx-auto mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-4">
          <div className="ttm-lifestyle-story-card ">
            <div className="h-[280px] bg-[url('./assets/Story1.jpg')] bg-cover bg-no-repeat bg-center">
              <a href="#">
                <div className="w-full h-full hover:bg-gray-900 hover:bg-opacity-10 hover:transition-all hover:ease-in-out hover:duration-400 relative group">
                  <div className="ttm-button absolute  bg-white text-gray-900 w-11/12 bottom-4 left-1/2 -translate-x-1/2 hidden group-hover:block group-hover:animate-fadeIn ">
                    Read The Full Story
                  </div>
                </div>
              </a>
            </div>
            <div className="text-left my-6">
              <a href="#" alt="product">
                <div className="text-xl mb-3 hover:text-coffee-400">
                  Health Check: why do I get a headache when I haven’t had my
                  coffee?
                </div>
              </a>
              <div className="ttm-price">
                <div className="text-gray-500 leading-7 mb-3">
                  It is a paradisematic country, in which roasted parts of
                  sentences fly into your mouth.
                </div>
                <div className="text-gray-500 leading-7 uppercase text-[13px] font-semibold tracking-widest">
                  OCTOBER 18, 2023
                </div>
              </div>
            </div>
          </div>
          <div className="ttm-lifestyle-story-card ">
            <div className="h-[280px] bg-[url('./assets/Story2.jpg')] bg-cover bg-no-repeat bg-center">
              <a href="#">
                <div className="w-full h-full hover:bg-gray-900 hover:bg-opacity-10 hover:transition-all hover:ease-in-out hover:duration-400 relative group">
                  <div className="ttm-button absolute  bg-white text-gray-900 w-11/12 bottom-4 left-1/2 -translate-x-1/2 hidden group-hover:block group-hover:animate-fadeIn ">
                    Read The Full Story
                  </div>
                </div>
              </a>
            </div>
            <div className="text-left my-6">
              <a href="#" alt="product">
                <div className="text-xl mb-3 hover:text-coffee-400">
                  How long does a cup of coffee keep you awake?
                </div>
              </a>
              <div className="ttm-price">
                <div className="text-gray-500 leading-7 mb-3">
                  It is a paradisematic country, in which roasted parts. Vel qui
                  et ad voluptatem.
                </div>
                <div className="text-gray-500 leading-7 uppercase text-[13px] font-semibold tracking-widest">
                  OCTOBER 18, 2023
                </div>
              </div>
            </div>
          </div>
          <div className="ttm-lifestyle-story-card ">
            <div className="h-[280px] bg-[url('./assets/Story3.jpg')] bg-cover bg-no-repeat bg-center">
              <a href="#">
                <div className="w-full h-full hover:bg-gray-900 hover:bg-opacity-10 hover:transition-all hover:ease-in-out hover:duration-400 relative group">
                  <div className="ttm-button absolute  bg-white text-gray-900 w-11/12 bottom-4 left-1/2 -translate-x-1/2 hidden group-hover:block group-hover:animate-fadeIn ">
                    Read The Full Story
                  </div>
                </div>
              </a>
            </div>
            <div className="text-left my-6">
              <a href="#" alt="product">
                <div className="text-xl mb-3 hover:text-coffee-400">
                  Recent research suggests that heavy coffee drinkers may reap
                  health benefits.
                </div>
              </a>
              <div className="ttm-price">
                <div className="text-gray-500 leading-7 mb-3">
                  It is a paradisematic country, in which roasted parts of
                  sentences fly into your mouth.
                </div>
                <div className="text-gray-500 leading-7 uppercase text-[13px] font-semibold tracking-widest">
                  OCTOBER 18, 2023
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LifeStyle;
