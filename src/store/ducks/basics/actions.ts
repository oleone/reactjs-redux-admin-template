/**
 * São funções que disparam nossos tipos (Types)
 */

import { action } from "typesafe-actions";
import { BasicsTypes, Basic } from "./types";

/**
 * Action creators
 */
export const loadRequest = () => action(BasicsTypes.LOAD_REQUEST);

// Será passado pelo reducer ao fazer a requisição e retornar os dados
export const loadSuccess = (data: Basic[]) => action(BasicsTypes.LOAD_SUCCESS, data);

export const loadFailure = () => action(BasicsTypes.LOAD_FAILURE);