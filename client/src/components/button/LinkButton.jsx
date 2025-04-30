import React from 'react'
import { Link } from 'react-router-dom'
const LinkButton = ({ name, to, className }) => {
    return (
        <Link to={to}  className={`${className} border p-2 mx-auto rounded-md`}>
            {name}
        </Link>
    )
}

export default LinkButton