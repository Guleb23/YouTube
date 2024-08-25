import { useState } from "react"
import { Link, useNavigate, useNavigation } from "react-router-dom"
import { Paper, IconButton } from '@mui/material'
import { Search } from "@mui/icons-material"

const SearchBar = () => {
    const [userQuery, setUserQuery] = useState("Fortnite");
    const navigation = useNavigate();
    return (
        <Paper component="form" onSubmit={() => { navigation(`/search/${userQuery}`) }} sx={{ borderRadius: "1rem", mr: { sm: 5 }, px: 1, display: "flex", alignItems: "center" }}>
            <input className="search-bar" type="text" onChange={(e) => { setUserQuery(e.target.value) }} placeholder="что такое шторм сюрдж? И причем здесь White" />
            <Link to={`/search/${userQuery}`}>
                <IconButton>
                    <Search />
                </IconButton>
            </Link>

        </Paper>
    )
}

export default SearchBar
