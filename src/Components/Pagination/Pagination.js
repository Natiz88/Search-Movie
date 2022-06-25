import { useState } from "react";
import "./Pagination.css";

const Pagination = ({ total_pages, paginate }) => {
  let a = [];
  for (let i = 1; i <= Math.ceil(total_pages); i++) {
    a.push(i);
  }
  const [val, setVal] = useState(1);
  const pagination = (num) => {
    setVal(num);
    setTimeout(() => paginate(num), 0);
  };
  const prev = () => {
    if (val > 1) {
      paginate(val - 1);
      setVal(val - 1);
    }
  };
  const next = () => {
    if (val < a.length) {
      paginate(val + 1);
      setVal(val + 1);
    }
  };
  return (
    <>
      <nav>
        <ul>
          <li onClick={() => prev()}> Prev</li>
          {a.map((e, idx) => (
            <li
              className={e === val ? "active" : "passive"}
              key={idx}
              onClick={() => pagination(e)}
            >
              {e}
            </li>
          ))}
          <li onClick={() => next()}>next</li>
        </ul>
      </nav>
    </>
  );
};
export default Pagination;
