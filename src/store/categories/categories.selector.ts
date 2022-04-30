import { createSelector } from "reselect";
import { RootState } from "../store";
import { CategoriesState } from "./categories.reducer";
import { CategoryMap } from "./categories.types";

const selectCategoryReducer = (state: RootState): CategoriesState =>
  state.categories;

// * takes input selectors and output selectors (here we take input, the output of the input selectors)
export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.categories
);

// * with reselect -> created a memoized selector
export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories): CategoryMap =>
    categories.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {} as CategoryMap)
);

// * before reselect
// export const selectCategoriesMap = (state) => {
//   const categories = state.categories.categories;

//   return categories.reduce((acc, category) => {
//     const { title, items } = category;
//     acc[title.toLowerCase()] = items;
//     return acc;
//   }, {});
// };

export const selectCategoriesIsLoading = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.isLoading
);
