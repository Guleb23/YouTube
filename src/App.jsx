import { Box } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  Navbar,
  FeedPage,
  VideoDetail,
  ChannelDetail,
  SearchVideos
} from './Components/index'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

function App() {
  const client = new QueryClient();
  return (
    <>
      <Router>
        <QueryClientProvider client={client}>
          <Box sx={{ backgroundColor: "#000" }}>
            <Navbar />
            <Routes>
              <Route path="/" element={<FeedPage />} />
              <Route path="/video/:id" element={<VideoDetail />} />
              <Route path="/channel/:id" element={<ChannelDetail />} />
              <Route path="/search/:searchText" element={<SearchVideos />} />
            </Routes>
          </Box>

        </QueryClientProvider>

      </Router>
    </>
  )
}

export default App