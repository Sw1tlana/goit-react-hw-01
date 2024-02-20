import Profile from './components/Profile';
import userData from './userData.json';
import './App.css';

function App() {
  return ( 
  <div>
    <Profile
     username={userData.username}
     tag={userData.tag}
     location={userData.location}
     avatar={userData.avatar}
     stats={userData.stats}/>
  </div>
  );    
}  
export default App
