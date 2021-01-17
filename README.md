# Time Keeper
ReactWeather is a really simple React app that utilizes Redux to manage the global state and update subscribed components accordingly based on their state changes. The app simply hits the Open Weather API to retreive the current weather conditions based on the user's current latitude and longitude, or based on a provided zip code.

# Built With
- [React JS](https://reactjs.org/)
- [Redux](https://redux.js.org/tutorials/fundamentals/part-5-ui-react)
- [Open Weather](https://openweathermap.org/)

# Usage
Simply clone this repo, run npm install, and then run npm start. If your browser doesn't automatically open, navigate to http://localhost:3000 once the server starts.

```
git clone https://github.com/ChrisPhilbin/ReactWeather.git
cd ReactWeather
npm install
npm start
```

# To Do
The Open Weather API is great for getting the current weather conditions based on either a lat/lon or a provided zip code. However it does not afford access to the current forecast for the provided location. As a result I am currently working on implementing additional actions to fetch the forecast data from NOAA's weather.gov API. In the interim, I have (somewhat selfishly) 'hard coded' the actions to simply fetch the forecast data for the Philadelphia area.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)