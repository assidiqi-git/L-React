import React from "react";

function Card({ username = "default", post = "tidak ada" }) {
  return (
    <>
      <div className="flex items-center rounded-2xl space-x-3 bg-green-100 mb-2">
        <div className="p-3">
          <img
            className="size-48 rounded-md"
            alt=""
            src="https://placehold.co/600x400"
          />
        </div>
        <div className="flex flex-col items-start">
          <span className="text-2xl font-medium">{username}</span>
          <span className="font-medium text-sky-500">{post}</span>
          <span className="flex gap-2 font-medium text-gray-600 dark:text-gray-400">
            <span>No. 4</span>
            <span>·</span>
            <span>2025</span>
          </span>
        </div>
      </div>
    </>
  );
}

export default Card;
