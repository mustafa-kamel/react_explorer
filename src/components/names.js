import React, { Fragment } from "react"

let names = ["ABC", "XYZ", "JKL", "UIO"]

export const NamesComponent = function () {
    return (
        <Fragment>
            <ul>
                {
                    names.map((name, index) => {
                        return <li>{"My name is: " + name + " - Index: " + index}</li>;
                    })
                }
            </ul>
            <ul></ul>
        </Fragment>
    )
};