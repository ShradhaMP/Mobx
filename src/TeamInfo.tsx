import { observer } from 'mobx-react'
import { useTeamStore } from './TeamStore'

const TeamInfo = () => {
       const {teamName,setMascot} = useTeamStore()
  return (
    <>
      <h1 style={{marginBottom:1}}>Team:{teamName}</h1>
      <input type="text" placeholder='Change Mascot...' onChange={(e)=>setMascot(e.target.value)} style={{marginBottom:8}}/>
      {" "}
    </>
  )
}

export default observer(TeamInfo)
