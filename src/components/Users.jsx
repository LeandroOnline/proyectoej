import React from "react";
import { connect, useSelector } from "react-redux";
import { getUsers } from "../redux/actions";

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
        <p>{this.props.info}</p>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  //console.log(state);
  return {
    users: state.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUsers: () => dispatch(getUsers()),
  };
};

// export default Users;
export default connect(mapStateToProps, mapDispatchToProps)(Users);

//mapStateToProps=
//       { users:   state.users }
//                  state --> store.getState()
//                            store desde <Provider store={store}> --> store --> reducer --> initialState
// <Users users= {state.users}              getUsers= {store.dispatch(getUsers())} />
// <Users users= {store.getState().users}   getUsers= {store.dispatch(getUsers())} />