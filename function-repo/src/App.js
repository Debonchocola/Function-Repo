import Switch from "components/Switch";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Check from "./components/AllCheck";
import Tag from "./components/Tag";
import Tag2 from "./components/Tag2";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/check" element={<Check />} />
          <Route path="/tag" element={<Tag />} />
          <Route path="/tag2" element={<Tag2 />} />
          <Route path="/switch" element={<Switch />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
