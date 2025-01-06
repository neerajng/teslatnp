export const Sustainability = () => {
  const sustainabilityData = [
    {
      title: '20 Million Metric Tons of CO2 Avoided',
      description:
        "In pursuit of our mission to accelerate the world's transition to sustainable energy, we build products that are designed to replace some of the planets biggest polluters. Every product we sell helps owners lower emissions. In 2023, our customers avoided releasing over 20 million metric tons of CO2e into our atmosphere.",
    },
    {
      title: 'Tackling Climate Change',
      description:
        'At Tesla, we imagine a world where you can power everything with renewable energy. Our team is dedicated to solving problems that will have the most meaningful impact on emissions. Our team is dedicated to solving problems that will have the most meaningful impact on emissions.  Our team is dedicated to solving problems that will have the most meaningful impact on emissions.',
    },
    {
      title: 'Making the Transition a No-Brainer',
      description:
        'A lot of people are worried their ability to charge their EV will impact its usability and practicality. While the most convenient place to charge is at home overnight, our expansive, ultra-fast and reliable Supercharger network means you can spend less time planning your route around charging and more time enjoying your trip.',
    },
  ];

  return (
    <div
      id='sustainability'
      className='flex flex-col justify-center px-2 lg:px-8 py-4 h-full scroll-mt-20 '
    >
      <div className='flex pb-4 justify-center font-bold text-center'>
        Impact Report 2025 A Sustainable Future is Within Reach
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-3 items-center border border-red-700 divide-y lg:divide-y-0 lg:divide-x divide-neutral-700 rounded-xl'>
        {sustainabilityData.map((item, index) => (
          <a
            key={index}
            className='group relative z-10 p-4 md:p-6 h-full flex flex-col bg-white focus:outline-none first:rounded-t-xl last:rounded-b-xl lg:first:rounded-l-xl lg:first:rounded-tr-none lg:last:rounded-r-xl lg:last:rounded-bl-none before:absolute before:inset-0 before:bg-gradient-to-b before:hover:from-transparent before:hover:via-transparent before:hover:to-[#ff0]/10 before:via-80% before:focus:from-transparent before:focus:via-transparent before:focus:to-[#ff0]/10 before:-z-[1] before:last:rounded-b-xl lg:before:first:rounded-s-xl lg:before:last:rounded-e-xl lg:before:last:rounded-bl-none before:opacity-0 before:hover:opacity-100 before:focus:opacity-100'
            href='#'
          >
            <div className='mb-5'>
              <div className='mt-5'>
                <p className='font-semibold text-lg text-black'>{item.title}</p>
                <h3 className='mt-5 text-sm text-black'>{item.description}</h3>
              </div>
            </div>
            <p className='mt-auto'>
              <span className='font-medium text-sm text-red-600 pb-1 border-b-2 border-neutral-700 group-hover:border-black group-focus:border-[#ff0] transition focus:outline-none'>
                Learn More
              </span>
            </p>
          </a>
        ))}
      </div>
    </div>
  );
};
