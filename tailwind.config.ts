import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))'
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        },
        
        // Enhanced floating animations
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-10px) rotate(2deg)' }
        },
        'float-delayed': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-15px) rotate(-2deg)' }
        },
        
        // Sophisticated entrance animations
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(40px) scale(0.95)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' }
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' }
        },
        
        // Background mesh animations
        'mesh-gradient': {
          '0%, 100%': { 
            background: 'conic-gradient(from 0deg at 50% 50%, hsl(var(--primary) / 0.05), hsl(var(--accent) / 0.05), hsl(var(--primary) / 0.05))'
          },
          '50%': { 
            background: 'conic-gradient(from 180deg at 50% 50%, hsl(var(--accent) / 0.08), hsl(var(--primary) / 0.08), hsl(var(--accent) / 0.08))'
          }
        },
        'radial-pulse': {
          '0%, 100%': { 
            background: 'radial-gradient(circle at 30% 70%, hsl(var(--primary) / 0.1), transparent 50%)'
          },
          '50%': { 
            background: 'radial-gradient(circle at 70% 30%, hsl(var(--accent) / 0.15), transparent 50%)'
          }
        },
        
        // Particle animations
        'particle-float': {
          '0%': { transform: 'translate(0, 0) scale(1)', opacity: '0.4' },
          '33%': { transform: 'translate(10px, -10px) scale(1.1)', opacity: '0.8' },
          '66%': { transform: 'translate(-5px, -20px) scale(0.9)', opacity: '0.6' },
          '100%': { transform: 'translate(0, 0) scale(1)', opacity: '0.4' }
        },
        'particle-orbit': {
          '0%': { transform: 'rotate(0deg) translateX(20px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(20px) rotate(-360deg)' }
        },
        
        // Glow effects
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 20px hsl(var(--primary) / 0.2)' },
          '50%': { boxShadow: '0 0 40px hsl(var(--primary) / 0.4), 0 0 60px hsl(var(--accent) / 0.2)' }
        },
        'text-glow': {
          '0%, 100%': { textShadow: '0 0 10px hsl(var(--primary) / 0.3)' },
          '50%': { textShadow: '0 0 20px hsl(var(--primary) / 0.6), 0 0 30px hsl(var(--accent) / 0.3)' }
        },
        
        // Mechanical animations
        'mechanical-slide': {
          '0%': { transform: 'translateX(-100%)' },
          '50%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(100%)' }
        },
        'gear-spin': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        },
        
        // Interactive animations
        'star-pulse': {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.3)', opacity: '0.8' }
        },
        'slide-up-fade': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        'quote-bounce': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.15)' }
        },
        
        // Wave effects
        'wave': {
          '0%, 100%': { transform: 'translateX(-100%)' },
          '50%': { transform: 'translateX(100%)' }
        },
        'shimmer': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        
        // Enhanced floating animations
        'float': 'float 3s ease-in-out infinite',
        'float-delayed': 'float-delayed 4s ease-in-out infinite',
        
        // Entrance animations
        'fade-in': 'fade-in 0.6s ease-out forwards',
        'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
        'scale-in': 'scale-in 0.6s ease-out forwards',
        
        // Background animations
        'mesh-gradient': 'mesh-gradient 8s ease-in-out infinite',
        'radial-pulse': 'radial-pulse 6s ease-in-out infinite',
        
        // Particle animations
        'particle-float': 'particle-float 4s ease-in-out infinite',
        'particle-orbit': 'particle-orbit 8s linear infinite',
        
        // Glow effects
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        'text-glow': 'text-glow 3s ease-in-out infinite',
        
        // Mechanical animations
        'mechanical-slide': 'mechanical-slide 4s ease-in-out infinite',
        'gear-spin': 'gear-spin 8s linear infinite',
        'gear-spin-reverse': 'gear-spin 6s linear infinite reverse',
        
        // Interactive animations
        'star-pulse': 'star-pulse 1.5s infinite ease-in-out',
        'slide-up-fade': 'slide-up-fade 0.6s ease-out forwards',
        'quote-bounce': 'quote-bounce 1.5s ease-in-out infinite',
        
        // Wave effects
        'wave': 'wave 3s ease-in-out infinite',
        'shimmer': 'shimmer 2s ease-in-out infinite'
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
