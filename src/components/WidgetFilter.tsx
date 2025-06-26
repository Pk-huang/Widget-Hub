import React from "react";

export interface WidgetFilterProps {
    searchTerm: string;
    onSearchChange: (term: string) => void;
}

export const WidgetFilter =  ({searchTerm ,onSearchChange}:WidgetFilterProps)=> { 
    return (
        <form className="form-inline m-2 d-flex">
            <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
            />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
                Search
            </button>
        </form>
    );
}

