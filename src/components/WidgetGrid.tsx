import WidgetCard from "./UI/WidgetCard";
import { type WidgetItem } from "../api/widgetApi"; // ✔ 型別


interface WidgetGridProps {
  widgets: WidgetItem[];
}
export const WidgetGrid = ({ widgets }: WidgetGridProps) => {
  // console.log(widgets);
  return (
    <div className="row">
      {widgets.map((widget) => (
     <WidgetCard data={widget}/>
      ))}
    </div>
  );
}