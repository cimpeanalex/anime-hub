import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import AnimePage from "./pages/AnimePage";
import FavoritesPage from "./pages/FavoritesPage";
import DonationPage from "./pages/DonationPage";
import Footer from "./components/Footer";
import { FavoriteProvider } from "./context/FavoriteContext";
import "./App.css";

function App() {
  return (
    <Router>
      <FavoriteProvider>
        <div className="app-container">
          <NavBar />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/anime/:id" element={<AnimePage />} />
              <Route path="/favorites" element={<FavoritesPage />} />
              <Route path="/donation" element={<DonationPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </FavoriteProvider>
    </Router>
  );
}

export default App;
