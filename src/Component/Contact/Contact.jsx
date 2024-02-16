import React from "react";

export const Contact = () => {
  return (
    <div className="contact bg-slate-300 ">
      <div className="contact_map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497700.1140763729!2d77.30057183475009!3d12.953789324575405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1707847773905!5m2!1sen!2sin"
          width="100%"
          height="350"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="contact_form  flex flex-col  items-center mt-5 ">
        <form action="submit" method="post" className="w-80">
          <input type="text" name="Name" placeholder="Name" className="mb-5" />
          <input
            type="text"
            name="Password"
            placeholder="Password"
            className="mb-5"
          />
          <textarea
            name="Enter Your Messege"
            placeholder="Enter Your Messege"
            cols="60"
            rows="8"
            className="mb-5"
          ></textarea>
          <button className="bg-slate-400 w-20  mb-10">Send</button>
        </form>
      </div>
    </div>
  );
};
