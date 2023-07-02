import "./index.css";
import Weather from "./Weather";
import Footer from "./Footer";
import 'bootstrap/dist/css/bootstrap.css';
import "./index";


export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weather-app">
          <Weather defaultCity="London" />
          <div>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
