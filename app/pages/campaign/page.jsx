import CampaignDetails from "../../components/CampaignDetails";

const CampaignPage = () => {
  const campaign = {
    title: "Campaign name or project title",
    organizer: "Harvesthouse Christian Centre",
    date: "December 1, 2024",
    category: "Missions",
    description: `I am the proud aunty of Zayde "Buggy" Keohouhou. Buggy earned his angel wings on December 5th, 2024 as he was taken from us too soon at the tender age of 15. His beautiful soul was the center of our family. He loved music, was a drummer, and gave the warmest all-encompassing hugs.

Your donations will cover funeral expenses, including the cost of service, burial, and support for our grieving family. Please donate to the fundraiser and share it to reach a wider audience. Sincerely, the Keohouhou's`,
    raised: 47084,
    goal: 230000,
    donations: 600,
    likes: 95,
    createdAt: "Created 1 day ago",
    organizerLocation: "Ikeja Lagos, NG",
  };

  return <CampaignDetails campaign={campaign} />;
};

export default CampaignPage;
