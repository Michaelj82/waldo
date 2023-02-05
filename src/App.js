import writeData from "./firebase";
import uniqid from "uniqid";

function App() {
  return (
    <div>
      <button onClick={function(){
        writeData(uniqid(), 'asdf', '3.4 seconds', 'forest')
      }}>Write</button>
      bruh
    </div>
  );
}

export default App;
