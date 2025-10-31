import { useState, useRef, useEffect } from 'react';

// Generate stars ONCE outside component so they don't regenerate on every render
const stars = Array.from({ length: 30 }, (_, i) => ({
  x: Math.random() * 100,
  y: Math.random() * 50,
  size: Math.random() * 1.5 + 0.8,
  delay: Math.random() * 20,
  duration: 4 + Math.random() * 4,
  isNorthStar: Math.random() > 0.85 // 15% chance to be a north star
}));

function App() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [scrollOffset, setScrollOffset] = useState(0);
  const cardRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setScrollOffset(prev => {
        const newOffset = prev + 0.3;
        // Reset to 0 when reaching halfway point for seamless loop
        return newOffset >= 1000 ? 0 : newOffset;
      });
    }, 30);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const x = (e.clientX - centerX) / (rect.width / 2);
    const y = (e.clientY - centerY) / (rect.height / 2);
    
    setMousePos({ x, y });
  };

  const handleSubmit = () => {
    if (email) {
      setIsSubmitted(true);
      setTimeout(() => {
        setEmail('');
        setIsSubmitted(false);
      }, 3000);
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    
    ctx.clearRect(0, 0, width, height);
    
    const tiltIntensity = Math.abs(mousePos.x) + Math.abs(mousePos.y);
    
    if (tiltIntensity > 0.1) {
      ctx.strokeStyle = `rgba(59, 130, 246, ${0.1 + tiltIntensity * 0.08})`;
      ctx.lineWidth = 0.5;
      
      for (let i = 0; i < width; i += 4) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, height);
        ctx.stroke();
      }
      
      for (let i = 0; i < height; i += 4) {
        ctx.beginPath();
        ctx.moveTo(0, i);
        ctx.lineTo(width, i);
        ctx.stroke();
      }
    }
  }, [mousePos]);

  const rotateX = mousePos.y * 3;
  const rotateY = mousePos.x * -3;
  const gradientX = ((mousePos.x + 1) / 2) * 100;
  const gradientY = ((mousePos.y + 1) / 2) * 100;
  const tiltIntensity = Math.abs(mousePos.x) + Math.abs(mousePos.y);

  // Accurate London skyline
  const buildings = [
    { x: 20, baseHeight: 60, width: 22, shape: 'regular', color: 'rgba(59, 130, 246, 0.08)' },
    { x: 50, baseHeight: 80, width: 25, shape: 'tower-bridge', color: 'rgba(59, 130, 246, 0.12)' },
    { x: 85, baseHeight: 80, width: 25, shape: 'tower-bridge', color: 'rgba(59, 130, 246, 0.12)' },
    { x: 120, baseHeight: 70, width: 26, shape: 'regular', color: 'rgba(6, 182, 212, 0.08)' },
    { x: 155, baseHeight: 85, width: 28, shape: 'regular', color: 'rgba(59, 130, 246, 0.09)' },
    { x: 195, baseHeight: 200, width: 35, shape: 'shard', color: 'rgba(34, 211, 238, 0.15)' },
    { x: 245, baseHeight: 75, width: 30, shape: 'regular', color: 'rgba(59, 130, 246, 0.08)' },
    { x: 285, baseHeight: 90, width: 28, shape: 'regular', color: 'rgba(6, 182, 212, 0.09)' },
    { x: 325, baseHeight: 135, width: 48, shape: 'walkie-talkie', color: 'rgba(59, 130, 246, 0.13)' },
    { x: 385, baseHeight: 95, width: 30, shape: 'regular', color: 'rgba(34, 211, 238, 0.09)' },
    { x: 425, baseHeight: 145, width: 38, shape: 'gherkin', color: 'rgba(6, 182, 212, 0.14)' },
    { x: 475, baseHeight: 155, width: 42, shape: 'cheesegrater', color: 'rgba(34, 211, 238, 0.13)' },
    { x: 530, baseHeight: 130, width: 32, shape: 'tower42', color: 'rgba(59, 130, 246, 0.11)' },
    { x: 575, baseHeight: 100, width: 28, shape: 'regular', color: 'rgba(6, 182, 212, 0.09)' },
    { x: 615, baseHeight: 115, width: 30, shape: 'regular', color: 'rgba(59, 130, 246, 0.1)' },
    { x: 655, baseHeight: 85, width: 26, shape: 'regular', color: 'rgba(34, 211, 238, 0.08)' },
    { x: 690, baseHeight: 170, width: 45, shape: 'canary-wharf', color: 'rgba(34, 211, 238, 0.14)' },
    { x: 750, baseHeight: 145, width: 38, shape: 'regular', color: 'rgba(6, 182, 212, 0.12)' },
    { x: 800, baseHeight: 140, width: 36, shape: 'regular', color: 'rgba(59, 130, 246, 0.11)' },
    { x: 850, baseHeight: 120, width: 32, shape: 'regular', color: 'rgba(34, 211, 238, 0.1)' },
    { x: 895, baseHeight: 95, width: 28, shape: 'regular', color: 'rgba(6, 182, 212, 0.08)' },
    { x: 935, baseHeight: 105, width: 30, shape: 'regular', color: 'rgba(59, 130, 246, 0.09)' },
    { x: 975, baseHeight: 80, width: 26, shape: 'regular', color: 'rgba(34, 211, 238, 0.08)' },
    { x: 1010, baseHeight: 125, width: 28, shape: 'bt-tower', color: 'rgba(34, 211, 238, 0.12)' },
    { x: 1050, baseHeight: 90, width: 26, shape: 'regular', color: 'rgba(6, 182, 212, 0.08)' },
    { x: 1085, baseHeight: 100, width: 28, shape: 'regular', color: 'rgba(59, 130, 246, 0.09)' },
    { x: 1125, baseHeight: 75, width: 25, shape: 'regular', color: 'rgba(34, 211, 238, 0.08)' },
    { x: 1160, baseHeight: 85, width: 26, shape: 'regular', color: 'rgba(6, 182, 212, 0.08)' },
    // REPEAT
    { x: 1220, baseHeight: 60, width: 22, shape: 'regular', color: 'rgba(59, 130, 246, 0.08)' },
    { x: 1250, baseHeight: 80, width: 25, shape: 'tower-bridge', color: 'rgba(59, 130, 246, 0.12)' },
    { x: 1285, baseHeight: 80, width: 25, shape: 'tower-bridge', color: 'rgba(59, 130, 246, 0.12)' },
    { x: 1320, baseHeight: 70, width: 26, shape: 'regular', color: 'rgba(6, 182, 212, 0.08)' },
    { x: 1355, baseHeight: 85, width: 28, shape: 'regular', color: 'rgba(59, 130, 246, 0.09)' },
    { x: 1395, baseHeight: 200, width: 35, shape: 'shard', color: 'rgba(34, 211, 238, 0.15)' },
    { x: 1445, baseHeight: 75, width: 30, shape: 'regular', color: 'rgba(59, 130, 246, 0.08)' },
    { x: 1485, baseHeight: 90, width: 28, shape: 'regular', color: 'rgba(6, 182, 212, 0.09)' },
    { x: 1525, baseHeight: 135, width: 48, shape: 'walkie-talkie', color: 'rgba(59, 130, 246, 0.13)' },
    { x: 1585, baseHeight: 95, width: 30, shape: 'regular', color: 'rgba(34, 211, 238, 0.09)' },
    { x: 1625, baseHeight: 145, width: 38, shape: 'gherkin', color: 'rgba(6, 182, 212, 0.14)' },
    { x: 1675, baseHeight: 155, width: 42, shape: 'cheesegrater', color: 'rgba(34, 211, 238, 0.13)' },
    { x: 1730, baseHeight: 130, width: 32, shape: 'tower42', color: 'rgba(59, 130, 246, 0.11)' },
    { x: 1775, baseHeight: 100, width: 28, shape: 'regular', color: 'rgba(6, 182, 212, 0.09)' },
    { x: 1815, baseHeight: 115, width: 30, shape: 'regular', color: 'rgba(59, 130, 246, 0.1)' },
    { x: 1855, baseHeight: 85, width: 26, shape: 'regular', color: 'rgba(34, 211, 238, 0.08)' },
    { x: 1890, baseHeight: 170, width: 45, shape: 'canary-wharf', color: 'rgba(34, 211, 238, 0.14)' },
    { x: 1950, baseHeight: 145, width: 38, shape: 'regular', color: 'rgba(6, 182, 212, 0.12)' },
  ];

  const BuildingShape = ({ building }) => {
    const baseStyle = {
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: building.color,
      backdropFilter: 'blur(10px)',
      boxShadow: `0 0 30px ${building.color}`,
    };

    switch (building.shape) {
      case 'shard':
        return (
          <div style={{
            ...baseStyle,
            clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)',
            borderTopLeftRadius: '4px',
            borderTopRightRadius: '4px'
          }} />
        );
      
      case 'gherkin':
        return (
          <div style={{
            ...baseStyle,
            borderRadius: '50% 50% 0 0'
          }} />
        );
      
      case 'walkie-talkie':
        return (
          <div style={{
            ...baseStyle,
            borderTopLeftRadius: '20%',
            borderTopRightRadius: '20%'
          }} />
        );
      
      case 'cheesegrater':
        return (
          <div style={{
            ...baseStyle,
            clipPath: 'polygon(0% 100%, 100% 100%, 100% 0%, 20% 0%)'
          }} />
        );
      
      case 'canary-wharf':
        return (
          <div style={{
            ...baseStyle,
            clipPath: 'polygon(50% 0%, 85% 15%, 100% 100%, 0% 100%, 15% 15%)'
          }} />
        );
      
      case 'tower42':
        return (
          <div style={{
            ...baseStyle,
            clipPath: 'polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)'
          }} />
        );
      
      case 'bt-tower':
        return (
          <div style={{
            ...baseStyle,
            borderRadius: '8px 8px 0 0'
          }} />
        );
      
      case 'tower-bridge':
        return (
          <div style={{
            ...baseStyle,
            borderTopLeftRadius: '4px',
            borderTopRightRadius: '4px'
          }}>
            <div style={{
              position: 'absolute',
              top: '10px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '60%',
              height: '15px',
              background: building.color,
              borderRadius: '2px 2px 0 0'
            }} />
          </div>
        );
      
      default:
        return <div style={baseStyle} />;
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      minHeight: '100dvh', // Mobile viewport height
      background: '#000000',
      color: 'white',
      overflow: 'hidden',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '16px',
      position: 'relative'
    }}>
      {/* Night Sky with Stars */}
      <div style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 0,
        overflow: 'hidden',
        background: 'radial-gradient(ellipse at top, rgba(15, 23, 42, 0.9), #000000)'
      }}>
        {/* Stars - gentle fade in/out */}
        {stars.map((star, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: star.isNorthStar ? `${star.size * 3}px` : `${star.size}px`,
              height: star.isNorthStar ? `${star.size * 3}px` : `${star.size}px`,
            }}
          >
            {star.isNorthStar ? (
              // North star with cross/sparkle shape
              <>
                {/* Center bright dot */}
                <div style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: `${star.size}px`,
                  height: `${star.size}px`,
                  background: 'rgba(255, 255, 255, 1)',
                  borderRadius: '50%',
                  boxShadow: `0 0 ${star.size * 4}px rgba(255, 255, 255, 0.9), 0 0 ${star.size * 8}px rgba(255, 255, 255, 0.5)`,
                  animation: `northStarPulse ${star.duration}s ease-in-out infinite`,
                  animationDelay: `${star.delay}s`
                }} />
                
                {/* Vertical beam */}
                <div style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '1px',
                  height: '100%',
                  background: 'linear-gradient(to bottom, transparent, rgba(255, 255, 255, 0.8) 30%, rgba(255, 255, 255, 0.8) 70%, transparent)',
                  boxShadow: '0 0 4px rgba(255, 255, 255, 0.6)',
                  animation: `northStarBeam ${star.duration}s ease-in-out infinite`,
                  animationDelay: `${star.delay}s`
                }} />
                
                {/* Horizontal beam */}
                <div style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '100%',
                  height: '1px',
                  background: 'linear-gradient(to right, transparent, rgba(255, 255, 255, 0.8) 30%, rgba(255, 255, 255, 0.8) 70%, transparent)',
                  boxShadow: '0 0 4px rgba(255, 255, 255, 0.6)',
                  animation: `northStarBeam ${star.duration}s ease-in-out infinite`,
                  animationDelay: `${star.delay}s`
                }} />
                
                {/* Diagonal beam 1 */}
                <div style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%) rotate(45deg)',
                  width: '70%',
                  height: '1px',
                  background: 'linear-gradient(to right, transparent, rgba(255, 255, 255, 0.6) 30%, rgba(255, 255, 255, 0.6) 70%, transparent)',
                  boxShadow: '0 0 3px rgba(255, 255, 255, 0.4)',
                  animation: `northStarBeam ${star.duration}s ease-in-out infinite`,
                  animationDelay: `${star.delay}s`
                }} />
                
                {/* Diagonal beam 2 */}
                <div style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%) rotate(-45deg)',
                  width: '70%',
                  height: '1px',
                  background: 'linear-gradient(to right, transparent, rgba(255, 255, 255, 0.6) 30%, rgba(255, 255, 255, 0.6) 70%, transparent)',
                  boxShadow: '0 0 3px rgba(255, 255, 255, 0.4)',
                  animation: `northStarBeam ${star.duration}s ease-in-out infinite`,
                  animationDelay: `${star.delay}s`
                }} />
              </>
            ) : (
              // Regular star
              <div style={{
                width: '100%',
                height: '100%',
                background: 'rgba(255, 255, 255, 0.9)',
                borderRadius: '50%',
                boxShadow: `0 0 ${star.size * 2}px rgba(255, 255, 255, 0.5)`,
                animation: `gentleTwinkle ${star.duration}s ease-in-out infinite`,
                animationDelay: `${star.delay}s`
              }} />
            )}
          </div>
        ))}

        {/* London Skyline */}
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '50%',
          overflow: 'hidden'
        }}>
          {/* Buildings container */}
          <div style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '200%',
            height: '100%',
            transform: `translateX(-${scrollOffset}px)`
          }}>
            {buildings.map((building, idx) => (
              <div
                key={idx}
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: `${building.x}px`,
                  width: `${building.width}px`,
                  height: `${building.baseHeight}px`,
                  overflow: 'visible'
                }}
              >
                <BuildingShape building={building} />

                {/* Building windows */}
                {building.shape === 'regular' && (
                  <div style={{
                    position: 'absolute',
                    inset: '8px',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '3px',
                    opacity: 0.5,
                    zIndex: 1
                  }}>
                    {Array.from({ length: Math.floor(building.baseHeight / 15) * 3 }).map((_, i) => (
                      <div
                        key={i}
                        style={{
                          background: Math.random() > 0.4 ? 'rgba(34, 211, 238, 0.5)' : 'rgba(6, 182, 212, 0.15)',
                          borderRadius: '1px'
                        }}
                      />
                    ))}
                  </div>
                )}

                {/* Top beacon light */}
                <div style={{
                  position: 'absolute',
                  top: building.shape === 'shard' ? '0' : '-3px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: building.shape === 'shard' ? '4px' : '5px',
                  height: building.shape === 'shard' ? '4px' : '5px',
                  background: building.shape === 'shard' ? 'rgba(255, 255, 255, 0.9)' : 'rgba(34, 211, 238, 0.9)',
                  borderRadius: '50%',
                  boxShadow: `0 0 ${building.shape === 'shard' ? '20px' : '12px'} ${building.shape === 'shard' ? 'rgba(255, 255, 255, 0.8)' : 'rgba(34, 211, 238, 0.8)'}`,
                  animation: 'pulse 3s infinite',
                  zIndex: 2
                }} />
              </div>
            ))}
          </div>

          {/* Thames reflection */}
          <div style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '35%',
            background: 'linear-gradient(to top, rgba(6, 182, 212, 0.08), transparent)',
            opacity: 0.4
          }} />
        </div>
      </div>

      {/* Main card */}
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setMousePos({ x: 0, y: 0 })}
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '500px',
          transform: `perspective(1500px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          transformStyle: 'preserve-3d',
          transition: 'transform 0.1s ease-out',
          zIndex: 1
        }}
      >
        <div style={{
          position: 'relative',
          background: 'linear-gradient(to bottom right, rgba(15, 23, 42, 0.85), rgba(30, 41, 59, 0.7), rgba(15, 23, 42, 0.85))',
          backdropFilter: 'blur(20px)',
          borderRadius: '28px',
          overflow: 'hidden',
          border: '1px solid rgba(34, 211, 238, 0.15)',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
        }}>
          
          {tiltIntensity > 0.1 && (
            <div style={{
              position: 'absolute',
              inset: 0,
              opacity: 0.3,
              pointerEvents: 'none',
              mixBlendMode: 'screen',
              background: `radial-gradient(circle at ${gradientX}% ${gradientY}%, rgba(34, 211, 238, 0.5), rgba(236, 72, 153, 0.3), transparent 70%)`
            }} />
          )}

          {tiltIntensity > 0.1 && (
            <div style={{
              position: 'absolute',
              inset: 0,
              pointerEvents: 'none',
              mixBlendMode: 'screen',
              background: `linear-gradient(${(mousePos.x * 90 + 135)}deg, 
                rgba(34, 211, 238, 0.3) 0%,
                rgba(236, 72, 153, 0.3) 50%,
                rgba(74, 222, 128, 0.3) 100%)`,
              opacity: tiltIntensity * 0.5
            }} />
          )}

          <canvas
            ref={canvasRef}
            width={800}
            height={1000}
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              pointerEvents: 'none',
              mixBlendMode: 'screen'
            }}
          />

          {tiltIntensity > 0.1 && (
            <div style={{
              position: 'absolute',
              inset: 0,
              pointerEvents: 'none',
              background: `linear-gradient(${135 + mousePos.x * 45}deg, 
                rgba(255, 255, 255, 0.08) 0%, 
                transparent 50%)`,
              opacity: 0.4
            }} />
          )}

          <div style={{
            position: 'relative',
            padding: '32px 24px',
            transform: 'translateZ(20px)'
          }}>
            
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '24px'
            }}>
              <div style={{
                padding: '10px 28px',
                background: 'rgba(37, 99, 235, 0.9)',
                backdropFilter: 'blur(8px)',
                borderRadius: '12px',
                boxShadow: '0 0 30px rgba(59, 130, 246, 0.5)'
              }}>
                <div style={{
                  fontSize: '24px',
                  fontWeight: 'bold',
                  letterSpacing: '0.15em',
                  textShadow: '0 0 15px rgba(34, 211, 238, 0.8)'
                }}>
                  CLYQ
                </div>
              </div>
            </div>

            <h1 style={{
              fontSize: '28px',
              fontWeight: '300',
              color: 'rgba(224, 242, 254, 0.95)',
              lineHeight: '1.3',
              margin: '0 0 20px 0',
              textAlign: 'center',
              textShadow: '0 0 20px rgba(34, 211, 238, 0.3)'
            }}>
              Where the night begins.
            </h1>

            <p style={{
              fontSize: '14px',
              color: 'rgba(186, 230, 253, 0.7)',
              margin: '0 0 28px 0',
              lineHeight: '1.6',
              fontWeight: '300',
              textAlign: 'center'
            }}>
              Something new is coming to London's nightlife — where access means more than a name on a list.
              <br/>
              <span style={{ color: 'rgba(165, 243, 252, 0.6)', fontSize: '13px' }}>
                For those who move quietly through Soho to Shoreditch.
              </span>
            </p>

            {!isSubmitted ? (
              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  style={{
                    width: '100%',
                    padding: '14px 18px',
                    background: 'rgba(0, 0, 0, 0.5)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(6, 182, 212, 0.3)',
                    borderRadius: '12px',
                    color: 'white',
                    fontSize: '15px',
                    fontWeight: '300',
                    boxShadow: '0 0 20px rgba(34, 211, 238, 0.1)',
                    outline: 'none',
                    marginBottom: '12px',
                    boxSizing: 'border-box'
                  }}
                  onFocus={(e) => {
                    e.target.style.border = '1px solid rgba(6, 182, 212, 0.5)';
                    e.target.style.boxShadow = '0 0 25px rgba(34, 211, 238, 0.2)';
                  }}
                  onBlur={(e) => {
                    e.target.style.border = '1px solid rgba(6, 182, 212, 0.3)';
                    e.target.style.boxShadow = '0 0 20px rgba(34, 211, 238, 0.1)';
                  }}
                />

                <button
                  onClick={handleSubmit}
                  style={{
                    width: '100%',
                    padding: '14px 28px',
                    background: 'linear-gradient(to right, #2563eb, #06b6d4)',
                    border: 'none',
                    borderRadius: '12px',
                    color: 'white',
                    fontWeight: '400',
                    fontSize: '15px',
                    letterSpacing: '0.03em',
                    boxShadow: `0 0 30px rgba(59, 130, 246, ${0.4 + tiltIntensity * 0.2})`,
                    textShadow: '0 0 10px rgba(255, 255, 255, 0.3)',
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                    marginBottom: '16px'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'scale(1.02)';
                    e.target.style.boxShadow = '0 0 40px rgba(59, 130, 246, 0.6)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'scale(1)';
                    e.target.style.boxShadow = '0 0 30px rgba(59, 130, 246, 0.4)';
                  }}
                >
                  Join the Newsletter
                </button>

                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                  gap: '6px',
                  marginBottom: '14px'
                }}>
                  {['Early Access', 'Launch Updates', 'Exclusive Events'].map((feature, idx) => (
                    <div
                      key={idx}
                      style={{
                        padding: '5px 12px',
                        background: 'rgba(6, 182, 212, 0.1)',
                        border: '1px solid rgba(6, 182, 212, 0.25)',
                        borderRadius: '20px',
                        color: 'rgba(103, 232, 249, 0.9)',
                        fontSize: '11px',
                        fontWeight: '300'
                      }}
                    >
                      {feature}
                    </div>
                  ))}
                </div>
                
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px',
                  color: 'rgba(34, 211, 238, 0.4)',
                  fontSize: '11px',
                  fontWeight: '300'
                }}>
                  <svg style={{ width: '11px', height: '11px' }} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                  <span>Private & Encrypted</span>
                </div>
              </div>
            ) : (
              <div style={{
                textAlign: 'center',
                padding: '20px 0'
              }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  marginBottom: '16px'
                }}>
                  <div style={{
                    width: '56px',
                    height: '56px',
                    background: 'linear-gradient(to right, #10b981, #06b6d4)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 0 40px rgba(74, 222, 128, 0.5)'
                  }}>
                    <svg style={{ width: '28px', height: '28px', color: 'white' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <h3 style={{
                  fontSize: '22px',
                  fontWeight: '300',
                  color: 'white',
                  textShadow: '0 0 15px rgba(34, 211, 238, 0.4)',
                  marginBottom: '8px',
                  margin: '0 0 8px 0'
                }}>
                  You're in.
                </h3>
                <p style={{
                  color: 'rgba(186, 230, 253, 0.6)',
                  fontSize: '14px',
                  fontWeight: '300',
                  margin: 0
                }}>
                  Check your inbox for what's next.
                </p>
              </div>
            )}

          </div>

          {tiltIntensity > 0.2 && (
            <>
              <div style={{
                position: 'absolute',
                top: '16px',
                left: '16px',
                width: '20px',
                height: '20px',
                borderLeft: '1px solid rgba(34, 211, 238, 0.6)',
                borderTop: '1px solid rgba(34, 211, 238, 0.6)',
                borderTopLeftRadius: '6px',
                opacity: 0.4 + tiltIntensity * 0.3
              }} />
              <div style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                width: '20px',
                height: '20px',
                borderRight: '1px solid rgba(236, 72, 153, 0.6)',
                borderTop: '1px solid rgba(236, 72, 153, 0.6)',
                borderTopRightRadius: '6px',
                opacity: 0.4 + tiltIntensity * 0.3
              }} />
              <div style={{
                position: 'absolute',
                bottom: '16px',
                left: '16px',
                width: '20px',
                height: '20px',
                borderLeft: '1px solid rgba(74, 222, 128, 0.6)',
                borderBottom: '1px solid rgba(74, 222, 128, 0.6)',
                borderBottomLeftRadius: '6px',
                opacity: 0.4 + tiltIntensity * 0.3
              }} />
              <div style={{
                position: 'absolute',
                bottom: '16px',
                right: '16px',
                width: '20px',
                height: '20px',
                borderRight: '1px solid rgba(139, 92, 246, 0.6)',
                borderBottom: '1px solid rgba(139, 92, 246, 0.6)',
                borderBottomRightRadius: '6px',
                opacity: 0.4 + tiltIntensity * 0.3
              }} />
            </>
          )}
        </div>
      </div>

      <div style={{
        position: 'fixed',
        bottom: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        textAlign: 'center',
        color: 'rgba(34, 211, 238, 0.25)',
        fontSize: '11px',
        fontWeight: '300',
        zIndex: 0
      }}>
        <div>CLYQ © 2025</div>
        <div style={{
          color: 'rgba(6, 182, 212, 0.15)',
          fontSize: '10px',
          marginTop: '2px'
        }}>
          London
        </div>
      </div>

      <style>{`
        @keyframes gentleTwinkle {
          0% { opacity: 1; transform: scale(1); }
          25% { opacity: 0.4; transform: scale(0.9); }
          50% { opacity: 0.6; transform: scale(1.1); }
          75% { opacity: 0.3; transform: scale(0.95); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes northStarPulse {
          0%, 100% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
          50% { opacity: 0.7; transform: translate(-50%, -50%) scale(1.2); }
        }
        @keyframes northStarBeam {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `}</style>
    </div>
  );
}

export default App;