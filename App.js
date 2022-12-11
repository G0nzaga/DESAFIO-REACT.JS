import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import Rota from "./src/routes/Rota";


export default function App(){
  return (
  <NavigationContainer>
    <Rota></Rota>
  </NavigationContainer>

  )
}