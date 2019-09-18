/**
 * Action types
 *
 * Tipagem para todas as ações que podem acontecer
 */

export enum BasicsTypes {
  LOAD_REQUEST = "@basics/LOAD_REQUEST", // Disparado para carregar os dados da api
  LOAD_SUCCESS = "@basics/LOAD_SUCCESS", // Redux saga dispara ao completar a ação request
  LOAD_FAILURE = "@basics/LOAD_FAILURE" // Redux saga dispara ao completar a ação request
}

/**
 * Data types
 *
 * Formato da informação que estará dentro do reducer
 */

 export interface Basic {
     id: number,
     name: string
 }

 /**
  * State type
  * 
  * Formato do estado que será armazenado pelo reducer
  */

  export interface BasicsState {
      readonly data: Basic[],
      readonly loading: boolean,
      readonly error: boolean
  }