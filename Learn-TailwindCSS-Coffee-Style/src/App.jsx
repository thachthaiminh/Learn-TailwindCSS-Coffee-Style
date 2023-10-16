import Nav from "./components/Nav";

function App() {
  return (
    <div>
      <div id="root">
        <div className="content-wrapper font-Karla max-w-screen-xl text-base mx-auto px-8">
          <header className="py-6 mx-auto">
            <Nav></Nav>
          </header>
          <main>
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
            <div className="story">Story</div>
            {/* End story  */}
            <div className="featured-mugs">Story</div>
            {/* End featured-mugs  */}
            <div className="more-product">Story</div>
            {/* End more-product  */}
            <div className="coffe-magazine">Story</div>
            {/* End coffe-magazine  */}
            <div className="life-style">Story</div>
            {/* End life-style */}
            <div className="subcribe-us">Story</div>
            {/* End subcribe-us */}
          </main>
          <footer>FOOTER</footer>
        </div>
        {/* End content-wrapper  */}
      </div>
      {/* End root  */}
    </div>
  );
}

export default App;
