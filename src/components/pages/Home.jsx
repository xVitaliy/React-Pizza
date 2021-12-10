import React, { useCallback } from 'react';
import Categories from "../Categories";
import SortPopup from "../SortPopup";
import PizzaBlock from "../PizzaBlock";
import { useDispatch, useSelector } from "react-redux";
import { toggleCategory } from "../../redux/filter";

const categoryNames = [ 'Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые', ];

// const sortItems = [ 'популярности', 'цене', 'алфавиту' ]
const sortItems = [
    { name: 'популярности', type: 'popular' },
    { name: 'цене', type: 'price' },
    { name: 'алфавиту', type: 'alphabet' }
]

const Home = () => {
    const items = useSelector(state => state.pizza.pizza)
    const dispatch = useDispatch()

    const onSelectCategory = useCallback((index) => {
        return dispatch(toggleCategory({ index }))
    }, [ dispatch ])

    return (
        <div className="container">
            <div className="content__top">
                <Categories onClickItem={ onSelectCategory }
                            items={ categoryNames } />
                <SortPopup items={ sortItems } />

            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {
                    items.map((item) => <PizzaBlock key={ item.id } { ...item } />)
                }
            </div>
        </div>
    );
};

export default Home;

// key={ `${ item }_${ index }` } item={ item }

