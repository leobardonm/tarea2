import { useState } from 'react';

interface WeatherCardProps {
  city: string;
  temperature: number;
  description: string;
  uvIndex: number;
  icon: string;
}

const WeatherCard: React.FC<WeatherCardProps> = ({ city, temperature, description, uvIndex, icon }) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="relative border rounded-lg p-4 shadow-md">
      <button
        onClick={handleClose}
        className="absolute top-2 left-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center hover:bg-red-700"
      >
        X
      </button>
      <div className="flex flex-col items-center gap-2 mt-6">
        <h2 className="text-xl font-bold">{city}</h2>
        <img src={icon} alt={description} className="w-12 h-12" />
        <p className="text-lg">{temperature}°C</p>
        <p className="text-sm text-gray-500">{description}</p>
        <p className="text-sm text-gray-500">UV Index: {uvIndex}</p>
      </div>
    </div>
  );
};

export default WeatherCard;