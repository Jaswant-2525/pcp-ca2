const OrderReducer = (state, action) => {
    switch (action.type) {

        case "SET_SAMPLE":
            return { ...state, order: action.payload, loading: false };

        case "SET_FAVOURITES":
            return {
                ...state,
                favorites: state.order.filter(
                    (o) => o.rating !== undefined && o.rating !== null && Number(o.rating) >= 4
                ),
            };

        case "MARK_DELIVERED":
            return {
                ...state,
                order: state.order.map((o) =>
                    o.orderId === action.payload
                        ? { ...o, status: "delivered" }
                        : o
                ),
            };

        case "ADD_ORDER":
            return { ...state, order: [...state.order, action.payload] };

        case "DELETE_ORDER":
            return {
                ...state,
                order: state.order.filter((o) => o.orderId !== action.payload),
            };

        default:
            return state;
    }
};

export default OrderReducer;
