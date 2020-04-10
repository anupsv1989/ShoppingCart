


const initialState = {
    shoppingListData: [],
};
const reducer = (state = initialState, action) => {
    const newState = { ...state };

    switch (action.type) {
        case "FETCH_ITEM_SUCCESS":
            console.log("Inside reducer", action.result)
            newState.shoppingListData = action.result.items
            break;
    }
    return newState;
};






export default reducer;