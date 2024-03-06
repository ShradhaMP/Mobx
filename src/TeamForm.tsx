import { observer } from "mobx-react"
import { useState } from "react"
import Athelete from "./Athelete"

type props={
       athelete:Athelete
}

const TeamForm = ({athelete}:props) => {
       const [team,setTeam] = useState<string>("")
  return (
    <>
      <input type="text" placeholder="Team name..." onChange={(e)=>setTeam(e.target.value)} />
      <button type="button" onClick={()=>athelete.tradePlayer(team)}>Trade</button>
    </>
  )
}

export default observer(TeamForm)

