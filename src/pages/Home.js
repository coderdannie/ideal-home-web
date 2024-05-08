import {
  Accordion,
  Blogs,
  ContactUs,
  Hero,
  OurValue,
  Properties,
} from '../components';
import Testimonial from '../components/Testimonial';

const Home = () => {
  return (
    <>
      <Hero />
      <Properties />
      <OurValue />
      <Testimonial />
      <Accordion />
      <Blogs />
      <ContactUs />
    </>
  );
};
export default Home;
