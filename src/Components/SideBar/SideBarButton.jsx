import { useEffect } from "react";

const SideBarButton = ({ title, icon, selected, setSelected }) => {
    const selectdeCategory = selected;
    return (
        <button className='category-btn' style={{ backgroundColor: title === selectdeCategory ? "#FC1503" : "#000", color: "#fff", flex: "flex", alignItems: "center", gap: 2 }} onClick={() => { setSelected(title) }}>
            <span style={{ color: title === selectdeCategory ? "white" : "red", marginRight: "1rem" }}>{icon}</span>
            <span style={{ opacity: title === selectdeCategory ? "1" : "0.8" }}>{title}</span>
        </button>
    )
}

export default SideBarButton
