import styled from "styled-components";
import "./App.css";
import AboutUs from "./Components/AboutUs";
import FooterSlider from "./Components/FooterSlider";
import NavBar from "./Components/NavBar";
import VideoSlider from "./Components/VideoSlider";

const Container = styled.div`
  position: relative;
  overflow: hidden;
  height: 100vh;
`;

function App() {
  return (
    <Container className="App">
      <NavBar />
      <VideoSlider />
      <AboutUs />
      <FooterSlider />
    </Container>
  );
}

export default App;
