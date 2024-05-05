//import React, { useEffect, useState } from 'react';
import { useRef, useEffect, useState } from 'react';



export default function AudioStripe({ color, file, type, isPlay, isLoop }) {
	const ref = useRef();
	const [mute, setMute] = useState(false);
	const [height, setHeight] = useState('3rem');
	const [width, setWidth] = useState('80vw');

	// use effect for the play function
	useEffect(() => {
		if (isPlay) {
			ref?.current?.play();
			setHeight('4rem');
			setWidth('85vw')
			if(mute)
			{
				setHeight('3rem');
			}
		} else {
			ref?.current?.pause();
			setHeight('3rem');
			setWidth('80vw')
		}
	}, [isPlay,mute]);



	
	const toggleMute = () => setMute((m) => !m);
		

	return (
		<div
			className='audio-stripe'
			style={{
				backgroundColor: color,
				width: width,
				height: height,
			}}
		>
			<audio
				ref={ref}
				src={file}
				type={type}
				muted={mute}
				loop={isLoop}
			></audio>
			<button
				className='btn-mute'
				onClick={toggleMute}
			>
				{mute ? 'Unmute' : 'Mute'}
			</button>
			
			{/* cursor to display if the specific stripe is playing */}
				<h7> {isPlay&&!mute ? 'IM ON PLAY' : 'IM NOT ON PLAY'} </h7> 
		
		</div>
	);
}


