import React, {useRef, useState, useEffect } from 'react'

const Landing = () => {

    const [btn, setBtn] = useState(false);
    console.log(btn);

    const refWolverine = useRef(null);
    console.log(refWolverine);

    useEffect(() => {

        refWolverine.current.classList.add("startingImg");

        setTimeout(() => {
            refWolverine.current.classList.remove("startingImg");
            setBtn(true)
        }, 1500);
    }, [])

    const setLeftImg = () => {
        refWolverine.current.classList.add("leftImg");
    }
    const setRightImg = () => {
        refWolverine.current.classList.add("rightImg");
    }
    const clearImg = () => {
        if(refWolverine.current.classList.contains("leftImg")) {
            refWolverine.current.classList.remove("leftImg");
        } else if(refWolverine.current.classList.contains("rightImg")) {
            refWolverine.current.classList.remove("rightImg");
        }
    }
    

    const displayBtn = btn && (
        <>
           <div onMouseOver={setLeftImg} onMouseOut={clearImg} className="leftBox">
                <button className="btn-welcome">Inscription</button>
            </div>
            <div onMouseOver={setRightImg} onMouseOut={clearImg} className="rightBox">
                <button className="btn-welcome">Connexion</button>
            </div>
        </>
    )


    return (
        <main ref={refWolverine} className="welcomePage">

        {displayBtn }

        </main>
    )
}

export default Landing;
