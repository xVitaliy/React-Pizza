import React, { useState } from 'react';

const Categories = ({ items, onClick }) => {
    const [ activeItem, setActiveItem ] = useState(0)


    const list = items?.map((item, i) =>
        <li className={ activeItem === i ? 'active' : '' }
            onClick={ () => setActiveItem(i) }
            key={ `${ item }+${ i }` }>{ item }
        </li>)

    return (
        <div className="categories">
            <ul>
                { list }
            </ul>
        </div>
    );
};
export default Categories;


