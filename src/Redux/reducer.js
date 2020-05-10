import { GET_ALL_ARTICLES } from "./types";

const initalState = {
    articles: [],
};

function getAllArticles(state = initalState, action) {
    switch (action.type) {
        case GET_ALL_ARTICLES:
            console.log(action);
            return Object.assign({}, state, { articles: action.payload });

        default:
            return { ...state };
    }
}

export default getAllArticles;
