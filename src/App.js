import "./styles.css";
import FilterData from "./Component/FilterData";
import TabSelector from "./Component/TabFilter";
import data from "./utils";

export default function App() {
  return (
    <div className="App">
      <TabSelector />
      {/* <FilterData data={data} /> */}
    </div>
  );
}
