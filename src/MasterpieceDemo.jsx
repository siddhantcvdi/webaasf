import React, { useState } from 'react';

const MasterpieceDemo = () => {
  const [stage, setStage] = useState('html');

  // Apply appropriate body classes for each stage
  React.useEffect(() => {
    // Remove all stage classes first
    document.body.classList.remove('pure-html', 'css-stage', 'js-stage');
    
    // Add the appropriate class for current stage
    if (stage === 'html') {
      document.body.classList.add('pure-html');
    } else if (stage === 'css') {
      document.body.classList.add('css-stage');
    } else if (stage === 'js') {
      document.body.classList.add('js-stage');
    }
    
    // Cleanup on unmount
    return () => {
      document.body.classList.remove('pure-html', 'css-stage', 'js-stage');
    };
  }, [stage]);

  // Define styles for each stage
  const getStageStyles = () => {
    const baseStyles = {
      transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
      padding: '15px',
      maxWidth: '450px',
      margin: '0 auto',
      position: 'relative',
      maxHeight: '70vh',
      overflowY: 'auto',
    };

    switch (stage) {
      case 'html':
        return {
          ...baseStyles,
          // Pure HTML - no styling at all
          backgroundColor: 'transparent',
          color: 'inherit',
          fontFamily: 'inherit',
          border: 'none',
          boxShadow: 'none',
          borderRadius: '0',
        };
      
      case 'css':
        return {
          ...baseStyles,
          // '90s GeoCities nightmare
          fontFamily: 'Comic Sans MS, cursive',
          color: '#00FF41',
          backgroundColor: '#FF1493',
          border: '8px solid #FFD700',
          borderRadius: '25px',
          boxShadow: `
            0 0 20px #FF0000,
            inset 0 0 20px #FF1493,
            0 0 40px #0000FF,
            inset 0 0 40px rgba(255, 212, 0, 0.3)
          `,
          animation: 'blink-border 1.5s infinite alternate, glow-pulse 2s infinite',
          textShadow: '3px 3px 0px #000000, 0 0 10px #00FF41',
        };
      
      case 'js':
        return {
          ...baseStyles,
          // All the CSS horrors plus jumping around
          fontFamily: 'Comic Sans MS, cursive',
          color: '#00FF41',
          backgroundColor: '#FF1493',
          border: '8px solid #FFD700',
          borderRadius: '25px',
          boxShadow: `
            0 0 20px #FF0000,
            inset 0 0 20px #FF1493,
            0 0 40px #0000FF,
            inset 0 0 40px rgba(255, 212, 0, 0.3)
          `,
          animation: 'blink-border 1.5s infinite alternate, glow-pulse 2s infinite, jump-around 4s infinite',
          textShadow: '3px 3px 0px #000000, 0 0 10px #00FF41',
          position: 'fixed',
          zIndex: 1000,
        };
      
      default:
        return baseStyles;
    }
  };

  const getButtonStyles = (isActive) => {
    const baseButtonStyles = {
      padding: '8px 16px',
      margin: '4px',
      fontSize: '14px',
      fontWeight: '600',
      border: 'none',
      borderRadius: '6px',
      cursor: 'pointer',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    };

    if (stage === 'html') {
      // Pure HTML buttons
      return {
        ...baseButtonStyles,
        backgroundColor: isActive ? '#e0e0e0' : '#f5f5f5',
        color: 'black',
        border: '1px solid #ccc',
        borderRadius: '4px',
        fontFamily: 'inherit',
        fontWeight: 'normal',
        textTransform: 'none',
        letterSpacing: 'normal',
        boxShadow: 'none',
      };
    } else {
      // Styled buttons for CSS/JS stages
      return {
        ...baseButtonStyles,
        background: isActive 
          ? 'linear-gradient(145deg, #667eea, #764ba2)' 
          : 'linear-gradient(145deg, #bdc3c7, #95a5a6)',
        color: isActive ? 'white' : '#7f8c8d',
        cursor: isActive ? 'pointer' : 'not-allowed',
        boxShadow: isActive 
          ? '0 4px 15px rgba(102, 126, 234, 0.3)' 
          : '0 2px 8px rgba(0, 0, 0, 0.1)',
        textTransform: 'uppercase',
        letterSpacing: '1px',
      };
    }
  };

  return (
    <div style={{ padding: '10px', fontFamily: 'inherit', height: '100vh', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      {/* CSS Keyframes for animations */}
      <style>
        {`
          @keyframes blink-border {
            0% { border-color: #FFD700; box-shadow: 0 0 20px #FFD700; }
            33% { border-color: #FF0000; box-shadow: 0 0 20px #FF0000; }
            66% { border-color: #0000FF; box-shadow: 0 0 20px #0000FF; }
            100% { border-color: #00FF41; box-shadow: 0 0 20px #00FF41; }
          }
          
          @keyframes wiggle {
            0% { transform: rotate(-2deg) scale(1.01); }
            25% { transform: rotate(1.5deg) scale(0.99); }
            50% { transform: rotate(-1deg) scale(1.02); }
            75% { transform: rotate(2deg) scale(0.98); }
            100% { transform: rotate(-2deg) scale(1.01); }
          }

          @keyframes glow-pulse {
            0% { filter: brightness(1) saturate(1); }
            50% { filter: brightness(1.2) saturate(1.3); }
            100% { filter: brightness(1) saturate(1); }
          }

          @keyframes float {
            0% { transform: translateY(0px) rotate(-2deg); }
            50% { transform: translateY(-10px) rotate(2deg); }
            100% { transform: translateY(0px) rotate(-2deg); }
          }

          @keyframes jump-around {
            0% { 
              transform: translate(0, 0) rotate(0deg); 
              left: 50%; 
              top: 50%;
            }
            10% { 
              transform: translate(-200px, -150px) rotate(45deg); 
              left: 20%; 
              top: 20%;
            }
            20% { 
              transform: translate(300px, -100px) rotate(-30deg); 
              left: 70%; 
              top: 30%;
            }
            30% { 
              transform: translate(-150px, 200px) rotate(90deg); 
              left: 30%; 
              top: 70%;
            }
            40% { 
              transform: translate(250px, 100px) rotate(-45deg); 
              left: 80%; 
              top: 60%;
            }
            50% { 
              transform: translate(-300px, -50px) rotate(180deg); 
              left: 10%; 
              top: 40%;
            }
            60% { 
              transform: translate(200px, -200px) rotate(-90deg); 
              left: 60%; 
              top: 20%;
            }
            70% { 
              transform: translate(-100px, 150px) rotate(135deg); 
              left: 40%; 
              top: 80%;
            }
            80% { 
              transform: translate(150px, -100px) rotate(-135deg); 
              left: 90%; 
              top: 30%;
            }
            90% { 
              transform: translate(-250px, 50px) rotate(270deg); 
              left: 15%; 
              top: 60%;
            }
            100% { 
              transform: translate(0, 0) rotate(360deg); 
              left: 50%; 
              top: 50%;
            }
          }

          .controls-html {
            text-align: center;
            margin-bottom: 20px;
          }

          .controls-container {
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 12px;
            padding: 15px;
            margin-bottom: 15px;
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            justify-content: center;
          }

          .controls-html {
            text-align: center;
            margin-bottom: 15px;
          }

          .reset-container {
            margin-top: 20px;
            text-align: center;
          }

          .reset-button {
            background: linear-gradient(145deg, #ff6b6b, #ff5252) !important;
            color: white !important;
            border: none !important;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 1px;
            padding: 14px 28px !important;
            border-radius: 12px !important;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          }

          .reset-button:hover {
            background: linear-gradient(145deg, #ff5252, #f44336) !important;
            transform: translateY(-3px);
            box-shadow: 0 8px 25px rgba(255, 82, 82, 0.4) !important;
          }
        `}
      </style>

      {/* Control Buttons */}
      <div className={stage === 'html' ? 'controls-html' : 'controls-container'}>
        <button
          style={getButtonStyles(stage === 'html')}
          onClick={() => setStage('css')}
          disabled={stage !== 'html'}
        >
          Apply CSS
        </button>
        
        <button
          style={getButtonStyles(stage === 'css')}
          onClick={() => setStage('js')}
          disabled={stage !== 'css'}
        >
          Apply JS
        </button>
      </div>



      {/* Main Content with Dynamic Styling */}
      <div className={`${stage}-stage`} style={getStageStyles()}>
        <h1>My Absolutely Crucial Todo List</h1>
        
        <p>
          The most important tasks that definitely need to be completed today 
          (or humanity will surely collapse):
        </p>

        <h2>🚨 URGENT PRIORITIES 🚨</h2>
        <ul>
          <li>✅ Convince my houseplant to stop judging my life choices</li>
          <li>❌ Teach my rubber duck advanced calculus</li>
          <li>❌ Reorganize my sock drawer by emotional intensity</li>
          <li>❌ Write a strongly worded letter to gravity about being too clingy</li>
          <li>✅ Have a serious conversation with my WiFi about its commitment issues</li>
          <li>❌ Train my cat to use Zoom for important meetings</li>
          <li>❌ Convince my neighbors that my 3 AM clarinet practice is "therapeutic"</li>
        </ul>

        <h2>🎯 MEDIUM PRIORITY</h2>
        <ul>
          <li>Start a podcast about the philosophical implications of toast landing butter-side down</li>
          <li>Invent a new dance called "The Existential Crisis"</li>
          <li>Write a 500-page manifesto on why pineapple belongs on pizza</li>
          <li>Become fluent in dolphin by Thursday</li>
          <li>Convince my washing machine to stop eating my socks</li>
          <li>Master the ancient art of parallel parking</li>
        </ul>

        <h2>🏃‍♂️ SOMEDAY/MAYBE</h2>
        <ul>
          <li>Learn to communicate with houseplants (update: making progress with the fern)</li>
          <li>Start a support group for people addicted to buying phone chargers</li>
          <li>Write a cookbook called "Gourmet Meals You Can Make While Crying"</li>
          <li>Become a professional Netflix category creator</li>
          <li>Train squirrels to deliver my mail</li>
          <li>Perfect my impression of a functional adult</li>
        </ul>
      </div>

      {/* Reset Button */}
      {stage !== 'html' && (
        <div className="reset-container">
          <button
            className="reset-button"
            onClick={() => setStage('html')}
          >
            Reset
          </button>
        </div>
      )}
    </div>
  );
};

export default MasterpieceDemo;