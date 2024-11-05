'use client'
import React from 'react';
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

// Configuration for the home page
const HOME_CONFIG = {
  TITLE: "Your App Name",
  TAGLINE: "Your App Tagline",
  BUTTONS: [
    {
      label: "Button 1",
      path: "/path1",
      icon: "Icon1" as any, // Replace with actual Lucide icon component
    },
    {
      label: "Button 2",
      path: "/path2",
      icon: "Icon2" as any, // Replace with actual Lucide icon component
    },
  ],
  ANIMATIONS: {
    STAGGER_DELAY: 0.2,
    DURATION: 0.5,
    BUTTON_SCALE: 1.03,
  }
};

// Animation variants
const animations = {
  container: {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: HOME_CONFIG.ANIMATIONS.STAGGER_DELAY
      }
    }
  },

  item: {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        ease: "easeOut",
        duration: HOME_CONFIG.ANIMATIONS.DURATION
      }
    }
  },

  buttonHover: {
    scale: HOME_CONFIG.ANIMATIONS.BUTTON_SCALE,
    transition: {
      duration: 0.2,
      ease: "easeInOut"
    }
  }
};

interface NavigationButtonProps {
  label: string;
  path: string;
  Icon: LucideIcon;
}

const NavigationButton = ({ label, path, Icon }: NavigationButtonProps) => {
  const router = useRouter();

  return (
    <motion.div whileHover={animations.buttonHover}>
      <Button
        onClick={() => router.push(path)}
        variant="secondary"
        className="w-[200px] h-[50px] gap-3"
      >
        <Icon className="w-5 h-5" />
        {label}
      </Button>
    </motion.div>
  );
};

export default function Home() {
  return (
    <motion.div
      className="flex items-center justify-center min-h-screen"
      initial="hidden"
      animate="show"
      variants={animations.container}
    >
      <div className="flex flex-col gap-8">
        <motion.div
          variants={animations.item}
          className="text-center mb-4"
        >
          <h1 className="text-3xl font-semibold mb-2">{HOME_CONFIG.TITLE}</h1>
          <p className="text-gray-600 text-sm">{HOME_CONFIG.TAGLINE}</p>
        </motion.div>

        <motion.div
          className="flex flex-col gap-4"
          variants={animations.item}
        >
          {HOME_CONFIG.BUTTONS.map((button, index) => (
            <NavigationButton
              key={index}
              label={button.label}
              path={button.path}
              Icon={button.icon}
            />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}