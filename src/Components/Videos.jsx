import { Stack, Box } from '@mui/material'
import VideoCard from './VideoCard';
import ChannelCard from './ChannelCard';

const Videos = ({ videos, direction }) => {
    if (videos) {
        return (
            <Stack sx={{ overflowY: 'auto' }} direction={direction || 'row'} flexWrap={`wrap`} justifyContent={`center`} gap={3}>
                {videos.map((item, index) => {
                    if (item.id.videoId) {
                        return <VideoCard key={`${item}_${index}`} video={item} />
                    } else if (item.id.channelId) {
                        return <ChannelCard key={`${item}_${index}`} channel={item} />
                    }
                })}
            </Stack>
        )

    } else {
        return (
            <h1> Loading... </h1>
        )
    }
}

export default Videos
