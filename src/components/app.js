import React, { Fragment } from "react"


export const FirstApp = () => {
    return <Fragment>
        <div>
            <h2 style={{ color: "green" }}>1st REACT Component</h2>
        </div>
        <h2>First Title</h2>

    </Fragment>

}


let name = "Mustafa";
export const SecondApp = () => {
    return <Fragment>
        <div>
            <h2>2nd REACT Component</h2>
        </div>
        <h2 style={{ color: "green" }}>Hello {name}</h2>

    </Fragment>
}
