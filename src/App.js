import logo from './logo.svg';
import './App.css';
import Header from './Component/Header'
import Footer from './Component/Footer'
import Contents from './Component/Contents/Contents'

function App() {
  return (
    <div className="App">
      <Header />
      <Contents />
      <Footer />
    </div>
  );
}

export default App;
