import './scss/app.scss';
import Header from "./components/Header";
import Home from "./components/pages/Home";
import Cart from "./components/pages/Cart";
import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { fetchPizza } from "./redux/pizza";
import { useDispatch } from "react-redux";
import axios from "axios";

function App() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchPizza())
    }, [ dispatch ])

    window.__test = () => {
        axios.get('http://localhost:3001/db.json')
            .then(dispatch(fetchPizza()))
    }

    return (<div className="wrapper">
        <Header />
        <div className="content">
            <Routes>
                <Route path={ '/' } element={ <Home /> } />
                <Route path={ '/cart' } element={ <Cart /> } />
            </Routes>
        </div>
    </div>);
}

export default App;
