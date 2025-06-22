// src/api/widgetApi.ts

// ✅ 型別定義
export interface WidgetItem {
  id: string;
  name: string;
  description: string;
  icon: string;
  category: string;
  isFavorite: boolean;
}

// ✅ 資料變數（用 widgetData 或 widgets 更清楚）
export const widgetData: WidgetItem[] = [
  {
    id: '1',
    name: 'Weather Widget',
    description: 'Displays current weather information.',
    icon: 'weather-icon.png',
    category: 'Weather',
    isFavorite: false,
  },
  {
    id: '2',
    name: 'News Widget',
    description: 'Shows latest news headlines.',
    icon: 'news-icon.png',
    category: 'News',
    isFavorite: true,
  },
  {
    id: '3',
    name: 'Calendar Widget',
    description: 'Displays upcoming events and reminders.',
    icon: 'calendar-icon.png',
    category: 'Productivity',
    isFavorite: false,
  },
];
