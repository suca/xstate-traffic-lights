import React from "react";
import TrafficLight from "react-trafficlight";
import { Machine } from "xstate";
import { stateMap } from "./state";
import { useStateMachine } from "./useStateMachine";


export default function App() {
  const trafficLightMachine = Machine(stateMap);
  const { state, dispatch } = useStateMachine(trafficLightMachine);

  return (
    <div className="App">
      <div>
        <TrafficLight
          RedOn={state === "red"}
          YellowOn={state === "yellow"}
          GreenOn={state === "green"}
        />
      </div>

      <button onClick={() => dispatch("NEXT")}>Next light</button>
    </div>
  );
}
