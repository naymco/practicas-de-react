import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// Containers
import Articles from "./Articles";

// Redux
import {getAllArticles} from '../Redux/action'

const Index = ()=>{
    const articles = useSelector(state => state.get.articles)
    const dispatch = useDispatch()

    console.log(articles)

    useEffect(() => {
        dispatch(getAllArticles());
    },[]);

    return(
        <div>
            <Articles articles={articles}/>
        </div>
    )
}

export default Index;