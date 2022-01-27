import React from 'react';
import MainBanner from '../../components/Home/Banner/MainBanner';
import TopBanner from '../../components/Home/Banner/TopBanner';
import ChooseCategory from '../../components/Home/ChooseCategory/ChooseCategory';
import FeatureExplore from '../../components/Home/FeatureExplore/FeatureExplore';
import RecentBlogs from '../../components/Home/RecentBlogs/RecentBlogs';
import Navbar from '../Shared/Navbar/Navbar';

const Home = () => {
    return (
        <div>
            
          <Navbar />
            {/* <TopBanner /> */}
            <MainBanner />
            {/* <ChooseCategory /> */}
            <FeatureExplore />
            <RecentBlogs />
        </div>
    );
};

export default Home;