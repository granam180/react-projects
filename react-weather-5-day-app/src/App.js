import WeatherForecast from "./components/WeatherForecast";

function App() {
  return (
    <div className="container">
      <h2 className="header">5-day Weather Report</h2>
      <p className="tagline">(5-day weather report using OpenWeather API, limited to surrounding areas)</p>
      <WeatherForecast />
    </div>
    
  );
}

export default App;
