/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import img from '../public/projects/img.png';
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px]  mx-auto  px-2   py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projets
        </p>

        <h2 className='py-4'>Projets realisées</h2>
        <div className='grid gap-8 md:grid-cols-2'>
          <ProjectItem
            title='ASSURANCE DE QUALITÉ LOGICIEL: GESTION DE COMMANDE DANS UN MAGASIN'
            url='/magasin'
            skill='C#'
            image={img}
          />
          <ProjectItem
            title="Developpement d'une site web pour la gestion des projets"
            url='/gestionprojets'
            image={img}
            skill='HTML/CSS/JS'
          />
          
        </div>
      </div>
    </div>
  );
};

export default Projects;
