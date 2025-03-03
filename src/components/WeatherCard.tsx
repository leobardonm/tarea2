interface WeatherCardProps {
  city: string;
  temperature: number;
  description: string;
}

const WeatherCard: React.FC<WeatherCardProps> = ({ city, temperature, description }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md">
      <h2 className="text-xl font-bold">{city}</h2>
      <p className="text-lg">{temperature}°C</p>
      <p className="text-sm text-gray-500">{description}</p>
    </div>
  );
};

export default WeatherCard;