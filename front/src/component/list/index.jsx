import './style.css';

export function ListMusic({item}){
    return(
        <>
            <div className='music_container'>
                <div className="music-wrapp">
                    <div className='description'>Title</div>
                    <div className='points'>:</div>  
                    <div>{item.title}</div>
                </div>
                <div className="music-wrapp">
                    <div className='description'>Artist</div>
                    <div className='points'>:</div> 
                    <div>{item.artist}</div>
                </div>
                <div className="music-wrapp">
                    <div className='description'>Genre</div>
                    <div className='points'>:</div>  
                    <div>{item.genre}</div>
                </div>
                <div className="music-wrapp">
                    <div className='description'>Year</div>
                    <div className='points'>:</div> 
                    <div>{item.year}</div>
                </div>
            </div>
        </>
    )
}