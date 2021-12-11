import React, { useCallback, useEffect } from 'react';
import Categories from "../Categories";
import SortPopup from "../SortPopup";
import PizzaBlock from "../PizzaBlock";
import { useDispatch, useSelector } from "react-redux";
import { toggleCategory } from "../../redux/filter";
import { fetchPizza } from "../../redux/pizza";
import LoadingBlock from "../LoadingBlock";

const categoryNames = [ 'Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые', ];
const sortItems = [
    { name: 'популярности', type: 'popular' },
    { name: 'цене', type: 'price' },
    { name: 'алфавиту', type: 'name' }
]

const Home = () => {
    const items = useSelector(state => state.pizza.pizza)
    const { status, error } = useSelector(state => state.pizza)
    const { category, sortBy, index } = useSelector(state => state.filters)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchPizza({ category, sortBy, index }))
    }, [ category, index ])

    const onSelectCategory = useCallback((index) => {
        dispatch(toggleCategory({ index }))
        // dispatch(fetchPizza())
    }, [ dispatch ])

    return (
        <div className="container">
            <div className="content__top">
                <Categories activeCategory={ category }
                            onClickItem={ onSelectCategory }
                            items={ categoryNames } />
                <SortPopup items={ sortItems } />

            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                { status === 'loading' && Array(12).fill(0).map((_, i) => <LoadingBlock key={ i } />) }
                { items.map((item) => <PizzaBlock key={ item.id } { ...item } />) }
            </div>
        </div>
    );
};

export default Home;

// key={ `${ item }_${ index }` } item={ item }

