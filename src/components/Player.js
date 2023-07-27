








function Player({ getHp, getXp, getHero}) {




console.log(getHp)

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
        <button className='btnInv'>Inventory</button>
    </div>
    </div>
  )
}

export default Player
