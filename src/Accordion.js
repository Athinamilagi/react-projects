import React, { useState } from "react";
import styled from "styled-components";

const AccordionContainer = styled.div`
  width: 300px;
  margin: 20px;
`;

const AccordionItem = styled.div`
  border: 1px solid #ccc;
  margin-bottom: 8px;
`;

const AccordionHeader = styled.div`
  background-color: #f1f1f1;
  padding: 10px;
  cursor: pointer;
`;

const AccordionContent = styled.div`
  display: ${(props) => (props.isOpen ? "block" : "none")};
  padding: 10px;
`;

const Accordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleAccordionClick = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <AccordionContainer>
      {items.map((item, index) => (
        <AccordionItem key={index}>
          <AccordionHeader onClick={() => handleAccordionClick(index)}>
            {item.header}
          </AccordionHeader>
          <AccordionContent isOpen={openIndex === index}>
            {item.content}
          </AccordionContent>
        </AccordionItem>
      ))}
    </AccordionContainer>
  );
};

export default Accordion;
