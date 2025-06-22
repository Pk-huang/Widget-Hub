import React from "react";
import { widgetData, type WidgetItem } from "../../api/widgetApi"; // ✔ 型別

interface WidgetCardProps {
  data: WidgetItem; // ✔ 這樣才會正確
  onToggleFavorite: (id: string) => void;
}

function WidgetCard({ data ,onToggleFavorite }: WidgetCardProps) {

  return (
    <div className="card col-4 m-2">
      <div className="card-top p-2 d-flex justify-content-between align-items-center">
        <h5 className="card-title">{data.category}</h5>
        {/* <span className="badge bg-secondary">{data.category}</span> */}
        <button className="btn-none" onClick={() => onToggleFavorite(data.id)}> {data.isFavorite ? '★' : '☆'}</button>
      
      </div>
      <div className="card-body">
        <p className="card-text">{data.description}</p>
        <button className="btn btn-primary">Go somewhere</button>
      </div>
    </div>
  );
}

export default WidgetCard;
