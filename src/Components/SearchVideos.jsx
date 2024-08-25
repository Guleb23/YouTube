import { Box, Typography } from "@mui/material"
import Videos from "./Videos"
import { useParams } from "react-router-dom"
import { useFetch } from "../Hooks/useFetch";

const SearchVideos = () => {
    const { searchText } = useParams();
    const { data, isLoading } = useFetch("https://youtube-v31.p.rapidapi.com/search", `?part=snippet&q=${searchText}`)
    console.log(data);

    return (
        <Box p={2} sx={{ overflowY: "auto", height: "90vh" }}>
            <Typography variant="h4" fontWeight={"bold"} color={`white`} mb={2} sx={{ mb: "5rem" }} >
                <span> Результаты поиска по {searchText}  </span>
            </Typography>
            <Videos videos={isLoading ? [] : data?.items} />
        </Box>
    )
}

export default SearchVideos
