import './App.css';
import imgLogo from './image.jpg'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <h1>😍😘</h1>
          <h3>어렸을 적 강아지와 함께 찍은 사진.</h3> 
          
          <img src={imgLogo} alt='logo image' height="380" width="380"/>
          
          
          
        </p>
        
      </header>
    </div>
  );
}
export default App;

