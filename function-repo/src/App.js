import Filter from "components/Filter";
import FindObject from "components/FindObject";
import Switch from "components/Switch";
import Test from "components/Test";
import TestArray from "components/TestArray";
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
          <Route path="/filter" element={<Filter />} />
          <Route path="/test" element={<Test />} />
          <Route path="/array" element={<TestArray />} />
          <Route path="/object" element={<FindObject />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
