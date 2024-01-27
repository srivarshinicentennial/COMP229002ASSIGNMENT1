const home = () => {
  return (
    <section className="flex justify-between items-center lg:flex-row p-12 m-12 ssm:flex-col ssm:space-y-10">
      <div className="ssm:w-fit">
        <p className="text-xl">
          Name: <b>Srivarshini Sundara Raghavan</b>
          <br />
        </p>
        <p className="mt-5 text-l">
          Hello and thank you for visiting! I'm Srivarshini, a passionate and
          results-driven Software Engineer with a commitment to excellence in
          every project I undertake. Within this digital space, you'll find a
          curated collection of my work, reflecting my journey, skills, and
          dedication to pushing the boundaries of what's possible in Software
          Engineering. As you explore these pages, you'll discover a blend of
          creativity and technical proficiency that defines my approach. From
          creating a simple website to working on complex projects, each piece
          represents a chapter in my professional story. I believe in the power
          of collaboration, innovation, and continuous learning. Whether you're
          a fellow professional, a potential collaborator, or someone simply
          curious about the world of Technology, I invite you to delve into my
          portfolio and get to know the work that drives my passion.
        </p>

        <div className="ssm:w-fit">
          <h1 className="mt-10 text-xl">My Mission Statement</h1>
          <hr />
          <p>
            As a software engineer, my mission is to leverage my technical
            expertise and passion for innovation to create reliable and scalable
            solutions that empower businesses and enrich user experiences. I am
            committed to delivering high-quality software through collaborative
            and iterative development processes, embracing challenges as
            opportunities for growth. With a focus on continuous learning and
            staying at the forefront of technological advancements, I strive to
            contribute to projects that make a meaningful impact on the world.
            Through ethical and sustainable practices, I aim to be a catalyst
            for positive change, fostering a culture of excellence,
            adaptability, and creativity within the software development
            community.
          </p>
          {/* <button className="bg-white text-indigo-600 px-10 oy-2 my-3 rounded-full hover:bg-indigo-800 hover:text-white">
          Show More...
        </button> */}
        </div>
      </div>
    </section>
  );
};

export default home;
