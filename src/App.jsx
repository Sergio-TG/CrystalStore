import './index.css'
import NavBar from './components/NavBar';
import ItemListContainer from './containers/ItemListContainer';

function App() {  
  return (
    <>
    <NavBar/>
    <ItemListContainer greeting={"¡Bienvenidos a Crystal Store!"}/>
    </>
  );
}

export default App;
