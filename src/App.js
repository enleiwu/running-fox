import Plan from './sections/Plan/Plan';
import Profile from './sections/Profile/Profile';
import Pricing from './sections/Pricing/Pricing';
import './App.css';

const App = () => (
  <div className="App">
    <div className="container">
      <Plan />
      <div className="right-col">
        <Profile />
        <Pricing />
      </div>
    </div>
  </div>
);

export default App;
