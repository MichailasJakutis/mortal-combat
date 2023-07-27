import React from 'react'


 

function Enemy({getHp, getEnemy}) {



  return (
    <div className='container'>

    <div>
      <img className='img' src={getEnemy} alt='' />
    </div>
    <div className='statusBar'>
        <div className='hpBar' style={{width: getHp+"%"}} ></div>
    <span>Monster Hp: {getHp}</span>
    </div>
    
    </div>
  )
}

export default Enemy
