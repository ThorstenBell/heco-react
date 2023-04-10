import React, {useEffect, useState} from "react";
import header1 from "../Assets/images/banner/header1.jpg"
import header2 from "../Assets/images/banner/header2.jpg"
import header3 from "../Assets/images/banner/header3.jpg"
import header4 from "../Assets/images/banner/header4.jpg"
import Icon from "@mdi/react";
import {mdiChevronDown} from "@mdi/js";
import '../Assets/css/header.css';

interface Props {
    scroll(id: string): void;
}
const Header = ({scroll}:Props) => {
    const [headerIndex, setHeaderIndex] = useState(0);

    useEffect(() => {
        setTimeout(()=>{
            const newHeaderIndex = headerIndex < 3 ? headerIndex + 1 : 0;
            setHeaderIndex(newHeaderIndex);
        }, 5000)
    }, [headerIndex])

    const headerImages: string[] = [header1, header2, header3, header4]
    const headerBg: { backgroundImage: string } = {
        backgroundImage: `url(${headerImages[headerIndex]})`,
    };

    return (
        <header id="banner" style={headerBg}>
            <div className="header-text">
                <h1>Analytics Software for<br/>Evidence based Healthcare</h1>
                <button type='button' title="Read more!" onClick={() => scroll('tools')}><Icon path={mdiChevronDown} size={2}></Icon></button>
            </div>
        </header>
    )
}

export default Header