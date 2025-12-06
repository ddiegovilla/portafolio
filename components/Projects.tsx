'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect, useCallback } from 'react'
import { ExternalLink, X } from 'lucide-react'
import Image from 'next/image'

type ProjectMedia = {
  type: 'video' | 'image'
  src: string
  alt?: string
}

type Project = {
  title: string
  description: string
  technologies: string[]
  media: ProjectMedia[]
  link?: string
  color: string
}

const projects: Project[] = [
  {
    title: 'Autonomous Bottle Conveyor System',
    description: 'Developed a closed-loop conveyor system with PID velocity control achieving ±2% steady-state error. Implemented encoder distance-tracking and automated bottle classification logic.',
    technologies: ['C++', 'WPILib', 'PID Control', 'Encoders'],
    media: [
      { type: 'image', src: '/images/bandaTransportadora-Onshape.jpeg', alt: 'Autonomous Bottle Conveyor System - Onshape Design' },
      { type: 'image', src: '/images/bandaTransportadora-real.jpeg', alt: 'Autonomous Bottle Conveyor System - Real Implementation' },
    ],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'FTC Robot Software Stack (2024-2025)',
    description: 'Designed modular OOP architecture for mobility and scoring mechanisms. Integrated AprilTags + CV pipeline reducing autonomous path error by 35%. Tuned PID + Feedforward improving mechanism response time by 28%.',
    technologies: ['Java', 'Kotlin', 'OpenCV', 'AprilTags', 'PID', 'Feedforward'],
    media: [
      { type: 'video', src: '/videos/ftc-robot-video.mp4' },
      { type: 'image', src: '/images/ftc-robot.jpeg', alt: 'FTC Robot Software Stack' },
    ],
    color: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Water Rocket Engineering',
    description: 'Modeled thrust, drag, and optimal water-volume parameters using numerical methods. Designed aerodynamic nosecone improving drag performance and launch speed through physics modeling and simulation.',
    technologies: ['MATLAB', 'Physics Modeling', 'Numerical Methods', 'Aerodynamics'],
    media: [
      { type: 'video', src: '/videos/botella-video.mp4' },
      { type: 'image', src: '/images/botellaCAD.jpeg', alt: 'Water Rocket CAD Design' },
    ],
    color: 'from-green-500 to-emerald-500',
  },
]

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [expandedImage, setExpandedImage] = useState<{ src: string; alt: string } | null>(null)

  const handleImageClick = (media: ProjectMedia, projectTitle: string) => {
    if (media.type === 'image') {
      setExpandedImage({
        src: media.src,
        alt: media.alt || projectTitle,
      })
    }
  }

  const closeExpandedImage = useCallback(() => {
    setExpandedImage(null)
  }, [])

  // Handle ESC key and body scroll lock
  useEffect(() => {
    if (expandedImage) {
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden'
      
      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          closeExpandedImage()
        }
      }
      
      window.addEventListener('keydown', handleEscape)
      return () => {
        document.body.style.overflow = 'unset'
        window.removeEventListener('keydown', handleEscape)
      }
    }
  }, [expandedImage, closeExpandedImage])

  return (
    <section id="projects" ref={ref} className="section bg-gray-50 dark:bg-navy">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Showcasing my work with videos and photos
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative flex"
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-10 rounded-xl blur-xl`} />

              {/* Card */}
              <div className="relative glass rounded-xl overflow-hidden card-hover h-full flex flex-col">
                {/* Media Container */}
                <div className="relative w-full aspect-video bg-gray-200 dark:bg-gray-800 overflow-hidden">
                  {project.media[0]?.type === 'video' ? (
                    <video
                      src={project.media[0].src}
                      controls
                      className="absolute inset-0 w-full h-full object-cover"
                      preload="metadata"
                    >
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <div
                      onClick={() => project.media[0] && handleImageClick(project.media[0], project.title)}
                      className="absolute inset-0 cursor-pointer hover:opacity-90 transition-opacity"
                    >
                      <Image
                        src={project.media[0]?.src || '/images/robotics-competition.jpeg'}
                        alt={project.media[0]?.alt || project.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                  )}

                  {/* Multiple Media Indicator */}
                  {project.media.length > 1 && (
                    <div className="absolute bottom-2 right-2">
                      <div className="px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-white text-xs">
                        +{project.media.length - 1} more
                      </div>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4 flex-1">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Additional Media Preview (if multiple) */}
                  {project.media.length > 1 && (
                    <div className="mt-4 flex gap-2 overflow-x-auto pb-2">
                      {project.media.slice(1, 4).map((media, mediaIndex) => (
                        <div
                          key={mediaIndex}
                          className="relative flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden bg-gray-200 dark:bg-gray-800"
                        >
                          {media.type === 'video' ? (
                            <video
                              src={media.src}
                              className="w-full h-full object-cover"
                              preload="metadata"
                            />
                          ) : (
                            <div
                              onClick={() => handleImageClick(media, project.title)}
                              className="cursor-pointer hover:opacity-90 transition-opacity"
                            >
                              <Image
                                src={media.src}
                                alt={media.alt || `${project.title} ${mediaIndex + 2}`}
                                fill
                                className="object-cover"
                                sizes="64px"
                              />
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Link Button */}
                  {project.link && (
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`mt-4 inline-flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-br ${project.color} text-white rounded-lg font-medium text-sm hover:shadow-lg transition-shadow`}
                    >
                      View Project
                      <ExternalLink className="w-4 h-4" />
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Image Lightbox Modal */}
      <AnimatePresence>
        {expandedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeExpandedImage}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-[95vw] max-h-[95vh] w-auto h-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeExpandedImage}
                className="absolute -top-12 right-0 p-2 text-white/80 hover:text-white transition-colors"
                aria-label="Close image"
              >
                <X className="w-6 h-6" />
              </button>
              <div className="relative w-full h-full flex items-center justify-center">
                <div className="relative max-w-full max-h-[95vh] w-auto h-auto">
                  <Image
                    src={expandedImage.src}
                    alt={expandedImage.alt}
                    width={1920}
                    height={1080}
                    className="max-w-full max-h-[95vh] w-auto h-auto object-contain"
                    sizes="95vw"
                    priority
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

