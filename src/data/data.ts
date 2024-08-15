import graphic from '../assets/landPage/graphic.png';
import web from '../assets/landPage/web.png';
import seo from '../assets/landPage/seo.png';
import social from '../assets/landPage/social.png';

interface Service {
    id: number;
    title: string;
    img: any;
    description: string;
    shadow: string;
}

export const services: Service[] = [
    {
        id: 1,
        title: 'Graphic Design',
        img: graphic,
        description: 'Creating visually appealing and impactful designs for various platforms, including social media, websites, pitch decks and print materials.',
        shadow: 'rgba(104, 107, 211, 1)'
    },
    {
        id: 2,
        title: 'Social Media Management',
        img: social,
        description: 'Connecting business owners to skilled social media managers to develop and implement effective social media strategies to engage audiences and drive growth.',
        shadow: 'rgba(219, 46, 152, 1)'
    },
    {
        id: 3,
        title: 'Web Development',
        img: web,
        description: 'Building professional and user-friendly websites that showcase businesses and organizations in the best light.',
        shadow: 'rgba(46, 65, 218, 1)'
    },
    {
        id: 4,
        title: 'Strategy, SEO & analytics',
        img: seo,
        description: 'Tailored strategy to improve your website\'s visibility, attract more organic traffic, and measure your digital success.',
        shadow: 'rgba(29, 29, 77, 1)'
    }
];

interface Client {
    id: number;
    title: string;
    description: string;
    shadow: string;
}

export const client: Client[] = [
    {
        id: 1,
        title: 'Consultation',
        description: 'Clients initiate contact to discuss their specific needs and goals.',
        shadow: 'rgba(101, 163, 208, 1)'
    },
    {
        id: 2,
        title: 'Project Design Brief',
        description: 'Based on the consultation, we develop a detailed project outline outlining the scope, objectives, and deliverables.',
        shadow: 'rgba(219, 46, 152, 1)'
    },
    {
        id: 3,
        title: 'Execution',
        description: 'Our team brings the project to life, delivering high-quality digital solutions.',
        shadow: 'rgba(29, 29, 77, 1)'
    },
]