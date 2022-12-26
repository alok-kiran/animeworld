import './App.css';
import Home from './Home';
import AnimeDetails from './AnimeDetails';
import { Route, Routes } from "react-router-dom"
import { Provider } from 'react-redux';
import { store } from './redux/store';


function App() {
  return (
    <Provider store={store}>
    <div className="App">
    <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:animeId" element={<AnimeDetails />} />
    </Routes>
    </div>
    </Provider>
  );
}

export default App;
