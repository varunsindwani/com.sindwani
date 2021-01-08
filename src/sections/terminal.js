import React from 'react';

const Terminal = () =>    {
    return(
        <section className="bg-one py-32 w-full font-hack font-bold px-4 md:px-0 lg:px-0">
        <div className="w-full max-w-4xl bg-black mx-auto px-6 py-6 rounded-md">
          <div className="flex">
            <div className="w-3 h-3 bg-purple-700 rounded-full mr-3"></div>
            <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
            <div className="w-3 h-3 bg-yellow-600 rounded-full"></div>
          </div>
          <div className="text-white font-md mt-6">
            <div className="font-normal mb-1"> Welcome to fish, the friendly interactive shell </div>
            <div className="mb-1"> <span className="text-highlight">com.sindwani </span>on <span className="text-purple-500">master</span> via<span className="text-green-400"> ⬢ v13.2.0 </span></div>
            <div className="pl-4 mb-2">{'>'} new person Varun = new person()</div>
            <div className="pl-4 mb-1">{'>'} Varun.origin()</div>
            <div className="pl-12 mb-2">Born in 🇮🇳 India raised in 🇨🇦 Canada</div>
            <div className="pl-4 mb-1">{'>'} Varun.motto()</div>
            <div className="pl-12 mb-2">🍵 Sharing tea with a fascinating stranger is one of life’s true delights - Iroh</div>
            <div className="pl-4 mb-1">{'>'} Varun.favouriteBooks()</div>
            <div className="pl-12 mb-2">["💻 Clean Code", "🌪️ Name of the wind", "🐲 Game of Thrones"]</div>
            <div className="pl-4 mb-1">{'>'} Varun.favouriteFoods()</div>
            <div className="pl-12 mb-2">["🍜 Maggi Noodles", "🍦 Icecream Float", "🥕 Carrots"]</div>
            <div className="pl-4 mb-1">{'>'} Varun.favouriteTV()</div>
            <div className="pl-12 mb-2">["🔥 Avatar: The Last Airbender", "🧪 Full Metal Alchemist", "🚀 Star Wars"]</div>
          </div>
        </div>
    </section>
);
}

export default Terminal;
