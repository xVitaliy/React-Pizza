import './scss/app.scss';
import Header from "./components/Header";
import Home from "./components/pages/Home";
import Cart from "./components/pages/Cart";
import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
    const [ pizzas, setPizzas ] = useState([])

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(async () => {
        const response = await fetch('http://localhost:3000/db.json');
        const json = await response.json()
        setPizzas(json.pizzas)
    }, [])

    return (<div className="wrapper">
        <Header />
        <div className="content">
            <Routes>
                <Route path={ '/' } element={ <Home items={ pizzas } /> } />
                <Route path={ '/cart' } element={ <Cart /> } />
            </Routes>
        </div>
    </div>);
}

export default App;
