/**
 * Configuração do estado da aplicação de maneira global
 */
import { createStore, Store, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import { BasicsState } from "./ducks/basics/types";

import rootReducer from "./ducks/rootReducer";
import rootSaga from "./ducks/rootSaga";

export interface ApplicationState {
  basics: BasicsState;
}

const sagaMiddleware = createSagaMiddleware();

const store: Store<ApplicationState> = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export default store;
