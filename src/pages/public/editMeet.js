import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Swal from 'sweetalert2';

import DatePicker from "react-multi-date-picker"
import TimePicker from "react-multi-date-picker/plugins/time_picker";
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
import "react-multi-date-picker/styles/layouts/mobile.css"
import weekends from "react-multi-date-picker/plugins/highlight_weekends"
import DatePickerHeader from "react-multi-date-picker/plugins/date_picker_header"
import { editMeet, getMeet } from '../../redux/actions/meetAction';


const editMeetValidation = Yup.object().shape({
    title: Yup.string().required("وارد کردن نام جلسه الزامی است"),
    description: Yup.string().required("وارد کردن توضیحات الزامی است"),
});


const EditMeet = () => {

    const { id } = useParams();
    const { auth, global } = useSelector(state => state);
    const userId = auth.userId;
    const dispatch = useDispatch();

    const [date, setDate] = useState();
    const [time, setTime] = useState();
    const [data, setData] = useState();

    useEffect(() => {
        const getMeetDetails = async () => {
            const res = await getMeet(id);
            setData(res)
        };
        getMeetDetails();
    }, []);
    
    if (!data) return <p>در حال دریافت اطلاعات</p>
    return (
        <div className="content-wrapper">
            <div className="container-xxl flex-grow-1 container-p-y">
                <Formik
                    initialValues={{
                        userId,
                        title: data?.title,
                        description: data?.description,
                        isLive: data?.isLive,
                        isMute: data?.isMute,
                        isRecord: data?.isRecord,
                        canTalk: data?.canTalk,
                        isInteractiveBoard: data?.isInteractiveBoard,
                        type: 0,
                    }}
                    validationSchema={editMeetValidation}
                    onSubmit={values => {
                        if (!time || !date) {
                            return Swal.fire({
                                text: "تاریخ و زمان جلسه را مشخص کنید",
                                icon: 'error',
                                confirmButtonColor: '#3085d6',
                                confirmButtonText: 'باشه',
                            })
                        }
                        values.startTime = `${time.toDate().getHours()}:${time.toDate().getMinutes()}`;
                        values.startDate = date.toDate().toLocaleDateString('en-US');
                        values.id = id;
                        dispatch(editMeet(values));
                    }}
                >{({ errors, touched, values }) => (
                    <Form>
                        <div className='card'>
                            <h5 class="card-header">فرم ویرایش جلسه</h5>
                            <hr />
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-xl-4 col-md-6 col-sm-12 mb-4">
                                        <label class="form-label" for="">عنوان جلسه</label>
                                        <div class="input-group input-group-merge">
                                            <Field type="text" id="title" name="title" values={values.title} className="form-control credit-card-mask text-start" dir="ltr" />
                                        </div>
                                    </div>
                                    <div class="col-xl-4 col-md-6 col-sm-12 mb-4">
                                        <label class="form-label" for="">تاریخ جلسه</label>
                                        <div class="input-group">
                                            <DatePicker
                                                plugins={[weekends(), <DatePickerHeader />]}
                                                className="form-control"
                                                value={date}
                                                onChange={setDate}
                                                calendar={persian}
                                                locale={persian_fa}
                                                calendarPosition="bottom-right"
                                                style={{
                                                    width: "100%",
                                                    boxSizing: "border-box",
                                                    padding: "1.1rem"
                                                }}
                                                containerStyle={{
                                                    width: "100%"
                                                }}
                                                placeholder="مثال :‌ 1 / 2 / 1400"
                                            />
                                        </div>
                                    </div>
                                    <div class="col-xl-4 col-md-6 col-sm-12 mb-4">
                                        <label class="form-label" for="">ساعت</label>
                                        <DatePicker
                                            disableDayPicker
                                            format="HH:mm"
                                            plugins={[
                                                <TimePicker hideSeconds />
                                            ]}
                                            value={time} onChange={setTime}
                                            style={{
                                                width: "100%",
                                                boxSizing: "border-box",
                                                padding: "1.1rem"
                                            }}
                                            containerStyle={{
                                                width: "100%"
                                            }}
                                            calendar={persian}
                                            locale={persian_fa}
                                            calendarPosition="bottom-right"
                                            placeholder="مثال :‌18:‌00"
                                        />
                                    </div>
                                    <div className="col-12">
                                        <label class="form-label" for="">توضیحات</label>
                                        <br />
                                        <Field id="basic-default-message" name="description" values={values.description} className="form-control" placeholder="توضیحات را اینجا بنویسید"></Field>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="mb-4">
                                    <h5 class="card-header">تنظیمات پیشرفته</h5>
                                    <hr />
                                    <div class="card-body">
                                        <div class="row gy-3">
                                            <div class="col-sm-3">
                                                <label class="switch">
                                                    <Field type="checkbox" class="switch-input" name="isLive" />
                                                    <span class="switch-toggle-slider">
                                                        <span class="switch-on"></span>
                                                        <span class="switch-off"></span>
                                                    </span>
                                                    <span class="switch-label">پخش زنده</span>
                                                </label>
                                            </div>
                                            <div class="col-sm-3">
                                                <label class="switch">
                                                    <Field type="checkbox" class="switch-input" name='isRecord' />
                                                    <span class="switch-toggle-slider">
                                                        <span class="switch-on"></span>
                                                        <span class="switch-off"></span>
                                                    </span>
                                                    <span class="switch-label">ضبط جلسه</span>
                                                </label>
                                            </div>
                                            <div class="col-sm-3">
                                                <label class="switch">
                                                    <Field type="checkbox" class="switch-input" name='isMute' />
                                                    <span class="switch-toggle-slider">
                                                        <span class="switch-on"></span>
                                                        <span class="switch-off"></span>
                                                    </span>
                                                    <span class="switch-label">قطع کردن میکروفون همه اعضا</span>
                                                </label>
                                            </div>
                                            <div class="col-sm-3">
                                                <label class="switch">
                                                    <Field type="checkbox" class="switch-input" name='canTalk' />
                                                    <span class="switch-toggle-slider">
                                                        <span class="switch-on"></span>
                                                        <span class="switch-off"></span>
                                                    </span>
                                                    <span class="switch-label">امکان درخواست صحبت اعضا</span>
                                                </label>
                                            </div>
                                            <div class="col-sm-3">
                                                <label class="switch">
                                                    <Field type="checkbox" class="switch-input" name='isInteractiveBoard' />
                                                    <span class="switch-toggle-slider">
                                                        <span class="switch-on"></span>
                                                        <span class="switch-off"></span>
                                                    </span>
                                                    <span class="switch-label">تخته هوشمند</span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="container">
                                <button type='submit' disabled={global.load} className="btn btn-secondary mb-3 text-nowrap add-new-role">
                                    ویرایش جلسه
                                </button>
                            </div>
                        </div>
                    </Form>
                )}
                </Formik>
            </div>
        </div>
    );
}

export default EditMeet;