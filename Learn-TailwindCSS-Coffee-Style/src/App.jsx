import Main from "./components/Main";
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
            <Main></Main>
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
