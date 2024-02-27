import React, { useRef } from 'react';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader';
import { useFBX, useGLTF } from '@react-three/drei';

const ModelUploader = ({ onModelLoad }) => {
  const fileInputRef = useRef();

  const handleFileChange = async (event) => {
    const file = event.target.files[0];

    if (file) {
      const model = file.name.endsWith('.fbx') ? await loadFBXModel(file) : await loadGLTFModel(file);
      onModelLoad(model);
    }
  };

  const loadGLTFModel = (file) => {
    return new Promise((resolve, reject) => {
      const loader = new GLTFLoader();
      loader.load(
        URL.createObjectURL(file),
        (gltf) => resolve(gltf),
        undefined,
        reject
      );
    });
  };

  const loadFBXModel = (file) => {
    return new Promise((resolve, reject) => {
      const fbxModel = useFBX(URL.createObjectURL(file));
      resolve(fbxModel);
    });
  };

  return (
    <div>
      <input
        type="file"
        accept=".glb, .fbx"
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
      <button onClick={() => fileInputRef.current.click()}>Upload 3D Model</button>
    </div>
  );
};

export default ModelUploader;