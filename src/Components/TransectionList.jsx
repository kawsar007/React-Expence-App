import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";
import Transection from "./Transection";

function TransectionList() {
  const { transections } = useContext(GlobalContext);
  return (
    <div>
      <h3>History</h3>
      <ul id="list" className="list">
      {transections.map(transection => (<Transection transection={transection}/>) )}
      </ul>
    </div>
  );
}

export default TransectionList;
