import React from 'react'
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../components/Loader'
{/* <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
        POPUP
      </div> */}
      
const Home = () => {
  return (
    <section className='w-full h-screen relative'>
      {/*canvas acts as a root for all the 3D rendering 3D objects and light */}

      <Canvas className='w-full h-screen bg-transparent'
      camera={{near:0.1, far:1000}}
      >
      {/* Suspense is a wrapper here while the 3D objects Load it will show the Loader here while the loading time */}
        <Suspense fallback={<Loader/>}>
        <directionalLight/>
        <ambientLight/>
        <pointLight/>
        <spotLight/>
        <hemisphereLight/>
        </Suspense>
      </Canvas>
    </section>
  )
}

export default Home