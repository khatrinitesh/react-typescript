import type {
  AccordionItem,
  AuroraConfig,
  AvatarItem,
  BeamConfig,
  BentoItem,
  BoxConfig,
  NavLinkItem,
  SuggestionItem,
} from "../interface";

export const NAV_LINKS: NavLinkItem[] = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Product List", path: "/productlist" },
  { name: "Contact", path: "/contact" },
];

export const API_POST_URL = "https://jsonplaceholder.typicode.com";
export const POSTS_ENDPOINT = `${API_POST_URL}/posts`;

export const DEFAULT_BUTTON_TEXT = "Submit";
export const DEFAULT_BUTTON_VARIANT = "primary"; // e.g., "primary" | "secondary"

export const ACCORDION_DATA: AccordionItem[] = [
  {
    id: 1,
    title: "What is React?",
    description: "React is a JavaScript library for building user interfaces.",
  },
  {
    id: 2,
    title: "What is Framer Motion?",
    description:
      "Framer Motion is a production-ready motion library for React.",
  },
];

export const AURORA_LAYERS: AuroraConfig[] = [
  {
    color1: "#ff0080",
    color2: "#7928ca",
    blur: 150,
    top: "10%",
    left: "10%",
    size: "400px",
  },
  {
    color1: "#00f9ff",
    color2: "#0051ff",
    blur: 200,
    top: "30%",
    left: "60%",
    size: "500px",
  },
  {
    color1: "#00ff94",
    color2: "#00c2ff",
    blur: 180,
    top: "60%",
    left: "20%",
    size: "450px",
  },
];

export const SUGGESTIONS: SuggestionItem[] = [
  { id: 1, label: "Apple" },
  { id: 2, label: "Banana" },
  { id: 3, label: "Orange" },
  { id: 4, label: "Mango" },
  { id: 5, label: "Grapes" },
];

export const AVATAR_LIST: AvatarItem[] = [
  {
    id: 1,
    name: "Alice",
    imageUrl: "https://i.pravatar.cc/150?img=1",
  },
  {
    id: 2,
    name: "Bob",
    imageUrl: "https://i.pravatar.cc/150?img=2",
  },
  {
    id: 3,
    name: "Charlie",
    imageUrl: "https://i.pravatar.cc/150?img=3",
  },
];

export const BEAM_CONFIGS: BeamConfig[] = [
  {
    id: 1,
    color: "#00FFFF",
    width: 4,
    height: 200,
    top: "10%",
    left: "20%",
    animationDelay: 0,
  },
  {
    id: 2,
    color: "#FF00FF",
    width: 6,
    height: 250,
    top: "30%",
    left: "40%",
    animationDelay: 0.2,
  },
  {
    id: 3,
    color: "#FFD700",
    width: 3,
    height: 180,
    top: "60%",
    left: "70%",
    animationDelay: 0.4,
  },
];

export const BOXES: BoxConfig[] = [
  { id: 1, size: 60, top: "10%", left: "20%", color: "#FF6B6B" },
  { id: 2, size: 80, top: "30%", left: "50%", color: "#6BCB77" },
  { id: 3, size: 40, top: "70%", left: "80%", color: "#4D96FF" },
  { id: 4, size: 100, top: "60%", left: "10%", color: "#FFD93D" },
];

export const LINE_COUNT = 10;
export const LINE_SPACING = 100; // in pixels
export const LINE_COLOR = "rgba(255, 255, 255, 0.1)";
export const LINE_WIDTH = 1;

export const bentoItems: BentoItem[] = [
  {
    id: "1",
    title: "Dashboard",
    description: "Quick overview of your metrics",
    size: "medium",
    bgColor: "#f5a623",
    animation: "fade",
  },
  {
    id: "2",
    title: "Reports",
    description: "Generate and download reports",
    size: "large",
    bgColor: "#4a90e2",
    animation: "slide",
  },
  {
    id: "3",
    title: "Settings",
    size: "small",
    bgColor: "#7ed6df",
    animation: "scale",
  },
];
