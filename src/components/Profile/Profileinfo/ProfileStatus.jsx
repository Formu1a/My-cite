import React from "react";
import Preloader from "../../common/preloader/preloader";
import s from "./Profileinfo.module.css";

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
    };

    activateEditMode = () => {
        this.state.editMode = true;
        this.setState({
            editMode: true,
        });
    };

    deActivateEditMode = () => {
        this.state.editMode = false;
        this.setState({
            editMode: false,
        });
    };

    render() {
        return (
            <div>
                {!this.state.editMode && (
                    <div>
                        <span onDoubleClick={this.activateEditMode}>
                            {this.props.status}
                        </span>
                    </div>
                )}
                {this.state.editMode && (
                    <div>
                        <input
                            autoFocus={true}
                            onBlur={this.deActivateEditMode}
                            value={this.props.status}
                        ></input>
                    </div>
                )}
            </div>
        );
    }
}

export default ProfileStatus;
