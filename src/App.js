import React from "react";
import ChipList from "./ChipList";


const sampleChips = [
  { label: "123456" },
  { label: "1234567" },
  { label: "12345678" },
  { label: "12345" },
  { label: "123456789" }
];
function App() {
  return (
    <div>
      <h1>Chip List Example</h1>
      <ChipList chips={sampleChips} maxChipsDisplayed={3} maxTextLength={6} />
    </div>
  );
}
 

export default App;
