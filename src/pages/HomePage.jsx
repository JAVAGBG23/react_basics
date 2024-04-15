import AboutSection from "../components/AboutSection";
import Button from "../components/Button";

const HomePage = () => {
  return (
    <div className="layout">
      <h1>Home Page</h1>
      <AboutSection></AboutSection>
      <Button text="This is a button" />
    </div>
  );
};

export default HomePage;
