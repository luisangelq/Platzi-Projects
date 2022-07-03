import react from "react";
import styled from "styled-components";

function TodoItem(props) {
  const onComplete = () => {
    console.log(props.text + "Completed");
  };

  const onDelete = () => {
    console.log(props.text + "Deleted");
  };

  return (
    <Item>
      <span
        className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
        onClick={onComplete}
      >
        ✔
      </span>
      <p className={`Description ${props.completed && "Completed"}`}>
        {props.text}
      </p>
      <span className="Icon Icon-delete" onClick={onDelete}>
        X
      </span>
    </Item>
  );
}

const Item = styled.li`
  background-color: #fafafa;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 24px;
  box-shadow: 0px 5px 50px rgba(32, 35, 41, 0.15);

  p {
    margin: 24px 0 24px 24px;
    width: calc(100% - 120px);
    font-size: 18px;
    line-height: 24px;
    font-weight: 400;
  }

  .Completed {
    text-decoration: line-through;
  }

  .Icon {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 48px;
    width: 48px;
    font-size: 24px;
    font-weight: bold;
    /* background-color: #CCC; */
  }

  .Icon-check {
    position: absolute;
    left: 12px;
  }
  .Icon-check--active {
    color: #4caf50;
  }

  .Icon-delete {
    position: absolute;
    top: -24px;
    right: 0;
  }
  .Icon-delete:hover {
    color: red;
  }
`;

export { TodoItem };
