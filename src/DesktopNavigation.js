import React from "react";

let PageTitle = "LIT Journal";
let Logo = "https://learnit.how/graphics/logo.png";
export default function DesktopNavigation() {
  return (
    <div className="DesktopNavigation">
      <ul className="MenuBar">
        <li className="Logo">
          <img src={Logo} alt="" />
        </li>
        <li className="PageTitle">{PageTitle}</li>
        <li>Menu1</li>
        <li>Menu2</li>
        <li>Menu3</li>
        <li>Menu4</li>
      </ul>
    </div>
  );
}
