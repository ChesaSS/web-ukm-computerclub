import { useNavigate, useParams } from "react-router-dom";
import prokerData from "../../data/proker/data";
import YouTube from "react-youtube";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ProkerPage() {
    const { proker } = useParams();
    const navigate = useNavigate();
    const prokerDetail = prokerData.find((data) => data.singkatan === proker);

    const onPlayerReady = (event) => {
        event.target.pauseVideo();
    }
    
    const opts= {
    playerVars: {
        controls: 0,
        autoplay: 0,
        iv_load_policy:3,
        playsinline:1,
        fs: 1,
        rel:0,
        disablekb: 1,
        showinfo: 0,
    },
    };

    return (
        prokerDetail ? (
            <div>
                <div className="absolute inset-0 -z-10 bg-ornamen bg-fixed bg-bottom"/>

                <section className="py-8 md:pb-20 relative 2xl:h-screen">
                    <div className="p-2 w-konten mx-auto" data-aos="fade-up">
                        <h1 className="text-center font-semibold text-xl md:text-lg text-secondary m-auto mt-10 mb-2">Program Kerja</h1>
                        <div className="w-2/5 md:w-1/5 lg:w-1/12 m-auto relative z-10 my-10">
                            <img src={prokerDetail.logo} className="w-full rounded-ss-lg rounded-se-lg" loading="lazy"></img>
                        </div>
                    </div>
                    <div className="p-2 w-konten mx-auto" data-aos="fade-up">
                        <h1 className="text-center font-bold text-xl md:text-6xl md:w-3/5 m-auto my-10">{prokerDetail.name}</h1>
                        <p className="text-justify font-normal text-sm md:text-base mb-10 w-full md:w-3/5 md:mx-auto">{prokerDetail.deskripsi}</p>
                    </div>
                </section>

                <section className="pt-24 relative pb-40">
                    <div className="absolute inset-0 z-0 md:top-48"
                        style={{
                        backgroundColor: "#1E1E1E",
                        }} >
                    </div>
                    <div className="w-full lg:w-3/4 flex aspect-video m-auto relative">
                        <YouTube videoId={prokerDetail.videoYoutube} className="aspect-video absolute z-10 -translate-x-1/2 left-1/2 -top-1/4 w-full" opts={opts} onReady={onPlayerReady} iframeClassName="w-konten mx-auto h-full lg:rounded-2xl"/>
                    </div>
                    <div className="text-white p-2 w-konten mx-auto" data-aos="fade-up">
                        <h1 className="text-center font-bold text-xl md:text-6xl md:w-3/5 m-auto mb-10">{prokerDetail.name} Latest Facts</h1>
                        <div className="text-justify lg:text-center font-normal text-sm md:text-base mb-10 w-full md:w-3/4 md:mx-auto" dangerouslySetInnerHTML={{ __html: prokerDetail.deskripsiDetail }}></div>
                    </div>
                    <div className="text-white p-2 w-konten mx-auto flex justify-center flex-wrap lg:flex-nowrap" data-aos="fade-up">
                        {
                            prokerDetail.items.map((item, index) => (
                                <div key={index} className="mb-4 flex flex-col gap-6 lg:gap-10 m-2 max-lg:grow">
                                    <FontAwesomeIcon className="w-full h-14 m-auto text-white" icon={item.icon} />
                                    <p className="text-center font-semibold text-sm md:text-base mb-10 w-full md:w-4/5 md:mx-auto">{item.text}</p>
                                </div>
                            ))
                        }
                    </div>

                    <div className="lg:bg-secondary max-lg:gap-3 lg:py-5 w-4/5 mx-auto lg:rounded-[3rem] flex flex-col flex-warp lg:flex-row lg:flex-nowrap justify-evenly items-center text-white " data-aos="fade-up">
                        {
                            prokerDetail.facts.map((item, index) => (
                                <div key={index} className="flex flex-col gap-2 w-full max-md:py-3 max-lg:bg-secondary max-lg:rounded-[1rem] max-lg:py-2">
                                    <h1 className="text-center font-bold text-xl md:text-6xl m-auto">{item.head}</h1>
                                    <p className="text-center font-semibold text-sm md:text-lg w-full md:mx-auto">{item.text}</p>
                                </div>
                            ))
                        }
                    </div>
                </section>

                <section className="py-8 md:pb-20 relative">
                    <div className="p-2 w-konten mx-auto" data-aos="fade-up">
                        <h1 className="text-center font-semibold text-xl md:text-lg text-secondary m-auto mt-10 mb-2">Galeri</h1>
                    </div>
                    <div className="p-2 w-konten mx-auto" data-aos="fade-up">
                        <h1 className="text-center font-bold text-xl md:text-6xl md:w-3/5 m-auto mb-10">Beberapa Dokumentasi {prokerDetail.singkatan.toUpperCase()} {prokerDetail.periode}</h1>
                        <p className="text-center font-normal text-sm md:text-base mb-10 w-full md:w-3/5 md:mx-auto">{prokerDetail.deskripsiDokumentasi}</p>
                    </div>
                    <div className="p-2 w-konten mx-auto flex flex-wrap justify-center">
                        {
                            prokerDetail.dokumentasi.map((item, index) => (
                                <div key={index} className="w-96 m-1" data-aos="fade-up">
                                    <img src={item.path} alt={item.alt} className="w-full h-full object-cover rounded-md" loading="lazy"/>
                                </div>
                            ))
                        }
                    </div>
                </section>
            </div>
        ) : navigate("/error")
    );
}

export default ProkerPage;