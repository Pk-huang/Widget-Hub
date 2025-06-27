import { type WidgetItem } from "../../api/widgetApi";

export function filiterByCategory(widgets: WidgetItem[], category: string) {
    return category === "All"
        ? widgets
        : widgets.filter(widget => widget.category === category);
}

export function filterBySearchTerm(widgets: WidgetItem[], searchTerm: string) {
    return widgets.filter(widget =>
        widget.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
}

export function filterWidgetsFavorites(widgets: WidgetItem[], showFavoritesOnly: boolean,category: string, searchTerm: string   ) {
    let filtered = filiterByCategory(widgets, category);
    filtered = filterBySearchTerm(filtered, searchTerm);
    console.log("Filtered Widgets:", filtered);

    if (showFavoritesOnly) {
        filtered = filtered.filter(widget => widget.isFavorite);
    }
}

