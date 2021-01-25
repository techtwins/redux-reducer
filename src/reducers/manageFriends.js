export function manageFriends(state = { friends: [] }, action) {
  switch (action.type) {
    case "ADD_FRIEND":
      return { friends: [...state.friends, action.friend] };
    case "REMOVE_FRIEND":
      const arr = [...state.friends].filter(
        (friend) => friend.id !== action.id
      );
      state = {
        friends: arr,
      };
  }
  return state;
}
