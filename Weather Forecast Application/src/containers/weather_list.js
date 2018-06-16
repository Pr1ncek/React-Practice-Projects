import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Chart from "../components/chart";
import GoogleMap from "../components/google_map"

class WeatherList extends Component {
  constructor(props) {
    super(props);
  }

  renderWeather(cityData) {

    if(!cityData){
        return;
    }
    
    const name = cityData.city.name;
    const temps = cityData.list.map(weather => weather.main.temp);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);
    // const longitude = cityData.city.coord.lon;
    // const latitude = cityData.city.coord.lat;
    const { lon, lat } = cityData.city.coord;

    return (
      <tr key={name}>
        <td>
            <GoogleMap lon={lon} lat={lat}></GoogleMap>
        </td>
        <td>
          <Chart data={temps} color="red" units="F"/>
        </td>
        <td>
          <Chart data={pressures} color="black" units="hPa"/>
        </td>
        <td>
          <Chart data={humidities} color="blue" units="%"/>
        </td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (F)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>{this.props.weather.map(this.renderWeather)}</tbody>
      </table>
    );
  }
}

// function mapStateToProps(state){
//     return {
//         weather: state.weather
//     }
// }

function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);