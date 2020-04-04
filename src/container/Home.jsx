import React from 'react';
import HomeCrad from '../ui/HomeCard';
import { hashHistory } from 'react-router';

const Home = () => {

  const homeCardReleases = {
    title: 'Releases',
    text: 'Manage Releases',
    action: () => hashHistory.push('/releases')
  }
  const homeCardBacklog = {
    title: 'Backlog',
    text: 'Manage Backlog',
    action: () => hashHistory.push('/backlog')
  }
  const homeCardSprints = {
    title: 'Sprints',
    text: 'Manage Sprints',
    action: () => hashHistory.push('/sprints')
  }

  return (
    <div className="container text-center" >
      <div className="row" >
        <HomeCrad 
          title={homeCardReleases.title}
          text={homeCardReleases.text}
          action={homeCardReleases.action}
        />
        <HomeCrad {...homeCardBacklog} />
        <HomeCrad {...homeCardSprints} />
      </div>
    </div>
  );
}

export default Home;