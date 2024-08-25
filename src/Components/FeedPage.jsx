
import { Box, Stack, Typography } from "@mui/material"
import SideBar from './SideBar/SideBar'
import Videos from "./Videos"

import { useFetch } from "../Hooks/useFetch"
import { useEffect, useState } from "react"

const FeedPage = () => {
    const urls = "https://youtube-v31.p.rapidapi.com/search";

    const [selected, setSelected] = useState('New');
    const { data, isLoading, updateUrl } = useFetch(urls, `?part=snippet&q=${selected}`);;




    return (
        <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
            <Box sx={{ height: { sx: "auto", md: "92vh" }, px: { sx: 0, md: 2 }, borderRight: "1px solid #3d3d3d" }}>
                <SideBar updateUrl={updateUrl} selected={selected} setSelected={setSelected} />
                <Typography className='copyright' variant='body2' sx={{ mt: 1.5, color: "#fff" }}>
                    New youTube by me
                </Typography>
            </Box>
            <Box p={2} sx={{ overflowY: "auto", height: "90vh" }}>
                <Typography variant="h4" fontWeight={"bold"} color={`white`} mb={2} >
                    {selected}<span > videos  </span>
                </Typography>
                <Videos videos={isLoading ? [] : data?.items} />
            </Box>
        </Stack>
    )
}

export default FeedPage
