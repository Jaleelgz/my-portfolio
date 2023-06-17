import styled from "@emotion/styled";
import "./App.css";
import About from "./components/About/About";
import Banner from "./components/Banner/Banner";
import Contact from "./components/Contact/Contact";
import Skills from "./components/Skills/Skills";

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: #fff;
  background: url('./img/bg.jpeg');
  &::-webkit-scrollbar{
    display: none;
  }
`;

function App() {
  return (
    <Container>
      <Banner />
      <About />
      <Skills />
      <Contact />
    </Container>
  );
}

export default App;
