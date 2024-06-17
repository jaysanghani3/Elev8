const Milestones = () => {
  const data = [
    { title: 'PRODUCTS', number: 13 },
    { title: 'Team Members', number: 45 },
    { title: 'PRESENCE IN INDIAN CITIES', number: 6 },
    { title: 'ESTEEMED CUSTOMERS', number: 30 },
  ];
  return (
    <div className="w-11/12 lg:w-10/12 mx-auto grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 my-11 p-5 rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] ">
      <h1 className=" text-[#01204E] col-span-full text-2xl font-bold underline md:text-center decoration-yellow-400 underline-offset-8 decoration-4 mb-2">Milestones</h1>
      {data.map((item) => (
        <div key={item.title} className="bg-gray-200 p-4 rounded-lg text-center">
          <h2 className=" text-sm md:text-xl font-semibold mb-3">{item.title}</h2>
          <p className=" text-xl md:text-3xl font-bold">{item.number} + </p>
        </div>
      ))}
    </div>
  )
}

export default Milestones
