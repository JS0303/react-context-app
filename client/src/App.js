import "./App.css";
import CompletePage from "./pages/CompletePage";
import OrderPage from "./pages/Orderpage";
import SummaryPage from "./pages/SummaryPage";

function App() {
  return (
    <div style={{ padding: "4rem" }}>
      <OrderPage />
      <SummaryPage />
      <CompletePage />
    </div>
  );
}

export default App;
