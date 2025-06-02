import type { Breakpoints, InfoCard, RatingOption, TypewriterConfig, VideoCard, VortexItem } from "../interface";



export const CARDS: InfoCard[] = [
  {
    id: 1,
    title: 'What is Glassmorphism?',
    description: `Glassmorphism is a design trend that features translucent surfaces with 
    blur effects and subtle shadows to create a frosted-glass look. It gives a fresh, modern, 
    and elegant feel to UI components.`,
  },
  {
    id: 2,
    title: 'Why Use Framer Motion?',
    description: `Framer Motion is a production-ready motion library for React. It 
    allows easy and smooth animations and interactions with simple declarative APIs.`,
  },
  {
    id: 3,
    title: 'Text Wrapping Example',
    description: `This card shows how text wraps inside a container with limited width. 
    Even with longer text content, it stays neat and readable, thanks to CSS word wrapping.`,
  },
];

export const VORTEX_ITEMS: VortexItem[] = [
  { id: 1, label: 'React', color: '#61dafb' },
  { id: 2, label: 'TypeScript', color: '#007acc' },
  { id: 3, label: 'Framer Motion', color: '#f00' },
  { id: 4, label: 'Glassmorphism', color: '#a0c4ff' },
  { id: 5, label: 'Animation', color: '#ffb703' },
  { id: 6, label: 'UI/UX', color: '#8ecae6' },
];

export const VIDEOS: VideoCard[] = [
  {
    id: 1,
    title: 'Nature Relaxation',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    thumbnailUrl: 'https://rukminim2.flixcart.com/image/850/1000/khnqqa80-0/wallpaper/7/v/h/91-61-bp-s017-m-bpdesignsolution-original-imafxm9hywh4m2dt.jpeg?q=20&crop=false',
  },
  {
    id: 2,
    title: 'City Timelapse',
    videoUrl: 'https://www.w3schools.com/html/movie.mp4',
    thumbnailUrl: 'https://wallpapers.com/images/featured/nature-2ygv7ssy2k0lxlzu.jpge',
  },
];

export const RATING_OPTIONS: RatingOption[] = [
  { value: 1, label: 'Poor' },
  { value: 2, label: 'Fair' },
  { value: 3, label: 'Good' },
  { value: 4, label: 'Very Good' },
  { value: 5, label: 'Excellent' },
];

export const BREAKPOINTS: Breakpoints = {
  mobile: '480px',
  tablet: '768px',
  desktop: '1024px',
  largeDesktop: '1280px',
};

export const TYPEWRITER_MESSAGES: TypewriterConfig[] = [
  {
    id: 1,
    text: "Hello, welcome to the future of UI!",
    speed: 100,
  },
  {
    id: 2,
    text: "Powered by React, TypeScript, and Framer Motion.",
    speed: 80,
  },
];

export const INPUT_CONFIG: InputFieldConfig = [
  {
    id: 1,
    placeholder: 'Type here without spellcheck...',
    spellCheck: false,
  },
];