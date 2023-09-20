
import './App.css';
import Header from "./components/Header";
import AddGymForm from "./components/addGymForm";
import Table from "./components/Table";
import WeightLineChart from "./components/WeightLineChart";

function App() {
  return (
    <div>
      <Header />
      <AddGymForm/>
        <Table />
    </div>
  );
}

export default App;
