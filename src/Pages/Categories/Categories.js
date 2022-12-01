import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummaryCard from '../Shared/NewsSummaryCard/NewsSummaryCard';

const Categories = () => {
    const categoryNews = useLoaderData();

    return (
        <div>
            {
                categoryNews.map(news => <NewsSummaryCard key={categoryNews?._id} news={news}></NewsSummaryCard>)
            }
        </div>
    );
};

export default Categories;