import { useNavigate, useParams } from "react-router-dom";
import divisiData from "../../data/divisi/data";
import Button from "../../component/Button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CardCarousel from "../../component/CardCarousel";

function DivisiPage() {
    const {divisi} = useParams();
    const navigate = useNavigate();
    const divisiDetail = divisiData.find((data) => data.singkatan === divisi);
    return (
        divisiDetail ? (
            <div>
                <div className="absolute inset-0 -z-20 bg-ornamen bg-fixed bg-bottom"/>

                <section className="py-8 md:pb-20 relative 2xl:h-screen">
                    <div className="relative">
                        <div className="absolute inset-0 -z-10 from-black bg-gradient-to-r w-screen h-screen rounded-bl-[1rem] lg:rounded-bl-[3rem] rounded-br-[1rem] lg:rounded-br-[3rem]"/>
                        <img src={divisiDetail.imgCover} className="w-full h-full object-cover absolute inset-0 -z-20 rounded-bl-[1rem] lg:rounded-bl-[3rem] rounded-br-[1rem] lg:rounded-br-[3rem]" loading="lazy"/>
                        
                        <div className="grid grid-cols-1 lg:grid-cols-2 m-auto border h-screen">
                            <div className="kiri m-auto lg:ps-10 text-white flex flex-col justify-center items-center lg:justify-start lg:items-start gap-8" data-aos="fade-up">
                                <div className="w-fit px-8 py-1 rounded-full border-2">
                                    <h1 className="font-semibold w-1/2">Divisi</h1>
                                </div>
                                <h1 className="font-bold text-3xl lg:text-6xl w-full lg:w-1/2 text-center lg:text-left">{divisiDetail.divisi}</h1>
                                <p className="w-konten mx-auto text-center lg:text-left lg:w-full lg:mx-0">{divisiDetail.deskripsi}</p>
                                <Button variant="secondary" href="#materi" text="Pelajari Lebih Lanjut"/>
                            </div>
                            <div className="kanan m-auto h-3/6 aspect-video relative hidden lg:block" data-aos="fade-up">
                                <img src={divisiDetail.img} className="absolute top-1/2 -translate-y-1/2 left-10 border-2 w-full rounded-ss-3xl rounded-es-3xl" loading="lazy"/>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="pt-20 relative mb-80">
                    <div className="p-2 w-konten mx-auto" data-aos="fade-up">
                        <h1 className="text-center font-bold text-xl md:text-6xl md:w-3/5 m-auto my-5 lg:my-10">Kegiatan Divisi</h1>
                        <p className="text-center font-normal text-sm md:text-base mb-10 w-full md:w-3/5 md:mx-auto">{divisiDetail.deskripsiKegiatan}</p>
                    </div>
                </section>

                <section className="md:pt-32 -pt-32 relative pb-40" id="materi">
                    <div className="absolute inset-0 -z-10 lg:-top-40 -top-60 rounded-tl-[1rem] rounded-tr-[1rem] lg:rounded-tl-[3rem] lg:rounded-tr-[3rem]"
                        style={{
                        backgroundColor: "#1E1E1E",
                        }} >
                    </div>
                    {/* carousel  */}
                    <div className="w-full absolute left-1/2 -translate-x-1/2 -top-80">
                        <CardCarousel data={divisiDetail.itemsKegiatan}/>
                    </div>
                    <div className="text-white p-2 w-konten mx-auto" data-aos="fade-up">
                        <h1 className="text-center font-bold text-xl md:text-6xl md:w-3/5 m-auto mb-10">Materi Ajar</h1>
                        <p className="text-center font-normal text-sm md:text-base mb-10 w-full lg:w-3/5 md:mx-auto">{divisiDetail.deskripsiMateri}</p>
                    </div>
                    <div className="text-white p-2 w-konten lg:w-3/4 mx-auto flex flex-col">
                        {
                            divisiDetail.itemsMateri.map((item, index) => (
                                <div key={index} className="mb-4 flex sm:justify-center lg:justify-normal border py-2 rounded-md w-full lg:w-konten lg:mx-auto" data-aos="fade-up">
                                    <div className="w-6 lg:w-7 mx-5 pt-2">
                                        <FontAwesomeIcon icon={item.icon} className="w-full h-auto"/>
                                    </div>
                                    <div className="pt-1 w-11/12">
                                        <p className="font-semibold text-lg md:text-3xl mb-2 w-full">{item.judul}</p>
                                        <p className="text-sm md:text-lg mb-8 w-full">{item.deskripsi}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </section>
            </div>
        ) : navigate("/error")
    );
}

export default DivisiPage;
