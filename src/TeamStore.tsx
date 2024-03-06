import { makeAutoObservable } from "mobx";
import Athelete from "./Athelete";
import React, { useContext, useRef } from "react";

export default class TeamStore{
       constructor(players:Athelete[]){
              this.players=players
              makeAutoObservable(this)
       }

       state:string="";
       setState=(state:string)=>{
              this.state=state
       }

       mascot:string="New York";
       setMascot = (mascot:string)=>{
              this.mascot=mascot
       }

       players:Athelete[] =[];

       get teamName():string{
              return `${this.state} ${this.mascot}`
       }

       get totalYeralyCost():number{
              return this.players.reduce(
                     (totalSalary,currentAthelete) => totalSalary + currentAthelete.salary,0
              )
       }

       addPlayer=(player:Athelete)=>{
              this.players.push(player)
       }
}

//own properties become observable
//getters --> computed
//setters --> action 
//function --> autoAction

const TeamStoreContext = React.createContext<TeamStore>(null as unknown as TeamStore)

export const useTeamStore =()=> useContext(TeamStoreContext)

type props={
       children:React.ReactNode,
       players:Athelete[]
}
export function TeamStoreProvider({children,players}:props){
       const store = useRef(new TeamStore(players))

       return (
              <TeamStoreContext.Provider value={store.current}>
                     {children}
              </TeamStoreContext.Provider>
       )
}