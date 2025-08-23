export interface Contact {
  id: string;
  name: string;
  phone: string;
  email: string;
  avatar?: string;
}

export const contacts: Contact[] = [
  {
    id: '1',
    name: 'Alex Johnson',
    phone: '(555) 123-4567',
    email: 'alex.johnson@example.com',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
  },
  {
    id: '2',
    name: 'Emma Wilson',
    phone: '(555) 234-5678',
    email: 'emma.wilson@example.com',
    avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
  },
  {
    id: '3',
    name: 'Michael Brown',
    phone: '(555) 345-6789',
    email: 'michael.brown@example.com',
    avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
  },
  {
    id: '4',
    name: 'Sophia Martinez',
    phone: '(555) 456-7890',
    email: 'sophia.martinez@example.com',
    avatar: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    id: '5',
    name: 'Daniel Taylor',
    phone: '(555) 567-8901',
    email: 'daniel.taylor@example.com',
    avatar: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    id: '6',
    name: 'Olivia Anderson',
    phone: '(555) 678-9012',
    email: 'olivia.anderson@example.com',
    avatar: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
  {
    id: '7',
    name: 'James Thomas',
    phone: '(555) 789-0123',
    email: 'james.thomas@example.com',
    avatar: 'https://randomuser.me/api/portraits/men/7.jpg',
  },
  {
    id: '8',
    name: 'Ava Jackson',
    phone: '(555) 890-1234',
    email: 'ava.jackson@example.com',
    avatar: 'https://randomuser.me/api/portraits/women/8.jpg',
  },
  {
    id: '9',
    name: 'Ryan Parker',
    phone: '(555) 901-2345',
    email: 'ryan.parker@example.com',
    avatar: 'https://randomuser.me/api/portraits/men/9.jpg',
  },
  {
    id: '10',
    name: 'Natalie Chen',
    phone: '(555) 012-3456',
    email: 'natalie.chen@example.com',
    avatar: 'https://randomuser.me/api/portraits/women/10.jpg',
  }
];