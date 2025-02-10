import { motion } from "framer-motion";

const ConnectionLines: React.FC = () => {
  return (
    <svg className="absolute top-5 left-0 w-full h-full pointer-events-none" viewBox="100 100 100 200">
      <motion.path
        d="M140 160 C120 140, 80 130, 60 110 S 20 90, 30 70"
        stroke="url(#gradient1)"
        strokeWidth="3"
        fill="transparent"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.path
        d="M160 160 C200 120, 240 100, 280 90"
        stroke="url(#gradient2)"
        strokeWidth="3"
        fill="transparent"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
      />
      <motion.path
        d="M135 170 C90 220, 150 120, -320 270"
        stroke="url(#gradient3)"
        strokeWidth="3"
        fill="transparent"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
      />
      <motion.path
        d="M165 170 C210 200, 350 140, 680 100"
        stroke="url(#gradient4)"
        strokeWidth="3"
        fill="transparent"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.9 }}
      />
      <defs>
      <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="yellow" />
          <stop offset="100%" stopColor="orange" />
        </linearGradient>
        <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="yellow" />
          <stop offset="100%" stopColor="blue" />
        </linearGradient>
        <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="yellow" />
          <stop offset="100%" stopColor="green" />
        </linearGradient>
        <linearGradient id="gradient4" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="yellow" />
          <stop offset="100%" stopColor="red" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default ConnectionLines;

