'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Briefcase, Calendar } from 'lucide-react'
import Image from 'next/image'

// Helper function to get the correct path with basePath
const getAssetPath = (path: string): string => {
  const basePath = '/portafolio'
  const cleanPath = path.startsWith('/') ? path : `/${path}`
  return `${basePath}${cleanPath}`
}

const experiences = [
  {
    company: 'BOTBUSTERS 4635',
    position: 'Programming Mentor',
    period: 'May 2025 – Present',
    description: [
      'Led a programming group of 30 students',
      'Taught OOP (command-based coding, PID, Feedforward)',
      'Developed vision systems (OpenCV, TensorFlow, AprilTags)',
      'Managed Git version control and Scrum workflow',
      'Promoted teamwork and inclusion',
    ],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    company: 'University of California, San Diego',
    position: 'Research Assistant',
    period: 'May 2024 – Aug 2024',
    description: [
      'Researched water droplet levitation for medical applications',
      'Analyzed droplet dynamics across frequencies',
    ],
    color: 'from-purple-500 to-pink-500',
  },
  {
    company: 'BOTBUSTERS 13531',
    position: 'Programmer',
    period: 'Sept 2021 – May 2025',
    description: [
      'Programmed robots using C++, Java, Python',
      'Competed in 23+ tournaments, winning 19',
      'Created automation and computer vision solutions',
    ],
    color: 'from-green-500 to-emerald-500',
  },
]

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="experience" ref={ref} className="section bg-white dark:bg-gray-900">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Experience
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Building robots and inspiring engineers
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${exp.color} opacity-10 rounded-xl blur-xl`} />

              {/* Card */}
              <div className="relative glass rounded-xl p-6 card-hover h-full">
                <div className="flex items-start gap-4 mb-4">
                  <div className={`p-3 bg-gradient-to-br ${exp.color} rounded-lg`}>
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-1 text-gray-900 dark:text-white">
                      {exp.company}
                    </h3>
                    <p className="text-electric-blue font-semibold mb-2">
                      {exp.position}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </div>
                  </div>
                </div>

                {/* Always Visible Description */}
                <ul className="mt-4 space-y-2 pl-4">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-sm text-gray-600 dark:text-gray-400 list-disc">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Experience Images */}
        <div className="max-w-5xl mx-auto mt-12 grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="relative group overflow-hidden rounded-xl shadow-2xl h-[400px]"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
            <Image
              src={getAssetPath('/images/robotics-competition.jpeg')}
              alt="Robotics Competition"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
              <h3 className="text-xl font-bold mb-1">Robotics Competition</h3>
              <p className="text-gray-200 text-sm">Building and programming robots</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="relative group overflow-hidden rounded-xl shadow-2xl h-[400px]"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
            <Image
              src={getAssetPath('/images/ucsd.jpeg')}
              alt="UCSD Research"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
              <h3 className="text-xl font-bold mb-1">University of California, San Diego</h3>
              <p className="text-gray-200 text-sm">Research Assistant</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

