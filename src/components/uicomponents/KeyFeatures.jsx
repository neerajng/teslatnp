export const KeyFeatures = () => {
  const cards = [
    {
      title: 'Tesla Autopilot',
      description:
        "Tesla's Autopilot offers semi-autonomous driving, enhancing safety and convenience for drivers with features like lane centering and automatic braking.",
      imageUrl:
        'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExMWp1c2xmd3l3YWFwN3Z3YnR5NXBnMmFha3NiZHd4MWFhbGJjYThtbiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xT39DhBvK92OIeFsVG/giphy.webp',
      link: '#',
    },
    {
      title: 'Tesla Supercharger Network',
      description:
        'Tesla Supercharger network allows for rapid, high-efficiency charging of Tesla vehicles, enabling long road trips with minimal wait times.',
      imageUrl:
        'https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExbnpyaGtxeGQ4YjMxaWZheW43ZHJkb25jd3puNnB0OG05Y3JpcGh2ZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Q7jeGZQxPqqEZRfEOJ/giphy.webp',
      link: '#',
    },
    {
      title: 'Tesla Model S Performance',
      description:
        'The Tesla Model S is an all-electric luxury sedan offering cutting-edge performance with incredible speed, long-range capabilities, and premium features.',
      imageUrl:
        'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExcTF1cGF6djc5bjF5amt3Zjl0OW42am5vcWJwdDN1bDNhejZwdjdxZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/RWZRMPbu3lc7m/giphy.webp',
      link: '#',
    },
    {
      title: 'Tesla Energy Solutions',
      description:
        'Tesla Energy provides solar panels and energy storage solutions like Powerwall to help customers generate, store, and manage clean energy for homes and businesses.',
      imageUrl:
        'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExZnJ6YndzOGJ5MHN2bHpmZzBmZnNubGR0cmR1NXllbDc3bGcyaXI1ayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/L2fiwKj5VfpFycNDZA/giphy.webp',
      link: '#',
    },
  ];

  return (
    <div
      id='features'
      className='scroll-m-20 max-w-[100rem] px-4 py-4 sm:px-6 lg:px-8 '
    >
      <div className='w-full text-center text-3xl font-semibold'>
        Key Features
      </div>
      <div className='grid md:grid-cols-2'>
        {cards.map((card, index) => (
          <a
            key={index}
            className='group block overflow-hidden focus:outline-none m-2 '
            href={card.link}
          >
            <div className='flex flex-col items-center bg-red-50 rounded  p-2 h-full'>
              <div className='shrink-0 flex justify-center relative rounded-xl overflow-hidden w-full   h-44'>
                <img
                  className='group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out size-full absolute top-0 start-0 object-cover rounded-xl'
                  src={card.imageUrl}
                  alt='Features Image'
                />
              </div>
              <div className='grow'>
                <h3 className='text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-neutral-300 dark:group-hover:text-white'>
                  {card.title}
                </h3>
                <p className='mt-3 text-gray-600 dark:text-neutral-400 '>
                  {card.description}
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};
