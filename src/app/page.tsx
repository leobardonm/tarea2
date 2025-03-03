"use client";

import { useWeatherData } from '../hooks/useWeatherData';
import Image from 'next/image';
import SearchBar from '../components/SearchBar';
import WeatherCard from '../components/WeatherCard';

export default function Home() {
  const { weatherData, error, fetchWeatherData, removeWeatherData } = useWeatherData();

  const handleSearch = async (city: string) => {
    await fetchWeatherData(city);
  };

  return (
    <div className="flex flex-col items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <header className="w-full flex justify-center">
        <SearchBar onSearch={handleSearch} />
      </header>
      <main className="flex flex-col gap-8 items-center sm:items-start w-full">
        {error && <p className="text-red-500">{error}</p>}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 w-full">
          {weatherData.map((weather, index) => (
            <WeatherCard
              key={index}
              city={weather.city}
              temperature={weather.temperature}
              description={weather.description}
              uvIndex={weather.uvIndex}
              icon={`https:${weather.icon}`}
              onRemove={() => removeWeatherData(index)}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
