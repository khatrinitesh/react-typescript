export interface InfoCard {
  id: number;
  title: string;
  description: string;
}
export interface VortexItem {
  id: number;
  label: string;
  color: string;
}
export interface VideoCard {
  id: number;
  title: string;
  videoUrl: string;
  thumbnailUrl: string;
}
export interface RatingOption {
  value: number;
  label: string;
}

export interface Breakpoints {
  mobile: string;
  tablet: string;
  desktop: string;
  largeDesktop: string;
}

export interface TypewriterConfig {
  id: number;
  text: string;
  speed: number; // milliseconds per character
}

export interface InputFieldConfig {
  id: number;
  placeholder: string;
  spellCheck: boolean;
}