import { useState } from 'react';
import AddType from './addType';
import TabMeet from './tabMeet';
import TabVerbal from './tabVerbal';



const TabConference = () => {

    const [tab, setTab] = useState("type");

    function Tabs({ type }) {
        switch (type) {
            case "options":
                return <TabMeet />;
            case "verbal":
                return <TabVerbal />;
            case "type":
                return <AddType setTab={setTab} />
            default:
                return ;
        }
    }

    return (
        <div className="row">
            <div className="col-md-12">
                <ul className="nav nav-pills flex-row mb-3 ">
                    <li className="nav-item" onClick={() => setTab("type")}>
                        <button className={`${tab === "type" ? "btn btn-secondary" : "nav-link"}`}><i className="bx bx-user me-1"></i> انتخاب نوع</button>
                    </li>
                    <li className="nav-item">
                        <button className={`${tab !== "type" ? "btn btn-secondary" : "nav-link"}`}><i className="bx bx-detail me-1"></i>امکانات جلسه</button>
                    </li>
                </ul>
                <div className="card mb-4">
                    <Tabs type={tab} />
                </div>
            </div>
        </div>
    );
}

export default TabConference;