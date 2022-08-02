import { motion, useAnimation } from 'framer-motion'
import type { NextPage } from 'next'
import { useRef } from 'react'
import { useButton } from 'react-aria'

const Button = () => {
  const ref = useRef(null)
  const { buttonProps } = useButton(
    {
      onPressStart: () => {
        controls.stop()
        controls.set({
          scale: 0.95,
          color: '#e5e5e5',
          borderColor: '#b45309',
          ...{ '--bc': '#b45309' }
        })
      },
      onPressEnd: () => {
        controls.start({
          scale: 1.0,
          color: '#fff',
          borderColor: '#f59e0b',
          ...{ '--bc': '#f59e0b' },
          transition: { duration: 0.2 }
        })
      }
    },
    ref
  )
  const controls = useAnimation()
  return (
    <>
      <motion.button
        ref={ref}
        animate={controls}
        className="test relative border-2 border-amber-500 p-4 text-white font-semibold focus:outline-none touch-none select-none"
        style={{
          '--bc': '#f59e0b',
          WebkitTapHighlightColor: 'transparent'
        }}
        {...(buttonProps as any)}
      >
        New Log
      </motion.button>
      <style jsx global>{`
        .test {
          background: linear-gradient(45deg, var(--bc) 0px 10px, transparent 0)
              bottom left / 50% 50%,
            linear-gradient(-45deg, var(--bc) 0px 10px, transparent 0) bottom
              right / 50% 50%,
            linear-gradient(135deg, var(--bc) 0px 10px, transparent 0) top left /
              50% 50%,
            linear-gradient(-135deg, var(--bc) 0px 10px, transparent 0) top
              right / 50% 50%,
            #171717;
          background-origin: border-box;
          background-repeat: no-repeat;

          -webkit-mask: linear-gradient(45deg, transparent 0 8px, #fff 0) bottom
              left,
            linear-gradient(-45deg, transparent 0 8px, #fff 0) bottom right,
            linear-gradient(135deg, transparent 0 8px, #fff 0) top left,
            linear-gradient(-135deg, transparent 0 8px, #fff 0) top right;
          -webkit-mask-size: 50.5% 50.5%;
          -webkit-mask-repeat: no-repeat;
        }
      `}</style>
    </>
  )
}

const Home: NextPage = () => {
  return (
    <div className="p-16 bg-neutral-900 h-screen">
      <Button />
    </div>
  )
}

export default Home
