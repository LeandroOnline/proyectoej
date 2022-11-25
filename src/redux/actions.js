//Initial types
export const GET_USERS = 'GET_USERS';
export const GET_USER_DETAIL = 'GET_USER_DETAIL';

//Actions
export const getUsers = () => {
	return function (dispatch) {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((response) => response.json())
			.then((data) => dispatch({ type: GET_USERS, payload: data }));
	};
};

export const getUserDetail= (id) => {
	return function (dispatch) {
		fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
			.then((response) => response.json())
			.then((data) => dispatch({ type: GET_USER_DETAIL, payload: data }));
	};
};
