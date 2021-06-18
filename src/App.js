// import logo from './logo.svg';
import './App.css';
import Button from "./Components/Button"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={"https://www.noisytrumpet.com/wp-content/uploads/2019/02/NT-Logo.png"} className="App-logo" alt="logo" />
        <h1>Noisy Trumpet Take Home Dev Test</h1>
        <h2>Assignment:</h2>
        <p>As a developer you are asked to make a button component with some different properties. </p>
        <b><p>Acceptance Criteria:</p></b>
        <ul>
          <li>
            'text' propType to handle the button text
          </li>
          <li>
            'isLink' propType to let button know if it's a link or not.
          </li>
          <li>
            a 'to' propType if it is in fact a link
          </li>
          <li>
            an 'onCLick' function prop to handle if it's not a link.
          </li>
          <li>
            'color' prop that maps to color of the font
          </li>
          <li>
            'backgroundColor' prop that maps to the background color of the button
          </li>
          <li>
            Display buttons here below the instructions as either a link going to google.com, or as a button that throws an alert when clicked.
          </li>
        </ul>
        <p>The only styling you have to worry about is that the font has to use the google font 'Montserrat', that and the color prop. Give the button padding: 10px 20px; just so it has some breathing room.</p>
        <p>
          The main thing we want is for the propTypes to work. I've gotten the component started with just console logging the propTypes as show below in the code:
        </p>
        {/* Link Version */}
        <Button to={'google.com'} isLink text={'link to google'} color="white" backgroundColor="red" />
        {/* Button Version */}
        {/* <Button onClick={} isLink={false} text="any" color="red" backgroundColor="black" /> */}


      </header>
    </div>
  );
}

export default App;
