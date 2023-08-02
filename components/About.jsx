import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import MyPic from '../public/projects/my.jpeg';

const About = () => {
  return (
    <div id='about' className='flex items-center w-full p-2 py-16 md:h-screen '>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-6'>
        <div className='col-span-2'>
          <p className='uppercase text-xl text-[#5651e5] tracking-widest'>
            A propos
          </p>
          <p className='py-2 font-semibold text-gray-600'>
          Bonjour,Je me présente Yasmine Merzougui, je suis étudiante en DEC programmation informatique, je suis actuellement à ma dernière session. J'ai toujours été passionnée par l'informatique et je compte vraiment avoir mon diplôme pour trouver un emploi dans mon domaine de prédilection et peut-être fonder ma propre entreprise à l'avenir.
          </p>
         
          <Link href='/#projects'>
            <p className='py-4 font-semibold text-gray-600 underline cursor-pointer'>
              Voila mes projets
            </p>
          </Link>
        </div>

        <div className='flex items-center justify-center w-full h-auto p-4 m-auto duration-500 ease-in shadow-xl shadow-gray-400 rounded-xl hover:scale-105'>
          <Image
            className='rounded-xl'
            alt='me'
            src={MyPic}
            // width='700'
            // height='700'
          />
        </div>
      </div>
    </div>
  );
};

export default About;
