# Weather App

This is a simple weather app built with React and TypeScript that shows the current weather for a given location. The app gets data from OpenWeatherMap API and uses react-scripts for development.

## Deployment

The application has been deployed on Vercel and can be accessed at https://the-weather-mu.vercel.app/

## Features

- Shows the current temperature (max and min)
- Shows the current wind speed and direction
- Shows the current humidity

All data is shown using the metric system.

## Getting Started

1. Clone the repository to your local machine.
`git clone https://github.com/jaysusm/the-weather.git`

2. Install the dependencies
`npm install`

3. Create an account on OpenWeatherMap to get an API key.

4. Create a `.env` file in the root of your project and add your API key like this:
`REACT_APP_WEATHER_API_KEY={your_api_key}`

5. Start the development server
`npm run start`

6. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Deployment

To deploy the app, you can use `npm run build`. This will create a production-ready build in the `build` folder.

## Built With

- [React](https://reactjs.org/) - A JavaScript library for building user interfaces
- [TypeScript](https://www.typescriptlang.org/) - A typed superset of JavaScript
- [OpenWeatherMap API](https://openweathermap.org/api) - A weather data API
- [react-scripts](https://github.com/facebook/create-react-app) - A set of scripts for creating React apps with no build configuration

## Authors

- [Jesús Martín](https://github.com/jaysusm)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Acknowledgments

- [OpenWeatherMap](https://openweathermap.org/) for providing weather data API.
