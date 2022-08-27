



const Waiting = () => {
    return (
        <>
            <div className="d-none d-lg-flex col-lg-7 col-xl-8 align-items-center">
                <div className="flex-row text-center mx-auto">
                    <img src="../../assets/img/pages/register-light.png" alt="Auth Cover Bg color" width="520" className="img-fluid authentication-cover-img" data-app-light-img="pages/register-light.png" data-app-dark-img="pages/register-dark.png" />
                    <div className="mx-auto">
                        <h3>ساختگی با تولید سادگی</h3>
                        <p>
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                        </p>
                    </div>
                </div>
            </div>
            <div className="d-flex col-12 col-lg-5 col-xl-4 align-items-center authentication-bg p-sm-5 p-4">
                <div className="col-12 mx-auto">
                    <div className="card-header">
                 
                    </div>
                    <div className="card-body">
                        <span className="d-inline-block lh-1-85 mb-2">جزئیات جلسه</span>
                        <div className="progress progress-stacked mb-4" style={{ height: "8px" }}>
                            <div className="progress-bar bg-success" role="progressbar" style={{ width: "30%" }} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                            <div className="progress-bar bg-danger" role="progressbar" style={{ width: "15%" }} aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
                            <div className="progress-bar bg-info" role="progressbar" style={{ width: "10%" }} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                            <div className="progress-bar bg-primary" role="progressbar" style={{ width: "40%" }} aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
                            <div className="progress-bar bg-warning" role="progressbar" style={{ width: "15%" }} aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <button className="btn btn-secondary text-nowrap mt-4 w-100" disabled>
                            جلسه هنوز شروع نشده است
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Waiting;