import { useState } from "react"
import potion from "./potion.png"
import sword from './sword.png'
import bow from './bow.png'
import staff from './staff.png'










function Ui({ getG, getK, getL, heal, buySword, buyBow, buyStaff }) {


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
        <div className="d-flex j-c">
          <div>
            <img className="potion" onClick={heal} src={potion} alt='potion' />
            <p style={{fontSize: "12px"}}>Cost: 50</p>
          </div>
          <div>
            <img className="weapon" onClick={buySword} src={sword} alt='sword' />
            <p style={{fontSize: "12px"}}>Cost: 100</p>
          </div>
          <div>
            <img className="weapon" onClick={buyBow} src={bow} alt='bow' />
            <p style={{fontSize: "12px"}}>Cost: 100</p>
          </div>
          <div>
            <img className="weapon" onClick={buyStaff} src={staff} alt='staff' />
            <p style={{fontSize: "12px"}}>Cost: 100</p>
          </div>

        </div>
        <button className='popupBtn' onClick={close}>exit</button>
      </div>
    </div>
  )
}

export default Ui
