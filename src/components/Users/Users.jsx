import React from "react";
import s from "./users.module.css";
import userPhoto from "../assets/img/def.jpg";

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            <div>
                {pages.map((e) => {
                    return (
                        <span
                            className={props.currentPage === e && s.page}
                            onClick={() => {
                                props.onPageChanged(e);
                            }}
                        >
                            {e}
                        </span>
                    );
                })}
            </div>
            {props.users.map((e) => (
                <div key={e.id}>
                    <span>
                        <div>
                            <img
                                src={
                                    e.photos.small != null
                                        ? e.photo.small
                                        : userPhoto
                                }
                                className={s.photo}
                            />
                        </div>
                        <div>
                            {e.followed ? (
                                <button
                                    onClick={() => {
                                        props.unfollow(e.id);
                                    }}
                                >
                                    UnFollow
                                </button>
                            ) : (
                                <button
                                    onClick={() => {
                                        props.follow(e.id);
                                    }}
                                >
                                    Follow
                                </button>
                            )}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{e.name}</div>
                            <div>{e.status}</div>
                        </span>
                        <span>
                            <div>{"e.location.country"}</div>
                            <div>{"e.location.city"}</div>
                        </span>
                    </span>
                </div>
            ))}
        </div>
    );
};

export default Users;
