import React, { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Loader,Environment } from '@react-three/drei';
import ModelUploader from './ModelUploader';

const Upload = () => {
  const [uploadedModel, setUploadedModel] = useState(null);

  const handleModelLoad = (gltf) => {
    setUploadedModel(gltf);
  };

  return (
    <div style={{ height: '100vh' }}>
      <Canvas>
        <Suspense fallback={null}>
          {uploadedModel && <primitive object={uploadedModel.scene} />}
          <OrbitControls />
          <Environment preset="sunset" background />
        </Suspense>
      </Canvas>

      <Loader />
      
      <ModelUploader onModelLoad={handleModelLoad} />
    </div>
  );
};

export default Upload;
