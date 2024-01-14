import "./App.scss";
import { BusinessList } from "./Components/BusinessList";
import SearchBar from "./Components/SearchBar";

function App() {
  return (
    <div>
      <SearchBar />
      <BusinessList />
    </div>
  );
}

export default App;
