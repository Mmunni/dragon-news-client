import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummaryCrad from '../../Shared/NewsSummaryCard/NewsSummaryCrad';

const Catagory = () => {
    const categoryNews = useLoaderData();
    return (
        <div>
            <h2 className='mb-5 text-center'>catagory News: {categoryNews.length}</h2>
            {
                categoryNews.map(news => <NewsSummaryCrad
                key={news._id}
                news={news}
                >
                </NewsSummaryCrad>)
            }
        </div>
    );
};

export default Catagory;