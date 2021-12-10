import React, { memo, useState } from 'react';

const Categories = ({ items, onClickItem }) => {
    const [ activeItem, setActiveItem ] = useState(0)

    const setSelectItem = (index) => {
        setActiveItem(index)
        onClickItem(index)
    }

    const list = items?.map((item, i) =>
        <li className={ activeItem === i ? 'active' : '' }
            onClick={ () => setSelectItem(i) }
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
export default memo(Categories);


