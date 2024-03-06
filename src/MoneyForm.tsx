import { action, computed, observable, toJS } from "mobx";
import { observer } from "mobx-react";
import { useState } from "react";
import { useTeamStore } from "./TeamStore";
import Athelete from "./Athelete";

// type formState={
//        years:number
//        salary:number
// }

// const formState:formState=observable({
//        years:0,
//        salary:0
// })

type formState = {
  name: string;
  age: number;
  salary: number;
};

const initialState: formState = {
  name: "",
  age: 0,
  salary: 0,
};

let formState: formState = observable({
  name: "",
  age: 0,
  salary: 0,
});

//This is the derivation part
// const calculateState = action((formState:formState)=>{
//        formState.total = formState.salary * formState.years
// })

//Computed values --> Changes automatically with change in state
//const totalValue = computed(()=>formState.salary*formState.years)
//console.log(toJS(totalValue)); //This totalValue will be in the form of observable to get its value we use toJS

const MoneyForm = () => {
  //Without using the mobx
  // const [years,setYears] = useState<number>(0)
  // const [salary,setSalary] = useState<number>(0)
  // const [total,setTotal] = useState<number>(0)

  const { totalYeralyCost, addPlayer } = useTeamStore();
  return (
    <div style={{ display: "flex", flexDirection: "column", width: "20%" }}>
      <h1 style={{ marginBottom: 0 }}>Money Talks</h1>
      {/* <>Total:{toJS(totalValue)}</> */}
      <>Total:{totalYeralyCost} Million</>
      {/* <input type="text" placeholder="Years..." style={{height:"40px"}}  onChange={action((e)=>formState.years=(Number(e.target.value)))}/> */}
      <input
        type="text"
        placeholder="Name..."
        style={{ height: "40px" }}
        onChange={action((e) => (formState.name = e.target.value))}
      />
      <input
        type="text"
        placeholder="Age..."
        style={{ height: "40px" }}
        onChange={action((e) => (formState.age = Number(e.target.value)))}
      />
      <input
        type="text"
        placeholder="Salary..."
        style={{ height: "40px" }}
        onChange={action((e) => (formState.salary = Number(e.target.value)))}
      />

      {/* We dont require the button as we are using computed value that changes as the state changes so no other action is needed */}
      {/* <button onClick={()=>calculateState(formState)}>Calculate Total</button> */}

      <button
        type="button"
        onClick={action((e) => {
          addPlayer(
            new Athelete(formState.name, formState.age, formState.salary)
          )
          formState = initialState;
        })}
      >
        Add Player
      </button>
    </div>
  );
};

export default observer(MoneyForm);
