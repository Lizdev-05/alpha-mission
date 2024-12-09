// import React from "react";

// const CampaignCard = ({
//   title,
//   raised,
//   donations,
//   volunteers,
//   prayerGroup,
// }) => (
//   <div className="bg-white shadow-md rounded-lg p-4">
//     <img
//   src="https://as1.ftcdn.net/v2/jpg/03/30/32/28/1000_F_330322889_loyXDVKHBntIFBXuLT6LvqDxmHU9BzZn.jpg"
//   alt="Mission Image"
//       className="rounded-lg w-full object-cover"
//     />
//     <div className="mt-4">
//       <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
//       <p className="text-sm text-gray-500">{raised} raised</p>
//       <div className="mt-2 text-gray-600 text-sm">
//         <p>💌 {donations} donations</p>
//         <p>🙌 {volunteers} volunteers</p>
//         <p>🙏 {prayerGroup} members in prayer group</p>
//       </div>
//       <button className="mt-4 bg-blue-500 text-white w-full py-2 rounded-lg hover:bg-blue-600">
//         Donate
//       </button>
//     </div>
//   </div>
// );

// export default CampaignCard;

const CampaignCard = ({
  title,
  raised,
  goal,
  donations,
  volunteers,
  prayerGroup,
}) => {
  const progressPercentage = Math.min((raised / goal) * 100, 100).toFixed(2);

  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <img
        src="https://as1.ftcdn.net/v2/jpg/03/30/32/28/1000_F_330322889_loyXDVKHBntIFBXuLT6LvqDxmHU9BzZn.jpg"
        alt="Mission Image"
        className="rounded-lg w-full object-cover"
      />
      <div className="mt-4">
        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
        <p className="text-sm text-gray-500">
          ₦{raised.toLocaleString()} raised of ₦{goal.toLocaleString()}
        </p>

        <div className="relative w-full h-2 bg-gray-200 rounded-full mt-2">
          <div
            className="absolute top-0 left-0 h-2 bg-blue-500 rounded-full"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
        <p className="text-sm text-gray-600 mt-1">
          {progressPercentage}% of goal achieved
        </p>

        <div className="mt-2 text-gray-600 text-sm">
          <p>💌 {donations} donations</p>
          <p>🙌 {volunteers} volunteers</p>
          <p>🙏 {prayerGroup} members in prayer group</p>
        </div>
        {/* <button className="mt-4 bg-blue-500 text-white w-full py-2 rounded-lg hover:bg-blue-600">
          Donate
        </button> */}

        <div className="mt-4 flex items-center space-x-2">
          <button className="bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 w-[75%]">
            Donate
          </button>

          <button className="w-[20%] h-10 flex items-center justify-center bg-gray-200 rounded-lg hover:bg-gray-300">
            <span className="text-gray-600 font-bold flex items-center justify-center mb-2">
              ...
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CampaignCard;
