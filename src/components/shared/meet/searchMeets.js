



const SearchMeets = ({ setFilter }) => {
    return (
        <div className="col-md-12">
            <div className="card mb-2">
                <h5 className="card-header">جست و جو در بین جلسات</h5>
                <div className="card-body">
                    <div className="row">
                        <div className="col-xs-12">
                            <label for="defaultSelect" class="form-label">جست و جو جلسات</label>
                            <input onChange={(e) => setFilter(e.target.value)} type="text" className="form-control" id="defaultFormControlInput" placeholder="عنوان جلسات" aria-describedby="defaultFormControlHelp" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SearchMeets;