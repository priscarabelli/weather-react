import "./index.css";
import Search from "./Search";
import Header from "./Header";
import Footer from "./Footer";
import Forecast from "./Forecast";
import 'bootstrap/dist/css/bootstrap.css';
import "./index";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weather-app">
          <Search />
          <Header defaultCity="London"/>
          <div>
            <Forecast />
          </div>
          <div>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
