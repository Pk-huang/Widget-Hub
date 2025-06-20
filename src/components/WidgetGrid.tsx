import React from "react";
import { WidgetCard } from "./UI/WidgetCard";
import type { WidgetApi } from "../api/widgetApi";

interface WidgetGridProps {
  widgets: WidgetApi[];
}
export const WidgetGrid = ({ widgets }: WidgetGridProps) => {
  return (
    <div className="row">
      {widgets.map((widget) => (
     <WidgetCard data={widget}/>
      ))}
    </div>
  );
}