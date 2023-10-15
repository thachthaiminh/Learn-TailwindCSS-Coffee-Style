function App() {
  return (
    <div>
      <div id="root">
        <div className="content-wrapper max-w-screen-xl text-base mx-auto px-8 bg-slate-400">
          <header className="">
            <nav className="">
              <div className="logo">CoffeeStyle.</div>
              <ul className="">
                <li className="">
                  <a href="#">Home</a>
                </li>
                <li className="">
                  <a href="#">Our Product</a>
                </li>
                <li className="">
                  <a href="#">Blog</a>
                </li>
                <li className="">
                  <a href="#">About</a>
                </li>
                <li className="">
                  <a href="#">Contact</a>
                </li>
                <li className="">
                  <a href="#">StyleGuide</a>
                </li>
                <li className="">
                  <a href="#">thachthaiminh</a>
                </li>
              </ul>
              <ul className="">
                <li className="">
                  <a href="" className="">
                    Card
                  </a>
                </li>
              </ul>
            </nav>
          </header>
          <main>
            <div className="slider">Slider</div>
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