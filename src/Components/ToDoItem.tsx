import React, { FC } from "react";
import { noteList } from "../types/types";

interface ToDoItemProps {
  item: noteList;
}

export const ToDoItem: FC<ToDoItemProps> = ({ item }) => {
  return (
    <div className="toDo__task">
      <div className="task-content">
        <h2 className="task-name">{item.name}</h2>
        <p className="task-description">{item.description}</p>
      </div>
      <div className="task-priority"></div>
      <div className="task-colorMark"></div>
      <div className="task-contact">
        <span className="task-time">9:00 am</span>
        <ul className="task-invited">
          <li className="task-invited-person"></li>
          <li className="task-invited-person"></li>
          <li className="task-invited-person"></li>
        </ul>
      </div>
    </div>
  );
};
