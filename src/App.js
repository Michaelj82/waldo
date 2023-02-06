import writeData from "./firebase";
import uniqid from "uniqid";

function App() {
  return (
    <div>
      <button onClick={function(){
        writeData('who', '10 seconds', 'desert')
      }}>Write</button>
      bruh
      

    </div>
  );
}

export default App;
