var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
  return(
    <div>
    <h1 className="text-center">Exapmles</h1>
    <p>Here are few example locations to try out:</p>
    <ol>
      <li>
        <Link to='/?location=Helsinki'>Helsinki, Finland</Link>
      </li>
      <li>
        <Link to='/?location=Stockholm'>Stockolm Sweden</Link>
      </li>
    </ol>
    </div>
  )
}
module.exports = Examples;
