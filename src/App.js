import React, { useState, useId, useReducer, useMemo, Fragment } from "react";

import Nodes from "./components/Node";
import AddNew from "./components/AddNew";

import { reducer, ADD_NODE, DELETE_NODE } from "./reducer";

import { dummyNodes, generateTreeFromList } from "./utils/dataUtils";

import "./App.css";

const App = () => {
  const [state, dispatch] = useReducer(reducer, dummyNodes);

  const [selected, setSelected] = useState("");
  const [newNode, setNewNode] = useState("");

  const fileSystem = useMemo(() => generateTreeFromList(state), [state]);

  const id = useId();

  const handleAddNew = (e) => {
    e.preventDefault();
    dispatch({
      type: ADD_NODE,
      payload: {
        id: `${id}-${newNode}-${Math.random().toString(16).slice(2)}`,
        name: newNode,
        parentID: selected,
      },
    });
  };

  const handleDelete = () => {
    dispatch({
      type: DELETE_NODE,
      payload: selected,
    });
    setSelected(null)
  };

  return (
    <div className="App">
      <div className="App-header">
        <h2>Werksarztzentrum File System</h2>
      </div>

      <div className="App-intro">
        <div className="nodes">
          <Nodes
            fileStructure={fileSystem}
            selected={selected}
            setSelected={setSelected}
          />
        </div>

        <div className="content">
          <div className="helping-text">
            {selected && state?.[selected] ? (
              <p>
                Add new Child Node to <code>{state[selected].name}</code>
              </p>
            ) : (
              "Please select parent first to add a child node"
            )}
          </div>

          <AddNew
            value={newNode}
            onChange={(e) => setNewNode(e.target.value)}
            onClick={handleAddNew}
          />

          {selected && state?.[selected] ? (
            <Fragment>
              <p className="helping-text">or</p>

              <button onClick={handleDelete} className="delete-button">
                Delete {state[selected].name}
              </button>
            </Fragment>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
