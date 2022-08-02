



const SearchCategories = ({ setFilter }) => {
    return (
        <div class="card mb-2">
            <h5 class="card-header">جست و جو در بین دسته بندی ها</h5>
            <div class="card-body">
                <div>
                    <input onChange={(e) => setFilter(e.target.value)} type="text" class="form-control" id="defaultFormControlInput" placeholder="نام دسته بندی" aria-describedby="defaultFormControlHelp" />
                    <div id="defaultFormControlHelp" class="form-text">
                        این اطلاعات بین دسته بندی هایی که شما ثبت کرده اید دریافت میشود
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SearchCategories;