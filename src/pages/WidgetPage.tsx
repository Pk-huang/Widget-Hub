import { WidgetGrid } from '../components/WidgetGrid';
import { useWidgetPage } from '../hooks/widgetsfuction';
import { WidgetFilter } from '../components/WidgetFilter';


export default function WidgetPage() {
  const { handleToggleFavorite, setSearchTerm, searchTerm, filteredWidgets } = useWidgetPage();


  return (
    <div className="container py-4">
      <h1 className="mb-4">Widgets</h1>
      <WidgetFilter searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <WidgetGrid widgets={filteredWidgets} onToggleFavorite={handleToggleFavorite} />
    </div>
  );
}
