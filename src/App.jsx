import { useState } from "react";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NameTag from "./components/NameTag";
import NamePage from "./pages/NamePage";

const nameStyle = {
  color: "green",
  border: "1px solid green",
};

const names = [
  // en rad här är = n i map()
  { id: 1, firstName: "Helena", lastName: "Johansson" },
  { id: 2, firstName: "Janne", lastName: "Johansson" },
  { id: 3, firstName: "Nisse", lastName: "Johansson" },
];

function App() {
  const [nameTags, setNameTags] = useState(names);

  return (
    <div className="layout">
      <NamePage>
        {nameTags.map((n) => {
          return (
            <NameTag key={n.id} firstName={n.firstName} lastName={n.lastName} />
          );
        })}
      </NamePage>
    </div>
  );
}

export default App;

/*

 


1.
 <>
      <Header />
      <HomePage />
      <Footer />
    </>

    2.
     <NameTag
        style={{ color: "magenta" }}
        firstName="Helena"
        lastName="Johansson"
      />
      <NameTag firstName="Janne" lastName="Johansson" />
      <NameTag firstName="Nisse" lastName="Johansson" />
*/
