import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';

export const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full flex justify-center items-center p-2 mx-auto'>
        <div>
          <h1 className='py-4 text-gray-700'>
            Je suis <span className='text-[#5651e5]'>Yasmine</span>
          </h1>
          <h1 className='py-4 text-gray-700'>Developpeur</h1>
          <p className='py-4 max-w-[70%] text-gray-600 m-auto font-semibold'>
          Bonjour,Je me présente Yasmine Merzougui, je suis étudiante en DEC programmation informatique, je suis actuellement à ma dernière session. J'ai toujours été passionnée par l'informatique et je compte vraiment avoir mon diplôme pour trouver un emploi dans mon domaine de prédilection et peut-être fonder ma propre entreprise à l'avenir.
          </p>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <a
              href='https://www.linkedin.com/in/yasmine-merzougui-869bbb279/'
              target='_blank'
              rel='noreferrer'
            >
              <div className='p-6 duration-500 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110'>
                <FaLinkedinIn color='blue' />
              </div>
            </a>
            <a
              href='https://github.com/18011952mimine'
              target='_blank'
              rel='noreferrer'
            >
              <div className='p-6 duration-500 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110'>
                <FaGithub color='black' />
              </div>
            </a>

            <a
              href='mailto:yasminemerzougui0@gmail.com'
              target='_blank'
              rel='noreferrer'
            >
              <div className='p-6 duration-500 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110'>
                <AiOutlineMail color='black' />
              </div>
            </a>

          </div>
        </div>
      </div>
    </div>
  );
};
