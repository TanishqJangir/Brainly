import Features from "../components/layout/homePageFeatures";
import Hero from "../components/layout/hero";
import Navbar from "../components/layout/navbar";
import ReadyHomeCard from "../components/layout/readyHomeCard";
import ValultPreview from "../components/layout/vault-preview";
import HomePageFooter from "../components/layout/homePageFooter";


const Home = () => {
    return (
        <div>
      <Navbar />
      <Hero />
      <ValultPreview/>
      <Features/>
      <ReadyHomeCard />
      <HomePageFooter />
    </div>
    )
}

export default Home;