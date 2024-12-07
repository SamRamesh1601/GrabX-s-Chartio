import type {ImageSourcePropType} from 'react-native';
import type {SlideItemProps} from '../../Modules/auth/types';

export const useData = () => {
  const IntroData: SlideItemProps[] = [
    {
      title: 'Welcome to TalentHub!',
      description:
        'Unlock your potential and showcase your skills to industry leaders, media personalities, and investors. Connect, collaborate, and create opportunities like never before!',
      img: require('../../asset/images/front2.png'),
    },
    {
      title: 'Showcase Your Skills',
      description:
        "Create a stunning portfolio that highlights your unique talents. Whether you're an artist, musician, or entrepreneur, let your creativity shine and grab attention!",
      img: require('../../asset/images/front.png'),
    },
    {
      title: 'Connect with Influencers',
      description:
        'Network with directors, media personalities, and potential investors. Share your work, receive feedback, and open doors to exciting collaborations!',
      img: require('../../asset/images/front.png'),
    },
    {
      title: 'Empower Your Journey',
      description:
        'Join a community of passionate creators. Gain insights, share experiences, and elevate your career. Your journey to success starts here!',
      img: require('../../asset/images/front.png'),
    },
  ];

  const UserData = [
    {
      id: 1,
      name: 'Alice Johnson',
      email: 'alice.johnson@example.com',
      image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e',
    },
    {
      id: 2,
      name: 'Bob Smith',
      email: 'bob.smith@example.com',
      image: 'https://images.unsplash.com/photo-1506812572022-3f66e5b6c1d5',
    },
    {
      id: 3,
      name: 'Charlie Brown',
      email: 'charlie.brown@example.com',
      image: 'https://images.unsplash.com/photo-1507996449041-e5f1f8c2b2f1',
    },
    {
      id: 4,
      name: 'Diana Prince',
      email: 'diana.prince@example.com',
      image: 'https://images.unsplash.com/photo-1517841905240-4729884b20e2',
    },
    {
      id: 5,
      name: 'Eve Adams',
      email: 'eve.adams@example.com',
      image: 'https://images.unsplash.com/photo-1516301167312-4d29efca6215',
    },
    {
      id: 6,
      name: 'Frank Castle',
      email: 'frank.castle@example.com',
      image: 'https://images.unsplash.com/photo-1521747116042-5a810fda9664',
    },
    {
      id: 7,
      name: 'Grace Lee',
      email: 'grace.lee@example.com',
      image: 'https://images.unsplash.com/photo-1587685628401-0cc3c2ef6190',
    },
    {
      id: 8,
      name: 'Hank Pym',
      email: 'hank.pym@example.com',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2',
    },
    {
      id: 9,
      name: 'Ivy Wong',
      email: 'ivy.wong@example.com',
      image: 'https://images.unsplash.com/photo-1506794778162-8b11a7f0a4c0',
    },
    {
      id: 10,
      name: 'Jack Daniels',
      email: 'jack.daniels@example.com',
      image: 'https://images.unsplash.com/photo-1502720711202-33712ee1196b',
    },
    {
      id: 11,
      name: 'Karen Miller',
      email: 'karen.miller@example.com',
      image: 'https://images.unsplash.com/photo-1541493497-0a49c3bc7aa3',
    },
    {
      id: 12,
      name: 'Leo Gomez',
      email: 'leo.gomez@example.com',
      image: 'https://images.unsplash.com/photo-1576192943634-e9a67b9a8e1b',
    },
    {
      id: 13,
      name: 'Mia Wong',
      email: 'mia.wong@example.com',
      image: 'https://images.unsplash.com/photo-1522362311684-b4b181c0f8f4',
    },
    {
      id: 14,
      name: 'Noah Brown',
      email: 'noah.brown@example.com',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2',
    },
    {
      id: 15,
      name: 'Olivia Smith',
      email: 'olivia.smith@example.com',
      image: 'https://images.unsplash.com/photo-1579161427315-2c042e9ec8a2',
    },
    {
      id: 16,
      name: 'Paul Walker',
      email: 'paul.walker@example.com',
      image: 'https://images.unsplash.com/photo-1502199781814-11c94a4eab65',
    },
    {
      id: 17,
      name: 'Quinn Taylor',
      email: 'quinn.taylor@example.com',
      image: 'https://images.unsplash.com/photo-1548045634-10dd5e94c774',
    },
    {
      id: 18,
      name: 'Rita Moreno',
      email: 'rita.moreno@example.com',
      image: 'https://images.unsplash.com/photo-1592194996308-7b43878e84a6',
    },
    {
      id: 19,
      name: 'Steve Rogers',
      email: 'steve.rogers@example.com',
      image: 'https://images.unsplash.com/photo-1559581920-458cde9d52e5',
    },
    {
      id: 20,
      name: 'Tina Fey',
      email: 'tina.fey@example.com',
      image: 'https://images.unsplash.com/photo-1571381602937-9b2e686ca5d6',
    },
    {
      id: 21,
      name: 'Ursula K. Le Guin',
      email: 'ursula.leguin@example.com',
      image: 'https://images.unsplash.com/photo-1536571634-8aa76dbe1b80',
    },
    {
      id: 22,
      name: 'Victor Hugo',
      email: 'victor.hugo@example.com',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2',
    },
    {
      id: 23,
      name: 'Wanda Maximoff',
      email: 'wanda.maximoff@example.com',
      image: 'https://images.unsplash.com/photo-1574169208505-3c9b9b4e1ed0',
    },
    {
      id: 24,
      name: 'Xander Cage',
      email: 'xander.cage@example.com',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2',
    },
    {
      id: 25,
      name: 'Yara Shahidi',
      email: 'yara.shahidi@example.com',
      image: 'https://images.unsplash.com/photo-1504159997714-d14a8b528e2f',
    },
  ];

  return {
    IntroData,
    UserData,
  };
};

