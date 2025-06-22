import WidgetCard from "./UI/WidgetCard";
import { type WidgetItem } from "../api/widgetApi"; // ✔ 型別


interface WidgetGridProps {
  widgets: WidgetItem[];
  onToggleFavorite: (id: string) => void;
}
export const WidgetGrid = ({ widgets ,onToggleFavorite }: WidgetGridProps) => {
  // console.log(widgets);
  return (
    <div className="row">
      {widgets.map((widget) => (
     <WidgetCard key={widget.id}  data={widget} onToggleFavorite={onToggleFavorite}/>
      ))}
    </div>
  );
}