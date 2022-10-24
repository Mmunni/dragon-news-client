import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummaryCrad from '../../Shared/NewsSummaryCard/NewsSummaryCrad';

const Home = () => {
    const allNews = useLoaderData();

    return (
        <div>
            {
                allNews.map(news => <NewsSummaryCrad
                    key={news._id}
                    news={news}
                ></NewsSummaryCrad>)
            }
        </div>
    );
};

export default Home;