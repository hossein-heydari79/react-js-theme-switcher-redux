// # Reducer name should be **themeReducer**

export const themeReducer = (state = false, action) => {
    switch (action.type) {
        case "change":
            return action.payload;

        default:
            return state;
    }
};
