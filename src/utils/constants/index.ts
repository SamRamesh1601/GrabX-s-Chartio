import {SlideItemProps} from '../../modules/auth/types';

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

  return {
    IntroData,
  };
};
