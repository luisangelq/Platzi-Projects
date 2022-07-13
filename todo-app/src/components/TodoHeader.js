import { cloneElement, Children } from "react";

const TodoHeader = ({ children, loading }) => {
  return (
    <header>
        {
            Children.map(children, (child) => {
                return cloneElement(child, { loading });
            })
        }
    </header>
  );
};

export { TodoHeader };
