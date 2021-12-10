import './scss/app.scss';
import Header from "./components/Header";
import Home from "./components/pages/Home";
import Cart from "./components/pages/Cart";
import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { setPizzas } from "./redux/pizza";
import { useDispatch } from "react-redux";

function App() {
    // const [ pizzas, setPizzas ] = useState([])
    const dispatch = useDispatch()

    // useEffect(async () => {
    //     const response = await fetch('http://localhost:3000/db.json');
    //     const json = await response.json()
    //     dispatch(setPizzas(json.pizzas))
    // }, [ dispatch ])

    useEffect(() => {
        axios.get('http://localhost:3000/db.json')
            .then(data => dispatch(setPizzas(data.data.pizzas)))
    }, [ dispatch ])

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
