import "./App.css";
import Store from "./store/categories";
import Header from "./components/header/header";
function App() {
  return (
    <div className="App">
      <Header />
      <Store />
    </div>
  );
}

export default App;
