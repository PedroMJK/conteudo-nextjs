"use client"

import { useState } from 'react';


export default function BackgroundChanger () {
  const [bgColor, setBgColor] = useState('bg-white');

  // Função que gera uma cor aleatória e atualiza o estado.
  const changeColor = () => {
    const colors = ['bg-red-500', 'bg-blue-500', 'bg-green-500', 'bg-yellow-500'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setBgColor(randomColor);
  };

  return (
    <div className={`${bgColor} h-screen flex justify-center items-center`}>
      <button
        className="bg-black text-white px-4 py-2 rounded cursor-pointer"
        onClick={changeColor}
      >
        Change Background Color
      </button>
    </div>
  );
}
