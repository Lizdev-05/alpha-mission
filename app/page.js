import Image from "next/image";

import React from "react";
import campaigns from "./data/campaignData";
import CampaignCard from "./components/CampaignCard";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">All Campaigns</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {campaigns.map((campaign, index) => (
            <CampaignCard key={index} {...campaign} />
          ))}
        </div>
      </div>
    </div>
  );
}
