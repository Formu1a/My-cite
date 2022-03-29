import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

let Users = ({
    currentPage,
    onPageChanged,
    totalUsersCount,
    pageSize,
    users,
    ...props
}) => {
    return (
        <div>
            <Paginator
                currentPage={currentPage}
                onPageChanged={onPageChanged}
                totalUsersCount={totalUsersCount}
                pageSize={pageSize}
            />
            <div>
                {users.map((e) => (
                    <User
                        key={e.id}
                        user={e}
                        followingInProgress={props.followingInProgress}
                        follow={props.follow}
                        unfollow={props.unfollow}
                    />
                ))}
                ;
            </div>
        </div>
    );
};

export default Users;
