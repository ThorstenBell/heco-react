import React, {useState} from "react";
import Icon from '@mdi/react';
import quoteMark from '../Assets/images/icons/QuoteMark.svg';
import {mdiChevronLeft, mdiChevronRight, mdiCircle} from '@mdi/js';
import {ITestimonial} from "../Interfaces";
import '../Assets/css/testimonial-section.css';

const TestimonialSection = () => {
    const testimonials: ITestimonial[] = [
        {
            name: "CEO – company developing novel point of care technology",
            testimonial: "We worked with HecoAnalytics to develop budget impact and cost-effectiveness models using their proprietary web-based tool.  This allowed considerable flexibility in terms of inputs and scenarios and allowed us to better understand the consequences of the performance of our product and the data we needed to justify its adoption.\n"
        },
        {
            name: "CEO – Medical AI digital company working in early cancer diagnosis",
            testimonial: "As a start-up with a computing background we were new to the concept of Health Economics and its relationship to our value proposition.  HecoAnalytics supported us on this journey and help to understand contextualise the requirements and provide an evidence generation plan, which was subsequently grant funded."
        },
        {
            name: "Project Manager – new digital pathway for neurodegenerative diseases",
            testimonial: "We worked with HecoAnalytics to develop an early economic model and subsequently a real time data collection from our app using HecoNect.  We hope to use the HecoNect functionality as a sales tool beyond our current use in clinical evaluation.  The company was responsive and understanding of our needs as well as flexible understanding that we were breaking new ground.\n"
        },
        {
            name: "Founder – digital health company focussed on mental health",
            testimonial: "HecoAnalytics  immediately understood our requirements and guided us through the NICE META Tool process as an introduction to help develop our evidence generation plan as we seek to move our solution from our trust to users nationally.\n"
        },
        {
            name: "CTO  – digital health company working in diabetes",
            testimonial: "HecoAnalytics has an understanding of all aspects relevant to medtech start-ups developing new products not just health economics but the impact of regulations, funding requirements and software development making the whole interaction more valuable than a traditional health economic provider.\n"
        },
    ]
    const [testimonialIndex, setTestimonialIndex] = useState(0);
    const [activeTestimonial, setActiveTestimonial] = useState(testimonials[testimonialIndex]);

    const previousTestimonial = () => {
        const newIndex: number = testimonialIndex > 0 ? testimonialIndex - 1 : testimonials.length - 1;
        setTestimonialIndex(newIndex);
        setActiveTestimonial(testimonials[newIndex]);
    }
    const nextTestimonial = () => {
        const newIndex: number = testimonialIndex < testimonials.length - 1 ? testimonialIndex + 1 : 0;
        setTestimonialIndex(newIndex);
        setActiveTestimonial(testimonials[newIndex]);
    }
    const handleClick = (key: number) => {
        setTestimonialIndex(key);
        setActiveTestimonial(testimonials[key]);
    }

    return (
        <section>
            <div className="testimonial-block" id="testimonial-block">
                <div className="testimonial-arrows">
                    <button onClick={previousTestimonial} type="button" id="previous-testimonial" title="Previous">
                        <Icon path={mdiChevronLeft} size={3}/>
                    </button>
                    <button onClick={nextTestimonial} type="button" id="next-testimonial" title="Next">
                        <Icon path={mdiChevronRight} size={3}/>
                    </button>
                </div>
                <div className="tag-line">from HecoAnalytics users</div>
                <img src={quoteMark} alt="" className="quote-mark" />
                <div id="testimonial-text">{activeTestimonial.testimonial}</div>
                <div id="testimonial-name">{activeTestimonial.name}</div>
                <div id="testimonial-indicators">{testimonials.map((testimonial: ITestimonial, key: number) => {
                    if (key === testimonialIndex) {
                        return <button className='active' title={testimonial.name} key={key} type='button'><Icon path={mdiCircle} size={0.5}></Icon></button>
                    }
                    return <button title={testimonial.name} key={key} type='button' onClick={() => handleClick(key)}><Icon path={mdiCircle} size={0.5}></Icon>
                    </button>
                })}</div>
            </div>
        </section>
    )
}

export default TestimonialSection