import "./styles.css";
import React from "react";
import { createContext, useContext } from "react";

export const nameContext = createContext("apple");

export function ProviderComponent(props) {
  // guts of provider setup would go here
  return (
    <nameContext.Provider value={props.name}>
      {props.children}
    </nameContext.Provider>
  );
}

export function ConsumerComponent() {
  return (
    // give a name to the context var and use it:
    <nameContext.Consumer>
      {(providerVar) => <h1>tag way {providerVar}</h1>}
    </nameContext.Consumer>
  );
}

export function ConsumerComponent2() {
  // give a name to the context var and use it:
  const providerVar = useContext(nameContext);
  return <h1>hook way {providerVar}</h1>;
}

export default function App() {
  return (
    <>
      <ProviderComponent name="banana">
        <ConsumerComponent />
        <ConsumerComponent2 />
      </ProviderComponent>

      <ConsumerComponent />
    </>
  );
}
