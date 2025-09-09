

import React from 'react'

const Recommanded = ({onFilterByCompany}) => {
    const companies= ["Nike", "Adidas", "Puma", "Vans"]

  return (
    <div className="ml-50 h-50  flex flex-col bg-[#ffffff] justify-center border-2 border-black ">
      <div className="text-2xl font-bold mt-30 mb-4 ml-18">
        <h1>Recommanded</h1>
      </div>
      <div className="flex gap-4 mb-6 px-4 py-2 ml-14">
        {companies.map((company) => {
          return (
            <button
              key={company}
              onClick={() => onFilterByCompany(company)}
              className="px-4 py-2 bg-black text-white hover:text-black-600 hover:bg-gray-400 rounded-md transition-colors cursor-pointer"
            >
              {company}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Recommanded