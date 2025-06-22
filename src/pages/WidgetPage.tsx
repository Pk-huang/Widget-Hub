import { WidgetGrid } from '../components/WidgetGrid';
import  WidgetPageFuction  from '../hooks/widgetsfuction';



export default function WidgetPage() {
  const { widgets, handleToggleFavorite } = WidgetPageFuction();


  return (
    <div className="container py-4">
      <h1 className="mb-4">Widgets</h1>
      <WidgetGrid widgets={widgets} onToggleFavorite={handleToggleFavorite} />
    </div>
  );
}
