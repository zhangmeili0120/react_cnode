export default function userReducer(
  state = { loading: false, data: {
    recent_topics: [],
        recent_replies: []
  } },
  action
) {
  switch (action.type) {
    case "getUserData_start":
      return {
        ...state,
        loading: true
      };
    case "getUserData_success":
      return {
        loading: false,
        data: action.data
      };
    case "getUserData_error":
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
}
