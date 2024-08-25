
import { Box, CardContent, CardMedia, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import { demoProfilePicture } from "../utils/constants"

const ChannelCard = ({ channel, mTop, mAuto }) => {
    return (
        <Box sx={{
            boxShadow: 'none',
            borderRadius: '20px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '392px',
            height: '326px',
            margin: mAuto,
            marginTop: mTop
        }}>
            <Link to={`/channel/${channel?.id?.channelId}`}>
                <CardContent sx={{
                    height: "100%",
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    textAlign: 'center',
                    color: "#fff"
                }}>
                    <CardMedia image={channel?.snippet?.thumbnails?.high?.url || demoProfilePicture} sx={{
                        borderRadius: "50%",
                        width: "180px",
                        height: "180px",
                        textAlign: "center"
                    }} />
                    <Typography variant="h6">
                        {channel?.snippet?.title}
                    </Typography>
                    <Typography>
                        {channel?.statistics?.subscriberCount && (
                            <Typography>
                                {parseInt(channel?.statistics?.subscriberCount).toLocaleString()}
                            </Typography>
                        )}
                    </Typography>
                </CardContent>

            </Link>
        </Box>
    )

}

export default ChannelCard
