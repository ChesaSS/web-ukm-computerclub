import Button from "../component/Button";
import Card from "../component/Card";
import CardProker from "../component/CardProker";
import divisiData from '../data/divisi/data';
import prokerData from '../data/proker/data';
import data1 from '../data/FAQ/data1';
import data2 from '../data/FAQ/data2';
import { useState } from 'react';
import imagesData from "../data/imgImports";

function HomePage() {
    const [openQuestion, setOpenQuestion] = useState(null);

    const toggleAnswer = (id) => {
        setOpenQuestion(openQuestion === id ? null : id);
    };

    return (
        <div>
            <div className="absolute inset-0 -z-10 bg-ornamen bg-fixed"/>

            <section className="relative" id="beranda">
                <div className="py-32 md:py-40 lg:py-0 lg:pt-24">
                    <div className="w-konten mx-auto relative z-10">
                        <div className="lg:flex justify-between items-center">

                            <div className="w-full md:w-3/4 mx-auto lg:hidden" data-aos="fade-down">
                                <div className="w-full mb-5">
                                    <img src={imagesData.bersama2} className="w-full rounded-md" alt="Foto 2" loading="lazy"></img>
                                </div>
                            </div>

                            <div className="w-full lg:w-[70%] p-1" data-aos="fade-up">
                                <h1 className="uppercase text-center text-xl md:text-4xl lg:text-left lg:text-6xl font-semibold mb-">unit kegiatan mahasiswa computer club</h1>
                                <div className="mb-2 lg:mb-5 md:text-lg"> 
                                    <h3 className="lg:text-justify text-center">Selamat Datang di dunia penuh inovasi dan kerjasama:</h3> 
                                    <h3 className="lg:text-justify text-center">{`${"Inspirasi Mahasiswa di Politeknik Negeri Bali"}`}</h3> 
                                </div>

                                <h2 className="text-primary font-semibold italic text-lg lg:text-left text-center mt-2 lg:mt-5">#MakeItHappen</h2>
                            </div>

                            <div className="w-[35%] hidden lg:block" data-aos="zoom-in">
                                <div className="w-full my-5 ml-5">
                                    <img src={imagesData.bersama} className="w-full rounded-md -rotate-3" alt="Foto 1"></img>
                                </div>
                                <div className="w-full relative -left-12 top-3 mb-5">
                                    <img src={imagesData.bersama2} className="w-full rounded-md rotate-3" alt="Foto 2"></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-secondary w-full flex justify-evenly mt-10 py-5 p-2 text-white" id="tentang" data-aos="fade-up">
                <p className="italic font-semibold text-xl">#MakeItHappen</p>
                <p className="italic font-semibold text-xl">#MakeItHappen</p>
                <p className="italic font-semibold text-xl hidden md:block">#MakeItHappen</p>
                <p className="italic font-semibold text-xl hidden md:block">#MakeItHappen</p>
                <p className="italic font-semibold text-xl hidden lg:block">#MakeItHappen</p>
                <p className="italic font-semibold text-xl hidden lg:block">#MakeItHappen</p>
                <p className="italic font-semibold text-xl hidden lg:block">#MakeItHappen</p>
            </section>

            <section className="pt-20 md:py-40 px-2 relative" data-aos="fade-up">
                <div className="w-full md:w-2/3 md:mx-auto rounded-2xl px-2 py-5 border-8 border-double border-putih bg-secondary relative">
                    <div className="mx-auto w-20 my-5">
                        <img src={imagesData.LOGO_UKM_PUTIH} className="w-full" loading="lazy"></img>
                    </div>

                    <div className="my-5 text-white">
                        <h1 className="text-center text-2xl font-semibold">Tentang UKM Computer Club</h1>
                    </div>

                    <div className="w-full md:w-4/5 p-2 pb-12 mx-auto text-justify text-white">
                        <p className="font-medium ">Unit Kegiatan Mahasiswa Computer Club merupakan salah satu Unit Kegiatan Mahasiswa yang berada di lingkungan Politeknik Negeri Bali yang berfokus pada pengembangan keterampilan dan pengetahuan di bidang teknologi informasi. Sebagai wadah bagi mahasiswa yang memiliki minat dan bakat di bidang teknologi, UKM Computer Club berperan sebagai platform untuk mengasah pengetahuan dan keterampilan yang relevan di era digital. Dengan tujuan utama memberdayakan mahasiswa, UKM Computer Club menyediakan berbagai kesempatan bagi anggota untuk mengembangkan diri melalui berbagai program seperti pelatihan, kompetisi hingga project-project yang relevan dengan dunia digital.</p>
                    </div>
                </div>
            </section>

            <section className="py-16 md:pt-16 relative" id="divisi">
                <div className="p-2 w-konten mx-auto" data-aos="fade-up">
                    <h1 className="text-center font-semibold text-xl md:text-2xl mt-10 mb-2">Divisi UKM Computer Club</h1>
                    <p className="text-center font-normal text-sm md:text-base mb-10 w-full md:w-1/2 md:mx-auto">Ada 4 divisi di Unit Kegitan Mahasiswa Computer Club yang merupakan pendalaman lebih khusus mengenai ketertarikan dan minat para mahasiswa.</p>

                    <div className="flex justify-center items-stretch flex-wrap lg:w-3/4 mx-auto">
                        {divisiData.map((Data) =>(
                            <Card key={Data.id} img={Data.img} divisi ={Data.divisi} deskripsi={Data.deskripsi} href={Data.href}
                            />
                        ))}
                    </div>
                </div>
            </section>

            <section className="md:pt-20 realtive" id="proker">
                <div className="p-2" data-aos="fade-up">
                    <h1 className="text-center font-semibold text-xl md:text-2xl mt-10 mb-2">Program Kerja</h1>
                    <p className="text-center font-normal text-sm md:text-base mb-10 w-full md:mx-auto">Ada 3 program kerja di Unit Kegitan Mahasiswa Computer Club yang bergerak dalam bidang IT.</p>

                    <div className="flex p-2 justify-center items-stretch mx-auto flex-wrap">
                        {prokerData.map((Data) =>(
                            <CardProker key={Data.id} logo={Data.logo} img={Data.img} divisi ={Data.name} deskripsi={Data.deskripsi} href={Data.href}
                            />
                        ))}
                    </div>
                </div>
            </section>

            <section className="pt-20 md:pt-32 md:pb-20" id="fungsio">
                <div className="w-konten mx-auto relative z-10">
                    <div className="lg:flex lg:justify-between items-center" data-aos="zoom-in">
                        <div className="w-full lg:hidden block">
                            <div className="w-full my-5">
                                <img src={imagesData.bersama2} className="w-full rounded-md" alt="Foto 1" loading="lazy"></img>
                            </div>
                        </div>

                        <div className="w-full lg:w-[60%] p-1" data-aos="fade-up">
                            <h1 className="uppercase text-center text-xl md:text-2xl lg:text-left lg:text-4xl font-semibold mb-2">Fungsionaris UKM Computer Club</h1>
                            <div className="mb-6 md:text-lg"> 
                                <h3 className="lg:text-justify text-center">Yuk kenalan dengan fungsionaris kami 😁</h3> 
                            </div>
                            <Button divClass="flex justify-center lg:inline" href="/fungsionaris" text="Lihat Selengkapnya"></Button>
                        </div>

                        <div className="w-[46%] hidden lg:block">
                            <div className="w-full my-5 ml-5"  data-aos="zoom-in">
                                <img src={imagesData.bersama2} className="w-full rounded-md" alt="Foto 1" loading="lazy"></img>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 md:pt-32 md:pb-20">
                <div className="px-4 mx-auto sm:px-6 lg:px-8 w-konten" data-aos="fade-up">
                    <div className="mx-auto text-center">
                        <h2 className="font-semibold text-xl md:text-2xl text-black">
                             Pertanyaan yang sering ditanyakan
                        </h2>
                        <p className="mb-5">Yuk cek, siapa tau pertanyaan kamu ada disini 😊</p>
                    </div>
    
                    <div className="w-full lg:w-konten mx-auto lg:flex justify-between">    
                        <div className="lg:w-[48%]">
                            {data1.map((Data) => (
                                <div key={Data.id} className="transition-all m-3 duration-200 bg-white border border-gray-200 shadow-lg cursor-pointer hover:bg-gray-50">
                                    <button type="button" className="flex items-center justify-between w-full px-4 py-5 sm:p-6" onClick={() => toggleAnswer(Data.id)}>
                                        <span className="flex text-sm lg:text-base font-semibold text-black text-left w-[28rem]">{Data.question}</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={`w-6 h-6 text-gray-400 transition-transform duration-200 ${openQuestion === Data.id ? 'rotate-0' : 'rotate-180'}`}>
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>
    
                                     <div className={`px-4 pb-5 sm:px-6 sm:pb-6 ${openQuestion === Data.id ? 'block' : 'hidden'}`}>
                                        <div className="text-sm lg:text-base" dangerouslySetInnerHTML={{ __html: Data.answer }} />
                                    </div>
                                </div>
                            ))}
                        </div>
    
                        <div className="lg:w-[48%]">
                            {data2.map((Data) => (
                                <div key={Data.id} className="transition-all m-3 duration-200 bg-white border border-gray-200 shadow-lg cursor-pointer hover:bg-gray-50">
                                    <button type="button" className="flex items-center justify-between w-full px-4 py-5 sm:p-6" onClick={() => toggleAnswer(Data.id)}>
                                        <span className="flex text-sm lg:text-base font-semibold text-black text-left w-[28rem]">{Data.question}</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={`w-6 h-6 text-gray-400 transition-transform duration-200 ${openQuestion === Data.id ? 'rotate-0' : 'rotate-180'}`}>
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>
    
                                    <div className={`px-4 pb-5 sm:px-6 sm:pb-6 ${openQuestion === Data.id ? 'block' : 'hidden'}`}>
                                        <div className="text-sm lg:text-base" dangerouslySetInnerHTML={{ __html: Data.answer }} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
    
    
                    <p className="text-center text-gray-600 textbase mt-9">
                        Punya pertanyaan lainya? Bisa sampaikan pada 
                        <span className="cursor-pointer font-medium text-primary transition-all duration-200 hover:text-secondary focus:text-tertiary"> <b><a href="https://www.instagram.com/ukmcomputerclub?igsh=cWRwcmYzZjUyOHgw" className="underline" target="_blank">Instagram Kami</a></b> </span>
                    </p>
                </div>
            </section>
        </div>
    );
}

export default HomePage;