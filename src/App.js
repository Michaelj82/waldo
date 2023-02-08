import writeData from "./firebase";
import ImageMagnifier from "./imagemagnifyer";
import ImageMap from "./ImageMap";

import waldobeach from './images/waldobeach.jpg'

const zoomprops = {width:160, height: 160, zoomWidth: 400, img:waldobeach}

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
