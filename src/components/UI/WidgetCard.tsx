import { widgetApi } from "../../api/widgetApi";

interface WidgetData {
    data:WidgetData;
}   

export const WidgetCard = ({data}:WidgetData) => {
    return (
        <div className="card col-4 m-2">
            <div className="card-top"></div>
            <div className="card-body">
                <h5 className="card-title">{data.category}</h5>
                <p className="card-text">{data.description}.</p>
                <button className="btn btn-primary">Go somewhere</button>
            </div>
        </div>
    );
}