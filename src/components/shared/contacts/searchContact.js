



const SearchContact = ({ setFilter }) => {
    return (
        <div className="card mb-2">
            <h5 className="card-header">جست و جو در بین مخاطبین</h5>
            <div className="card-body">
                <div className="row">
                    <div className="col-sm-12 col-md-12">
                        <input onChange={(e) => setFilter(e.target.value)} type="text" className="form-control" id="defaultFormControlInput" placeholder="نام دسته بندی" aria-describedby="defaultFormControlHelp" />
                        <div id="defaultFormControlHelp" className="form-text d-flex justify-content-between align-items-center">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SearchContact;