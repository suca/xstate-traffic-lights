import { useState, useEffect } from 'react';

export const useStateMachine = (machine) => {
  const [state, setState] = useState(machine.value);
  
  useEffect(() => {
    machine.initial && setState(machine.initial);
  }, [machine.initial]);

  function dispatch(transition) {
    const { value: nextState } = machine.transition(state, transition);
    setState(nextState);
  }

  return { state, dispatch };
}
