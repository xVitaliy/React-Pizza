import React, { memo, useState } from 'react';

const Categories = ({ activeCategory, items, onClickItem }) => {
    const setSelectItem = (index) => {
        onClickItem(index)
    }

    const list = items?.map((item, i) =>
        <li className={ activeCategory === i ? 'active' : '' }
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


