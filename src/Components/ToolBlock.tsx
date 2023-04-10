import React, {useEffect, useState} from "react";
import {ITool} from "../Interfaces";
import '../Assets/css/tool-block.css';
import WaitingListDialog from "./WaitingListDialog";
import {createPortal} from "react-dom";

interface Props {
    tool: ITool;
}

const ToolBlock = ({tool}: Props) => {
    const [openDialog, setOpenDialog] = useState(false)

    useEffect(() => {
        const body = document.querySelector('body');
        if (body) {
            body.style.overflow = openDialog ? 'hidden' : 'hidden auto';
        }
    }, [openDialog])

    return (
        <div className="tool-block">
            <h3>{tool.name}</h3>
            <p>{tool.short}</p>
            {!tool.link && <button type='button' className="btn-secondary coming-soon">Coming Soon!</button>}
            {tool.link && <button type='button' className="btn-secondary"
                                  onClick={() => setOpenDialog(true)}>Learn More!</button>}
            {openDialog && createPortal(tool.link && <WaitingListDialog tool={tool} closeDialog={() => setOpenDialog(false)}></WaitingListDialog>, document.body)}
        </div>
    )
}

export default ToolBlock