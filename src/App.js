import Input from "./Input";
import Square from "./Square";
import { useState } from "react";

function App() {
  const [colorValue, setColorValue] = useState("");
  const [hexValue, setHexValue] = useState("");
  const [isDarkText, setIsDarkText] = useState(true);

  return (
    <div className="App">
      <h1>Color Box</h1>
      <Square
        colorValue={colorValue}
        hexValue={hexValue}
        isDarkText={isDarkText}
      />
      <Input
        colorValue={colorValue}
        setColorValue={setColorValue}
        setHexValue={setHexValue}
        setIsDarkText={setIsDarkText}
        isDarkText={isDarkText}
      />
    </div>
  );
}

export default App;
