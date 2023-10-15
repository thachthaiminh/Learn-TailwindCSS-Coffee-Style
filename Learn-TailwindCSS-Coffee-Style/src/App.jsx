function App() {
  return (
    <div>
      <div id="root">
        <div className="content-wrapper max-w-screen-xl text-base mx-auto px-8 bg-slate-200">
          <header className="py-6 mx-10">
            <nav className="flex flex-row justify-between items-center">
              <div className="logo basis-2/6 text-center text-xl font-semibold cursor-pointer">
                CoffeeStyle.
              </div>
              <ul className="basis-3/6 flex items-center justify-end gap-8 uppercase text-sm text-gray-500 font-medium ">
                <li className="ttm-top-menu-item">
                  <a href="Home">Home</a>
                </li>
                <li className="ttm-top-menu-item">
                  <a href="Product">Product</a>
                </li>
                <li className="ttm-top-menu-item">
                  <a href="Blog">Blog</a>
                </li>
                <li className="ttm-top-menu-item">
                  <a href="About">About</a>
                </li>
                <li className="ttm-top-menu-item">
                  <a href="Contact">Contact</a>
                </li>
                <li className="ttm-top-menu-item">
                  <a href="StyleGuide">StyleGuide</a>
                </li>
                <li className="ttm-top-menu-item">
                  <a href="thachthaiminh">thachthaiminh</a>
                </li>
              </ul>
              <ul className="basis-1/6 flex justify-start items-center ml-16 uppercase text-sm text-gray-500 font-medium">
                <li className="ttm-top-menu-item">
                  <a href="" className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="ttm-icon"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                      />
                    </svg>

                    <span className="mx-2">Cart</span>
                    <span className="ttm-badge-circle bg-orange-400 text-white">
                      10
                    </span>
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
