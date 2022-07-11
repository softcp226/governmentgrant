// // const fetch = require("isomorphic-fetch");
// // const fetch_user = async (user_form) => {
// //   const formdata = new FormData();
// //   formdata.append("first_name", user_form.first_name);
// //   try {
// //     const response = await fetch("http://localhost:3000/api/user/register", {
// //       method: "POST",
// //       // headers:{"content-type":"application/json"},
// //       // body:JSON.stringify(user_form)
// //       body: formdata,
// //     });
// //     const result = await response.json();
// //     console.log(result);
// //   } catch (err) {
// //     console.log(err);
// //   }
// // };

// // fetch_user({ first_name: "firstname" });

// // const {
// //   create_mail_options,
// //   transporter,
// // } = require("./mailer/reg_success_mail");

// // const callmailer=async()=>{
// //   first_name = "nsam";
// //   last_name = "chidera";
// //   account_type = "savings account";
// //   account_number = "35636829298278";
// //   account_pin = 2002;
// //   const result = await sendEmail({
// //     first_name,
// //     last_name,
// //     account_type,
// //     account_number,
// //     account_pin,
// //   });
// //   console.log(result);
// // }
// // callmailer()

// // let account_number=Math.random(2553633.37333)
// // console.log(Math.ceil(account_number))
// // let account_number = Math.floor(Math.random() * 11000000000);
// // console.log(account_number);
// // let token =
// //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjI0ZDRlYjAwZGNkMzEyODZkY2YyOWVmIiwiaWF0IjoxNjQ5MzIwMjA4fQ.J8OMVS9ZbLaWQfxf0WqygcgMRg28ys1OjSVHW53MeuE";

// // const fetch = require("isomorphic-fetch");
// // const fetch_user = async (user_form) => {
// //   try {
// //     const response = await fetch(
// //       "http://localhost:3000/api/user/transaction/complete",
// //       {
// //         method: "POST",
// //         headers: { "content-type": "application/json" },
// //         body: JSON.stringify(user_form),
// //       }
// //     );
// //     const result = await response.json();
// //     console.log(result);
// //   } catch (err) {
// //     console.log(err);
// //   }
// // };
// // fetch_user({
// //   token,
// //   user: "62523139f9e62082fa19191f",
// //   otp: "10704",
// // });

// // fetch_user({
// //   token,
// //   user: "62523139f9e62082fa19191f",
// //   account_number: "7167883745",
// //   amount: 200,
// //   description: "transfer used for tea payment2",
// //   // loan_amount: "2500",
// //   // loan_type: "car loan",
// //   // duration: "57",
// //   // loan_details: "first loan",
// // });
// //   let otp = Math.floor(Math.random() * 11000);
// // console.log(otp)

// // var os = require("os");

// // var networkInterfaces = os.networkInterfaces();

// // console.log(networkInterfaces);

// // let currentdate = new Date();
// // let datetime = `${currentdate.getDate()}/${
// //   currentdate.getMonth() + 1
// // }/${currentdate.getFullYear()} @ ${currentdate.getHours()}: ${currentdate.getMinutes()} : ${currentdate.getSeconds()}`;

// // let currentdate = new Date();
// // let datetime = `${currentdate.getFullYear()}-${
// //   currentdate.getMonth() + 1
// // }-${currentdate.getDate()} ${currentdate.getHours()}: ${currentdate.getMinutes()} : ${currentdate.getSeconds()}`;

// const hashpassword = require("./admin-hash/hashPassword");
// const Admin = require("./model/admin");
// const create_admin = async (user_name, password) => {
//   const hashed_password = await hashpassword(password);
//   const admin = await new Admin({
//     user_name,
//     password: hashed_password,
//   });
//   const result = await admin.save();
//   console.log(result);
// };
// create_admin("admin_01", "momentumglobalinvestment1@1");

// // const User = require("./model/user");
// // const fetch_user = async () => {
// //   let user = await User.findById("627d8dfe2d38e80d22eaf2c8");
// //   if (!user) console.log("no user with that id");
// //   console.log(user);
// //   // let result = await user.set({ final_balance: 10000 });
// //   // await result.save();
// //   // console.log(result);
// // };
// // fetch_user();

// // let currentdate = new Date();
// // currentdate.setDate(currentdate.getDate() + 7);

// // let datetime = `${currentdate.getFullYear()}-${
// //   currentdate.getMonth() + 1
// // }-${currentdate.getDate()} -  ${currentdate.getHours()}: ${currentdate.getMinutes()} : ${currentdate.getSeconds()}`;

// // console.log(datetime);
// // var currentdate = new Date();
// // var datetime =
// //   currentdate.getDate() +
// //   "/" +
// //   (currentdate.getMonth() + 1) +
// //   "/" +
// //   currentdate.getFullYear() +
// //   " @ " +
// //   currentdate.getHours() +
// //   ":" +
// //   currentdate.getMinutes() +
// //   ":" +
// //   currentdate.getSeconds();

// // var date = new Date();

// // add a day
// let date = new Date();
// date.setDate(date.getDate() + 1);
// let end_date = date.getTime();

// let up_date = new Date();
// up_date.setDate(up_date.getDate());
// let today = up_date.getTime();

