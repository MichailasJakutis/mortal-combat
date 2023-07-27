import React, { useState } from 'react'
import Player from './Player'
import Enemy from './Enemy'
import Ui from './Ui';

const enemies = ['https://i.pinimg.com/originals/29/32/e1/2932e1668db1bbccc0e4d161f093efad.png',
  'https://i.pinimg.com/236x/88/d4/11/88d4119fd76ed8feb85c55e573959b4a--monster-art-fantasy-monster.jpg',
  'https://i.pinimg.com/236x/56/dc/47/56dc4781c421ca452d25024919ca046b.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT08J8mT5pV2EHHeaSVbHtaVyuuPKxSS-GSgNqUpR2it34lQ6AzXGkqNb3q6tqMENhucj0&usqp=CAU',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHI1119aiQZ9c-NEReZxjhhkTz-fA5EJ5IK8iCVkTUVw9JKkpRElcpC8ESuqOejkIhXnQ&usqp=CAU',
  'https://www.fightersgeneration.com/np5/kof12/ralf-12s.gif',
  'https://wiki.supercombo.gg/images/b/b5/Chin98_stance.gif',
  'https://wiki.supercombo.gg/images/d/dd/Shermie98_stance.gif',]


function Attack() {


  let [getPlayerHp, setPlayerHp] = useState(100)
  let [getEnemyHp, setEnemyHp] = useState(100)
  let [getGold, setGold] = useState(0)
  let [getKill, setKill] = useState(0)
  let [getLvl, setLvl] = useState(0)
  let [getExp, setExp] = useState(0)
  let [getEnemy, setEnemy] = useState(enemies[1])

  const rnd = num => Math.round(Math.random() * num)


  const hit = () => {

    setPlayerHp(getPlayerHp - rnd(5))
    setEnemyHp(getEnemyHp - rnd(10))
    setGold(getGold + rnd(8))
  
    setExp(getExp + 10)
    if (getExp === 100) {
      setExp(getExp = 0)
      setLvl(getLvl + 1)
    }
    if (getEnemyHp <= 0) {
      setEnemy(enemies[rnd(enemies.length - 1)])
      setKill(getKill + 1)
      setEnemyHp(getEnemyHp = 100)
    }
   

  }


 let heal = () => {
  if(getGold >= 50){
    setGold(getGold - 50)
    setPlayerHp(getPlayerHp = 100)
  }
 }


console.log(getEnemy)
  return (

    <div className='App'>

      <Ui getG={getGold} getK={getKill} getL={getLvl} heal={heal} />
      <div className='d-flex spc-a al-c'>
        <Player getHp={getPlayerHp} getXp={getExp} />

        <button className='btnAttack' onClick={hit} >Attack</button>
        <Enemy getHp={getEnemyHp} getEnemy={getEnemy} />
        
      </div>
    </div>
  )
}

export default Attack