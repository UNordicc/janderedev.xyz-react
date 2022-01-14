import './fonts.css';
import Greeting from './main_page/Greeting';
import Navbar from './navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Greeting />
      <div style={{ "height": "100vh" }}></div>
    </div>
  );
}

export default App;
