import { createSelector } from "reselect";

const selectCategoryReducer = (state) => state.categories;

// * takes input selectors and output selectors (here we take input, the output of the input selectors)
export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.categories
);

// * with reselect -> created a memoized selector
export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) =>
    categories.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {})
);

// before reselect
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
