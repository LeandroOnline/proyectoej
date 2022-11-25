import React from "react";
import { connect } from "react-redux";
import { getUsers } from "../redux/actions";
import User from "./User";

class Users extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getUsers();
  }
  render() {
    return (
      <>
        <h3>Soy el componente Users</h3>
        {this.props.users.map( (user) => (
          <User key={user.id} name={user.name} username={user.username} email={user.email} id={user.id}/>
        ))}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUsers: () => dispatch(getUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);

//mapStateToProps=
//       { users:   state.users }
//                  state --> store.getState()
//                            store desde <Provider store={store}> --> store --> reducer --> initialState
// <Users users= {state.users}              getUsers= {store.dispatch(getUsers())} />
// <Users users= {store.getState().users}   getUsers= {store.dispatch(getUsers())} />
