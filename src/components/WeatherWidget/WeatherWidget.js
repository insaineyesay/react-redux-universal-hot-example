import React, {Component} from 'react';

export default class WeatherWidget extends Component {

  componentDidMount() {
    this.pullData();
  }

  pullData() {
    const httpRequest = new XMLHttpRequest();
    httpRequest.open(
      'GET',
      'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22virginia%20beach%2C%20va%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys',
      true
    );
    if (httpRequest.status === 200) {
      console.log('yay');
    }
  }

  render() {
    return (
              <div className="wtfs">
                <p>This is the integrations area</p>
              </div>
          );
  }
}
