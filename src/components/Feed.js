import { useEffect, useState } from 'react';
import CampaignBlock from './CampaignBlock';

function Feed() {

  const [campaigns, setCampaigns] = useState();

  useEffect(() => {
    const getData = async () => {
      const campaignData = await fetchData();
      setCampaigns(campaignData);
    }
    getData();
  }, []);

  const fetchData = async () => {
    const rawData = await fetch('https://www.plugco.in/public/take_home_sample_feed');
    const data = rawData.json();
    return data;
  }

  console.log('campaigns: ', campaigns);

  return (
    <div id='feed'>
      {campaigns?.campaigns?.map((campaign, item) => (
        <CampaignBlock key={campaign.id} camp={campaign} />
      ))}
    </div>
  )

}

export default Feed;