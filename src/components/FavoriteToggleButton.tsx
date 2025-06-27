interface FavoriteToggleButtonProps {
    isFavorite: boolean;
    onToggle: () => void;
}

export const FavoriteToggleButton = ({isFavorite,onToggle}:FavoriteToggleButtonProps)=>{
    return (
        <button
            className={`btn btn-${isFavorite ? "danger" : "outline-secondary"} btn-sm`}
            onClick={onToggle}
        >
            {isFavorite ? "Unfavorite" : "Favorite"}
        </button>
    );
}