import React from "react";

export const FolderIcon = (props) => {
  return (
    <svg
      width="24"
      height="24"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 96 96"
      fill="#FFF"
      {...props}
    >
      <path
        fill="#FFB900"
        d="M45,24l-4.2426-4.2426C39.6321,18.6321,38.106,18,36.5147,18H9c-1.6569,0-3,1.3431-3,3v56 c0,0.5523,0.4477,1,1,1h82c0.5523,0,1-0.4477,1-1V27c0-1.6569-1.3431-3-3-3H45z"
      />
      <path
        fill="#FFD75E"
        d="M45,24l-4.2426,4.2426C39.6321,29.3679,38.106,30,36.5147,30H6v47c0,0.5523,0.4477,1,1,1h82 c0.5523,0,1-0.4477,1-1V27c0-1.6569-1.3431-3-3-3H45z"
      />
      <linearGradient
        id="a"
        x1="48"
        x2="48"
        y1="24"
        y2="78"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#fff" stopOpacity="0" />
        <stop offset="1" stopColor="#ffd75e" stopOpacity=".3" />
      </linearGradient>
      <path
        fill="url(#a)"
        d="M45,24l-4.2426,4.2426C39.6321,29.3679,38.106,30,36.5147,30H6v47c0,0.5523,0.4477,1,1,1h82 c0.5523,0,1-0.4477,1-1V27c0-1.6569-1.3431-3-3-3H45z"
      />
      <path
        opacity=".4"
        d="M6,30v1h30.6005c1.8565,0,3.637-0.7375,4.9497-2.0503L46.5,24H45l-4.2426,4.2426 C39.6321,29.3679,38.106,30,36.5147,30H6z"
      />
      <path
        fill="#DA7B16"
        d="M89,78H7c-0.5523,0-1-0.4477-1-1l0,0h84l0,0C90,77.5523,89.5523,78,89,78z"
      />
    </svg>
  );
};

export default FolderIcon;
