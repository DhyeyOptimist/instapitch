
import React, { useState } from 'react';
import { Sparkles, Zap } from 'lucide-react';

const AIButton = ({ 
  onClick = () => console.log('AI Button clicked'),
  disabled = false,
  loading = false,
  size = 'medium' // 'small', 'medium', 'large'
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  const sizeClasses = {
    small: 'w-12 h-12',
    medium: 'w-16 h-16', 
    large: 'w-20 h-20'
  };

  const iconSizes = {
    small: 12,
    medium: 16,
    large: 20
  };

  return (
    <div className="relative">
      {/* Glow Effect */}
      <div 
        className={`absolute inset-0 rounded-full transition-all duration-300 ${
          isHovered ? 'blur-xl opacity-60' : 'blur-lg opacity-40'
        }`}
        style={{
          background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #a855f7 100%)',
          transform: isHovered ? 'scale(1.2)' : 'scale(1.1)',
        }}
      />
      
      {/* Main Button */}
      <button
        onClick={onClick}
        disabled={disabled || loading}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onMouseDown={() => setIsPressed(true)}
        onMouseUp={() => setIsPressed(false)}
        className={`
          relative ${sizeClasses[size]} rounded-full
          backdrop-blur-xl border border-white/20
          transition-all duration-300 ease-out
          hover:border-white/30 hover:scale-105
          active:scale-95
          disabled:opacity-50 disabled:cursor-not-allowed
          group overflow-hidden
          ${isPressed ? 'scale-95' : ''}
        `}
        style={{
          background: `
            linear-gradient(135deg, 
              rgba(99, 102, 241, 0.8) 0%, 
              rgba(139, 92, 246, 0.8) 50%, 
              rgba(168, 85, 247, 0.8) 100%
            )
          `,
          boxShadow: `
            0 8px 32px rgba(99, 102, 241, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.2),
            inset 0 -1px 0 rgba(0, 0, 0, 0.1)
          `
        }}
      >
        {/* Inner glow */}
        <div 
          className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: 'radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.3) 0%, transparent 50%)'
          }}
        />
        
        {/* Icon container */}
        <div className="relative z-10 flex items-center justify-center h-full">
          {loading ? (
            <div 
              className="animate-spin rounded-full border-2 border-white/30 border-t-white"
              style={{ width: iconSizes[size], height: iconSizes[size] }}
            />
          ) : (
            <div className="relative">
              <Sparkles 
                size={iconSizes[size]} 
                className={`text-white transition-transform duration-300 ${
                  isHovered ? 'scale-110 rotate-12' : 'scale-100'
                }`}
              />
              {/* Sparkle animation */}
              <Zap 
                size={iconSizes[size] * 0.6} 
                className={`absolute top-0 left-0 text-white/80 transition-all duration-500 ${
                  isHovered ? 'opacity-100 scale-125 rotate-45' : 'opacity-0 scale-50'
                }`}
              />
            </div>
          )}
        </div>
        
        {/* Pulse animation */}
        <div 
          className={`absolute inset-0 rounded-full border-2 border-white/50 transition-all duration-1000 ${
            isHovered ? 'scale-150 opacity-0' : 'scale-100 opacity-100'
          }`}
        />
      </button>
      
      {/* Small indicator dot */}
      {/* <div 
        className={`absolute -top-1 -right-1 w-2 h-2 rounded-full transition-all duration-300 ${
          loading ? 'animate-pulse' : ''
        }`}
        style={{
          background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
          boxShadow: '0 0 8px rgba(16, 185, 129, 0.5)'
        }}
      /> */}
    </div>
  );
};

export default AIButton;
