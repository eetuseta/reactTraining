var React = require('react');

var About = (props) => {
  return(
    <div>
      <h1 className="text-center">About app</h1>
      <p>
        This app finds you temperature on given location. It is built on React
        to train myself on react.js
      </p>
      <p>
        Here are some of the toos used:
      </p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">React</a> - This was the
            JavaScript framework.
        </li>
        <li>
          <a href="http://openweathermap.org">Open weather map</a> - I used this
            to search weather data from city names.
        </li>
      </ul>
    </div>
  )
};
module.exports = About;
