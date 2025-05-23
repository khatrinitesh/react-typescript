import type { NavItem } from "../interface/types"

export const COMMENTS_API_URL = 'https://jsonplaceholder.typicode.com/comments'

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Product', path: '/product' },
  { label: 'Contact', path: '/contact' },
]