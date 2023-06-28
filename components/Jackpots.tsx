import { useState } from 'react';
import Link from 'next/link';

const Jackpots = ({ jackpots}: any) => {
 
  return (
    <section className="py-10 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Section Title</h2>
          <p className="text-lg text-gray-600 mb-8">Section Subtitle</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {jackpots?.map((jackport: any, i: any) => (
            <div className="bg-white rounded-lg shadow-md border-2 border-purple-500" key={jackport.id}>
              {/* <img src={jackport.image} alt={jackport.title} className="rounded-t-lg w-full" /> */}

              <div className="p-4 flex flex-col justify-center items-center">
                <h3 className="text-lg font-bold mb-2 text-purple-600">{jackport.title}</h3>
                <p className="text-gray-600 mb-2">{jackport.description}</p>
                <p className="text-purple-600 font-bold mb-2">Win upto: {jackport.prize} ETH</p>
                <p className="text-gray-600 mb-4">Draws on: <span className="text-blue-600">{jackport.drawsAt}</span></p>
                <p className="text-gray-600 mb-4">Ticket Price: <span className="text-blue-600">{jackport.ticketPrice}</span></p>

                <div className="flex justify-center">
                  <Link href={'/jackpots/' + jackport.id} className="inline-block bg-purple-500 hover:bg-purple-600 text-white py-2 px-6 rounded-lg text-center">
                    Play Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Jackpots;
