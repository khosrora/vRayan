




const AddType = ({ setTab }) => {
    return (
        <div class="card overflow-hidden">
            <div class="help-center-header d-flex flex-column justify-content-center align-items-center">
                <h5 class="text-center zindex-1 secondary-font mt-4">لطفا نوع جلسه را انتخاب کنید</h5>
                <div class="help-center-popular-articles py-5">
                    <div class="container-xl">
                        <div class="row">
                            <div class="col-lg-10 mx-auto">
                                <div class="row mb-3">
                                    <div class="col-md-6 mb-md-0 mb-4">
                                        <div class="card border shadow-none">
                                            <div class="card-body text-center">
                                                <img class="mb-4" src="./assets/img/icons/unicons/rocket-square.png" height="48" alt="Help center articles" />
                                                <h5>حضوری</h5>
                                                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با</p>
                                                <button disabled class="btn btn-label-secondary" >به زودی</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6 mb-md-0 mb-4">
                                        <div class="card border shadow-none">
                                            <div class="card-body text-center">
                                                <img class="mb-4" src="./assets/img/icons/unicons/cube.png" height="48" alt="Help center articles" />
                                                <h5>کنفرانس</h5>
                                                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت</p>
                                                <button class="btn btn-label-secondary" onClick={() => setTab("options")} >تایید جلسه</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddType;