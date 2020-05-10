import axios from "axios";
import store from "./store";
// Types
import { GET_ALL_ARTICLES } from "./types";

// Constantes
// const url = "https://api.digitalvalue.es/alcantir/collections";

export const getAllArticles = () => async (dispatch) => {
    const res = await axios.get('https://api.digitalvalue.es/alcantir/collections/articulos?limit=2');
    store.dispatch({ type: GET_ALL_ARTICLES, payload: res.data.items });
    console.log(res.data.items);
};