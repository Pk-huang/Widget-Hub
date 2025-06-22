import React, { useState, useEffect } from 'react';
import { widgetData, type WidgetItem } from '../api/widgetApi';

export default function WidgetPage() {
    // 定義一個常數來存儲本地存儲的鍵
    // 這樣可以避免在多個地方硬編碼同一個鍵
    // 如果需要更改存儲鍵，只需在這裡修改一次即可     

    const STORAGE_KEY = 'widget_list';
    const [widgets, setWidgets] = useState<WidgetItem[]>([]);

    useEffect(() => {
        const stored = localStorage.getItem(STORAGE_KEY);


        // 目前 widgetData 是預設資料
        if (stored) {
            try {
                setWidgets(JSON.parse(stored));
            } catch {
                setWidgets(widgetData); // 如果解析失敗，使用預設資料
            }
        } else {
            setWidgets(widgetData); // 如果沒有存儲資料，使用預設資料
        }
    }, []);
    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(widgets));
    }, [widgets]);

    // WidgetPage.tsx
    function handleToggleFavorite(id: string) {
        setWidgets(prev => prev.map(widget =>
            widget.id === id
                ? { ...widget, isFavorite: !widget.isFavorite }
                : widget
        ));
    }

    useEffect(() => {
        setWidgets(widgetData); // 一進入畫面就設定資料

    }, []);  
    return{ widgets, handleToggleFavorite}
}
