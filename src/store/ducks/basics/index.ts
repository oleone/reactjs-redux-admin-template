/**
 * Reducer
 */

import { BasicsState, BasicsTypes } from "./types";
import { Reducer } from "redux";

/** Estado inicial */
const INICIAL_STATE: BasicsState = {
  data: [],
  error: false,
  loading: false
};

const reducer: Reducer<BasicsState> = (state = INICIAL_STATE, action) => {
  switch (action.type) {
    case BasicsTypes.LOAD_REQUEST:
      return { ...state, loading: true };
    case BasicsTypes.LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload.data
      };
    case BasicsTypes.LOAD_FAILURE:
      return { ...state, loading: false, error: true, data: [] };
    default:
      return state;
  }
};

export default reducer;
