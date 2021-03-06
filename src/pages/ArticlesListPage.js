import React from 'react';

// articles data
import articleContent from './article-content';

// component
import ArticlesList from '../components/ArticlesList';


const ArticlesListPage = () => (
    <>
        <h1>Articles</h1>
        <ArticlesList articles={articleContent} />
    </>
)

export default ArticlesListPage;