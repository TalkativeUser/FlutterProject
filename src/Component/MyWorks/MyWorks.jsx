import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


export default function MyWorks() {
  const apps = [
    {
      imgCover:
        "https://dce0qyjkutl4h.cloudfront.net/wp-content/uploads/2020/09/Flutter-App-development.jpg ",
      imageDetails: require("../../images/img1.jpg"),
      appName: "Movies App",
      description:
        "This application displays information about popular and top rated films, such as the rating, year of release, and description of the film, and displays films similar to this film.",
      videoApp: "https://drive.google.com/file/d/1N7kZN316PdzJUSiPMCFb31uFVv02uI81/view?usp=drive_link",
    },

    {
      imgCover:
        "https://miro.medium.com/v2/resize:fit:1000/0*s7of7kWnf9fDg4XM.jpeg ",
      imageDetails: require("../../images/img2.jpg"),
      appName: "News App",
      description:
        "This application displays news in three fields: business, sports, and science, and displays news in more than 30 countries (France, India, Egypt...) The application provides changing the theme (dark mode, light mode)    It stores them in shared preference",
      videoApp: "https://drive.google.com/file/d/1MMgzyx3pkq3hng1cdmsfO00Ge21LUZsB/view?usp=sharing",
    },

    {
      imgCover:
        "https://www.biztechcs.com/wp-content/uploads/2021/04/Why-Flutter-is-Better-for-App-Development-jpg-webp.webp ",
      imageDetails: require("../../images/img3.jpg"),
      appName: "Shopping App",
      description:
        "This application displays products to users Feuture  : - Provides the account creation and login process - It displays all the products and full details, such as pictures of the product, the old and new price, and a description of the product - It displays the user’s favorite products and displays the products that the user wants to buy - The user can change the password and log out - The application supports two languages: Arabic and English, and stores the language that the user wants in the shared preference.",
      videoApp: "https://drive.google.com/file/d/1MfAoiONciX6vTA3QJp9LjzwCUaq-pc52/view?usp=drive_link",
    },

    {
      imgCover:
        " https://miro.medium.com/v2/resize:fit:1400/1*-mOO444aE0ysjnJofbxBkQ.png",
      imageDetails: require("../../images/img4.jpg"),
      appName: "Rick and Morty App",
      description:
        "This is a simple application that displays information about the famous series Rick And Morty",
      videoApp: "https://drive.google.com/file/d/1NBc0XF61ydpZxEBhuMpOuAYvSAadPsI5/view?usp=drive_link",
    },

    {
      imgCover:
        "https://www.yourteaminindia.com/hubfs/Imported_Blog_Media/best_flutter_libraries__tools__packages___plugins_for_seamless_app_development-Sep-25-2023-10-24-11-6495-AM.png ",
      imageDetails: require("../../images/img5.jpg"),
      appName: "VS Car App",
      description:
        "This application provides doctors in various medical fields such as surgery, cardiology, etc. It allows the user to make a reservation with the doctor he wants, choose the appropriate appointment for him, and displays to the user all the reservations he has made through the application.The application provides a filtering process whereby it filters doctors using the city ID",
      videoApp: "https://drive.google.com/file/d/1Lt-REbXZtlkYKJvzQodrjlx0LhU1-vrl/view?usp=drive_link",
    },

    {
      imgCover:
        "https://digifrizz.com/wp-content/uploads/2021/02/flutter1.jpg ",
      imageDetails: require("../../images/img6.jpg"),
      appName: "Chating App",
      description:
        "Firebase was used to build the application Firebase Auth Phone was used to log in Firestorage was used to upload a photo to the user and obtain a link to it  Firestore was used to store information about the user, such as his name, phone number, and photo  also. Firestore is used to store the conversation between two people",
      videoApp: "https://drive.google.com/file/d/1Nipsk1UA81p9ZOF0qzA2Vmc-Q8ac4Ydq/view?usp=drive_link",
    },
  ];

  const [leyar, setLeyar] = useState(false);
  const [leyarNum, setLeyarNum] = useState();

  function showLeyar(x) {
    document.body.style.overflow = "hidden";
    setLeyarNum(x);
    setLeyar(true);
  }

  function hideLeyar() {
    document.body.style.overflow = "auto";
    setLeyar(false);
  }

  return (
    <div className="container overflow-hidden my-5 ">
      <div className="row my-5 gy-3 ">
        {apps.map((app, index) => {
          return (
            <div  key={index} onClick={() => {   showLeyar(index);  }} className={`col-md-6 col-lg-4 ${index==0||index==3||index==1?"animate__animated animate__bounceInLeft animate__delay-1s":"animate__animated animate__bounceInRight"} `}    >
              <div className="innerCol">
                <img className="rounded-4" src={app.imgCover} alt="" />
                <p className="mb-0"> {app.appName} </p>
              </div>
            </div>
          );
        })}
      </div>

      {leyar ? (
        <div className=" position-fixed end-0 start-0 top-0 button-0 vh-100 leyar animate__animated animate__bounceInUp ">
          <div className="p-5 d-flex justify-content-center align-items-center container  ">
            <div className="row  ">
              <div className="col-lg-5 p-5 animate__animated animate__bounceInLeft animate__delay-1s">
                <div className=" p-5 ">
                  <img
                    className="img-details"
                    src={apps[leyarNum].imageDetails}
                    alt=""
                  />
                </div>
              </div>
              <div className="col-lg-7 p-5 d-flex align-items-center animate__animated animate__bounceInRight animate__delay-1s ">
                <div className="text-details text-white d-flex p-5">

                  <div>
                  {leyarNum === 2
                    ? apps[leyarNum].description.split("-").map((text, idx) => {
                        return (
                          <div key={idx} className="mp-5">
                            <p
                              className="text-white"
                              style={{ marginTop: "35px" }}
                            >
                              {" "}
                              {idx !== 0 ? (
                                <span className="text-dark p-1 me-2 ">
                                  {idx}
                                </span>
                              ) : (
                                ""
                              )}
                              {text}{" "}
                            </p>
                          </div>
                        );
                      })
                    : apps[leyarNum].description}

                     </div>

                    <Link target="_blank" to={apps[leyarNum].videoApp} className="btn btn-success rounded-3 mt-5 "> Click here to see how the application works </Link>

                </div>
              </div>
            </div>

            <div onClick={hideLeyar} className="btn btn-danger close ">
              Close
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
