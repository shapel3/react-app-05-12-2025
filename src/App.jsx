import "./App.css";
import Heading from "./components/Heading";
import Link from "./components/Link";
import Paragraf from "./components/Paragraf";




function App() {
  const name = "Shapel";
  const isAdult = true;
  return (
    <>
      <h1 className="heading">
        {isAdult ? "Hello" : "Hi"} ,{name}!
      </h1>
      <Link href="https://www.youtube.com/" text="google"/>
      <Heading titleContent="somesing text" userName={name}/>
      <Paragraf content="New title" />
      <Heading titleContent="New title"/>
    </>
  );
}

export default App;
