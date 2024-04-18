// FAQ.jsx
import React, { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'; // Icons for interactive touch
import './FAQ.css';


const questionsAnswers = [
    {
        question: 'What types of translation do you offer?',
        answer: 'We provide a wide range of translation services including documents, websites, and more.'
    },
    {
        question: 'How do you ensure translation accuracy?',
        answer: 'Our team of expert translators utilize rigorous verification processes for precise translations.'
    },
    {
        question: 'Which languages do you specialize in?',
        answer: 'We specialize in Spanish, English, and Portuguese translations to cater to a diverse clientele.'
    },
    {
        question: 'Can you handle urgent translation requests?',
        answer: 'Yes, we offer expedited services for urgent translation needs. Contact us for more details.'
    },
    {
        question: 'Do you offer localization services?',
        answer: 'Absolutely, our localization services ensure your content is culturally appropriate and resonates with the target audience.'
    },
    {
        question: 'How can I get a quote for my translation project?',
        answer: 'Simply contact us with your project details and we will provide you with a personalized quote.'
    },
];

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = index => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="faq-container">
            <h2>Frequently Asked Questions</h2>
            <dl className="faq-list">
                {questionsAnswers.map((qa, index) => (
                    <React.Fragment key={index}>
                        <dt className={`faq-question ${activeIndex === index ? 'active' : ''}`} onClick={() => toggleFAQ(index)}>
                            {qa.question}
                            {activeIndex === index ? <IoIosArrowUp className='arrow'/> : <IoIosArrowDown className='arrow'/>} {/* Icon toggles based on state */}
                        </dt>
                        <dd className={`faq-answer ${activeIndex === index ? 'active' : ''}`}>
                            {qa.answer}
                        </dd>
                    </React.Fragment>
                ))}
            </dl>
        </div>
    );
};

export default FAQ;