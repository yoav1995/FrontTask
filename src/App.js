//import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import AudioStripe from './ChannelStripe.js';
import audio1 from './Loop files/_tambourine_shake_higher.mp3';
import audio2 from './Loop files/ALL TRACK.mp3';
import audio3 from './Loop files/B VOC.mp3';
import audio4 from './Loop files/DRUMS.mp3';
import audio5 from './Loop files/HE HE VOC.mp3';
import audio6 from './Loop files/HIGH VOC.mp3';
import audio7 from './Loop files/JIBRISH.mp3';
import audio8 from './Loop files/LEAD 1.mp3';
import audio9 from './Loop files/UUHO VOC.mp3';



  // Function to generate a random color
  const generateRandomColor = () => {
    // Generate random values for RGB components
    const r = Math.floor(Math.random() * 400);
    const g = Math.floor(Math.random() * 400);
    const b = Math.floor(Math.random() * 400);
  
//     // Construct the RGB color string
    const color = `rgb(${r},${g},${b})`;
  
    return color;
};

const colors = [generateRandomColor(), generateRandomColor(), generateRandomColor(), generateRandomColor(),generateRandomColor(),generateRandomColor(),generateRandomColor(),generateRandomColor(),generateRandomColor()];
const files = [audio1,audio2,audio3,audio4,audio5,audio6,audio7,audio8,audio9];


function App() {
	const [play, setPlay] = useState(false); // use state for play button
	const [loop, setLoop] = useState(false); // use state for loop button

	const togglePlay = () => setPlay((p) => !p);
  	const toggleLoop = () => setLoop((l) => !l);


	return (
		<>
			{files.map((file, index) => (
				<AudioStripe
					key={index}
					color={colors[index]}
					file={file}
					type= 'audio'
					isPlay={play}
					isLoop={loop}
				/>
			))}
			<button onClick={togglePlay}>{play ? 'Stop' : 'Play'}</button>
      <button onClick={toggleLoop}>{loop ? 'unLoop' : 'loop'}</button>
		</>
	);
}

export default App;
