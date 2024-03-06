
import './App.css'
import Athelete from './Athelete';
import MoneyForm from './MoneyForm'
import Roster from './Roster'
import TeamInfo from './TeamInfo';
import { TeamStoreProvider } from './TeamStore';



const lebronJhons = new Athelete("Lebron Jhons",32,9);
const stephenCurry = new Athelete("Stepehen Curry",37,10)

function getPlayersFromBackend():Athelete[]{
  return [lebronJhons,stephenCurry]
}

function App() {
  const players = getPlayersFromBackend()

  return (
   <>
   <TeamStoreProvider players={players}>
    <TeamInfo/>
   <Roster/>
    <MoneyForm/>
   </TeamStoreProvider>
    
   </>
  )
}

export default App
