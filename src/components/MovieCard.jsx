import React from "react";


const MovieCard = ({ movie: { title, vote_average, poster_path, release_date, original_language } }) => {
    return (
        <div className="movie-card">
            <img
                src={poster_path ? ` https://image.tmdb.org/t/p/w500/${poster_path}` : '/nomovie.png'}
                alt="{title}"
            />
            <div className="mt-4 flex-col">
                <h3>{title}</h3>
                <div className="content">
                    <div className="rating">
                        <img src="star.svg" alt="Star Icon" />
                        <p>{vote_average ? vote_average.toFixed(1) : 'N/A'}</p>

                    </div>
                    <span>•</span>
                    <p className="lang">{original_language}</p>

                    <span>•</span>
                    <p className="year">{release_date ? release_date.split('-')[0] : 'N/A'}</p>
                    <button onClick={() => window.open(`https://www.youtube.com/results?search_query=${encodeURIComponent(title)}+trailer`, "_blank")} className="p-1 rounded-md bg-yellow-500 text-xl font-semibold hover:bg-white" >Watch Trailer</button>
                </div>
            </div>


        </div >
    )
}

export default MovieCard;