import Proj1ImageMob from "../assets/proj1imagemob_srivarshini301379814.jpg"
import Proj1Image from "../assets/proj1image_srivarshini301379814.png";
import Proj2Image from "../assets/proj2image_srivarshini301379814.png";
import Proj3Image from "../assets/proj3image_srivarshini301379814.png";

export default function Project() {
  return (
    <div className="justify-around items-center m-20 ssm:w-fit ssm:flex-col ssm:space-y-5 bg-white shadow-md">
      <div className="flex m-10 justify-around items-center">
        <img src={Proj1Image} alt="Image" width={300} height={300} />
        <p className="p-5">
          <b>PROJECT NAME: SCHOOL MANAGEMENT SYSTEM</b>
          <br />A school management system is a comprehensive software
          application that facilitates efficient management of various
          administrative and academic activities within an educational
          institution. The primary goal of such a system is to streamline
          processes, enhance communication, and improve overall efficiency in
          school operations. The main modules of the project consisted of
          Student Information Management, Staff Management, Academic
          Management,Attendance Tracking,Communication and Collaboration,Library
          Management,Financial Management, Transportation Management,Security
          and Access Control,Reports and Analytics and Mobile App Integration.
        </p>
      </div>
      <hr />
      <div className="flex m-10 items-center justify-around">
        <p className="p-5">
          <b>PROJECT NAME: RESTAURANT SEARCH APPLICATION</b>
          <br />A restaurant search React app is a web application designed to
          help users find information about restaurants, such as their location,
          menu, reviews, and ratings. This type of app typically interacts with
          a backend API or database to fetch and display real-time data. The
          main modules of the project consisted of Search Bar,Filtering Options,
          Restaurant Listings,Detailed Restaurant View,Map Integration,User
          Reviews and Ratings, User Authentication,Responsive Design,Loading and
          Error States,Pagination or Infinite Scrolling, Performance
          Optimization,Accessibility,Feedback and Notifications.
        </p>
        <img src={Proj2Image} alt="Image" width={300} height={300} />
      </div>
      <hr />

      <div className="flex  m-10  items-center justify-around">
        <img src={Proj3Image} alt="Image" width={300} height={300} />
        <p className="p-5">
          <b>PROJECT NAME: E-COMMERCE APPLICATION</b>
          <br />
          An eCommerce application built with React is a web-based platform
          designed for buying and selling products online. It provides users
          with a seamless and interactive shopping experience, allowing them to
          browse through a catalog of products, add items to their cart, and
          complete the purchase process. The main modules of the project
          consisted of Homepage,Product Catalog,Product Details Page,Shopping
          Cart,User Authentication, Checkout Process,Order Tracking,Wishlist and
          Favorites,Responsive Design,Search and Filtering, Recommendation
          Engine,User Reviews and Ratings,Admin Dashboard,Inventory Management,
          Security Measures,Performance Optimization,Social Media
          Integration,Email Notifications, Multilingual Support,Analytics and
          Reporting.
        </p>
      </div>
      <hr />

      <div className="flex m-10 justify-around items-center">
        <p className="p-5">
          <b>
            PROJECT NAME: TAMIL LANGUAGE LEARNING APPLICATION -
            MOBILE(ANDROID/IOS)
          </b>
          <br />A Tamil language learning app for kids built with React Native
          aims to provide a fun, interactive, and educational platform for
          children to learn the Tamil language. The app combines engaging
          content, games, and activities to make the learning experience
          enjoyable and effective. The main modules of the project consisted of
          User-Friendly Interface,Interactive Lessons,Audio Pronunciation,Visual
          Aids, Games and Activities,Progress Tracking,Tamil Culture
          Integration,Offline Mode, Feedback and Encouragement,Simple
          Navigation,Safety Measures,Cross-Platform Compatibility.
        </p>
        <img src={Proj1ImageMob} alt="Image" width={200} height={100} className="mb-5"/>
      </div>
    </div>
  );
}
