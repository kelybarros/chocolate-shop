import SmoothScroll from "./SmoothScroll";

import Header from "./components/Header"
import Hero from "./sections/Hero";
import Parallax from "./sections/Parallax"
import Quality from "./sections/Quality"
import Taste from "./sections/Taste"
import Footer from "./components/Footer"

const App = () => {
  return (
    <SmoothScroll>
      <Header />
      <Hero />
      <Taste />
      <Quality />
      <Parallax />
      <Footer />
    </SmoothScroll>
  )
}


export default App;