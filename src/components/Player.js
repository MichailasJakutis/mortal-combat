








function Player({ getHp, getXp}) {




console.log(getHp)

  return (
    <div className='container'>

    <div>
      <img className='img' src='https://i.pinimg.com/736x/83/b8/8a/83b88afaf5557c053412ab699b6d3db7.jpg' alt='' />
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
