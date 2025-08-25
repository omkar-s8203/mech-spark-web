import React, { memo } from 'react';

interface MechanicalElementsProps {
  isMobile?: boolean;
}

const GearIcon = memo(({ className, style }: { className: string; style?: React.CSSProperties }) => (
  <svg className={className} style={style} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.22,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.22,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.68 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z" />
  </svg>
));

const PistonElement = memo(({ className, width, height, animationDuration, animationDelay }: {
  className: string;
  width: string;
  height: string;
  animationDuration: string;
  animationDelay?: string;
}) => (
  <div className={className}>
    <div className="relative">
      <div 
        className={`${width} ${height} bg-gradient-to-b from-orange-400 to-orange-600 rounded-full animate-bounce`}
        style={{ animationDuration, animationDelay }}
      />
      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-orange-500 rounded-full" />
    </div>
  </div>
));

const MechanicalElements: React.FC<MechanicalElementsProps> = memo(({ isMobile = false }) => {
  if (isMobile) {
    return (
      <div className="absolute inset-0 pointer-events-none md:hidden">
        {/* Mobile Gears */}
        <div className="absolute top-10 right-8 w-8 h-8 opacity-30">
          <GearIcon className="w-full h-full text-orange-400 animate-spin" style={{ animationDuration: '6s' }} />
        </div>
        
        <div className="absolute top-32 left-6 w-6 h-6 opacity-25">
          <GearIcon 
            className="w-full h-full text-yellow-400 animate-spin" 
            style={{ animationDuration: '4s', animationDirection: 'reverse' }} 
          />
        </div>

        {/* Mobile Pistons */}
        <PistonElement
          className="absolute top-1/3 right-12 opacity-20"
          width="w-2"
          height="h-8"
          animationDuration="1.8s"
        />
        
        <PistonElement
          className="absolute bottom-1/3 left-8 opacity-25"
          width="w-2"
          height="h-6"
          animationDuration="1.3s"
          animationDelay="0.7s"
        />

        {/* Mobile Mechanical Lines */}
        <div className="absolute top-1/4 left-0 w-full h-1 overflow-hidden opacity-20">
          <div className="w-16 h-full bg-gradient-to-r from-transparent via-orange-400 to-transparent animate-mechanical-slide" />
        </div>

        <div className="absolute bottom-1/4 left-0 w-full h-1 overflow-hidden opacity-15">
          <div 
            className="w-12 h-full bg-gradient-to-r from-transparent via-yellow-400 to-transparent animate-mechanical-slide" 
            style={{ animationDelay: '2s', animationDuration: '5s' }} 
          />
        </div>

        {/* Mobile Rotating Joints */}
        <div className="absolute top-20 left-10 w-4 h-4 opacity-40">
          <div className="w-full h-full bg-orange-500 rounded-full relative">
            <div 
              className="absolute top-1/2 left-1/2 w-1 h-6 bg-orange-300 transform -translate-x-1/2 -translate-y-1/2 origin-center animate-spin" 
              style={{ animationDuration: '3s' }} 
            />
          </div>
        </div>

        {/* Mobile Pulsing Elements */}
        <div className="absolute top-40 right-20 w-2 h-2 bg-orange-400 rounded-full opacity-50 animate-pulse" style={{ animationDelay: '0.3s' }} />
        <div className="absolute bottom-60 left-20 w-3 h-3 bg-yellow-400 rounded-full opacity-40 animate-pulse" style={{ animationDelay: '0.7s' }} />
      </div>
    );
  }

  return (
    <div className="absolute inset-0 pointer-events-none hidden md:block">
      {/* Desktop Gears */}
      <div className="absolute top-20 left-20 w-16 h-16 opacity-20">
        <GearIcon className="w-full h-full text-orange-400 animate-spin" style={{ animationDuration: '10s' }} />
      </div>

      <div className="absolute top-40 right-32 w-12 h-12 opacity-15">
        <GearIcon 
          className="w-full h-full text-yellow-400 animate-spin" 
          style={{ animationDuration: '8s', animationDirection: 'reverse' }} 
        />
      </div>

      <div className="absolute bottom-32 left-16 w-20 h-20 opacity-10">
        <GearIcon className="w-full h-full text-orange-300 animate-spin" style={{ animationDuration: '12s' }} />
      </div>

      {/* Desktop Pistons */}
      <PistonElement
        className="absolute top-60 right-20 opacity-15"
        width="w-4"
        height="h-16"
        animationDuration="2s"
      />
      
      <PistonElement
        className="absolute bottom-40 right-40 opacity-12"
        width="w-3"
        height="h-12"
        animationDuration="1.5s"
        animationDelay="0.5s"
      />

      {/* Desktop Mechanical Lines */}
      <div className="absolute top-1/3 left-10 w-32 h-1 bg-gradient-to-r from-transparent via-orange-400 to-transparent opacity-30 animate-pulse" />
      <div 
        className="absolute bottom-1/3 right-10 w-24 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-25 animate-pulse" 
        style={{ animationDelay: '1s' }} 
      />

      {/* Desktop Floating Elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-orange-500 rounded-full opacity-60 animate-pulse" />
      <div className="absolute top-40 right-20 w-6 h-6 bg-yellow-500 rounded-full opacity-40 animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-orange-400 rounded-full opacity-50 animate-pulse" style={{ animationDelay: '0.5s' }} />
    </div>
  );
});

MechanicalElements.displayName = 'MechanicalElements';
GearIcon.displayName = 'GearIcon';
PistonElement.displayName = 'PistonElement';

export default MechanicalElements;