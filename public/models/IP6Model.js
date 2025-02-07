import React, { useEffect, forwardRef } from 'react';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const IP6Model = forwardRef((props, ref) => {
    const gltf = useLoader(GLTFLoader, '/IP 6.glb');
    
    return <primitive object={gltf.scene} ref={ref} />;
});

export default IP6Model;