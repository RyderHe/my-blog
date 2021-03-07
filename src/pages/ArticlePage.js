import React, { useState, useEffect } from 'react';
import ArticlesList from '../components/ArticlesList';
import articleContent from './article-content';
import NotFoundPage from './NotFoundPage';

const ArticlePage = ({ match }) => {
    
    const name = match.params.name;

    const article = articleContent.find(article => article.name === name);
    
    const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: [] });

    // The second array is the array of values that should be watched.
    // If one of them changes, useEffect should be called again.
    // eg. if no second argument, useEffect continuously is called
    //     if second argument is [], useEffect is only called when first loads the article page
    //     if second argument is [name], useEffect is called whenever name changes -> change between articles
    useEffect(() => {
        // setArticleInfo({ upvotes: Math.ceil(Math.random() * 10) });

        const fetchData = async () => {
            const result = await fetch(`/api/articles/${name}`);
            const body = await result.json();
            setArticleInfo(body);
        }
        fetchData();
    }, [name]);

    if (!article) return <NotFoundPage />

    const otherArticles = articleContent.filter(article => article.name !== name);

    return (
        <>
        <h1>{article.title}</h1>
        <p>This post has been upvoted {articleInfo.upvotes } times. </p>
        {article.content.map((paragraph, key) => (
            <p key={key}>{paragraph}</p>
        ))}
      
        <h3>Other Articles:</h3>
        <ArticlesList articles={otherArticles} />
        </>
    );
}

export default ArticlePage;