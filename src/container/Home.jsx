import React from 'react';
import HomeCrad from '../ui/HomeCard';

const Home = () => {

  const homeCardReleases = {
    title: 'Releases',
    text: 'Manage Releases',
    action: () => alert('Releases Clicked')
  }
  const homeCardBacklog = {
    title: 'Backlog',
    text: 'Manage Backlog',
    action: () => alert('Backlog Clicked')
  }
  const homeCardSprints = {
    title: 'Sprints',
    text: 'Manage Sprints',
    action: () => alert('Sprints Clicked')
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