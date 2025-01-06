export const Performance = () => {
  const driveDetails = [
    { label: 'Battery', value: 'Long Range' },
    { label: 'Range (EPA est.)', value: '298 mi' },
    { label: 'Acceleration', value: '2.9 s 0-60 mph' },
    { label: 'Drive', value: 'Dual Motor All-Wheel Drive' },
  ];

  const dimensionDetails = [
    { label: 'Weight (Curb Mass)', value: '4,054 lbs' },
    { label: 'Cargo', value: '24 cu ft' },
    { label: 'Wheels', value: '20" Warp Wheels' },
    { label: 'Seating', value: '5 Adults' },
    {
      label: 'Displays',
      value: '15.4" Center Touchscreen, 8" Rear Touchscreen',
    },
    { label: 'Ground Clearance', value: '5.0"' },
    {
      label: 'Overall Width',
      value: 'Folded mirrors: 76.1", Extended mirrors: 82.2"',
    },
    { label: 'Overall Height', value: '56.3"' },
    { label: 'Overall Length', value: '185.9"' },
    { label: 'Track - Front & Rear', value: '62.4" & 61.8"' },
  ];

  const chargingDetails = [
    {
      label: 'Supercharging Max/Payment Type',
      value: '250 kW Max; Pay Per Use',
    },
    { label: 'Charging Speed', value: 'Up to 142 miles added in 15 minutes' },
  ];

  const warrantyDetails = [
    {
      label: 'Basic Vehicle',
      value: '4 years or 50,000 mi, whichever comes first',
    },
    {
      label: 'Battery & Drive Unit',
      value: '8 years or 120,000 mi, whichever comes first',
    },
  ];

  return (
    <div
      id='performance'
      className='scroll-m-20 bg-black px-2 lg:px-8 flex flex-col items-center h-auto pb-6'
    >
      <div className='w-full text-center text-3xl font-semibold text-white pt-4'>
        Next-Level Performance
      </div>
      <div className='w-[90%] text-white font-mono text-center py-4'>
        Experience our latest generation Performance drive unit—the most
        powerful ever fitted to Model 3.
      </div>
      <video
        controls
        poster='https://digitalassets.tesla.com/tesla-contents/image/upload/h_1800,w_2880,c_fit,f_auto,q_auto:best/Model-S-Exterior-Hero-Desktop-Global'
        className='rounded aspect-video'
      >
        <source
          src='https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto:best/Model-3-Performance-Performance-Desktop-LHD.mov'
          type='video/mp4'
        />
        Your browser does not support the video tag.
      </video>
      <div className='flex flex-col lg:flex-row font-light mx-2 border-2 border-gray-800 rounded-xl '>
        <div className=''>
          {/* Drive Section */}
          <div className='w-full text-white flex flex-col justify-center  p-6 shadow-md '>
            <div className='w-full text-2xl font-semibold text-red-600 py-4'>
              Drive
            </div>
            <div className='flex flex-col gap-4'>
              {driveDetails.map((item, index) => (
                <span key={index} className='font-thin text-white '>
                  <strong className='font-light text-gray-500'>
                    {item.label}:
                  </strong>{' '}
                  {item.value}
                </span>
              ))}
            </div>
          </div>

          {/* Charging Section */}
          <div className='w-full text-white flex flex-col justify-center  p-6 shadow-md'>
            <div className='w-full  text-xl font-semibold text-red-600 py-4'>
              Charging
            </div>
            <div className='flex flex-col gap-4'>
              {chargingDetails.map((item, index) => (
                <span key={index} className='font-thin text-white'>
                  <strong className='font-light text-gray-500'>
                    {item.label}:
                  </strong>{' '}
                  {item.value}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Dimensions Section */}
        <div className='w-full text-white flex flex-col justify-start  p-6 shadow-md'>
          <div className='w-full text-2xl font-semibold text-red-600 py-4'>
            Dimensions
          </div>
          <div className='flex flex-col gap-4'>
            {dimensionDetails.map((item, index) => (
              <span key={index} className='font-thin text-white'>
                <strong className='font-light text-gray-500 '>
                  {item.label}:
                </strong>{' '}
                {item.value}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
