function FeaturedMugs() {
  return (
    <div>
      <div className="ttm-subheadLine ">
        <div className="ttm-subheadLine-deco-line "></div>
        <div className="ttm-subheadLine-label ">Futured Mugs</div>
        <div className="ttm-subheadLine-deco-line w-8 h-px bg-gray-200"></div>
      </div>
      <div className="featured-mugs w-[95%] lg:w-[65%] mx-auto mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-4">
          <div className="ttm-product-card ">
            <div className="h-[300px] sm:h-[450px] bg-[url('./assets/mugs1.jpg')] bg-cover bg-no-repeat bg-center">
              <a href="#">
                <div className="w-full h-full hover:bg-gray-900 hover:bg-opacity-10 hover:transition-all hover:ease-in-out hover:duration-400 relative group">
                  <div className="ttm-button absolute  bg-white text-gray-900 w-11/12 bottom-4 left-1/2 -translate-x-1/2 hidden group-hover:block group-hover:animate-fadeIn ">
                    Explore Mug
                  </div>
                </div>
              </a>
            </div>
            <div className="text-center my-8">
              <a href="#" alt="product">
                <div className="text-xl mb-3 hover:text-coffee-400">
                  Pink Premium Ceramic
                </div>
              </a>
              <div className="ttm-price">
                <span className=" text-gray-600 ">$99.00</span>
              </div>
            </div>
          </div>
          <div className="ttm-product-card ">
            <div className="h-[300px] sm:h-[450px] bg-[url('./assets/mugs2.jpg')] bg-cover bg-no-repeat bg-center">
              <a href="#">
                <div className="w-full h-full hover:bg-gray-900 hover:bg-opacity-10 hover:transition-all hover:ease-in-out hover:duration-400 relative group">
                  <div className="absolute w-[100px] bg-white py-2 px-4 top-3 right-3 text-center font-semibold text-coffee-400 ">
                    On Sale.
                  </div>
                  <div className="ttm-button absolute bg-white text-gray-900 w-11/12 bottom-4 left-1/2 -translate-x-1/2 hidden group-hover:block group-hover:animate-fadeIn text-center uppercase tracking-wider py-4 px-8 text-sm font-semibold cursor-pointer hover:opacity-90">
                    Explore Mug
                  </div>
                </div>
              </a>
            </div>
            <div className="text-center my-8">
              <a href="#" alt="product">
                <div className="text-xl mb-3 hover:text-coffee-400">
                  Golden Designers Mug
                </div>
              </a>
              <div className="ttm-price">
                <span className="text-lg text-coffee-400">$50.00</span>
                <span className="ml-2 text-gray-400 line-through">$69.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedMugs;
