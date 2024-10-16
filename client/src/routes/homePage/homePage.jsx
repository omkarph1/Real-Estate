import { useContext } from "react";
import SearchBar from "../../components/searchBar/SearchBar";
import "./homePage.scss";
import { AuthContext } from "../../context/AuthContext";

function HomePage() {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="homePage">
      <div className="imageStart">
        <img src="/home1.jpg" alt="" />
        <div className="overlay">
          <h1>Welcome to UrbanQuarters</h1>
        </div>
      </div>
      <div className="overStart">
        <div className="textContainer">
            <div className="wrapper">
              <h1 className="title">Explore. Discover. Settle In</h1>
              <p>
                Discover a wide range of beautiful properties tailored to your
                needs. Whether you're buying, selling, or renting, we offer a
                seamless experience with expert guidance and the latest
                listings, making your real estate journey simple and
                stress-free. Let’s turn your dream home into reality!
              </p>
              <SearchBar />
              <div className="boxes">
                <div className="box">
                  <h1>2+</h1>
                  <h2>Years of Experience</h2>
                </div>
                <div className="box">
                  <h1>200</h1>
                  <h2>Award Gained</h2>
                </div>
                <div className="box">
                  <h1>2000+</h1>
                  <h2>Listed Properties</h2>
                </div>
              </div>
            </div>
          </div>
        <div className="imgContainer">
          <div className="first">
            <img src="/home2.jpg" alt="" />
          </div>
          <div className="second">
            <img src="/home4.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
