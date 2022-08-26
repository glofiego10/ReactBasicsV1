import logo from './logo.svg';

import './App.css';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';

import Eventos from './componets/Eventos'

function App() {

  // let estaciones=["Primavera","Verano","Otoño"]
  return (
    <div className="App">
      <header className="App-header">
        <section>
        <img src={logo} className="App-logo" alt="logo" />
       
       
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        
        
        {/* <ul>
          {estaciones.map((el,index)=>(
          <li key={index}>
            {el}
          </li>
          ))}
        </ul> */}
        {/*        
        <Propiedades 
        cadena="Esto es una cadena" 
        numero={19} 
        boolenao={true} 
        arreglo={[1,2,3]}
        objeto={{nombre:"Jon",correo:"Glofiego@gmail.com"}}
        funcion={(num => num*num)}
        componenteReact={<Componente/>}
        elementoReact={<i>Esto es un elemento React</i>}
        /> */}
       <hr></hr>
          <Eventos></Eventos>

        </section>

        
          <LiteYouTubeEmbed
            id="L2vS_050c-M" // Default none, id of the video or playlist
            adNetwork={true} // Default true, to preconnect or not to doubleclick addresses called by YouTube iframe (the adnetwork from Google)
            playlist={false} // Use  true when your ID be from a playlist
            poster="hqdefault" // Defines the image size to call on first render as poster image. Possible values are "default","mqdefault",  "hqdefault", "sddefault" and "maxresdefault". Default value for this prop is "hqdefault". Please be aware that "sddefault" and "maxresdefault", high resolution images are not always avaialble for every video. See: https://stackoverflow.com/questions/2068344/how-do-i-get-a-youtube-video-thumbnail-from-the-youtube-api
            title="YouTube Embed" // a11y, always provide a title for iFrames: https://dequeuniversity.com/tips/provide-iframe-titles Help the web be accessible ;)
            noCookie={true} //Default false, connect to YouTube via the Privacy-Enhanced Mode using https://www.youtube-nocookie.com
          />
      </header>
      
    </div>
  );
}

export default App;
