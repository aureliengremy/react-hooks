import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';
import UseContextSection from './components/UseContextSection';
import UseEffectSection from './components/UseEffectSection';
import UseStateSection from './components/UseStateSection';
import UseReducerSection from './components/UseReducerSection';

function App() {

  return (
    <div className="App">
      <div className="container my-5 mx-auto">
        <UseStateSection/>
          <hr />
        <UseEffectSection/>
          <hr />
        <UseContextSection/>
          <hr />
        <UseReducerSection/>
      </div>
    </div>
  );
}

export default App;
