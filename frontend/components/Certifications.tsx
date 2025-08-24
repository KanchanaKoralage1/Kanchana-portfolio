import React from 'react'
import { HoverEffect } from './ui/Card-hover-effect'
import { certifications } from '@/data'

const Certifications = () => {
  return (
    <div className="max-w-5xl mx-auto px-8" id="certifications">
         <div className="mb-18 mt-10 text-center">
        <h1 className="heading">
           These are my {' '}
          <span className="text-purple-800">Certifications & Archivements</span>
        </h1>
      </div>
      <HoverEffect items={certifications} />
      
    </div>
  )
}

export default Certifications
