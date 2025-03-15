import { projects } from '@/data'
import React from 'react'

const RecentProjects = () => {
  return (
    <div className='py-20'>
      <h1 className='heading'>
        A small selection of {''}
        <span className='text-orange-500'>Recent Projects</span>
      </h1>
      <div className='flex flex-wrap items-center justify-center p-4 gap-16 mt-10'>
        {projects.map(project => (
          <div
            key={project.id}
            className='lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]'
          >
            {project.title}
          </div>
        ))}
      </div>
    </div>
  )
}

export default RecentProjects
