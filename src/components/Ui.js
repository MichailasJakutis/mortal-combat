import { useState } from "react"
import potion from "./potion.png"










function Ui({ getG, getK, getL, heal }) {


  const [getPopup, setPopup] = useState("shopWrapper ")
  

  const pop = () => { setPopup(getPopup + "popup") }
  const close = () => { setPopup("shopWrapper ") }
  


  return (
    <div>
      <div className='ui'>
        <p className='uiInfo' style={{ color: "goldenrod" }}>Gold: {getG}</p>
        <p className='uiInfo'>Defeated: {getK} </p>
        <p className='uiInfo'>Level: {getL} </p>
        <button className='btnInv ' onClick={pop}>Shop</button>
      </div>

      <div className={getPopup}>
        <h5>Shop</h5>
        <div>
          <img className="potion" onClick={heal} src={potion} alt='potion' />
        </div>
        <button className='popupBtn' onClick={close}>exit</button>
      </div>
    </div>
  )
}

export default Ui
