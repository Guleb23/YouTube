import { Typography, Card, CardContent, CardMedia } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import React from 'react'
import { Link } from 'react-router-dom'
import { demoThumbnailUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle, demoVideoUrl } from '../utils/constants'


const VideoCard = ({ video: { id: { videoId }, snippet } }) => {

    return (
        <Card sx={{ borderRadius: "1rem", width: { sx: { md: "320px", xs: "100%" } } }} >
            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                <CardMedia image={snippet?.thumbnails?.high?.url}
                    alt={snippet?.title} sx={{ height: `180px`, objectFit: 'contain' }} />
            </Link>
            <CardContent height={150} sx={{ backgroundColor: '#1e1e1e', width: `360px`, height: "100px" }}>
                <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                    <Typography variant='subtitle1' fontWeight={`bold`} color={`#fff`}>
                        {snippet?.title.slice(0, 50) || demoVideoTitle.slice(0, 50)}
                    </Typography>
                </Link>
                <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
                    <Typography variant='caption text' fontWeight={`bold`} color={`#B5C0D0`}>
                        {snippet?.channelTitle || demoChannelTitle}
                    </Typography>
                </Link>
            </CardContent>
        </Card>
    )
}

export default VideoCard
