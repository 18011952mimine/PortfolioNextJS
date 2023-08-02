import Image from 'next/image';
import React from 'react';
import img from '../public/projects/img.png';
import Link from 'next/link';

const magasin = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={img}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Gestion d'un magasin</h2>
          <h3>
            C#
          </h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Projet</p>
          <p>
          Ce projet représente le développement d'un système avancé de gestion de commandes pour un magasin de détail. L'application logicielle est conçue pour optimiser et simplifier les processus liés aux clients, aux produits, aux commandes et à la gestion globale du magasin
          </p>
         
    
        </div>
        
        </div>
        <Link href='/#projects'>
          <p className='underline cursor-pointer'>Back</p>
        </Link>
      </div>
  );
};

export default magasin;
