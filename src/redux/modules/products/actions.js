import types from "../../../constants/action-types";

export const setProductsData = (payload) => ({
  type: types.PRODUCTS_SET_DATA,
  payload,
});

export const clearState = () => ({
  type: types.CLEAR_STATE,
});

export const deleteProduct = (id) => ({
  type: types.DELETE_PRODUCT,
  payload: Number(id),
});
