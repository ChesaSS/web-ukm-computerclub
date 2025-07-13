import Navbar from "../../component/Navbar";
import CardFungsio from "../../component/CardFungsio";
import intiData from '../../data/fungsio/inti';
import WebData from '../../data/fungsio/web';
import OfficeData from '../../data/fungsio/office';
import GameData from '../../data/fungsio/game';
import VcdData from '../../data/fungsio/vcd';

function FungsioPage(){
    return(
        <div className="relative">
            <div className="absolute inset-0 -z-10 bg-ornamen bg-fixed bg-bottom"/>
            
            <Navbar />

            <section className="py-32">
                <h1 className="text-center font-semibold text-3xl uppercase" data-aos="fade-up">Fungsionaris UKM Computer Club</h1>

                <div className="w-konten mx-auto mt-20" data-aos="fade-up">
                    <div className="lg:flex items-center">
                        <div className="border border-black w-full"></div>
                        <h5 className="text-xl font-semibold lg:w-[55%] text-center uppercase">Fungsionaris Inti UKM Computer Club</h5>
                        <div className="border border-black w-full"></div>
                    </div>

                    <div className="p-2 w-[98%] mx-auto my-5 flex justify-center items-center flex-wrap">
                        {intiData.map((Data) =>(
                            <CardFungsio key={Data.id} img={Data.img} ig ={Data.ig} kata={Data.moto} nama={Data.nama} link={Data.link}
                            />
                        ))}
                    </div>
                </div>

                <div className="w-konten mx-auto mt-20" data-aos="fade-up">
                    <div className="lg:flex items-center">
                        <div className="border border-black w-full"></div>
                        <h5 className="text-xl font-semibold lg:w-[60%] text-center uppercase">Fungsionaris Divisi Office</h5>
                        <div className="border border-black w-full"></div>
                    </div>

                    <div className="p-2 w-[98%] mx-auto my-5 flex justify-center items-center flex-wrap">
                        {OfficeData .map((Data) =>(
                            <CardFungsio key={Data.id} img={Data.img} ig ={Data.ig} kata={Data.moto} nama={Data.nama} link={Data.link}
                            />
                        ))}
                    </div>
                </div>

                <div className="w-konten mx-auto mt-20" data-aos="fade-up">
                    <div className="lg:flex items-center">
                        <div className="border border-black w-full"></div>
                        <h5 className="text-xl font-semibold lg:w-[135%] text-center uppercase">Fungsionaris Divisi Visual Communication Design</h5>
                        <div className="border border-black w-full"></div>
                    </div>

                    <div className="p-2 w-[98%] mx-auto my-5 flex justify-center items-center flex-wrap">
                        {VcdData .map((Data) =>(
                            <CardFungsio key={Data.id} img={Data.img} ig ={Data.ig} kata={Data.moto} nama={Data.nama} link={Data.link}
                            />
                        ))}
                    </div>
                </div>

                <div className="w-konten mx-auto mt-20" data-aos="fade-up">
                    <div className="lg:flex items-center">
                        <div className="border border-black w-full"></div>
                        <h5 className="text-xl font-semibold lg:w-[95%] text-center uppercase">Fungsionaris Divisi Web Development</h5>
                        <div className="border border-black w-full"></div>
                    </div>

                    <div className="p-2 w-[98%] mx-auto my-5 flex justify-center items-center flex-wrap">
                        {WebData .map((Data) =>(
                            <CardFungsio key={Data.id} img={Data.img} ig ={Data.ig} kata={Data.moto} nama={Data.nama} link={Data.link}
                            />
                        ))}
                    </div>
                </div>

                <div className="w-konten mx-auto mt-20" data-aos="fade-up">
                    <div className="lg:flex items-center">
                        <div className="border border-black w-full"></div>
                        <h5 className="text-xl font-semibold lg:w-[98%] text-center uppercase">Fungsionaris Divisi Game Development</h5>
                        <div className="border border-black w-full"></div>
                    </div>

                    <div className="p-2 w-[98%] mx-auto my-5 flex justify-center items-center flex-wrap">
                        {GameData .map((Data) =>(
                            <CardFungsio key={Data.id} img={Data.img} ig ={Data.ig} kata={Data.moto} nama={Data.nama} link={Data.link}
                            />
                        ))}
                    </div>
                </div>

            </section>
        </div>
    )
}

export default FungsioPage