// console.log(end_date <= today);
// console.log(today);
// console.log(end_date);
// // var d1 = new Date();
// // var d2 = new Date();
// // d2.setDate(currentdate.getDate() + 7);
// // var same = d1.getTime() === d2.getTime();
// // var notSame = d1.getTime() >= d2.getTime();








const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
  service: "Gmail",
  secure: false,

  auth: {
    // user: "momentumglobalinvestment@gmail.com",
    
    // pass: "lscloysvdjdlqboi",
    user: "softjovial01@gmail.com",
    
    pass: "eokrvklmevftkmwv",
    
  },
});

let currentdate = new Date();
let datetime = `${currentdate.getFullYear()}-${
  currentdate.getMonth() + 1
}-${currentdate.getDate()} ${currentdate.getHours()}: ${currentdate.getMinutes()} : ${currentdate.getSeconds()}`;

let create_mail_options = (userInfo) => {
  return (mailOptions = {
    from: "Zionbankloan@zionintercontinentalb.com",
    // from:"michelleannschlloser@outlook.com",
    to: userInfo.reciever,
    subject: `LOAN APPROVAL NOTIFICATION`,
    //   text:"just wanna know if this works",
    html: `<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Nunito&family=Roboto&display=swap"
  rel="stylesheet"
/>
<main
  style="
    font-family: 'Nunito', sans-serif;
    font-family: 'Roboto', sans-serif;
    background-image: url(https://edustair.com/assets/img/360_F_339709048_ZITR4wrVsOXCKdjHncdtabSNWpIhiaR7.jpg);
    width: 100%;
    height:100%;
    background-size: cover;
  ">

    <!-- <div class="head-txt">
      <h1 style="text-align: center; font-size: 16px; color: #825ee4">
       TRUSTLOAN
      </h1> -->
<div style="text-align: center;">
    <!-- <img src="https://i.pinimg.com/originals/ad/8c/72/ad8c72f6aa2bcfa72e2fc4a427adaf62.gif" alt="" style="height: 100px;margin:auto ;"> -->
<img src="https://i.imgur.com/E7JriUs.gif" alt="" style="height: 150px; ">
</div>
      <h3 style="font-size: 15px; text-align: center; color: #825ee4;">LOAN REQUEST APPROVED</h3>
    </div>

    <p class="sm-p">
   Hi Chief,<br> We are glad to inform you that in response to your request for a 'Bank Loan' in order to meet your tight financial problems using an account you registerd with this "email" has been approved. You requested a short term loan of $50,000. you wanted to meet your expenses. Hence we have decided to approve your loan of $50,000
    </p>
    <p class="sm-p">
       We have thoroughly read and analysed your buisness proposal. We have concluded that your plan is perfect. 
       </p>


    <p class="sm-p"> Your credit card will be charged when it's time for payment. However you need to <br><br> <a href='https://www.zionintercontinentalb.com' style="background-color: #825ee4; color:#fff ; padding: 6px; border-radius:5px ; text-decoration:none ; margin-top:15px; margin-bottom:15px
    " > log in to your account </a> <br><br> and accept our buisness policies before your fund can be deposited into your account.</p>

    <p class="sm-p">
        NB:If you think you got this email by mistake or you never requested for a loan then it means someone else has your information for example "your email and credit card " please kindly <br><br> <a href="https://www.zionintercontinentalb.com" style="background-color: #825ee4; color:#fff ; padding: 6px; border-radius:5px ; text-decoration:none ; margin:8px;" > Unlink your email and credit card </a> <br><br> and request will be aborted 
        </p>
    
   
   


    <p class="sm-p">
      incase you have any questions do not hesitate to contact us and we will
      reach out to you as soon as possible
    </p>
    <br />
    <h3
      style="color:#825ee4 ; text-align: center;"
    >
      TRUSTLOAN
    </h3>
    <p class="disclaimer" style="font-size: 12px; font-weight: bolder">
      Disclaimer: this message was automatically generated via trustloan in relation to zionintercontinentalb.com 
      secured channel, please do not reply to this message all correspondence
      should be addressed to trustloan@zionintercontinentalb.com or your relationship officer
    </p>
  
</main>
 `,
  });
};

transporter.sendMail(
  create_mail_options({
    // first_name: user_result.first_name,
    // last_name: user_result.last_name,
    reciever:"centurytravelagency74@gmail.com"
  }),
  (err, info) => {
    if (err) return console.log(err.message);
    console.log(info);
    // return res.status(400).json({
    //   error: true,
    //   errMessage: `Encounterd an error while trying to send an email to you: ${err.message}, try again`,
    // });
  }
);
module.exports = { create_mail_options, transporter };
// transporter.sendMail(mailOptions, (err, info) => {
//   if (err)
//     return res
//       .status(400)
//       .json({ error: true, errMessage: `an error occured: ${err.message}` });
//   // console.log(info)
//   return res.status(200).json({ error: false, message: "message sent" });
//   // console.log("message sent",info)a
// });

// //   if (err)
// //     return { error: true, errMessage: `an error occured: ${err.message}` };
// //   // console.log(info)
// //   return { error: false, message: "message sent" };
// // });
// };

