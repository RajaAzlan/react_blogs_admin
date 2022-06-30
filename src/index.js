import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Routes from "./router/routes";
import './assets/scss/_main.scss';
ReactDOM.render(
  <BrowserRouter>
    <Routes/>
  </BrowserRouter>,
  document.getElementById('root')
);
