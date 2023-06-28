import Link from 'next/link';
import React from 'react';
import { FaEthereum } from 'react-icons/fa';

const JackpotTable = () => {
  const participants = ['John', 'Emily', 'Michael', 'Sophia'];

  const tickets = [
    { id: 1, price: 10, drawDate: '2023-07-01', ticketNumber: '1234' },
    { id: 2, price: 20, drawDate: '2023-07-08', ticketNumber: '5678' },
    { id: 3, price: 15, drawDate: '2023-07-15', ticketNumber: '9012' },
  ];

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500">
      <div className="container mx-auto p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-4 text-center text-blue-600">Buy Lottery Tickets Online</h1>
        <h2 className="text-2xl font-semibold mb-2">Title</h2>
        <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

        <h2 className="text-2xl font-semibold mb-2">Participants</h2>
        <ul className="mb-4">
          {participants.map((participant, index) => (
            <li key={index}>{participant}</li>
          ))}
        </ul>

        <div className="flex justify-center space-x-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Generate lucky numbers
          </button>
          <Link href={`/results` + 1} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Draw results
          </Link>
        </div>

        <h2 className="text-2xl font-semibold mt-8 text-center ">Select Your Winning Lottery Numbers</h2>
        <div className="overflow-x-auto">
          <table className="w-full mt-4">
            <thead>
              <tr>
                <th className="py-2 px-4 bg-gray-200 text-left">#</th>
                <th className="py-2 px-4 bg-gray-200 text-left">Ticket Price</th>
                <th className="py-2 px-4 bg-gray-200 text-left">Draw Date</th>
                <th className="py-2 px-4 bg-gray-200 text-left">Ticket Number</th>
                <th className="py-2 px-4 bg-gray-200 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {tickets.map((ticket, index) => (
                <tr key={ticket.id}>
                  <td className="py-2 px-4">{index + 1}</td>
                  <td className="py-2 px-4">
                    <FaEthereum className="inline mr-1" />
                    {ticket.price}
                  </td>
                  <td className="py-2 px-4">{ticket.drawDate}</td>
                  <td className="py-2 px-4">{ticket.ticketNumber}</td>
                  <td className="py-2 px-4">
                    <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-1 px-2 rounded">
                      Buy Now
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default JackpotTable;
