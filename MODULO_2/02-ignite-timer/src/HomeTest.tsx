import { createContext, useContext, useState } from 'react';

const CyclesContext = createContext({} as any);

function NewCycleForm() {
  let { activeCycle, setActiveCycle } = useContext(CyclesContext);

  return (
    <h1>
      NewCycleForm: {activeCycle}
      <button
        onClick={() => {
          setActiveCycle(activeCycle + 2);
        }}
      >
        Alterar ciclo ativo
      </button>
    </h1>
  );
}

function Countdown() {
  const { activeCycle } = useContext(CyclesContext);

  return <h1>Countdown: {activeCycle}</h1>;
}

export function Home() {
  const [activeCycle, setActiveCycle] = useState(0);

  return (
    <CyclesContext.Provider value={{ activeCycle, setActiveCycle }}>
      <div>
        <NewCycleForm />
        <Countdown />
      </div>
    </CyclesContext.Provider>
  );
}
