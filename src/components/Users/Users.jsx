import * as axios from "axios";
import React from "react";
import s from "./users.module.css";
import userPhoto from "../assets/img/def.jpg";

let Users = (props) => {
    let getUsers = () => {
        if (props.users.length === 0) {
            axios
                .get("https://social-network.samuraijs.com/api/1.0/users")
                .then((response) => {
                    props.setUsers(response.data.items);
                });
        }
    };

    return (
        <div>
            <button onClick={getUsers}>getUsers</button>
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
