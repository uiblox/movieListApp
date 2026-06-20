import { AllRoutes } from "./routes/AllRoutes";
import { Header, Footer } from "./components";

function App() {
  return (
    <div className="bg-white dark:bg-black">
      <Header />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
