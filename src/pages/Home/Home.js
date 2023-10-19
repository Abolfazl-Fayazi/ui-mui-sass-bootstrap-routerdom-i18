import "../../assets/sass//Home/Home.scss";
import TopBar from "./topBar";
import Header from "./header";
import Slider from "./slider";

//////////////////////////////////////////////////////////////////////////

const Home = () => {
  return (
    <div className="whole_home">
      <TopBar className="top-bar" />
      <Header className="header"/>
      <Slider />
    </div>
  );
};

export default Home;
