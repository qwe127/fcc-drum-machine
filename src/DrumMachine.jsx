import React, {useState, useEffect} from "react";

function DrumMachine(){
    const letterArray = ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C',]
    const [text, setText] = useState('')
    const [animation, setAnimation] = useState('')
    
    const playSound = (text) => {
        const getAudio = document.getElementById(text.target.textContent)
        if (getAudio.paused) {
            setText(text.target.id)
            getAudio.play()
        } else {
            getAudio.pause()
            getAudio.currentTime = 0
        }
    }

    useEffect(()=> {
        document.addEventListener('keydown', (event) => {
            const key = event.key.toUpperCase()
            const getButton = document.getElementsByClassName(`${key}-button`)
            setText(getButton[0].id)
            setAnimation('press')
            if (letterArray.includes(key)){                
                const getAudio = document.getElementById(key)
                if (getAudio.paused) {
                    getAudio.play()
                    setAnimation('press-2')
                } else {getAudio.currentTime = 0}
                } else {return}
            })
    }, [])
    
    const mute = () => {
        document.querySelectorAll('audio').forEach(el => {
            el.pause()
            el.currentTime = 0});        
    }

    return(
            <div id='drum-machine'>          
                <div id='display' className="top-text">                    
                    <p>{text}</p></div>
                    <div className="buttons">                        
                        <button onClick={playSound} className='drum-pad Q-button' id='Break-1'>
                            <audio className='clip'src='/audio/Break-1.wav' id='Q' />
                        Q</button>                                    
                        <button onClick={playSound} className='drum-pad W-button' id='Break-2'>
                            <audio className='clip'src='/audio/Break-2.wav' id='W' />
                        W</button>
                        <button onClick={playSound} className='drum-pad E-button' id='Bass'>
                            <audio className='clip'src='/audio/Bass.wav' id='E' />    
                        E</button>
                        <button onClick={playSound} className='drum-pad A-button' id='Pad-1'>
                            <audio className='clip'src='/audio/Pad-1.wav' id='A' />   
                        A</button>
                        <button onClick={playSound} className='drum-pad S-button' id='Pad-2'>
                            <audio className='clip'src='/audio/Pad-2.wav' id='S' /> 
                        S</button>
                        <button onClick={playSound} className='drum-pad D-button' id='Pad-3'>
                            <audio className='clip'src='/audio/Pad-3.wav' id='D' /> 
                        D</button>
                        <button onClick={playSound} className='drum-pad Z-button' id='Perc'>
                            <audio className='clip'src='/audio/Perc.wav' id='Z' />    
                        Z</button>
                        <button onClick={playSound} className='drum-pad X-button' id='Stabs'>
                            <audio className='clip'src='/audio/Stabs.wav' id='X' />
                        X</button>
                        <button onClick={playSound} className='drum-pad C-button' id='SFX'>
                            <audio className='clip'src='/audio/SFX-1.wav' id='C' />
                        C</button>
                    </div>
                    <div className="control-buttons">
                        <button onClick={mute} id='mute'>Mute All</button>
                    </div>
            </div>
    )
}

export default DrumMachine