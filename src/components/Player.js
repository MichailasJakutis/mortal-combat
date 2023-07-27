import { useState } from "react"





function Player({ getHp, getXp, getHero, getSword, getBow, getStaff}) {

  const [getPopup, setPopup] = useState("shopWrapper ")
  const pop = () => { setPopup(getPopup + " popup") }
  const close = () => { setPopup("shopWrapper ") }


  return (
    <div className='container'>

    <div>
      <img className='img' src={getHero} alt='' />
    </div>
    <div className='statusBar'>
        <div className='hpBar' style={{width: getHp+"%"}}   ></div>
    </div>
    <div className='expStatusBar'>
        <div className='expBar' style={{width: getXp+"%"}}   ></div>
    </div>
    <div>
        <button className='btnInv' onClick={pop} >Inventory</button>
    </div>
    <div className={getPopup}>
        <h5>Inventory</h5>
        <div className="d-flex j-c">
        <div className={getSword} ></div>
        <div className={getBow}></div>
        <div className={getStaff}></div>
        </div>
        <button className='popupBtn' onClick={close}>exit</button>
    </div>
    </div>
  )
}

export default Player
