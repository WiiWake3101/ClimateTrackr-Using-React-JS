export const fetchWeatherData = async (cityName, apiKey) => {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&appid=${apiKey}&q=${cityName}`;
  
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching weather data:', error);
      throw new Error('Error fetching weather data');
    }
  };
  
  export const fetchHourlyForecastData = async (cityName, apiKey) => {
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=metric&appid=${apiKey}`;
  
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      return data.list.filter(item => item.dt_txt.includes('12:00:00'));
    } catch (error) {
      console.error('Error fetching hourly forecast:', error);
      throw new Error('Error fetching hourly forecast');
    }
  };
  