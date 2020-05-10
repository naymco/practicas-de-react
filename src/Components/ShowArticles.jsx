import React from "react";

const ShowArticles =({ articles, className })=>{
    return(
        <div>
            {articles?.map( article =>{
                console.log(article)
                return (
                    <div key={article._id}>
                        <h3>{article.title?.und}</h3>
                        {article.subtitle?.und}
                        <img  className={className} src={article?.headerImage?.uri?.und} alt={article.title.und}/>
                        {article.body?.und}
                        <hr/>
                    </div>
                )
            })}
        </div>
    )
}

export default ShowArticles;