import { FILTERCOLOR, FILTERSTATUS } from "./actionTypes";
import { initialState } from "./initialState";

const filtersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FILTERSTATUS:
            return {
                ...state, status: action.payload
            }

        case FILTERCOLOR:
            // const { color, changeType } = action.payload;
            switch (action.payload.changeType) {
                case "add":
                    return {
                        ...state, colors: [...state.colors, action.payload.color]
                    }

                case "remove":
                    return {
                        ...state, 
                        colors: state.colors.filter((c) => c !== action.payload.color)
                    }
            
                default:
                    return state;
            }

        default:
            return state;
    }
}

export default filtersReducer;