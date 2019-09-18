/**
 * Combina todos os reducers de nossa aplicação
 */
import { combineReducers } from "redux";

import basics from "./basics";

export default combineReducers({
    basics,
});