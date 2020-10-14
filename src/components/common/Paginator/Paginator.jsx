import React, { useState } from "react";
import s from "./Paginator.module.css";

let Paginator = ({
  totalUsersCount,
  pageSize,
  onPageChanched,
  currentPage,
  portionSize = 5,
}) => {
  let pagesCount = Math.ceil(totalUsersCount / pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  let portionCount = Math.ceil(pagesCount / portionSize);
  let [portionNumber, setPortionNumber] = useState(1);
  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionPageNumber = portionNumber * portionSize;

  return (
    <div className={s.wrapper}>
      <ul className={s.pageChoise}>
        {portionNumber > 1 && (
          <div>
            <button
              onClick={() => {
                setPortionNumber(1);
              }}
            >
              &#60;&#60;
            </button>
            <button
              className={s.prevBtn}
              onClick={() => {
                setPortionNumber(portionNumber - 1);
              }}
            >
              &#60;
            </button>
          </div>
        )}
        {pages
          .filter(
            (p) => p >= leftPortionPageNumber && p <= rightPortionPageNumber
          )
          .map((p) => {
            return (
              <li
                key={p}
                onClick={(e) => {
                  onPageChanched(p);
                }}
              >
                {p}
              </li>
            );
          })}
        {portionCount > portionNumber && (
          <div>
            <button
              className={s.nextBtn}
              onClick={() => {
                setPortionNumber(portionNumber + 1);
              }}
            >
              &#62;
            </button>
            <button
              onClick={() => {
                setPortionNumber(portionCount);
              }}
            >
              &#62;&#62;
            </button>
          </div>
        )}
      </ul>
    </div>
  );
};

export default Paginator;
