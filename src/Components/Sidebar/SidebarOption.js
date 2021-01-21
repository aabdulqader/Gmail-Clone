import React from "react";
import "./SidebarOption.css";

export const SidebarOption = ({ Icon, title, number, selected }) => {
  return (
    <div className={`sidebarOption ${selected && "sidebarOption--active"}`}>
      <div className="sidebarOption__info">
        {Icon && <Icon className="sidebarOption__icon" />}
        <h3>{title}</h3>
      </div>
      <p>
        <strong>{number}</strong>
      </p>
    </div>
  );
};
