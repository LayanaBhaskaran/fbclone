
import './App.css';
import Registration from './components/Registration';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Fbheader from './components/Fbheader';
import Side_Bar from './components/Side_Bar';
import Feed from './components/Feed';
import Widges from './components/Widges';
import Login from './components/Login';

function App() {
  const user = null;
  return (
  

      <div className="app"> 
      {user?(<Registration/>):
      <>
       <Fbheader/>
        <div className="app_body">
          <Side_Bar/>
          <Feed/>
          <Widges/>
        </div>
      </>
      }
       
      </div>


  );
}

export default App;
