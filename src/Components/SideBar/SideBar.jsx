
import { useEffect } from 'react';
import { categories } from '../../utils/constants'
import SideBarButton from './SideBarButton';
import { Stack } from '@mui/material';

const SideBar = ({ selected, setSelected }) => {

    return (
        <Stack direction="row" sx={{ overflowY: "auto", height: { sx: "auto", md: "95%" }, flexDirection: { md: "column" } }}>
            {categories.map((category, index) => (
                <SideBarButton selected={selected} setSelected={setSelected} key={index} title={category.name} icon={category.icon} />
            ))}
        </Stack>
    )
}

export default SideBar
