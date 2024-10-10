const [count, setCount] = useState(0)

let audioPlayer = document.getElementById('audioPlayer');

const muzikCal = (muzikDosyasi) => {
  const audioPlayer = audioPlayerRef.current; 
  if (audioPlayer) {
    audioPlayer.src = muzikDosyasi; 
    audioPlayer.play(); 
    setCurrentTrack(muzikDosyasi); 
  }
};

export {audioPlayer,muzikCal}