import React from "react";
import { connect } from "react-redux";
import { getUsers } from "../redux/actions";
import User from "./User";
import NewUsers from "./NewUsers";

class Users extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getUsers();
  }
  render() {
    return (
      <>
        <h3>The Users ... efectos de sonido (piu ggg piupiu guuuooouu )</h3>
        {this.props.users.map((user) => (
          <User
            key={user.id}
            name={user.name}
            username={user.username}
            email={user.email}
            id={user.id}
          />
        ))}
        {this.props.myUsers.map((element, key) => (
          <NewUsers
            key={key}
            name={element.name}
            username={element.username}
            email={element.email}
          />
        ))}
        <p>...fin</p>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
    myUsers: state.myUsers,
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
