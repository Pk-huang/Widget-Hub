import { WidgetGrid } from '../components/WidgetGrid';
import { useWidgetPage } from '../hooks/useWidgetPage';
import { WidgetFilter } from '../components/WidgetFilter';
import { WidgetfiliterBar } from '../components/WidgetFilterBar'
import { FavoriteToggleButton } from '../components/FavoriteToggleButton';


export default function WidgetPage() {
  const { handleToggleFavorite, setSearchTerm, searchTerm, filteredWidgets, seletCatory, category, setShowFavoritesOnly ,showFavoritesOnly} = useWidgetPage();


  return (
    <div className="container py-4">
      <h1 className="mb-4">Widgets</h1>
      <FavoriteToggleButton isFavorite={ showFavoritesOnly} onToggle={()=>setShowFavoritesOnly(prev => !prev) } />
      <WidgetFilter searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <WidgetfiliterBar select={category} onSelect={seletCatory} />
      <WidgetGrid widgets={filteredWidgets} onToggleFavorite={handleToggleFavorite} />
    </div>
  );
}
