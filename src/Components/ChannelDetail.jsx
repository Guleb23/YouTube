import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Box } from "@mui/material"
import VideoCard from "./VideoCard"
import ChannelCard from "./ChannelCard"
import { useFetch } from "../Hooks/useFetch"
import Videos from "./Videos"

const ChannelDetail = () => {
    const { id } = useParams();
    const paramsForChannel = `?part=snippet%2Cstatistics&id=${id}`;
    const paramsForVideo = `?channelId=${id}&part=snippet%2Cid&order=date`
    const { data: channelData, isLoading: channelIsLoading } = useFetch("https://youtube-v31.p.rapidapi.com/channels", paramsForChannel);
    const { data: videoData, isLoading: videoIsLoading } = useFetch("https://youtube-v31.p.rapidapi.com/search", paramsForVideo);
    if (channelIsLoading && videoIsLoading) {
        return (
            <p>IsLoadingData</p>
        )

    }

    return (
        <Box minHeight={`95vh`}>
            <Box>
                <div style={{
                    background: 'linear-gradient(0deg, rgba(142,45,226,1) 0%, rgba(74,0,224,1) 100%)',
                    height: '300px',
                    zIndex: "10"
                }}>
                </div>
                <ChannelCard channel={channelData?.items[0]} mTop={`-8rem`} mAuto={"auto"} />

                <Box p={2} display="flex">
                    <Box sx={{ mr: { sm: '100px' } }} />
                    <Videos videos={videoData?.items} />
                </Box>

            </Box>
        </Box>
    )
}

export default ChannelDetail
