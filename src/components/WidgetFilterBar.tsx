import React from "react";

interface WidgetFilterBarProps {
    select: string,
    onSelect: (category: string) => void
}

const categories = ["All", "Weather", "News", "Productivity"]


export const WidgetfiliterBar = ({ select, onSelect }: WidgetFilterBarProps) => {

    return (
        <div className="row">
            {categories.map((catergory) => (
                <button 
                key={catergory}
                className={`btn btn-outline-secondary me-2 col-2  ${select == catergory ?  "active" : "" }`}
                 onClick={() => onSelect(catergory)}>{catergory}</button>
            ))}
        </div>
    )

}

