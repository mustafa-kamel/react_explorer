import React, { Fragment } from "react";


const person = { id: 1, name: "Mustafa", city: "Sharqia", grade: "Rowad" };
const persons = [{ id: 1, name: "Mustafa", city: "Sharqia", grade: "Rowad" }, { id: 2, name: "Kamel", city: "Sharqia", grade: "Rowad SHR" }];

export const ObjectComponent = (props) => {
    return <Fragment>
        <div style={{ color: "#238403" }}>
            <p>ID: {person.id}</p>
            <p>Name: {person.name}</p>
            <p>City: {person.city}</p>
            <p>Grade: {person.grade}</p>
        </div>
        {
            persons.map((person, i) => {
                return (
                    <div style={{ color: "#F38A03" }}>
                        <p>ID {i}: {person.id}</p>
                        <p>Name: {person.name}</p>
                        <p>City: {person.city}</p>
                        <p>Grade: {person.grade}</p>
                    </div>
                )
            })
        }
        {
            persons.map((person) => (
                <div style={{ backgroundColor: "purple" }}>
                    {Object.keys(person).map((k) => (
                        <p> {k.toUpperCase()}: {person[k]}</p>
                    ))}
                </div>
            ))
        }
        {
            persons.map((person) => (
                <div style={{ backgroundColor: "yellow" }}>
                    {Object.values(person).map((v) => (
                        <p> {v}</p>
                    ))}
                </div>
            ))
        }
        <div style={{ backgroundColor: props.color }}>BREAK</div>
    </Fragment>
}

