import { useState } from 'react';

const api = {
  base: "https://api.weatherapi.com/v1/current.json",
  key: "74ac0a7d94594ce5912130931250303",
};

export const useWeatherData = () => {
  const [weatherData, setWeatherData] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  const fetchWeatherData = async (city: string) => {
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
          uvIndex: data.current.uv,
          icon: data.current.condition.icon,
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

  const removeWeatherData = (index: number) => {
    setWeatherData(weatherData.filter((_, i) => i !== index));
  };

  return { weatherData, error, fetchWeatherData, removeWeatherData };
};