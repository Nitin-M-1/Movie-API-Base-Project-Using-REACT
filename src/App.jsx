import "./App.css";
import { AllRoutes } from "./routes/AllRoutes";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
function App() {
  return (
    <div className="app">
      <Header />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
