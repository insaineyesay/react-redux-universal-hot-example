import React, {Component} from 'react';
// const httpRequest = new XMLHttpRequest();

const defineResponse = (query) => {
  console.log(query);
  const response = query;
  console.log(response);
  return response;
};
export default class WeatherWidget extends Component {

  componentDidMount() {
    this.pullData();
  }


  pullData = function pullData() {
    const httpRequest = new XMLHttpRequest();
    let thing = {};
    httpRequest.onreadystatechange = function() {
      if (httpRequest.readyState === XMLHttpRequest.DONE) {
        if (httpRequest.status === 200) {
          console.log(JSON.parse(httpRequest.responseText));
          thing = JSON.parse(httpRequest.responseText);
          console.log(thing);
          defineResponse(thing);

          console.log('wtf');
        } else {
          console.error(httpRequest.responseText);
        }
        return thing;
      }
    };
    httpRequest.open(
      'GET',
      'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22virginia%20beach%2C%20va%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys',
      true
    );

    httpRequest.send();
    console.log(httpRequest.status);
    return thing;
  }


  alertContents = function alertContents() {

  }

  render() {
      return (
          <div className="weather">
            <p>{this.pullData()}</p>
            <p>This is the integrations area</p>
          </div>
      );
  }


}
WeatherWidget.propTypes = {
  url: React.PropTypes.string.isRequired
};
