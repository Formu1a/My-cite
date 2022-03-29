import React from "react";
import s from "./Paginator.module.css";

let Paginator = ({ currentPage, onPageChanged, totalUsersCount, pageSize }) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (
        <div className={s.number}>
            {pages.map((e) => {
                return (
                    <span
                        className={currentPage === e && s.page}
                        onClick={() => {
                            onPageChanged(e);
                        }}
                    >
                        {e}
                    </span>
                );
            })}
        </div>
    );
};

export default Paginator;
