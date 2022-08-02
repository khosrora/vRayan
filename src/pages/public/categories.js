import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CartCategories from '../../components/shared/categories/CartCategories';
import CreateCategory from '../../components/shared/categories/createCategory';
import EditCategory from '../../components/shared/categories/editCategory';
import SearchCategories from '../../components/shared/categories/SearchCategories';
import { getCategories } from '../../redux/actions/categoriesAction';



const Categories = () => {

    const [edit, setEdit] = useState(false);
    const [filter, setFilter] = useState("");
    const [dataEdit, setDataEdit] = useState(false);

    const [create, setCreate] = useState(false);
    const { auth, global } = useSelector(state => state);

    const id = auth.userId;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCategories(id));
    }, [dispatch]);

    return (
        <div class="content-wrapper">
            <div class="container-xxl flex-grow-1 container-p-y">
                <div class="col-md-12">
                    {
                        create
                            ?
                            <CreateCategory />
                            :
                            <SearchCategories setFilter={setFilter} />
                    }
                    {
                        edit
                            ?
                            <EditCategory dataEdit={dataEdit} setEdit={setEdit} />
                            :
                            null
                    }
                </div>
                <div className="flex row m-auto">

                    {
                        create
                            ?
                            <div onClick={() => setCreate(!create)} class="cursor-pointer card col-sm-6 col-xl-3 my-2 d-flex justify-content-center align-items-center border rounded">
                                <i class="bx bx-search bx-lg"></i>
                                <br />
                                <p>جست و جو از بین دسته بندی ها</p>
                            </div>
                            :
                            <div onClick={() => setCreate(!create)} class="cursor-pointer card col-sm-6 col-xl-3 my-2 d-flex justify-content-center align-items-center border rounded">
                                <i class="bx bx-plus bx-lg"></i>
                                <br />
                                <p>دسته بندی جدید اضافه کنید</p>
                            </div>
                    }
                    {
                        global.loadCategory ?
                            <div onClick={() => setCreate(!create)} class="cursor-pointer card col-sm-6 col-xl-3 my-2 d-flex justify-content-center align-items-center border rounded">
                                <div class="spinner-grow m-4" role="status">
                                    <span class="sr-only">Loading...</span>
                                </div>
                                <br />
                                <p>در حال دریافت اطلاعات</p>
                            </div>
                            :
                            <CartCategories setEdit={setEdit} setDataEdit={setDataEdit} filter={filter} />
                    }
                </div>
            </div>
        </div>
    );
}

export default Categories;