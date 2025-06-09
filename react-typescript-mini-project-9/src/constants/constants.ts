import type { Tag, TeamMember } from './../interface/index';

export const initialTags: Tag[] = [
  { id: 1, name: 'React', category: 'Frontend' },
  { id: 2, name: 'Node.js', category: 'Backend' },
  { id: 3, name: 'TypeScript', category: 'Language' },
  { id: 4, name: 'CSS', category: 'Frontend' },
  { id: 5, name: 'MongoDB', category: 'Database' },
];

export const LOADING_DELAY = 2000; // in milliseconds

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 1,
    name: 'Alice Johnson',
    role: 'Frontend Developer',
    bio: 'Specializes in React and UI/UX design.',
    image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlfGVufDB8fDB8fHww',
  },
  {
    id: 2,
    name: 'Bob Smith',
    role: 'Backend Developer',
    bio: 'Expert in Node.js and APIs.',
    image: 'https://place.abh.ai/s3fs-public/placeholder/DSC_0222_400x400.JPG',
  },
  {
    id: 3,
    name: 'Clara Lee',
    role: 'Project Manager',
    bio: 'Keeps everything on track and on time.',
    image: 'https://place.abh.ai/s3fs-public/placeholder/things_400x400.jpeg',
  },
];