



const Loader = () => {
    return (
        <div className="col-12 text-center p-4">
            <div className="d-flex">
                <div class="spinner-grow" role="status">
                    <span class="sr-only">Loading...</span>
                </div>
                <p className="mr-2">در حال دریافت اطلاعات</p>
            </div>
        </div>
    );
}

export default Loader;