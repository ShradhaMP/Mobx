import { observer } from "mobx-react"
import Athelete from "./Athelete"
import TeamForm from "./TeamForm";
import {useTeamStore } from "./TeamStore";

const Roster = () => {

       const {players} = useTeamStore()
  return (
    <table>
      <tr>
       <th>Name</th>
       <th>Age</th>
       <th>Teams</th>
       <th>Trade Form</th>
       <th>Is it their birthday</th>
      </tr>
      {players.map((athelte:Athelete)=>{
       return (
              <tr key={athelte.name}>
                     <td>{athelte.name}</td>
                     <td>{athelte.age}</td>
                     <td>{athelte.teamHistory}</td>
                     <td><TeamForm athelete={athelte}/></td>
                     <td>
                            <button
                                   type="button"
                                   style={{width:'100%'}}
                                   onClick={()=>athelte.wishHappyBirthday()}
                            >
                                   Wish happy birthday💕
                            </button>
                     </td>
              </tr>
       )
      })}
    </table>
  )
}

export default observer(Roster) //To know that this component is listening to the observables
