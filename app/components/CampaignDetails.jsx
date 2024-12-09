const CampaignDetails = ({ campaign }) => {
  const progressPercentage = Math.min(
    (campaign.raised / campaign.goal) * 100,
    100
  ).toFixed(2);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-3 gap-8 bg-white">
      <div className="lg:col-span-2 space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">{campaign.title}</h1>
          <p className="text-gray-600">by {campaign.organizer}</p>
        </div>

        <img
          src="https://as1.ftcdn.net/v2/jpg/03/30/32/28/1000_F_330322889_loyXDVKHBntIFBXuLT6LvqDxmHU9BzZn.jpg"
          alt="Campaign Banner"
          className="w-full rounded-lg object-cover"
        />

        <div className="text-gray-600">
          <p>
            {campaign.date} • {campaign.category}
          </p>
        </div>

        <p className="text-gray-800 whitespace-pre-line">
          {campaign.description}
        </p>

        <div className="flex items-center space-x-4">
          <button className="flex items-center space-x-2 text-gray-600 hover:text-red-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 15l7-7 7 7"
              />
            </svg>
            <span>{campaign.likes} people have donated</span>
          </button>
        </div>

        <div className="flex space-x-4">
          <button className="w-1/2 py-2 border border-gray-600 text-gray-800 rounded-lg hover:bg-gray-100">
            Donate
          </button>
          <button className="w-1/2 py-2 border border-gray-600 text-gray-800 rounded-lg hover:bg-gray-100">
            Volunteer
          </button>
        </div>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
        <div>
          <h2 className="text-xl font-bold text-black">
            ₦{campaign.raised.toLocaleString()} raised
          </h2>
          <p className="text-gray-600">
            of ₦{campaign.goal.toLocaleString()} goal - {campaign.donations}{" "}
            donations
          </p>
        </div>

        <div className="relative w-full h-2 bg-gray-200 rounded-full mt-4">
          <div
            className="absolute top-0 left-0 h-2 bg-blue-500 rounded-full"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
        <p className="text-sm text-gray-600 mt-1">
          {progressPercentage}% of goal achieved
        </p>

        <div className="mt-6 space-y-2">
          <button className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
            Donate
          </button>
          <button className="w-full py-2 border border-gray-600 text-gray-800 rounded-lg hover:bg-gray-100">
            Volunteer
          </button>
        </div>
      </div>

      <div className="lg:col-span-3 mt-8 space-y-4">
        <h3 className="text-lg font-bold text-gray-900">Organizer</h3>
        <div className="flex items-center justify-between">
          <div>
            <p className="font-semibold text-gray-600">{campaign.organizer}</p>
            <p className="text-gray-600">{campaign.organizerLocation}</p>
          </div>
          <button className="py-2 px-4 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200">
            Contact
          </button>
        </div>
        <p className="text-sm text-gray-500">{campaign.createdAt}</p>
      </div>
    </div>
  );
};

export default CampaignDetails;
