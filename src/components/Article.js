import React from "react";

function Article({title, date="January 1, 1970", preview, minutes}) {
    // function emoji() {
    //     if ({minutes} < 30) {
    //         return "☕"
    //     } else {
    //         return "🍱"
    //     }
    // }
    return (
        <article>
            <h3>{title}</h3>
            <small>{date}</small>
            <p>{preview}</p>
        </article>
    )
}

export default Article;