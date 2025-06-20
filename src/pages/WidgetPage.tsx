import React , {useState, useEffect} from 'react';

import { WidgetGrid } from '../components/WidgetGrid';  
import { WidgetApi } from '../api/widgetApi'; // Assuming this is the correct import path


export default function WidgetPage() {
  const [widgets, setWidgets] = useState<WidgetApi[]>([]); 

    

  return (
    <>
      <h1 className="mb-4">Widgets</h1>
      <WidgetGrid widgets={widgets} />
    </>
  )
}
