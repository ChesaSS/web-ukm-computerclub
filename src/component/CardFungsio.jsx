function CardFungsio(props){
    const {img, nama, ig, kata, link} = props;
    return(
        <div className="group h-80 w-72 m-1 [perspective:1000px]" data-aos="zoom-in">
            <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                <div className="absolute inset-0 [backface-visibility:hidden]">
                    <img
                    src={img}
                    className="rounded-xl w-full h-full object-cover shadow-xl shadow-hitam/20"
                    alt="Image"
                    loading="lazy"
                    />
                </div>

                <div className="absolute inset-0 h-full w-full rounded-xl bg-secondary px-2 text-center text-white [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    <div className="flex flex-col min-h-full w-full items-center justify-center">
                        <h1 className="text-2xl font-bold">{nama}</h1>
                        <div className="flex items-center my-4">
                            <i className="fa-brands fa-instagram mx-2"></i> 
                            <a href={link} className="hover:underline" target="_blank">{ig}</a>
                        </div>
                        <p className="text-center w-full text-sm">{`"${kata}"`}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardFungsio