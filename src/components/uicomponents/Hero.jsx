export const Hero = () => {
  const carouselItems = [
    {
      title: 'Cybertruck',
      description: 'The future of electric trucks is here.',
      imageUrl:
        'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Cybertruck-Second-Hero-Desktop.jpg',
    },
    {
      title: 'Model S',
      description: 'The most advanced electric car in the world.',
      imageUrl:
        'https://digitalassets.tesla.com/tesla-contents/image/upload/h_1800,w_2880,c_fit,f_auto,q_auto:best/Model-S-Exterior-Hero-Desktop-Global',
    },
    {
      title: 'Model 3',
      description: 'Innovation in every detail, designed for everyday driving.',
      imageUrl:
        'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-3-Exterior-Hero-Desktop-LHD.jpg',
    },
    {
      title: 'Model X',
      description:
        'The ultimate electric SUV with performance and versatility.',
      imageUrl:
        'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-X-Performance-Desktop.jpg',
    },
    {
      title: 'Model Y',
      description:
        'Compact SUV with high-performance capabilities and ample space.',
      imageUrl:
        'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-Y-Range-Desktop-LHD-v2.jpg',
    },
  ];

  return (
    <div
      id='landing'
      data-hs-carousel='{"loadingClasses": "opacity-0"}'
      className='relative mt-20 scroll-m-20'
    >
      <div className='hs-carousel relative overflow-hidden w-[90vw] h-[30rem] md:h-[calc(100vh-106px)] '>
        <div className='hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700 opacity-0'>
          {carouselItems.map((item, index) => (
            <div key={index} className='hs-carousel-slide'>
              <div
                className='h-[30rem] md:h-[calc(100vh-106px)] flex flex-col bg-cover bg-center bg-no-repeat'
                style={{ backgroundImage: `url(${item.imageUrl})` }}
              >
                <div className='mt-auto w-2/3 md:max-w-lg ps-5 pb-5 md:ps-10 md:pb-10'>
                  <span className='block text-white font-bold'>
                    {item.title}
                  </span>
                  <span className='block text-white text-xl md:text-3xl shadow-lg'>
                    {item.description}
                  </span>
                  <div className='mt-5 '>
                    <a
                      className='py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl bg-white border border-transparent text-black hover:bg-red-600 hover:text-white focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none'
                      href='/models'
                    >
                      Order Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Arrows */}
      <button
        type='button'
        className='hs-carousel-prev hs-carousel-disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 start-0 inline-flex justify-center items-center w-12 h-full text-black hover:bg-white/20 rounded-s-2xl focus:outline-none focus:bg-white/20'
      >
        <span className='text-2xl' aria-hidden='true'>
          <svg
            className='shrink-0 size-3.5 md:size-4'
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            fill='currentColor'
            viewBox='0 0 16 16'
          >
            <path
              fillRule='evenodd'
              d='M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z'
            ></path>
          </svg>
        </span>
        <span className='sr-only'>Previous</span>
      </button>

      <button
        type='button'
        className='hs-carousel-next hs-carousel-disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 end-0 inline-flex justify-center items-center w-12 h-full text-black hover:bg-white/20 rounded-e-2xl focus:outline-none focus:bg-white/20'
      >
        <span className='sr-only'>Next</span>
        <span className='text-2xl' aria-hidden='true'>
          <svg
            className='shrink-0 size-3.5 md:size-4'
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            fill='currentColor'
            viewBox='0 0 16 16'
          >
            <path
              fillRule='evenodd'
              d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z'
            ></path>
          </svg>
        </span>
      </button>
      {/* End Arrows */}
    </div>
  );
};
