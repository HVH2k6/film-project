import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const ContactPage = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_76q2c7r",
        "template_to9z28m",
        form.current,
        "MAA7Taa_PXhD7thtW"
      )
      .then(
        (result) => {
            alert("Cảm ơn ý kiến của bạn")

        },
        (error) => {
          toast.error("Gửi ý kiến thất bại");
        }
      );
    
  };
  return (
    <div className="container flex justify-center max-[650px]:px-4">
      <form ref={form} onSubmit={sendEmail}>
        <div className="mb-3">
          <label htmlFor="name" className="font-semibold text-white mr-2">
            Họ tên
          </label>
          <input
            type="text"
            className="w-[500px] h-10 border-[3px] border-black outline-0 bg-transparent p-2 text-white text-lg rounded-lg max-[650px]:w-[300px]"
            placeholder="Nhập tên của bạn"
            name="user_name"
            id="name"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="font-semibold text-white mr-2">
            Email
          </label>
          <input
            type="email"
            className="w-[500px] h-10 border-[3px] border-black outline-0 bg-transparent p-2 text-white text-lg rounded-lg max-[650px]:w-[300px]"
            placeholder="Nhập email của bạn"
            name="user_email"
            id="email"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="idea" className="font-semibold text-white mr-2">
            Ý kiến
          </label>
          <textarea
            name="message"
            className="w-[500px] h-[200px] border-[3px] border-black outline-0 bg-transparent p-2 text-white text-lg rounded-lg max-[650px]:w-[300px]"
            placeholder="Nhập ý kiến của bạn"
            id="idea"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-[100px] py-2 bg-primary font-bold text-white mt-5"
        >
          Gửi ý kiến
        </button>
      </form>
    </div>
  );
};

export default ContactPage;
