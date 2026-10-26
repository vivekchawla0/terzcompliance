import * as React from "react";
import { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

// Earth sphere component with textures
const EarthSphere = () => {
  const earthRef = useRef<THREE.Mesh>(null);
  const cloudsRef = useRef<THREE.Mesh>(null);
  const [textures, setTextures] = useState<{
    earth: THREE.Texture | null;
    bump: THREE.Texture | null;
    clouds: THREE.Texture | null;
  }>({ earth: null, bump: null, clouds: null });
  const [texturesLoaded, setTexturesLoaded] = useState(false);
  
  // Load textures manually with error handling
  useEffect(() => {
    const loader = new THREE.TextureLoader();
    
    // Use NASA's reliable texture URLs
    const textureUrls = {
      earth: "https://eoimages.gsfc.nasa.gov/images/imagerecords/57000/57752/land_ocean_ice_cloud_2048.jpg",
      bump: "https://threejs.org/examples/textures/planets/earth_atmos_2048.jpg",
    };
    
    let loadedCount = 0;
    const totalRequired = 1; // Only earth texture is required
    
    // Load Earth texture (required)
    loader.load(
      textureUrls.earth,
      (texture) => {
        texture.colorSpace = THREE.SRGBColorSpace;
        setTextures(prev => ({ ...prev, earth: texture }));
        loadedCount++;
        if (loadedCount >= totalRequired) setTexturesLoaded(true);
      },
      undefined,
      () => {
        // Fallback - try alternative URL
        loader.load(
          "https://threejs.org/examples/textures/planets/earth_atmos_2048.jpg",
          (texture) => {
            texture.colorSpace = THREE.SRGBColorSpace;
            setTextures(prev => ({ ...prev, earth: texture }));
            setTexturesLoaded(true);
          },
          undefined,
          () => {
            // Last fallback - use procedural texture
            console.log("Using fallback procedural earth");
            setTexturesLoaded(true);
          }
        );
      }
    );
    
    // Load bump map (optional enhancement)
    loader.load(
      textureUrls.bump,
      (texture) => {
        setTextures(prev => ({ ...prev, bump: texture }));
      },
      undefined,
      () => console.log("Bump map failed to load, using smooth surface")
    );
    
    return () => {
      // Cleanup
      Object.values(textures).forEach(t => t?.dispose());
    };
  }, []);
  
  // Static globe - no rotation
  // Set initial rotation to show Africa/Europe (like reference image)
  useEffect(() => {
    if (earthRef.current) {
      earthRef.current.rotation.y = -0.3; // Show Africa/Europe centered
    }
  }, [texturesLoaded]);
  
  if (!texturesLoaded) {
    return (
      <mesh>
        <sphereGeometry args={[2, 32, 32]} />
        <meshBasicMaterial color="#1a4a7a" wireframe />
      </mesh>
    );
  }
  
  return (
    <group>
      {/* Main Earth sphere */}
      <mesh ref={earthRef}>
        <sphereGeometry args={[2, 64, 64]} />
        {textures.earth ? (
          <meshStandardMaterial
            map={textures.earth}
            bumpMap={textures.bump || undefined}
            bumpScale={0.015}
            roughness={0.8}
            metalness={0.1}
          />
        ) : (
          <meshStandardMaterial
            color="#3b82f6"
            roughness={0.8}
            metalness={0.1}
          />
        )}
      </mesh>
      
      {/* Semi-transparent cloud layer */}
      <mesh ref={cloudsRef}>
        <sphereGeometry args={[2.015, 48, 48]} />
        <meshPhongMaterial
          color="#ffffff"
          transparent
          opacity={0.15}
          depthWrite={false}
        />
      </mesh>
      
      {/* Atmosphere glow */}
      <mesh scale={1.12}>
        <sphereGeometry args={[2, 48, 48]} />
        <shaderMaterial
          vertexShader={`
            varying vec3 vNormal;
            void main() {
              vNormal = normalize(normalMatrix * normal);
              gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
          `}
          fragmentShader={`
            varying vec3 vNormal;
            void main() {
              float intensity = pow(0.55 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.0);
              gl_FragColor = vec4(0.4, 0.7, 1.0, 1.0) * intensity * 0.6;
            }
          `}
          blending={THREE.AdditiveBlending}
          side={THREE.BackSide}
          transparent
        />
      </mesh>
    </group>
  );
};

// Loading fallback
const LoadingFallback = () => (
  <mesh>
    <sphereGeometry args={[2, 32, 32]} />
    <meshBasicMaterial color="#1a365d" wireframe />
  </mesh>
);

interface Earth3DProps {
  size?: number;
}

export const Earth3D: React.FC<Earth3DProps> = ({ size = 700 }) => {
  const [hasError, setHasError] = useState(false);
  
  if (hasError) {
    // Fallback to CSS globe if WebGL fails
    return (
      <div 
        className="rounded-full"
        style={{ 
          width: size, 
          height: size,
          background: `radial-gradient(circle at 60% 35%, 
            hsl(200, 80%, 50%) 0%, 
            hsl(210, 75%, 40%) 25%,
            hsl(215, 70%, 30%) 50%, 
            hsl(220, 65%, 20%) 75%,
            hsl(225, 60%, 10%) 100%
          )`,
          boxShadow: `
            0 0 60px hsla(200, 80%, 50%, 0.4),
            0 0 120px hsla(200, 85%, 45%, 0.25),
            inset -30px -30px 80px hsla(225, 50%, 5%, 0.5)
          `,
        }}
      />
    );
  }
  
  return (
    <div 
      style={{ 
        width: size, 
        height: size,
        position: "relative",
      }}
    >
      <Canvas
        camera={{ 
          position: [0, 0, 4.5], 
          fov: 45,
          near: 0.1,
          far: 1000,
        }}
        style={{ 
          background: "transparent",
          borderRadius: "50%",
        }}
        gl={{ 
          antialias: true, 
          alpha: true,
          powerPreference: "high-performance",
        }}
        onError={() => setHasError(true)}
      >
        {/* Lighting setup - brighter for visible land masses */}
        <ambientLight intensity={0.6} />
        <directionalLight 
          position={[5, 3, 5]} 
          intensity={2.5} 
          color="#ffffff"
        />
        <directionalLight 
          position={[-3, 2, 3]} 
          intensity={1.2} 
          color="#ffffff"
        />
        <directionalLight 
          position={[-5, -2, -5]} 
          intensity={0.5} 
          color="#87ceeb"
        />
        <pointLight 
          position={[10, 5, 10]} 
          intensity={0.6} 
          color="#fff5e6"
        />
        
        <React.Suspense fallback={<LoadingFallback />}>
          <EarthSphere />
        </React.Suspense>
      </Canvas>
      
      {/* Outer glow effect */}
      <div 
        className="absolute inset-0 rounded-full pointer-events-none"
        style={{
          boxShadow: `
            0 0 60px hsla(200, 80%, 50%, 0.4),
            0 0 120px hsla(200, 85%, 45%, 0.25),
            0 0 200px hsla(210, 80%, 40%, 0.15)
          `,
        }}
      />
    </div>
  );
};
