import React from "react";
import memesData from "../memesData";

export default function Meme() {
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })
    const [allMemesImages, setAllMemeImages] = React.useState(memesData.data.memes)

    function getMeme() {
        const randomNum = Math.floor(Math.random() * allMemesImages.length)
        const url =allMemesImages[randomNum].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage : url
        })
        )
    }
    function handleChange(event){
        setMeme(prevMeme => ({
            ...prevMeme,
            [event.target.name] : event.target.value
        }))
        console.log(meme)
    }

    return (
        <main>
            <div className="form">
                <input type="text" className="form-input" placeholder="Top text" name="topText" value={meme.topText} onChange={handleChange}/>
                <input type="text" className="form-input" placeholder="Bottom text" name="bottomText" value={meme.bottomText} onChange={handleChange}/>
                <button onClick={getMeme} className="form-btn">Get a new meme image 🖼️</button>
                <div className="meme">
                <img src={meme.randomImage} className="meme-img"></img>
                <h2 className="meme-text top">{meme.topText}</h2>
                <h2 className="meme-text bottom">{meme.bottomText}</h2>
                </div>
            </div>
        </main>
    )
}