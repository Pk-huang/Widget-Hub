import React, { useState, useEffect } from 'react';
import { WidgetGrid } from '../components/WidgetGrid';
import { widgetData, type WidgetItem } from '../api/widgetApi';

export default function WidgetPage() {
  const [widgets, setWidgets] = useState<WidgetItem[]>([]);

  useEffect(() => {
    setWidgets(widgetData); // 一進入畫面就設定資料
  }, []);

  return (
    <div className="container py-4">
      <h1 className="mb-4">Widgets</h1>
      <WidgetGrid widgets={widgets} />
    </div>
  );
}
