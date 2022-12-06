import { createAction } from "../../utlis/reducer/reducer.utils";
import { CATEGORIES_ACTION_TYPES } from "./category.types";

export const setCategoriesMasp = (categoriesMap) =>
  createAction(CATEGORIES_ACTION_TYPES);
