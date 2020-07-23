import React, {useState, useEffect} from 'react';
import Routes from '../router/routes';
import { Link, useHistory } from 'react-router-dom';
import '../styles/App.css';

function App() {

  const history = useHistory();
  const [path, setPath] = useState('');
  window.addEventListener('load', () => {
      if(window.location.pathname === '/contact'){
        setPath(window.location.pathname)
      }
  });

  const checkPath = () => {
      history.listen((location) => {
        setPath(location.pathname);
      })
  };

  useEffect(() => {
    checkPath();
  }, []);

  const showContact = path;
  let _contact;
  if (showContact !== '/contact') {
    _contact = (<li><Link to="/contact">Contact</Link></li>)
  }

  return (
    <div className="App">
      <div className="container">
        <nav>
          <ul>
            <li>
              <Link to="/">NewReactRouter</Link>
            </li>
          </ul>
          <ul>
            {_contact}
          </ul>
        </nav>
        <Routes />
      </div>
    </div>
  );
}

export default App;
