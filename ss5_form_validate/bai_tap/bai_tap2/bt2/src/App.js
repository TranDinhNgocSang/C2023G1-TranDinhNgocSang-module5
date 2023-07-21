import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

function App() {
  return (
    <>
      <h1>Tờ khai y tế</h1>
      <Formik
        initialValues={{
          fullName: "",
          idCart: "",
          yearBirth: "",
          gender: "",
          nationality: "",
          company: "",
          jobPosition: "",
          healthInsurance: "",
          province: "",
          district: "",
          wards: "",
          address: "",
          phone: "",
          email: "",
          trip: "",
          testimony: [],
          contact: [],
        }}
        validationSchema={Yup.object({
          fullName: Yup.string().required("Không được để trống"),
          idCart: Yup.string().required("Không được để trống"),
          yearBirth: Yup.number()
            .required("Không được để trống")
            .min(1900, "Năm sinh phải lớn hơn 1900"),
          gender: Yup.boolean().required("khong duoc de trong"),
          nationality: Yup.string().required("Không được để trống"),
          company: Yup.boolean(),
          jobPosition: Yup.string(),
          healthInsurance: Yup.string(),
          province: Yup.string().required("Không được để trống"),
          district: Yup.string().required("Không được để trống"),
          wards: Yup.string().required("Không được để trống"),
          address: Yup.string().required("Không được để trống"),
          phone: Yup.string().required("Không được để trống"),
          email: Yup.string()
            .required("Không được để trống")
            .email("Email không hợp lệ"),
          trip: Yup.string().required("Không được để trống"),
        })}
        onSubmit={(values) => {
          alert("thanh cong");
          console.log(values);
        }}
      >
        <Form>
          <div>
            <label htmlFor="fullName">Họ và Tên</label>
            <Field id="fullName" name="fullName" />
            <ErrorMessage
              name="fullName"
              component="div"
              className="text-red"
            />
          </div>
          <div>
            <label htmlFor="idCart">Số hộ chiếu/CMND</label>
            <Field id="idCart" name="idCart"></Field>
            <ErrorMessage name="idCart" component="div" className="text-red" />
          </div>
          <div>
            <label htmlFor="yearBirth">Năm sinh</label>
            <Field id="yearBirth" name="yearBirth"></Field>
            <ErrorMessage
              name="yearBirth"
              component="div"
              className="text-red"
            />
          </div>
          <div>
            <label htmlFor="gender">Giới tính</label>
            <div>
              <label>
                <Field type="radio" name="gender" value="Nam" />
                Nam
              </label>
              <label>
                <Field type="radio" name="gender" value="Nữ" />
                Nữ
              </label>
            </div>
            <ErrorMessage name="gender" component="div" className="text-red" />
          </div>
          <div>
            <label htmlFor="nationality">Quốc tịch</label>
            <Field id="nationality" name="nationality"></Field>
            <ErrorMessage
              name="nationality"
              component="div"
              className="text-red"
            />
          </div>
          <div>
            <label htmlFor="company">Công ty làm việc</label>
            <Field id="company" name="company"></Field>
            <ErrorMessage
              name="company"
              component="div"
              className="text-red"
            />
          </div>
          <div>
            <label htmlFor="jobPosition">Bộ phận làm việc</label>
            <Field id="jobPosition" name="jobPosition"></Field>
            <ErrorMessage
              name="jobPosition"
              component="div"
              className="text-red"
            />
          </div>
          <div>
            <label htmlFor="healthInsurance">Bảo hiểm y tế</label>
            <Field
              id="healthInsurance"
              type="checkbox"
              name="healthInsurance"
            />
            <ErrorMessage
              name="healthInsurance"
              component="div"
              className="text-red"
            />
          </div>
          <h3>Địa chỉ liên lạc tại Việt Nam</h3>
          <div>
            <label htmlFor="province">Tỉnh thành</label>
            <Field id="province" name="province"></Field>
            <ErrorMessage
              name="province"
              component="div"
              className="text-red"
            />
          </div>
          <div>
            <label htmlFor="district">Quận/huyện</label>
            <Field id="district" name="district"></Field>
            <ErrorMessage
              name="district"
              component="div"
              className="text-red"
            />
          </div>
          <div>
            <label htmlFor="wards">Phường/xã</label>
            <Field id="wards" name="wards"></Field>
            <ErrorMessage name="wards" component="div" className="text-red" />
          </div>
          <div>
            <label htmlFor="address">Số nhà, phố, tổ dân phố/thôn/đội</label>
            <Field id="address" name="address"></Field>
            <ErrorMessage name="address" component="div" className="text-red" />
          </div>
          <div>
            <label htmlFor="phone">Điện thoại</label>
            <Field id="phone" name="phone"></Field>
            <ErrorMessage name="phone" component="div" className="text-red" />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <Field id="email" name="email"></Field>
            <ErrorMessage name="email" component="div" className="text-red" />
          </div>
          <div>
            <label htmlFor="trip">Trong 14 ngày qua bạn đã đi đâu?</label>
            <Field id="trip" name="trip" />
            <ErrorMessage name="trip" component="div" className="text-red" />
          </div>
          <div>
            <b>Trong 14 ngày qua, bạn có triệu chứng:</b>
            <div>
              <label>
                <Field type="checkbox" name="testimony" value="sốt" />
                Sốt
              </label>
              <label>
                <Field type="checkbox" name="testimony" value="ho" />
                Ho
              </label>
              <label>
                <Field type="checkbox" name="testimony" value="khó thở" />
                Khó thở
              </label>
              <label>
                <Field type="checkbox" name="testimony" value="đau họng" />
                Đau họng
              </label>
              <label>
                <Field type="checkbox" name="testimony" value="viêm họng" />
                Viêm phổi
              </label>
              <label>
                <Field type="checkbox" name="testimony" value="mệt mỏi" />
                Mệt mỏi
              </label>
            </div>
            <ErrorMessage
              name="testimony"
              component="div"
              className="text-red"
            />
          </div>
          <div>
            <b>Trong 14 ngày qua, anh/chị có tiếp xúc với?</b>
            <div>
              <label>
                <Field
                  type="checkbox"
                  name="contact"
                  value="Người bệnh hoặc nghi ngờ mắc bệnh COVID-19"
                />
                Người bệnh hoặc nghi ngờ mắc bệnh COVID-19
              </label>
              <label>
                <Field
                  type="checkbox"
                  name="contact"
                  value="Người từ nước có dịch"
                />
                Người từ nước có dịch
              </label>
              <label>
                <Field
                  type="checkbox"
                  name="contact"
                  value="Người có biểu hiện"
                />
                Người có biểu hiện
              </label>
            </div>
            <ErrorMessage name="contact" component="div" className="text-red" />
          </div>
          <button type="submit">Gửi</button>
        </Form>
      </Formik>
    </>
  );
}

export default App;
