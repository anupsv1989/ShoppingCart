import actions from "./action";
import { notification } from 'antd';


const initialState = {
    shoppingListData: [],
    itemsInCart: [],
    applyRangeFilter: [],
    applySearchFilter: "",
    applySortActionData: "",
    cartNumber: "",
};
const reducer = (state = initialState, action) => {
    const newState = { ...state };

    switch (action.type) {
        case "FETCH_ITEM_SUCCESS":
            console.log("Inside reducer", action.result)
            newState.shoppingListData = action.result
            break;

        case "GET_ITEMS_IN_CART":
            newState.itemsInCart = newState.itemsInCart;
            console.log("To get items in cart ", newState.itemsInCart)
            break;

        case "ADD_ITEM_TO_CART":
            let tempData = action.payload;
            let existingItems = newState.itemsInCart;
            let { itemsInCart: temp = [] } = newState;
            if (existingItems && existingItems.length > 1) {
                if (existingItems.some(existingItems => existingItems.item.name === action.payload.item.name)) {
                    notification["warning"]({
                        message: action.payload.item.name,
                        description:
                            'Item already exits in cart!',
                    });
                } else {
                    temp.push(tempData);
                }
            } else {
                temp.push(tempData);
            }
            newState.itemsInCart = temp;
            newState.cartNumber = temp.length;
            break;

        case "DELETE_ITEM_FROM_CART":

            let existingDelItems = newState.itemsInCart;
            let ind = existingDelItems.findIndex(x => x.item.name === action.payload.name);
            existingDelItems.splice(ind, 1);
            newState.itemsInCart = existingDelItems;
            newState.cartNumber = existingDelItems.length;
            break;

        case "APPLY_FILTER":
            newState.applyRangeFilter = action.payload
            newState.applySortActionData = "";
            break;

        case "APPLY_SEARCH":
            newState.applySearchFilter = action.payload
            newState.applySortActionData = "";
            break;

        case "APPLY_SORT":
            newState.applySortActionData = action.payload
            break;


    }
    return newState;
};






export default reducer;