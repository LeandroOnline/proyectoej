import { GET_USERS, GET_USER_DETAIL } from "./actions";
const initialState = {
    users: [],
    userDetail: {}
}
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USERS:
            return {
                ...state,
                users: action.payload,
            }
        case GET_USER_DETAIL:
            return {
                ...state,
                userDetail: action.payload,
                }
        default:
            return { ...state }
    }
}
export default rootReducer;

// import { GET_USERS } from './actions';
// const initialState = {
// 	users: [],
// };
// const rootReducer = (state = initialState, action) => {
// 	switch (action.type) {
// 		case GET_USERS:
// 			return {
// 				...state,
// 				users: action.payload,
// 			};

// 		default:
// 			return { ...state };
// 	}
// };
// export default rootReducer;