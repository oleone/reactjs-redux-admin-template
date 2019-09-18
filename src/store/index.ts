/**
 * Configuração do estado da aplicação de maneira global
 */
import { createStore, Store } from "redux";
import { BasicsState } from "./ducks/basics/types";

import rootReducer from "./ducks/rootReducer";

export interface ApplicationState {
    basics: BasicsState
};

const store: Store<ApplicationState> = createStore(rootReducer);

export default store;