export const REQUEST_API_DATA = "REQUEST_API_DATA";
export const RECEIVE_API_DATA = "RECEIVE_API_DATA";

export const requestApiData = () => ({ type: REQUEST_API_DATA });
// @ts-ignore Type instantiation is excessively deep and possibly infinite
export const receiveApiData = (data) => ({ type: RECEIVE_API_DATA, data });
