import {
  AboutUs,
  Footer,
  Gallery,
  HeroSection,
  JoinTheClubSection,
  Navbar,
  Trainers,
  Wrapper,
} from "./components";

function App() {
  return (
    <Wrapper>
      <Navbar />
      <main>
        <HeroSection />
        <Gallery />
        <AboutUs />
        {/* <JoinTheClubSection /> */}
        <Trainers />
      </main>
      <Footer />
    </Wrapper>
  );
}

export default App;
