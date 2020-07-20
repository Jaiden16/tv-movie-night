import React from 'react'
import { Link } from 'react-router-dom'

export default function UserShow(props) {
    let { genre, title, id, url } = props

    return (
        <div>
            <Link to={`shows/${id}`}>
                <div>
                    <p>{title}</p>
                    <img style={{width: 500, height: 500}}
                        src={url}
                        alt="broken" />
                </div>
            </Link>
        </div>
    )
}