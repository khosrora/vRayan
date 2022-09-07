import { useState } from 'react';
import { useParams } from 'react-router-dom';
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
import { editMeetFaceToFace } from '../../redux/actions/meetAction';
// import { createMeetVerbal } from '../../../redux/actions/meetAction';


const addMeetValidation = Yup.object().shape({
    title: Yup.string().required("وارد کردن نام جلسه الزامی است"),
    address: Yup.string().required("وارد کردن آدرس الزامی است"),
    description: Yup.string().required("وارد کردن توضیحات الزامی است"),
});

const EditMeetFaceToFace = () => {

    const { id } = useParams();
    const { auth, global } = useSelector(state => state);
    const userId = auth.userId;
    const [date, setDate] = useState();
    const [time, setTime] = useState();

    const dispatch = useDispatch();
    return (
        <div className="content-wrapper">
            <div className="container-xxl flex-grow-1 container-p-y">
                <Formik
                    initialValues={{
                        userId,
                        title: "",
                        address: "",
                        description: "",
                        type: 0,
                    }}
                    validationSchema={addMeetValidation}
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
                        dispatch(editMeetFaceToFace(values));
                    }}
                >{({ errors, touched }) => (
                    <Form>
                        <div className="card">
                            <h5 class="card-header">فرم ویرایش جلسه حضوری</h5>
                            <hr />
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-xl-4 col-md-6 col-sm-12 mb-4">
                                        <label class="form-label" for="">عنوان جلسه</label>
                                        <div class="input-group input-group-merge">
                                            <Field type="text" id="" name="title" class="form-control credit-card-mask text-start" dir="ltr" placeholder="نام جلسه را وارد کنید" aria-describedby="creditCardMask2" />
                                        </div>
                                        {errors.title && touched.title ? <span className='text-danger'>{errors.title}</span> : null}
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
                                    <div class="col-xl-12 mb-4">
                                        <label class="form-label" for="">آدرس</label>
                                        <Field type="text" id="" name="address" class="form-control credit-card-mask text-start" dir="ltr" placeholder="آدرس را وارد کنید" aria-describedby="creditCardMask2" />
                                        {errors.address && touched.address ? <span className='text-danger'>{errors.address}</span> : null}
                                    </div>
                                    <div className="col-12">
                                        <label class="form-label" for="">توضیحات</label>
                                        <br />
                                        <Field id="basic-default-message" name='description' className="form-control" placeholder="توضیحات را اینجا بنویسید"></Field>
                                        {errors.description && touched.description ? <span className='text-danger'>{errors.description}</span> : null}
                                    </div>
                                </div>
                            </div>
                            <div className="container">
                                <button type='submit' disabled={global.load} className="btn btn-secondary mb-3 text-nowrap add-new-role">
                                    {
                                        global.load ? "در حال ارسال اطلاعات" : "ایجاد جلسه"
                                    }
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

export default EditMeetFaceToFace;