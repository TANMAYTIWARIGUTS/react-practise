
import './App.css';

const App = () => {

  const name='John';
  const isNameShowing=false;

  return (
    <div className="App">
      <h1>{isNameShowing?(
        <>
        hello
        123
        </>):(
         <>
        <p>check</p>
          <p>check2</p>
        </>
          
          )}, fetching info...</h1>
    </div>
  );
}

export default App;
