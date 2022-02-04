import React from "react";
import s from "./users.module.css";
import userPhoto from "../assets/img/def.jpg";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";

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
                            <NavLink to={"/profile/" + e.id}>
                                {" "}
                                <img
                                    src={
                                        e.photos.small != null
                                            ? e.photos.small
                                            : userPhoto
                                    }
                                    className={s.photo}
                                />{" "}
                            </NavLink>
                        </div>
                        <div>
                            {e.followed ? (
                                <button
                                    disabled={props.followingInProgress.some(
                                        (id) => id === e.id
                                    )}
                                    onClick={() => {
                                        props.toggleIsFollowingProgress(
                                            true,
                                            e.id
                                        );
                                        axios
                                            .delete(
                                                `https://social-network.samuraijs.com/api/1.0/follow/${e.id}`,
                                                {
                                                    withCredentials: true,
                                                    headers: {
                                                        "API-KEY":
                                                            "6cc60ee9-2297-42fe-a7fc-ee37c082ac6b",
                                                    },
                                                }
                                            )
                                            .then((response) => {
                                                if (
                                                    response.data.resultCode ===
                                                    0
                                                ) {
                                                    props.unfollow(e.id);
                                                }
                                                props.toggleIsFollowingProgress(
                                                    false,
                                                    e.id
                                                );
                                            });
                                    }}
                                >
                                    UnFollow
                                </button>
                            ) : (
                                <button
                                    disabled={props.followingInProgress.some(
                                        (id) => id === e.id
                                    )}
                                    onClick={() => {
                                        props.toggleIsFollowingProgress(
                                            true,
                                            e.id
                                        );
                                        axios
                                            .post(
                                                `https://social-network.samuraijs.com/api/1.0/follow/${e.id}`,
                                                {},
                                                {
                                                    withCredentials: true,
                                                    headers: {
                                                        "API-KEY":
                                                            "6cc60ee9-2297-42fe-a7fc-ee37c082ac6b",
                                                    },
                                                }
                                            )
                                            .then((response) => {
                                                if (
                                                    response.data.resultCode ===
                                                    0
                                                ) {
                                                    props.follow(e.id);
                                                }
                                                props.toggleIsFollowingProgress(
                                                    false,
                                                    e.id
                                                );
                                            });
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
