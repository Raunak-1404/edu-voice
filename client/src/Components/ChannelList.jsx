import React, { useState } from "react";

const ChannelList = () => {
  // Temporary Array Of Channel Data
  const channels = [
    "L",
    "A",
    "V",
    "A",
    "N",
    "Y",
    "A",
    "G",
    "A",
    "W",
    "A",
    "R",
    "L",
    "A",
    "V",
    "A",
    "N",
    "Y",
    "A",
    "G",
    "A",
    "W",
    "A",
    "R",
  ];
  const [expand, setExpand] = useState(true);

  return (
    <div className="w-12 h-full">
      <div
        className={`relative transition w-80 h-full ${
          expand ? "" : "w-80"
        }`}
        style={expand?{transform:"translateX(-17rem)"}:{}}
      >
        <div className="overflow-y-scroll h-full bg-green-600  w-full channelList">
          {channels.map((channel) => (
            <div className="h-12 my-2 w-full px-1 py-2 flex justify-end items-center">
              <div className="bg-purple-700 flex aspect-square justify-center items-center h-10 rounded-full">
                {channel}
                {/* Logo */}
              </div>
              <div
                className={`${expand && "hidden"} mx-3 w-full bg-slate-300 p-2`}
              >
                <div className="flex  w-full justify-between">
                  <p>Channel Name</p>
                  <span>12-12AM</span>
                </div>
                <p>Last Chat said blah blah blah</p>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={() => {
            setExpand(!expand);
          }}
          className="absolute -right-4 top-0 bottom-0 w-4 h-10 m-auto bg-blue-800"
        >
          B
        </button>
      </div>
    </div>
  );
};

export default ChannelList;