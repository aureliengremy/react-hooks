import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';
import UseContextSection from './components/UseContextSection';
import UseEffectSection from './components/UseEffectSection';
import UseStateSection from './components/UseStateSection';
import UseReducerSection from './components/UseReducerSection';
import UseCallbackSection from './components/UseCallbackSection';
import UseMemoSection from './components/UseMemoSection';
import UseRefSection from './components/UseRefSection';

function App() {

  const handleShow = (show, idName, setShow) => {
    const element = document.getElementById(idName)
    console.log(`On handleShow : ${idName}`)
    if(show) {
      element.classList.remove('show')
      element.classList.add('hide')
      setShow(false)
    } else {
      element.classList.add('show')
      element.classList.remove('hide')
      setShow(true)
    }
  }

  return (
    <div className="App">
      <div className="container my-5 mx-auto">
        <UseStateSection handleShow={handleShow}/>
          <hr />
        <UseEffectSection handleShow={handleShow}/>
          <hr />
        <UseContextSection handleShow={handleShow}/>
          <hr />
        <UseReducerSection handleShow={handleShow}/>
          <hr />
        <UseCallbackSection handleShow={handleShow} />
          <hr />
        <UseMemoSection handleShow={handleShow}/>
          <hr />
        <UseRefSection handleShow={handleShow}/>
      </div>
    </div>
  );
}

export default App;
