import { useEffect, useState } from "react";
import { XMarkIcon } from "@heroicons/react/20/solid";

export default function SearchBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async () => {
    if (search.trim() !== "") {
      setIsLoading(true);
      try {
        const response = await fetch(
          `https://bluemotorsec.com/wp-json/wp/v2/productos-tienda?search=${search}`
        );
        const results = await response.json();
        setSearchResult(results);
      } catch (error) {
        console.log("Error fetching data: ", error);
      } finally {
        setIsLoading(false);
      }
    } else {
      setSearchResult([]);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
      setSearchResult([]);
    }
  }, [isOpen]);

  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)} className="hover:text-primary">
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
        <div className="fixed inset-0 bg-bg bg-opacity-95 z-50 flex items-center justify-center">
          <div className="w-full max-w-7xl px-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Empieza por buscar un modelo"
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-transparent border-b border-white text-white text-xl py-2 pr-10 pl-4 focus:outline-none"
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    handleSearch();
                  }
                }}
              />
              <button
                onClick={handleSearch}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white"
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
                  />
                </svg>
              </button>
            </div>

            {isLoading && (
              <div
                role="status"
                className="mt-4 mx-auto flex items-center justify-center w-full"
              >
                <svg
                  aria-hidden="true"
                  className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                <span className="sr-only">Cargando...</span>
              </div>
            )}

            {!isLoading && searchResult.length > 0 && (
              <div className="mt-4">
                {searchResult.map((producto, index) => (
                  <a href={`/producto/${producto.id}`} key={index}>
                    <div className="flex items-center mt-4">
                      <div>
                        <p className="text-white text-lg">
                          {producto.acf.nombre}
                        </p>
                        <p className="text-gray-400">
                          {producto.acf.descripcion}
                        </p>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            )}
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 font-bold text-white text-xl"
          >
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>
      )}
    </>
  );
}
