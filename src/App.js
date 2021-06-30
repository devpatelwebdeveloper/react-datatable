import "./styles.css";
// import SortTable from "./Component/DataTable";
// import ProductTable from "./Component/DevTable";
import FilterData from "./Component/FilterData";
import data from "./utils";

export default function App() {
  return (
    <div className="App">
      <FilterData amazing={data} />
    </div>
  );
}