export const DefaultPhoneNumber = '9360908285';

export const DefaultUserImage: ImageSourcePropType = {
  uri: 'https://mighty.tools/mockmind-api/content/human/60.jpg',
};

export const ChatHistoryList = [
  {
    id: 'msg_1',
    senderId: 'user_1',
    text: 'Hey Bob! Check this out.',

    timestamp: '2023-10-25T14:30:00Z',
    media: [
      {
        type: 'image',
        url: 'https://example.com/media/image1.jpg',
        thumbnail: 'https://example.com/media/thumb_image1.jpg',
      },
    ],
  },
  {
    id: 'msg_2',
    senderId: 'user_2',
    text: 'Nice picture! Where was this taken?',
    timestamp: '2023-10-25T14:31:00Z',
    media: [],
  },
  {
    id: 'msg_3',
    senderId: 'user_1',
    text: 'At the beach last summer!',
    timestamp: '2023-10-25T14:32:00Z',
    media: [
      {
        type: 'video',
        url: 'https://example.com/media/video1.mp4',
        thumbnail: 'https://example.com/media/thumb_video1.jpg',
      },
    ],
  },
  {
    id: 'msg_4',
    senderId: 'user_2',
    text: "I can't wait for the summer!",
    timestamp: '2023-10-25T14:33:00Z',
    media: [],
  },
  {
    id: 'msg_5',
    senderId: 'user_1',
    text: 'Same here! Do you have any plans?',
    timestamp: '2023-10-25T14:34:00Z',
    media: [],
  },
  {
    id: 'msg_6',
    senderId: 'user_2',
    text: 'Thinking of going to the mountains this year.',
    timestamp: '2023-10-25T14:35:00Z',
    media: [],
  },
  {
    id: 'msg_7',
    senderId: 'user_1',
    text: 'That sounds amazing! I love hiking.',
    timestamp: '2023-10-25T14:36:00Z',
    media: [],
  },
  {
    id: 'msg_8',
    senderId: 'user_2',
    text: 'Have you been to any good trails recently?',
    timestamp: '2023-10-25T14:37:00Z',
    media: [],
  },
  {
    id: 'msg_9',
    senderId: 'user_1',
    text: 'Yeah, I hiked at Redwood last month! The views were breathtaking.',
    timestamp: '2023-10-25T14:38:00Z',
    media: [
      {
        type: 'image',
        url: 'https://example.com/media/image2.jpg',
        thumbnail: 'https://example.com/media/thumb_image2.jpg',
      },
    ],
  },
  {
    id: 'msg_10',
    senderId: 'user_2',
    text: 'I need to check that out! Thanks for the recommendation.',
    timestamp: '2023-10-25T14:39:00Z',
    media: [],
  },
];
