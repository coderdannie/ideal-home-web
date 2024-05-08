import Home from './pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PropertiesForRent from './pages/PropertiesForRent';
import PropertiesForSale from './pages/PropertiesForSale';
import AboutUs from './pages/AboutUs';

import Login from './pages/Login';
import Register from './pages/Register';
import PropertyDetailsPage from './pages/PropertyDetailsPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route
          exact
          path="/properties-for-sale"
          element={<PropertiesForSale />}
        />
        <Route exact path="/properties/:id" element={<PropertyDetailsPage />} />
        <Route
          exact
          path="/properties-for-rent"
          element={<PropertiesForRent />}
        />
        <Route exact path="/properties/:id" element={<PropertyDetailsPage />} />
        <Route exact path="/about" element={<AboutUs />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
};
export default App;
