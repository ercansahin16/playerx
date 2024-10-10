import { useState, useRef } from 'react';
import './App.css';
import { muzikListesi } from '../public/components/data';

function App() {
  const [currentTrack, setCurrentTrack] = useState(null);
  const audioPlayerRef = useRef(null); 

  const muzikCal = (muzikDosyasi) => {
    const audioPlayer = audioPlayerRef.current;
    if (audioPlayer) {
      audioPlayer.src = muzikDosyasi;
      audioPlayer.play();
      setCurrentTrack(muzikDosyasi);
    }
  };

  return (
    <>
      <div className="container">
        <h3>Müzik Çalar</h3>
        <audio id="audioPlayer" controls ref={audioPlayerRef}>
          <source src={muzikListesi[0].dosya} type="audio/mpeg" />
        </audio>
        <ul className="ul">
          {muzikListesi.map((muzik) => (
            <li key={muzik.id} className="li">
              <button
                className="buton"
                onClick={() => muzikCal(muzik.dosya)}
              >
                {muzik.ad} <small className="small">Çal</small>
              </button>
            </li>
          ))}
        </ul>
      </div>
      <footer>esahin❤️</footer>
    </>
  );
}

export default App;
