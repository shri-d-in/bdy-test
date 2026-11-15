// LoveShower.jsx
import React from "react";
import "./LoveShower.css"; // We'll keep the animation styles here

const LoveShower = ({ message }) => {
  const generateFallingItems = () => {
    const items = [];
    const numberOfItems = 100;
    const possibleItems = [
      "⭐",
      "⭐",
      "⭐",
      "⭐",
      "⭐",
      "🌸",
      "🌷",
      "🌺",
      "🌻",
      "🌼",
      "🎈",
      "🎉",
      "💌",
      "🌟",
      "✨",
      "🎁",
      "🎊",
      "🌙",
      "🔥",
      "💥",
      "💫",
      "🌈",
      "🌞",
      "⭐",
      "🍓",
      "😘",
      "❣️",
      "🥀",
      "🪷",
      "🌹",
      "⭐",
      "🥰",
      "⭐",
      "😊",
      "👸",
      "🥺",
    ];

    for (let i = 0; i < numberOfItems; i++) {
      const randomItem =
        possibleItems[Math.floor(Math.random() * possibleItems.length)];

      items.push(
        <div
          key={i}
          className={`falling ${
            randomItem === "🎈"
              ? "balloon"
              : randomItem === "⭐"
              ? "star"
              : "flower"
          }`}
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            fontSize: `${Math.random() * 3 + 1.5}rem`,
          }}
        >
          {randomItem}
        </div>
      );
    }

    return items;
  };

  return (
    <div className="hearts-and-flowers-shower">
      <div className="text-love">
        <p className="mt-30 text-xl font-semibold animate-text-fadeIn2">
          {message ||
            "Water is not enough... You deserve all the love the world has to offer! 🌍❤️"}
        </p>
      </div>
      {generateFallingItems()}
    </div>
  );
};

export default LoveShower;
