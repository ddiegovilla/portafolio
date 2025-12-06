'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Linkedin, Mail, Github } from 'lucide-react'
import Image from 'next/image'

// Helper function to get the correct path with basePath
const getAssetPath = (path: string): string => {
  const basePath = '/portafolio'
  const cleanPath = path.startsWith('/') ? path : `/${path}`
  return `${basePath}${cleanPath}`
}

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" ref={ref} className="section bg-white dark:bg-gray-900">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 gradient-text">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative mx-auto w-64 h-64"
            >
              <Image
                src={getAssetPath('/images/profile.jpeg')}
                alt="Diego Villanueva Fernandez"
                width={256}
                height={256}
                className="rounded-full object-cover w-full h-full shadow-2xl"
                priority
              />
              <div className="absolute inset-0 border-2 border-electric-blue/30 rounded-full animate-pulse" />
            </motion.div>

            {/* Bio */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                I&apos;m a passionate{' '}
                <span className="font-semibold text-electric-blue">Robotics and Digital Systems Engineering student</span> at{' '}
                <span className="font-semibold">Tec de Monterrey</span>, focused on innovation, automation, and
                intelligent systems.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                I combine creativity, engineering, and leadership to design technology that makes a real-world impact.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                From programming robots for competitive tournaments to mentoring the next generation of engineers,
                I&apos;m driven by the challenge of solving complex problems and pushing the boundaries of what&apos;s possible.
              </p>

              {/* Social Links */}
              <div className="flex justify-center gap-4 mt-8">
                <motion.a
                  href="https://linkedin.com/in/diego-villanueva-fernandez"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-electric-blue hover:text-white transition-colors"
                >
                  <Linkedin className="w-6 h-6" />
                </motion.a>

                <motion.a
                  href="mailto:A01199495@tec.mx"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-electric-blue hover:text-white transition-colors"
                >
                  <Mail className="w-6 h-6" />
                </motion.a>

                <motion.a
                  href="https://github.com/diegovilla207"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-electric-blue hover:text-white transition-colors"
                >
                  <Github className="w-6 h-6" />
                </motion.a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

