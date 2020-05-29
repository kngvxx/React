import React from "react";
const PageTitle = "LIT Journal";
const Logo = "https://learnit.how/graphics/logo.png";
const MobileMenuIcon =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png";
const ShowMenu = function() {
  var x = document.getElementById("LitMenu");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
};
export default function DesktopNavigation() {
  return (
    <div>
      <div className="MobileNavigation">
        <a className="MobileMenuIcon" onClick={ShowMenu}>
          <img src={MobileMenuIcon} alt="" />
        </a>
        <a className="PageTitle">{PageTitle}</a>
      </div>
      <div id="LitMenu" className="MenuBar">
        <div className="MenuItem">Menu1</div>
        <div className="MenuItem">Menu1</div>
        <div className="MenuItem">Menu1</div>
        <div className="MenuItem">Menu1</div>
      </div>
    </div>
  );
}
