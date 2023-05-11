// const initialState = [
//   { id: "1", name: "이름1", number: "111-123-1234" },
//   { id: "2", name: "이름2", number: "222-123-1234" },
//   { id: "3", name: "이름3", number: "333-123-1234" },
//   { id: "4", name: "이름4", number: "444-123-1234" },
// ];

const initialState = () => {
  if (localStorage.getItem("contacts")) {
    return JSON.parse(localStorage.getItem("contacts"));
  } else
    return [
      { id: "1", name: "이름1", number: "111-123-1234" },
      { id: "2", name: "이름2", number: "222-123-1234" },
      { id: "3", name: "이름3", number: "333-123-1234" },
      { id: "4", name: "이름4", number: "444-123-1234" },
    ];
};

const phoneBookReducer = (state = initialState(), { type, payload }) => {
  switch (type) {
    case "ADD_CONTACT":
      return [...state, payload];

    case "DELETE_CONTACT":
      return state.filter((contact) => contact.id !== payload.id);

    default:
      return state;
  }
};

export default phoneBookReducer;
