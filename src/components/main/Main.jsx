import { Hero } from '@/components/uicomponents/Hero';
import { KeyFeatures } from '@/components/uicomponents/KeyFeatures';
import { Performance } from '@/components/uicomponents/Performance';
import { Sustainability } from '@/components/uicomponents/Sustainability';

export const Main = () => {
  return (
    <div className='flex flex-col justify-center gap-2'>
      <div className='flex justify-center'>
        <Hero />
      </div>
      <div className='flex justify-center'>
        <KeyFeatures />
      </div>
      <Performance />
      <Sustainability />
    </div>
  );
};
