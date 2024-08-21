import Image from 'next/image';
import Link from 'next/link';
import React, { ChangeEvent, FormEvent, useState } from 'react';
import abt from '../../assets/landPage/abt.png';
import hole from '../../assets/landPage/hole.png';
import { client, services } from '@/data/data';
import contact from '../../assets/landPage/contact.png';
import 'animate.css';
import { AppDispatch } from '@/store/store';
import { useDispatch } from 'react-redux';
import { sendMsg } from '@/store/sendEmail';
import { toast } from 'react-toastify';

interface UserData {
    name: string;
    email: string;
    message: string;
};

function LandMain() {
    const dispatch: AppDispatch = useDispatch();
    const [userMsg, setUserMsg] = useState<UserData>({
        name: '',
        email: '',
        message: ''
    });

    const [error, setError] = useState<{ [key: string]: string }>({});

    const validateForm = () => {
        const newErrors: { [key: string]: string } = {};

        if (!userMsg.name.trim()) {
            newErrors.name = 'Full name is required';
        }
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!userMsg.email.trim()) {
            newErrors.email = 'Email account is required';
        }
        else {
            if (!emailPattern.test(userMsg.email.trim())) {
                newErrors.email = 'Invalid email address';
            }
        }
        if (!userMsg.message.trim()) {
            newErrors.message = 'This field is required';
        }

        setError(newErrors);
        return Object.keys(newErrors).length === 0;
    }

    const handleEmail = async (e: FormEvent) => {
        e.preventDefault();

        if (validateForm()) {
            try {
                const updatedMsg = { ...userMsg, message: `${userMsg.message} -${userMsg.email}` }
                const response = await dispatch(sendMsg(updatedMsg))
                if (sendMsg.fulfilled.match(response)) {
                    toast.success(response.payload);

                    setUserMsg({
                        name: '',
                        email: '',
                        message: ''
                    });
                } else {
                    toast.error(response.error.message);
                }
            } catch (error) {
                console.log(error);
            }
        }
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement | any>) => {
        const { name, value } = e.target;
        setUserMsg({
            ...userMsg,
            [name]: value
        });
    };

    return (
        <main className='overflow-x-hidden'>
            <section className='px-[30px] md:px-[3rem] lmd:p-[4rem] py-[4rem] w-full' id='about'>
                <div className="about flex items-center flex-col-reverse md:flex-row gap-8 md:gap-0">
                    <div className="abt_txt w-full md:w-[50%] flex flex-col gap-4">
                        <h3 className='text-accent font-semibold text-[20px]' data-aos='fade-down'>About us</h3>
                        <h1 data-aos='fade-down' className='text-[45px] leading-[45px] sm:leading-normal font-normal'>
                            Transforming ideas into visually stunning realities
                        </h1>
                        <p data-aos='fade-down' className='text-[18px] text-justify sm:text-start text-'>
                            Emergent Creatives is a digital agency that helps small and medium-sized businesses, as well as nonprofits, enhance their online presence through effective digital solutions. We offer a comprehensive range of digital solutions designed to boost visibility and reach a wider audience.
                        </p>
                        <Link data-aos='fade-down' href='#contact' className='w-fit py-2 px-4 rounded-[30px] bg-light border-[1px] border-dark block mt-3'>
                            Contact us
                        </Link>
                    </div>
                    <div className="abt_img w-full md:w-[50%] flex flex-col items-center justify-center">
                        <Image className='w-[200px] h-[200px] animate__animated animate__bounce animate__slower animate__infinite infinite' src={abt} alt='' />
                        <Image className='w-[200px]' src={hole} alt='' />
                    </div>
                </div>
            </section>

            <section className='px-[30px] md:px-[3rem] lmd:px-[4rem] py-[4rem] w-full' id='service'>
                <div className="services">
                    <div className="service_head mb-[2rem] text-center">
                        <h3 className='text-accent font-semibold text-[20px]'>Our Services</h3>
                    </div>
                    <div className="services_list grid md:grid-cols-2 gap-10">
                        {
                            services.map((serv, ind) => (
                                <div data-aos={`fade-${ind % 2 == 0 ? 'right' : 'left'}`} key={serv.id} style={{ boxShadow: `20px 15px 0 ${serv.shadow}` }} className="service_item rounded-[30px] relative overflow-hidden">
                                    <div className="service_img" >
                                        <Image className='w-full h-[350px] object-cover' src={serv.img} alt='' />
                                    </div>
                                    <div className="service_txt absolute h-fit w-full bottom-0 left-0 p-5 rounded-[20px] text-light">
                                        <h3 data-aos='fade-down' className='font-semibold text-[20px] mb-3'>{serv.title}</h3>
                                        <p data-aos='fade-down' className='text-[18px]'>{serv.description}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>

            <section className='px-[30px] md:px-[3rem] lmd:px-[4rem] py-[4rem] w-full' id='client'>
                <div className="client w-full bg-section rounded-[20px] p-5">
                    <div className="client_head mb-[2rem] text-center">
                        <h3 data-aos='fade-down' className='text-accent font-semibold text-[20px]'>Client process</h3>
                        <p data-aos='fade-down' className='text-[18px]'>Our typical client journey involves</p>
                    </div>
                    <div className="client_info grid md:grid-cols-3 gap-8 md:gap-3">
                        {
                            client.map((data, ind) => (
                                <div data-aos={`fade-${ind % 2 == 0 ? 'right' : 'left'}`} key={data.id} className="client_info">
                                    <div data-aos='fade-down' style={{ background: data.shadow }} className="client_img flex items-center justify-center w-[35px] h-[35px] rounded-full text-light font-semibold text-[18px] mb-6">
                                        <h3>{data.id}</h3>
                                    </div>
                                    <div className="client_txt">
                                        <h3 data-aos='fade-down' className='font-semibold text-[20px] mb-3'>{data.title}</h3>
                                        <p data-aos='fade-down' className='text-[18px]'>{data.description}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>

            <section className='px-[30px] md:px-[3rem] lmd:px-[4rem] py-[4rem] w-full' id='consultation'>
                <div className="spot flex items-center flex-col md:flex-row gap-10 md:gap-20">
                    <div data-aos="fade-up-left" className="spot_img rounded-[30px] overflow-hidden" style={{ boxShadow: `20px 15px 0 rgba(219, 46, 152, 1)` }}>
                        <Image className='w-full md:w-[550px] h-[300px] object-cover' src={contact} alt='' />
                    </div>
                    <div data-aos="fade-up-right" className="spot_txt">
                        <h3 data-aos='fade-down' data-aos-delay='100' className='font-semibold text-[20px]'>Reserve your spot...</h3>
                        <h1 data-aos='fade-down' data-aos-delay='100' className='text-[35px] sm:text-[45px] leading-[45px] sm:leading-normal font-normal'>Schedule a consultation call with us today.</h1>
                        <Link data-aos='fade-down' data-aos-delay='100' href='https://calendar.app.google/LLZdqomnM2fG5Zss6' className='w-fit py-2 px-4 rounded-[30px] bg-accent text-light border-[1px] border-dark block mt-6'>
                            Schedule Consultation
                        </Link>
                    </div>
                </div>
            </section>

            <section className='px-[30px] md:px-[3rem] py-[4rem] lmd:px-[4rem] w-full' id=''>
                <div className="motto">
                    <div className="motto_title">
                        <h1 data-aos="fade-up-right" className='text-[35px] sm:text-[45px] leading-[45px] sm:leading-normal font-normal w-full md:w-[600px]'>"The best brands are the ones that tell a story"</h1>
                        <p data-aos="fade-up-right">~Jeff Bezos</p>
                    </div>
                </div>
            </section>

            <section className='px-[30px] md:px-[3rem] py-[4rem] lmd:px-[4rem] w-full' id='contact'>
                <div className="contact">
                    <div className="contact_head text-center">
                        <h3 data-aos='fade-down' className='text-accent font-semibold text-[20px]'>Contact us</h3>
                    </div>
                    <div className="contact_form">
                        <h1 data-aos='fade-down' className='text-[40px] leading-[45px] sm:leading-normal font-normal w-full md:w-[600px] mx-auto text-center text-slate-500'>
                            Want to make a bigger impact online? <span className='text-logo'>Let's create a winning strategy together!</span>
                        </h1>
                        <form onSubmit={handleEmail} action="" className='w-full md:w-[600px] mx-0 md:mx-auto mt-8'>
                            <div className="frm_inp w-full grid gap-5">
                                <div data-aos='fade-down' className="inp_crl w-full grid">
                                    <input
                                        type="text"
                                        name='name'
                                        value={userMsg.name}
                                        className='w-full h-[40px] border-b-2 outline-none px-2'
                                        placeholder='Full name'
                                        onChange={handleChange}
                                    />
                                    {error.name && <span className="err_msg text-red-500 text-[10px]">{error.name}</span>}
                                </div>
                                <div data-aos='fade-down' className="inp_crl w-full grid">
                                    <input
                                        type="text"
                                        name='email'
                                        value={userMsg.email}
                                        className='w-full h-[40px] border-b-2 outline-none px-2'
                                        placeholder='Email address'
                                        onChange={handleChange}
                                    />
                                    {error.email && <span className="err_msg text-red-500 text-[10px]">{error.email}</span>}
                                </div>
                                <div data-aos='fade-down' className="inp_crl w-full grid">
                                    <textarea
                                        className='w-full h-[40px] border-b-2 outline-none px-2'
                                        placeholder='Tell us about your project'
                                        name='message'
                                        value={userMsg.message}
                                        onChange={handleChange}
                                    />
                                    {error.msg && <span className="err_msg text-red-500 text-[10px]">{error.message}</span>}
                                </div>
                            </div>
                            <div className="frm_btn">
                                <button type='submit' data-aos='fade-down' className='w-fit py-2 px-4 rounded-[30px] bg-light border-[1px] border-dark block mt-8 ml-auto'>Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default LandMain