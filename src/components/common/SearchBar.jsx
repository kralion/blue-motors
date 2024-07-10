import { useState, useEffect } from "react";
import data from "../../data/data.json";

export default function SearchBar() {

    const [isOpen, setIsOpen] = useState(false);
    const [search, setSearch] = useState("");
    const [searchResult, setSearchResult] = useState([]);

    const handleSearch = () => {
        if (search.trim() !== "") {
            const results = Object.values(data).filter(producto => {
                return producto.modelo.toLowerCase().includes(search.toLowerCase());
            });
            setSearchResult(results);
        } else {
            setSearchResult([]);
        }
    }

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
            setSearchResult([]);
        }
    }, [isOpen]);



    return (
        <>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="hover:text-red-dark"

            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                </svg>
            </button>

            {isOpen && (
                <div className="fixed inset-0 bg-gray-900 bg-opacity-95 z-50 flex items-center justify-center">
                    <div className="w-full max-w-7xl px-4">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Empieza por buscar un modelo"
                                onChange={e => setSearch(e.target.value)}
                                className="w-full bg-transparent border-b border-white text-white text-xl py-2 pr-10 pl-4 focus:outline-none"
                            />
                            <button 
                                onClick={handleSearch}
                                className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </button>
                        </div>
                        



                        
                        {searchResult.length > 0 && (
                            <div className="mt-4">
                                {searchResult.map((producto, index) => (
                                    <a href="/producto/123">
                                        <div key={index} className="flex items-center mt-4">
                                            <img src={producto.fotos[0].image1} alt="Producto" className="w-20 h-16 mr-4" />
                                            <div>
                                                <p className="text-white text-lg">{producto.modelo}</p>
                                                <p className="text-gray-400">{producto.descripcion}</p>
                                            </div>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        )}
                    </div>
                    <button
                        onClick={() => setIsOpen(false)}
                        className="absolute top-4 right-4 font-bold text-white text-5xl"
                    >
                        &times;
                    </button>
                </div>
            )}
        </>
    )
}
