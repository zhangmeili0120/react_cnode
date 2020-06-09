export default function homeDetailReducer(
  state = {
    loading: false,
    data: {
      author: {},
      create_at: "",
      replies: [],
      reply_count: 0
    }
  },
  action
) {
  switch (action.type) {
    case "getTopicData_start":
      return {
        ...state,
        loading: true
      };
    case "getTopicData_success":
      return {
        loading: false,
        data: action.data
      };
    case "getTopicData_error":
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
}
