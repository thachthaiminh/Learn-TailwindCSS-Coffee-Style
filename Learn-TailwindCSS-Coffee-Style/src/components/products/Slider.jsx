function Slider() {
  return (
    <div>
      <div className="slider h-[540px] bg-[url('./assets/bg_slider.png')] bg-cover bg-no-repeat bg-bottom mb-24">
        <div className="w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-40">
          <div className="mx-16 text-white text-center">
            <div className="mb-6">BEST PLACE TO BUY COFFEE</div>
            <div className="font-medium text-5xl">Coffee Mugs</div>
            <div className="font-medium text-lg mb-6">
              Now you can choose one of other and to buy it.
            </div>
            <div className="flex justify-center">
              <div className="ttm-button bg-white text-gray-900 w-max ">
                Explore Our Products
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slider;
