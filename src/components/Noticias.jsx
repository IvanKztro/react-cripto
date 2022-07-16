import { useState, useEffect } from "react";

const Noticias = () => {
  const [news, setNews] = useState(null);
  useEffect(() => {
    const getNews = async () => {
      const url = "https://min-api.cryptocompare.com/data/v2/news/?lang=ES";
      const response = await fetch(url);
      const result = await response.json();
      console.log(result.Data.slice(46));
      setNews(result.Data.slice(42));
    };

    getNews();
  }, []);

  if (!news) return null;
  return (
    // <main class="content grid lg:grid-cols-4 md:grid-cols-2 gap-5 ">
    <main className="content grid grid-cols-12  grid- gap-5 ">
      <section className="col-start-2 col-span-10">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-3">
          {news.map((n, index) => (
            <a href={n.url} target="_blank" rel="noopener noreferrer">
              <div
                class="item rounded-lg shadow-lg hover:bg-gray-200 hover:cursor-pointer my-2"
                key={n.id}
              >
                {/* <section class="grid grid-cols-4"> */}
                <div>
                  <img
                    src={n.imageurl}
                    class="object-fill hover:blur-sm w-full h-[18rem] rounded-lg "
                    alt=""
                  />
                </div>
                <div class="h-[5rem] px-3">
                  <span class="text-sm font-bold">
                    {n.title.substr(0, 70)}...
                  </span>
                </div>
                {/* <div>
                  <span class="text-sm">{n.body.substr(0, 120)}...</span>
                </div> */}
                {/* </section> */}
              </div>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Noticias;
