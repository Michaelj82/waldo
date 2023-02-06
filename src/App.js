import writeData from "./firebase";
import ImageMap from "./ImageMap"
import waldobeach from './images/waldobeach.jpg'

function App() {
  return (
    <div>
      <button onClick={function(){
        writeData('who', '10 seconds', 'desert')
      }}>Write</button>
      bruh
      
      <ImageMap image={waldobeach}></ImageMap>

    </div>
  );
}

export default App;
