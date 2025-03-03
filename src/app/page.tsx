"use client";

import { useState } from 'react';
import Image from 'next/image';
import SearchBar from '../components/SearchBar';
import WeatherCard from '../components/WeatherCard';

const api = {
  base: "https://api.weatherapi.com/v1/current.json",
  key: "74ac0a7d94594ce5912130931250303",
};

export default function Home() {
  const [weatherData, setWeatherData] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (city: string) => {
    try {
      const response = await fetch(`${api.base}?key=${api.key}&q=${city}&aqi=no`);
      if (!response.ok) {
        throw new Error('City not found');
      }
      const data = await response.json();
      setWeatherData([
        ...weatherData,
        {
          city: data.location.name,
          temperature: data.current.temp_c,
          description: data.current.condition.text,
        },
      ]);
      setError(null);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unknown error occurred');
      }
    }
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <SearchBar onSearch={handleSearch} />
        {error && <p className="text-red-500">{error}</p>}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          {weatherData.map((weather, index) => (
            <WeatherCard
              key={index}
              city={weather.city}
              temperature={weather.temperature}
              description={weather.description}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
