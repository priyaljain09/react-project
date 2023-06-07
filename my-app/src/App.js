import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
    <center>
      <div className="head">
    <h1 classname="heading">Seven Wonder's Of The World</h1></div>
    <img src="7wonders.jpg" className="places" usemap="#imagemap"/>
    <map name="imagemap">
      <area shape="rect" coords="6,5,485,202" alt="tajmahal" href="#tajmahal"></area>
      <area shape="rect" coords="506,9,739,200" alt="petra" href="#petra"></area>
      <area shape="rect" coords="7,217,239,339" alt="colosseuem" href="#colosseum"></area>
      <area shape="rect" coords="257,220,490,349" alt="chichen itza" href="#chichen"></area>
      <area shape="rect" coords="505,215,737,351" alt="chirst the redeemer" href="#chirst"></area>
      <area shape="rect" coords="6,363,248,554" alt="machu pichu" href="#machu"></area>
      <area shape="rect" coords="256,367,736,550" alt="china wall" href="#chinawall"></area>
    </map>

    </center>
    <div className="box">
    <h2 id="tajmahal">Taj Mahal</h2>
    <p>The Taj Mahal is widely considered one of the most beautiful buildings ever created. The exquisite marble structure in Agra, India, is a mausoleum, 
      an enduring monument to the love of a husband for his favorite wife. It's also an eternal testament to the artistic and scientific accomplishments of
       a wealthy empire.</p>
    <center><img src="taj.jpg" className="wonder"/></center>
    </div>

    <div className="box">
    <h2 id="petra">Petra</h2>
    <p>Renowned for its charm and ancient cultural heritage, Petra marks the achievement of an impressive civilization, the Nabataean Arabs, who perfectly 
      carved the city into its mountains.</p>
    <center><img src="petra.jpg" className="wonder"/></center>
    </div>

    <div className="box">
    <h2 id="chinawall">Great Wall of China</h2>
    <p>The Great Wall of China became a UNESCO World Heritage Site in December 1987. The wall is the longest man made structure in the world, with a total 
      length of about 13170.7 mi or 21196.18 km. Made over the course of hundreds of years, the wall was built by over 6 different Chinese dynasties, and 
      is over 2,300 years old.</p>
    <center> <img src="greatwall.jpg" className="wonder"/></center>
     </div>

    <div className="box"> 
    <h2 id="colosseum">Colosseum</h2>
    <p>It is the largest ancient amphitheatre ever built, and is still the largest standing amphitheatre in the world, despite its age. Construction began 
      under the emperor Vespasian ( r. 69–79 AD) in 72 and was completed in 80 AD under his successor and heir, Titus ( r. 79–81).</p>
    <center><img src="colosseum.jpg" className="wonder"/></center>
    </div>

    <div className="box">
    <h2 id="chichen">Chichen Itza</h2>
    <p>As one of the largest and best-preserved archaeological sites in the world, Chichen Itza is home to a myriad of ancient Mayan marvels and rich cultural 
      histories cherished by travelers across the globe.
    </p>
    <center><img src="chichen.jpg" className="wonder"/></center>
    </div>

    <div className="box">
    <h2 id="chirst">Chirst the Redeemer</h2>
    <p>It's one of the largest statues of Jesus and the tallest art deco statue in the world. Christ the Redeemer reaches a height of 30 metres and boasts an 
      arm span of 28 metres.
    </p>
    <center><img src="chirst.jpg" className="wonder"/></center>
    </div>

    <div className="box">
    <h2 id="machu">Machu Pichu</h2>
    <p>More than 7,000 feet above sea level in the Andes Mountains, Machu Picchu is the most visited tourist destination in Peru. A symbol of the Incan Empire 
      and built around 1450AD, Machu Picchu was designated a UNESCO World Heritage Site in 1983 and was named one of the New Seven Wonders of the World in 2007.
      </p>
    <center><img src="machu.jpg" className="wonder"/></center>
    </div>
  
    
</>
    /*
   <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>*/
  );
}

export default App;
