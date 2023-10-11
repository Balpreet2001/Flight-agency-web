import Footer from "./components/Footer/Footer";
import Home from './components/Home/Home';
import Info from "./components/Info/Info";
import Lounge from "./components/Lounge/Lounge";
import Navbar from './components/Navbar/Navbar';
import Subscribers from './components/Subscribers/Subscribers';
import Support from './components/Support/Support';
import Travelers from './components/Travelers/Travelers';
import Search from './components/Search/Search'
function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Search />
      <Support />
      <Info />
      <Lounge />
      <Travelers />
      <Subscribers />
      <Footer />
    </>
  );
}

export default App
