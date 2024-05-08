import { questions } from '../utils/questions';
import SingleQuestion from './SingleQuestion';

const Accordion = () => {
  return (
    <section className=" pb-[50px] md:pb-[50px] pt-[100px] text-center bg-[#EFF5FF]">
      <div className="wrapper">
        <p className="font-sans text-2xl ">Got Questions?</p>
        <h2 className="text-primaryColor font-sans">FAQs</h2>
        {questions.map((question) => {
          return <SingleQuestion key={question.id} {...question} />;
        })}
      </div>
    </section>
  );
};
export default Accordion;
