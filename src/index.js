//import ReactDOM object from the react-dom third-party library
import ReactDOM from 'react-dom/client';

import './index.css';
//if the file is a third-party library or a .js file, omit the .js.
import App from './App';

//method createRoot(), the main entry point, place where the react app gets rendered
const root = ReactDOM.createRoot(document.getElementById('root'));
//call the render() method to tell react what should be rendered in that root element <div>
root.render(<App />);
