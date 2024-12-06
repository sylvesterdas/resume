'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#2F4F4F]"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 2 }}
      onAnimationComplete={() => document.body.style.overflow = 'unset'}
    >
      <div className="text-center">
        <motion.div
          className="mb-4"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-12 h-12 mx-auto mb-4">
            <Image
              src="/favicon.ico"
              alt="Sylvester Das"
              width={48}
              height={48}
              className="object-contain brightness-0 invert"
              priority
            />
          </div>
          <div className="w-24 h-0.5 bg-[#8FBC8F] mx-auto">
            <motion.div
              className="h-full bg-white"
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}