export interface Widget {
    id: string;
    name: string;
    description: string;
    icon: string;
    category: string;
    isFavorite: boolean;
}

// const API_KEY = "d67a906df3f7b73e26ea640be6c92395";
// export const geoApi = () => {
//     navigator.geolocation.getCurrentPosition(
//         position => {
//             const { latitude ,longitude } = position.coords
//             const geo = {
//                 latitude,
//                 longitude,
//                 timestamp: position.timestamp
//             };
//             console.log(geo);
//             fetchWeatherByCoords(latitude,longitude);
//             return geo;
//         }
//     );  
// }

// export async function fetchWeatherByCoords(latitude:number, longitude:number) {
//     const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;

//     try {
//         const response = await fetch(url)
//         if (!response.ok) throw new Error("定位天氣失敗");

//         const data = await response.json();
//         // renderWeatherCard(data, (cityKey) => {
//         //     removeCity(cityKey);
//         //   });
//         console.log(data);
//     }
//     catch (err) {
//         console.log(err.message);
//     }

// }



export const WidgetApi = () => {


    return [
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
    ]
}









