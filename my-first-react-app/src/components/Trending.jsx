import React from "react";


const TrendingMovies = ({ movies }) => {
    return <section>
        <h1 className="text-left m-[0px] text-5xl font-extrabold">Trending Movies</h1>
        <div className="flex flex-wrap gap-5 mt-4 overflow-x-auto">
            {movies.map((movie, index) =>
                <div key={movie.id} className="relative">
                    <span className="absolute text-white left-0 rounded-xs  font-extrabold text-7xl mr-0">
                        {index + 1}
                    </span>
                    <img src={movie.poster_path ? ` https://image.tmdb.org/t/p/w500/${movie.poster_path}` : '/nomovie.png'}
                        alt={movie.title} className="w-[107px] h-[143px] object-cover rounded" />
                </div>)}

        </div >

    </section >

}
export default TrendingMovies