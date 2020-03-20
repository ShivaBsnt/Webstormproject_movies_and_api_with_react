


export default function Movies(){
    const [nowPlaying,setnowPlaying]= useState([])
    const [popularMovies,setpopularMovies]= useState([])
    const [topRated,settopRated]= useState([])

    useEffect(()=>{
        getAllMovies();
    },[]);

    const getAllMovies = async () =>
    {


        let apikey = '02689249b40636b114a2add6006bff65'

        const allMovies = await Axios.all([
            Axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apikey}&language=en-US&page=1`),
            Axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apikey}&language=en-US&page=1`),
            Axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apikey}&language=en-US&page=1`),
        ]);
        console.log(allMovies[0].data.results);
        setnowPlaying(allMovies[0].data.results)
        setpopularMovies(allMovies[1].data.results)

    }