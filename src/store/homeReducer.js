export default function homeReducer(
  state = { loading: false, data: [] },
  action
) {
  switch (action.type) {
    case "getData_start":
      return {
        ...state,
        loading: true
      };
    case "getData_success":
      return {
        loading: false,
        data: action.data
      };
    case "getData_error":
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
}
