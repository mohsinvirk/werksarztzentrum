import React, { Fragment } from "react";

import Collapse from "../Collapse";
import Chevron from "../Chevron";

import NodeSvgIcon from "../../assets/folderIcon.js";

const Node = ({ fileStructure, selected, setSelected }) => {
  const handler = (children, value) => {
    let i = value + 1;
    return children && children.length > 0
      ? children.map((entry, _) => {
          const flag = entry.children
            ? entry.children.length
              ? true
              : false
            : false;
          if (!flag) {
            return (
              <div key={entry.name} onClick={() => setSelected(entry.nodeID)}>
                <div
                  className={`node ${
                    entry.nodeID === selected ? "selected" : ""
                  }`}
                  style={{ marginLeft: `${10 * i}px` }}
                >
                  <NodeSvgIcon /> {entry.name}
                </div>
              </div>
            );
          }
          return (
            <Collapse index={i} key={entry.name}>
              {(visible, handleVisible) => {
                return (
                  <Fragment>
                    <div key={entry.name}>
                      <div
                        className={`node ${
                          entry.nodeID === selected ? "selected" : ""
                        }`}
                        style={{
                          marginLeft: `${10 * i}px`,
                          width: "100%",
                        }}
                        onClick={() => setSelected(entry.nodeID)}
                      >
                        <NodeSvgIcon /> {entry.name}

                        <div onClick={() => handleVisible()}>
                          <Chevron collapsed={visible} />
                        </div>
                      </div>
                    </div>
                    <div style={{ position: "relative" }}>
                      {visible ? handler(entry.children, i) : ""}
                    </div>
                  </Fragment>
                );
              }}
            </Collapse>
          );
        })
      : "";
  };

  return <div>{handler(fileStructure, 0)}</div>;
};

export default Node;
