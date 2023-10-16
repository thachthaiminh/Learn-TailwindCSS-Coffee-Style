import Nav from "./components/Nav";

function App() {
  return (
    <div>
      <div id="root">
        <div className="content-wrapper font-Karla max-w-screen-xl text-base mx-auto px-8 bg-slate-200">
          <header className="py-6 mx-auto">
            <Nav></Nav>
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
