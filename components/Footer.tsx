import { FaLocationArrow } from 'react-icons/fa6'

import { socialMedia } from '@/data'
import MagicButton from './ui/MagicButton'

const Footer = () => {
  return (
    <footer className='w-full pt-20 pb-10' id='contact'>
      {/* background grid */}
      {/* <div className='w-full absolute left-0 -bottom-72 min-h-96 pointer-events-none'>
        <img
          src='/footer-grid.svg'
          alt='grid'
          className='w-full h-full opacity-50'
        />
      </div> */}

      <div className='flex flex-col items-center'>
        <h1 className='heading lg:max-w-[45vw]'>
          Ready to take{' '}
          <span className='text-orange-500'>your digital presence</span> to the
          next level?
        </h1>
        <p className='text-white-200 md:mt-10 my-5 text-center'>
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <a href='mailto:rohan02shrestha@gmail.com'>
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position='right'
          />
        </a>
      </div>
      <div className='flex mt-10 md:flex-row justify-between items-center flex-col-reverse gap-8 md:mt-16'>
        <p className='md:text-base text-sm md:font-normal font-light'>
          Copyright © 2025 Leaflet Digital
        </p>

        <div className='flex items-center md:gap-3 gap-6'>
          {socialMedia.map(info => (
            // <div
            //   key={info.id}
            //   className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300'
            // >
            //   <img src={info.img} alt='icons' width={20} height={20} />
            // </div>
            <button
              key={info.id}
              className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 transform hover:-translate-y-1 transition duration-400'
            >
              <img src={info.img} alt='icons' width={20} height={20} />
            </button>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
