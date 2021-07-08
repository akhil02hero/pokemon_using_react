import React from 'react'

export default function Card(props) {
    return (
        <div className="Card">
            <p>{props.name}</p>
            <p>{props.age}</p>
        </div>
    )
}
