import Image from "../assets/image_srivarshinis301379814.png";

export default function About() {
  return (
    <div className="flex justify-around m-11">
      <div className="justify-between items-center mt-10 lg:flex-row ssm:flex-col ssm:space-y-3">
        <p className="text-xl">
          Name: <b>Srivarshini Sundara Raghavan</b>
          <br />
        </p>
        <p>
          Experienced software developer with over 2 years of proficiency in
          designing, developing, and managing information systems for software
          development companies. Adept at conceptualizing and deploying software
          solutions that incorporate logical and mathematical approaches to
          address business challenges.
        </p>
        <iframe
          src="src/assets/Srivarshini_Resume.pdf"
          width="100%"
          height="300px"
        />
      </div>
      <div className="flex items-center w-1/3 m-10 ssm:w-fit ssm:flex-col ssm:space-y-3">
        <img src={Image} alt="Image" width="250px" height="320px" />
      </div>
    </div>
  );
}
