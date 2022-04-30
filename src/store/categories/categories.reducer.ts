import { AnyAction } from "redux";
import {
  fetchCategoriesFailure,
  fetchCategoriesStart,
  fetchCategoriesSuccess,
} from "./categories.action";
import { Category } from "./categories.types";

export type CategoriesState = {
  readonly categories: Category[];
  readonly isLoading: boolean;
  readonly error: Error | null;
};

export const CATEGORIES_INITIAL_STATE: CategoriesState = {
  categories: [],
  isLoading: false,
  error: null,
};

export const categoriesReducer = (
  state = CATEGORIES_INITIAL_STATE,
  // * This pattern is called a discriminating union - It is used in this form a lot but it can be improved
  // action = {} as CategoryAction

  // * Now improved code - replaced the switch
  action: AnyAction
): CategoriesState => {
  if (fetchCategoriesStart.match(action)) {
    return {
      ...state,
      isLoading: true,
    };
  }

  if (fetchCategoriesSuccess.match(action)) {
    return { ...state, categories: action.payload, isLoading: false };
  }

  if (fetchCategoriesFailure.match(action)) {
    return { ...state, error: action.payload, isLoading: false };
  }

  return state;

  // switch (action.type) {
  //   case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START:
  //     return {
  //       ...state,
  //       isLoading: true,
  //     };
  //   case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILURE:
  //     return {
  //       ...state,
  //       isLoading: false,
  //       error: action.payload,
  //     };
  //   case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS:
  //     return {
  //       ...state,
  //       categories: action.payload,
  //       isLoading: false,
  //     };
  //   default:
  //     return state;
  // }
};
