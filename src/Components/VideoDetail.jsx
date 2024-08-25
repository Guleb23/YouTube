import { Link, useParams } from "react-router-dom"
import ReactPlayer from "react-player";
import { useFetch } from "../Hooks/useFetch";
import { Box, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Videos from "./Videos";

const VideoDetail = () => {
    const { id } = useParams();
    const paramsForVideo = `${id}&type=video`
    const { data, isLoading } = useFetch("https://youtube-v31.p.rapidapi.com/videos?part=contentDetails%2Csnippet%2Cstatistics&id=", id);
    const { data: videoData, isLoading: isLoadingvideoData } = useFetch("https://youtube-v31.p.rapidapi.com/search?part=snippet&relatedToVideoId=", paramsForVideo);
    const paramsForChannel = `?part=snippet%2Cstatistics&id=${isLoading ? 1 : data.items[0]?.snippet?.channelId}`;
    const { data: channelData, isLoading: channelIsLoading } = useFetch("https://youtube-v31.p.rapidapi.com/channels", paramsForChannel);
    console.log(videoData);

    if (!isLoading) {
        return (
            <Box minHeight='95vh' >
                <Stack height='95vh' overflow={`hidden`} direction={{ xs: 'column', md: 'row' }}>
                    <Box flex={1}>
                        <Box sx={{ width: '100%', top: '86px' }}>
                            <ReactPlayer className="react-player" url={`https://www.youtube.com/watch?v=${id}`} controls />
                        </Box>

                        <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
                            {data.items[0]?.snippet?.title}
                        </Typography>
                        <Stack direction={`row`} justifyContent={`space-between`} sx={{ color: '#fff' }} py={1} px={2}>
                            <Link to={`/channel/${data.items[0]?.snippet?.channelId}`}>
                                <Stack direction={'row'} gap={2} alignItems={"center"}>
                                    <img style={{ borderRadius: "50%" }} src={channelData?.items[0]?.snippet?.thumbnails?.high?.url} width={50} height={50} />
                                    <Stack direction={'column'}>
                                        <Typography variant="h6" color={'#fff'} >
                                            {data.items[0]?.snippet?.channelTitle}
                                        </Typography>
                                        <Typography variant="caption text" color={'gray'}  >
                                            {parseInt(channelData?.items[0]?.statistics?.subscriberCount).toLocaleString()}
                                            {" "}подписчиков
                                        </Typography>

                                    </Stack>
                                </Stack>

                            </Link>
                            <Stack direction={'column'}>
                                <Typography variant="caption text" color={'gray'} >
                                    {data.items[0]?.statistics?.viewCount}
                                    {" "}просмотров
                                </Typography>
                            </Stack>
                        </Stack>
                    </Box>
                    <Box px={2} justifyContent="center" alignItems="center" sx={{ overflowY: 'scroll' }}>
                        <Videos direction="column" videos={isLoadingvideoData ? [] : videoData?.items} />
                    </Box>
                </Stack>

            </Box>
        )
    } else {
        return (
            <h1 style={{ color: "#fff", height: "100vh", width: "100wv", backgroundColor: "#000" }}>Loading....</h1>
        )
    }







}

export default VideoDetail
