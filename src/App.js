import "./styles.css";
import React from "react";
import { createContext, useContext, useState } from "react";
// import { RxDatabase } from "rxdb";

export const databaseContext = createContext({
  db: null,
  isReady: false
});

export function DatabaseProviderComponent(props) {
  // guts of provider setup would go here
  const db = "apple";
  const [isReady, setReady] = useState(false);
  setTimeout(() => {
    setReady(true);
  }, 1000);
  return (
    <databaseContext.Provider value={{ db: db, isReady: isReady }}>
      {props.children}
    </databaseContext.Provider>
  );
}

export function DatabaseConsumerComponent() {
  function databaseConsumerAction(databaseObj) {
    databaseObj.isReady
      ? console.log("ok ready lets go")
      : console.log("not ready");
    return databaseObj.isReady;
  }
  return (
    // give a name to the context var and use it:
    <databaseContext.Consumer>
      {(providerVar) => databaseConsumerAction(providerVar)}
    </databaseContext.Consumer>
  );
}

export function DatabaseConsumerComponent2() {
  // give a name to the context var and use it:
  const providerVar = useContext(databaseContext);
  function databaseConsumerAction(databaseObj) {
    databaseObj.isReady
      ? console.log("ok ready lets go")
      : console.log("not ready");
    return databaseObj.isReady;
  }
  return <h1>{databaseConsumerAction(providerVar)}</h1>;
}

export default function App() {
  return (
    <>
      <DatabaseProviderComponent>
        <DatabaseConsumerComponent />
        <DatabaseConsumerComponent2 />
      </DatabaseProviderComponent>

      <DatabaseConsumerComponent />
    </>
  );
}
