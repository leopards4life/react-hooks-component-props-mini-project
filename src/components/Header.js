import React from "react";
import blogData from "../data/blog";

const { name } = blogData

function Header(blogData) {
    return (
        <header>
            <h1>{name}</h1>
        </header>
    )
}

export default Header;