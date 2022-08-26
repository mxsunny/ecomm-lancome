import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="min-h-screen">
        <div className="max-w-screen-xl md:mt-24 px-4 md:px-8 lg:px-12 xl:px-26 py-16 mx-auto bg-gray-100 text-gray-900 rounded-lg shadow-lg">
          <div className="flex flex-col justify-center items-center">
            <div>
              <h2 className="text-center text-3xl font-bold leading-tight">
                Lets talk about everything!
              </h2>
              <img className="h-40 mx-auto py-2" src="lancome paris.png" />
              <p className="text-center text-xl lg:text-2xl font-medium leading-tight">
                Feel free to ask us anything!
              </p>
              <p className="py-4 px-4 text-md lg:text-md leading-tight text-center">
                If you have any questions regarding your order, feel free to send
                email, call or Whatsapp us on our support number
              </p>
              <div className="flex justify-between">
                <div className="text-center px-5 md:px-0 md:text-left py-10">
                  <span className="font-bold">Corporate Address</span>
                  <br />
                  lancome.com
                  <br />
                  AB-76, PrafullaKanan Kestopur
                  <br />
                  Tahsil Punecity- 411001,411002
                  <br />
                </div>
                <div className="text-center px-5 md:px-0 md:text-left py-10">
                  <span className="font-bold">Customer Support</span>
                  <br />
                  Call/Whatsapp:
                  <br />
                  +91 959 598 2030
                  <br />
                  Email: care@fancome.in
                  <br />
                  Morning: 9AM - 6PM
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Contact;
