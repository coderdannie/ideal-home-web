import img1 from '../assets/house1.jpeg';
import img2 from '../assets/house2.jpg';
const Blogs = () => {
  return (
    <section className=" pb-[40px] md:py-[80px] pt-[60px]  bg-[#EFF5FF]">
      <div className="wrapper">
        <p className="font-sans text-lg md:text-2xl pb-[30px] text-center">
          BLOGS
        </p>
        <h2 className="text-primaryColor font-sans font-medium text-center">
          Aesthetic Design
          <br /> Ideas for Inspired Living
        </h2>
        <div className="grid justify-center md:grid-cols-2 gap-6 mt-[32px] lg:gap-8">
          <article className="font-sans text-primaryColor ">
            <div className="h-[420px]">
              <img
                className="h-full object-cover rounded-3xl mx-auto"
                src={img1}
                alt="house"
              />
            </div>
            <p className="md:text-xl mt-5">July 23, 2023</p>
            <h3 className="text-xl md:text-3xl font-medium">
              Creating a Serene and Stylish Home
            </h3>
            <p className="md:text-xl">
              Discover the art of minimalistic home design and how it can
              transform your living spaces into serene havens. Learn the
              principles of decluttering, choosing essential furnishings, and
              incorporating thoughtful details that create a sense of calm and
              style.
            </p>
          </article>
          <div className="featured-post flex flex-col gap-6">
            <article className="text-primaryColor flex flex-col sm:flex-row gap-6">
              <div className="h-[194px] sm:w-[50%]">
                <img
                  className="h-full object-cover w-full rounded-3xl"
                  src={img2}
                  alt="house"
                />
              </div>
              <div className="md:text-xl pt-2 sm:w-[50%]">
                <p>July 25, 2023</p>
                <p className="pt-[10px]">
                  Uncover the allure of vintage and antique home design, where
                  classic pieces add a touch of elegance and history to modern
                  spaces
                </p>
              </div>
            </article>
            <article className="text-primaryColor flex flex-col sm:flex-row gap-6">
              <div className="h-[194px] sm:w-[50%]">
                <img
                  className="h-full object-cover w-full rounded-3xl"
                  src={img2}
                  alt="house"
                />
              </div>
              <div className="md:text-xl pt-2 sm:w-[50%]">
                <p>July 25, 2023</p>
                <p className="pt-[10px]">
                  Uncover the allure of vintage and antique home design, where
                  classic pieces add a touch of elegance and history to modern
                  spaces
                </p>
              </div>
            </article>
            <article className="text-primaryColor flex flex-col sm:flex-row gap-6">
              <div className="h-[194px] sm:w-[50%]">
                <img
                  className="h-full object-cover w-full rounded-3xl"
                  src={img2}
                  alt="house"
                />
              </div>
              <div className="md:text-xl pt-2 sm:w-[50%]">
                <p>July 25, 2023</p>
                <p className="pt-[10px]">
                  Uncover the allure of vintage and antique home design, where
                  classic pieces add a touch of elegance and history to modern
                  spaces
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Blogs;
