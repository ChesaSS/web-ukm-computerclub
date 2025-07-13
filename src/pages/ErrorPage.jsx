import { faWarning } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ErrorPage(){

    return (
        <div className="min-h-screen flex max-md:flex-col items-center justify-center w-10/12 m-auto">
        <div className="flex md:w-1/2 p-8">
            <FontAwesomeIcon icon={faWarning} size="10x" className="text-secondary m-auto" />
        </div>

        <div className="w-full md:w-1/2 p-4 md:p-8">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4 flex flex-col justify-center max-md:text-center">Halaman tidak ditemukan!</h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-md:text-center">Ups, halaman yang anda cari tidak ditemukan. Silahkan kembali ke halaman Beranda</p>
            <div className="flex max-md:justify-center">
                <a href="/" className="px-6 py-3 bg-secondary text-white rounded-lg hover:bg-secondary transition duration-300 ease-in-out">ke Beranda</a>
            </div>
        </div>
    </div>
    );
}

export default ErrorPage;