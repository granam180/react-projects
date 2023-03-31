import "./App.css";
import { useState, useEffect } from "react";
// import Search from "./components/search/search";
import Forecast from "./components/forecast/forecast";
import CurrentWeather from "./components/current-weather/current-weather";
import { WEATHER_API_URL, WEATHER_API_KEY } from "./api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const getCurrentLocation = () => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve({
          label: "Current Location",
          value: `${position.coords.latitude} ${position.coords.longitude}`,
        });
      },
      () => {
        // Handle error case here
        console.log("Unable to get current location");
        reject();
      }
    );
  });
};

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  // const [initialLocation, setInitialLocation] = useState({
  //   label: "Little Creek, US",
  //   value: "36.9534 -76.243",
  // });
  const [initialLocation, setInitialLocation] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleOnSearchChange = (searchData = initialLocation) => {
    // console.log(searchData);
    setIsLoading(true);
    const [lat, lon] = searchData.value.split(" ");

    // fetch weather data dynamically
    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=imperial`
    );
    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=imperial`
    );

    // Show reticulating splines message
    // const notification = toast.loading("Reticulating Splines...", {
    //   autoClose: 2000,
    // })

    toast("Reticulating Splines 🦄", {
      position: "bottom-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

    // ** The order is important here, because the response we get will be in that order
    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        // use a spread operator to create new object for both
        setCurrentWeather({ city: searchData.label, ...weatherResponse }); // using searchData as a prop
        setForecast({ city: searchData.label, ...forecastResponse }); // using searchData as a prop
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
      });
  };

  // useEffect(() => {
  //   // Load intial location weather data
  //   handleOnSearchChange(initialLocation);
  // }, []);

  useEffect(() => {
    // Load initial location weather data
    if (!initialLocation) {
      getCurrentLocation().then((location) => setInitialLocation(location));
    } else {
      handleOnSearchChange(initialLocation);
    }
  }, [initialLocation]);

  //   SEARCH CURRENT WEATHER & (ALL) FORECAST API
  // console.log(currentWeather);
  console.log(forecast);

  return (
    <div className="container">
      <h2 className="title">Hourly Weather Forecast</h2>
      <p>
        5-day weather report using OpenWeather API <br />Limited to surrounding
        areas. <a href="https://joeybonneville.com/weather/pacific">Click here for Pacific Time</a>
      </p>
      {/* <Search onSearchChange={handleOnSearchChange} /> */}
      {currentWeather && <CurrentWeather data={currentWeather} />}
      {forecast && <Forecast data={forecast} />}
      {isLoading && (
        <div>
          <ToastContainer
            position="bottom-center"
            autoClose={1000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss={false}
            draggable
            pauseOnHover
            theme="light"
          />
        </div>
      )}
    </div>
  );
}

export default App;
