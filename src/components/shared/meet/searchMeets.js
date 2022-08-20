



const SearchMeets = ({ setFilter, setType }) => {
    return (
        <div className="col-md-12">
            <div className="card mb-2">
                <h5 className="card-header">جست و جو در بین جلسات</h5>
                <div className="card-body">
                    <div className="row">
                        <div className="col-xs-12 col-md-6 col-lg-9">
                            <label for="defaultSelect" class="form-label">جست و جو جلسات</label>
                            <input onChange={(e) => setFilter(e.target.value)} type="text" className="form-control" id="defaultFormControlInput" placeholder="عنوان جلسات" aria-describedby="defaultFormControlHelp" />
                        </div>
                        <div class="col-xs-12 col-md-6 col-lg-3">
                            <label for="defaultSelect" class="form-label">نوع جلسه</label>
                            <select id="sendNotification" class="form-select" name="sendNotification" onChange={(e) => setType(e.target.value)}>
                                <option value="meeting">کنفرانس</option>
                                <option value="audiences">حضوری</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SearchMeets;