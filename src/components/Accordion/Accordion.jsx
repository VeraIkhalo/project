import React, { useState } from "react";
import { MdToggleOn, MdToggleOff } from "react-icons/md";
import "./Accordion.scss";
import { useAuth } from '../../context/AuthContext';

const faqData = [
  {
    question: "Q1. Lorem ipsum dolor sit amet consectetur?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Sit mauris ante sed ullamcorper adipiscing. Cras tortor nunc sed risus sit dictum gravida nunc facilisis. Vulputate sit risus ornare integer ut faucibus posuere. Fringilla eros pulvinar lectus arcu adipiscing nunc. At posuere faucibus urna mattis ipsum velit augue penatibus elementum. Interdum sagittis mi lorem vitae dolor. In diam pulvinar leo elit massa varius aliquam eget. Ut proin urna in sit sodales. Fermentum viverra nisl pellentesque tortor fermentum proin justo purus mollis. Lorem ultrices integer nulla nulla enim amet scelerisque porta eu. Orci dictumst integer auctor turpis venenatis.",
  },
  {
    question: "Q2. Lorem ipsum dolor sit amet consectetur?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Sit mauris ante sed ullamcorper adipiscing. Cras tortor nunc sed risus sit dictum gravida nunc facilisis. Vulputate sit risus ornare integer ut faucibus posuere. Fringilla eros pulvinar lectus arcu adipiscing nunc. At posuere faucibus urna mattis ipsum velit augue penatibus elementum. Interdum sagittis mi lorem vitae dolor. In diam pulvinar leo elit massa varius aliquam eget. Ut proin urna in sit sodales. Fermentum viverra nisl pellentesque tortor fermentum proin justo purus mollis. Lorem ultrices integer nulla nulla enim amet scelerisque porta eu. Orci dictumst integer auctor turpis venenatis.",
  },
  {
    question: "Q3. Lorem ipsum dolor sit amet consectetur?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Sit mauris ante sed ullamcorper adipiscing. Cras tortor nunc sed risus sit dictum gravida nunc facilisis. Vulputate sit risus ornare integer ut faucibus posuere. Fringilla eros pulvinar lectus arcu adipiscing nunc. At posuere faucibus urna mattis ipsum velit augue penatibus elementum. Interdum sagittis mi lorem vitae dolor. In diam pulvinar leo elit massa varius aliquam eget. Ut proin urna in sit sodales. Fermentum viverra nisl pellentesque tortor fermentum proin justo purus mollis. Lorem ultrices integer nulla nulla enim amet scelerisque porta eu. Orci dictumst integer auctor turpis venenatis.",
  },
  {
    question: "Q4. Lorem ipsum dolor sit amet consectetur?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Sit mauris ante sed ullamcorper adipiscing. Cras tortor nunc sed risus sit dictum gravida nunc facilisis. Vulputate sit risus ornare integer ut faucibus posuere. Fringilla eros pulvinar lectus arcu adipiscing nunc. At posuere faucibus urna mattis ipsum velit augue penatibus elementum. Interdum sagittis mi lorem vitae dolor. In diam pulvinar leo elit massa varius aliquam eget. Ut proin urna in sit sodales. Fermentum viverra nisl pellentesque tortor fermentum proin justo purus mollis. Lorem ultrices integer nulla nulla enim amet scelerisque porta eu. Orci dictumst integer auctor turpis venenatis.",
  },
  {
    question: "Q5. Lorem ipsum dolor sit amet consectetur?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Sit mauris ante sed ullamcorper adipiscing. Cras tortor nunc sed risus sit dictum gravida nunc facilisis. Vulputate sit risus ornare integer ut faucibus posuere. Fringilla eros pulvinar lectus arcu adipiscing nunc. At posuere faucibus urna mattis ipsum velit augue penatibus elementum. Interdum sagittis mi lorem vitae dolor. In diam pulvinar leo elit massa varius aliquam eget. Ut proin urna in sit sodales. Fermentum viverra nisl pellentesque tortor fermentum proin justo purus mollis. Lorem ultrices integer nulla nulla enim amet scelerisque porta eu. Orci dictumst integer auctor turpis venenatis.",
  },
];

export default function Accordion() {
  const [openIndices, setOpenIndices] = useState([]);
  const { theme, toggleTheme } = useAuth();

  const toggleAccordion = (index) => {
    setOpenIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  React.useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div className="container">
      <div className="toggle-button" onClick={toggleTheme}>
        {theme === "light" ? (
          <MdToggleOff size={45} color="#8800c8" title="Switch to Dark Mode" />
        ) : (
          <MdToggleOn size={45} color="#2fc1ff" title="Switch to Light Mode" />
        )}
      </div>
      <div className="accordion-container">
        <h2 className="accordion-title">Frequently asked questions</h2>

        <div className="accordion-list">
          {faqData.map((item, idx) => (
            <div
              key={idx}
              className={`accordion-item${
                openIndices.includes(idx) ? " open" : ""
              }`}
            >
              <button
                className="accordion-question"
                onClick={() => toggleAccordion(idx)}
              >
                <span>{item.question}</span>
                <span className="accordion-icon">
                  {openIndices.includes(idx) ? "-" : "+"}
                </span>
              </button>
              {openIndices.includes(idx) && (
                <div className="accordion-answer">{item.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
