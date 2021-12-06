import React from 'react';
import classNames from "classnames";

const Button = (props) => {

    let a = 1;
    (function () {
        return (13)
    }())

    let { outline, children } = props;
    console.log(this)
    return (
        <button className={classNames('button', {
            'button--outline': outline
        })}>{children}</button>
    );
}

export default Button;