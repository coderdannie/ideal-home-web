import { useState } from 'react';

const Single = ({ title, index, text }) => {
  const [show, setShow] = useState(false);
  return (
    <article key={index}>
      <button
        onClick={() => {
          setShow(!show);
        }}
      >
        {title}
        fadfadf
      </button>
      {show && <p>{text}</p>}
    </article>
  );
};
export default Single;
