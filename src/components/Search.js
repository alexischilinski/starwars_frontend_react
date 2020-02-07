import React, { Component } from 'react'

export const Search = (props) => {

        const handleChange = (event) => {
            props.updateSearchTerm(event.target.value)
        }

        return(
            <div>
                <form className="search-form">
                {props.characters ? <input 
                                    onChange={handleChange}
                                    className="search-character"
                                    type="text"
                                    value={props.searchTerm}
                                    placeholder="Search by name, role, affiliation, jedi/sith, species, etc.."></input> : null}
                {props.movies ? <input 
                                    onChange={handleChange}
                                    className="search-movie"
                                    type="text"
                                    value={props.searchTerm}
                                    placeholder="Search by movie title or episode number.."></input> : null}
                {props.planets ? <input 
                                    onChange={handleChange}
                                    className="search-planet"
                                    type="text"
                                    value={props.searchTerm}
                                    placeholder="Search by planet name.."></input> : null}
                {props.animals ? <input 
                                    onChange={handleChange}
                                    className="search-animal"
                                    type="text"
                                    value={props.searchTerm}
                                    placeholder="Search by animal name.."></input> : null}
                </form>
            </div>
        )
}