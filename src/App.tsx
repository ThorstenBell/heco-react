import React, {FC} from 'react';
import NavBar from './Components/NavBar'
import './Assets/css/App.css';
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import {ITool} from "./Interfaces";
import ToolBlock from "./Components/ToolBlock";
import TestimonialSection from "./Components/TestimonialSection";
import HecoCalc from "./Assets/images/tools/HecoCalc.jpg";
import HecoCalcIcon from "./Assets/images/icons/HecoCalc.svg";
import HecoMap from "./Assets/images/tools/HecoMap.jpg";
import HecoMapIcon from "./Assets/images/icons/HecoMap.svg";
import HeConnect from "./Assets/images/tools/HeConnect.jpg";
import HeConnectIcon from "./Assets/images/icons/HeConnect.svg";
import HecoPath from "./Assets/images/tools/HecoPath.jpg";
import HecoPathIcon from "./Assets/images/icons/HecoPath.svg";
import HecoSAILR from "./Assets/images/tools/HecoSAILR.jpg";
import HecoSAILRIcon from "./Assets/images/icons/HecoSAILR.svg";
import HecoCost from "./Assets/images/tools/HecoCost.jpg";
import HecoCostIcon from "./Assets/images/icons/HecoCost.svg";

const App: FC = () => {
    const tools: ITool[] = [
        {
            name: 'HecoMap',
            short: 'Evidence models for digital interventions.',
            description: [
                'Evidence maps grow over time, starting with early META discussion. A graphical picture of your evidence that categorises and annotates using PICO and evidence quality measures',
                'If you would like to use HecoMap, enter your details below and we’ll be in touch.'
            ],
            image: HecoMap,
            link: "xnqyojwj",
            icon: HecoMapIcon
        },
        {
            name: 'HecoSAILR',
            short: 'A systematic AI based literature and cost review.',
            description: [
                'Our systematic literature review gathers academic and market information about your health intervention. Novel AI approaches extract and organise findings.',
                'If you would like to use HecoSAILR, enter your details below and we’ll be in touch.'
            ],
            image: HecoSAILR,
            icon: HecoSAILRIcon
        },
        {
            name: 'HecoCost',
            short: 'A budget impact modelling platform.',
            description: [
                'Our on-line budget impact modelling platform facilitates accurate unit and fixed cost capture. We present budget impact models and sensitivity analysis in a dashboard.',
                'If you would like to use HecoCost, enter your details below and we’ll be in touch.'
            ],
            image: HecoCost,
            icon: HecoCostIcon
        },
        {
            name: 'HecoCalc',
            short: 'An early stage health economics calculator.',
            description: [
                'Our on-line health economic modelling platform supports cost-effectiveness analysis from an early development stage to later trial presentation. We display cost-effectiveness visuals and sensitivity analysis in a dashboard.',
                'If you would like to use HecoCalc, enter your details below and we’ll be in touch.'
            ],
            image: HecoCalc,
            icon: HecoCalcIcon
        },
        {
            name: 'HeConnect',
            short: 'A Web interface for collecting real-time evidence.',
            description: [
                'Real-time data is securely sent to our platforms and used to update evidence mapping (HecoMap), budget analysis (HecoCost) or economic models (HecoCalc).',
                'If you would like to use HeConnect, enter your details below and we’ll be in touch.'
            ],
            image: HeConnect,
            icon: HeConnectIcon
        },
        {
            name: 'HecoPath',
            short: 'An AI based path analysis tool',
            description: [
                'Our hybrid AI approach extracts health pathway models from big or small data sets. Pathway models can then adapt models for newly identified patient groups or pathway elements.',
                'If you would like to use HecoPath, enter your details below and we’ll be in touch.'
            ],
            image: HecoPath,
            icon: HecoPathIcon
        }
    ]

    const scroll = (id: string) => {
        const section: HTMLElement | null = document.getElementById(id);
        if (section) {
            window.scrollTo({top: section.offsetTop - 64, behavior: 'smooth'});
        }
    }

    return (
        <div className="App" id='home'>
            <NavBar scroll={scroll}></NavBar>
            <Header scroll={scroll}></Header>

            <section id="need">
                <h2>Why is HecoAnalytics needed?</h2>
                <p>HecoAnalytics provides health economic tools and solutions, within a business context, to enable
                    companies to engage early and affordably with health economics enabling them to develop better, more
                    effective products designed to meet commissioners’ and healthcare systems’ needs. The output of
                    HecoAnalytics tools are aligned with the requirements of the National Institute of Care and Health
                    Excellence (NICE) technology assessment (HTA) programmes such as, the Medical Technologies
                    Evaluation Programme (MTEP) to demonstrate the value of a company’s product to NICE but also other
                    HTA bodies and payers. Our mission is to provide companies with appropiate, understandable and
                    actionable health economic support that will assist the company in marketing its products and
                    interacting with HTA agencies in a number of geographies. HecoAnalytics facilitation sessions offer
                    extensive interaction with experienced staff to ensure that clients gain maximum value from the
                    process, delivering actionable, user friendly output rather than simply providing academic reports.
                    Furthermore, the integrated nature of HecoAnalytics deliverables means that previous work can
                    informed future work and models and ideas can be easily and efficiently updated as new information
                    is generated.

                    HecoAnalytics uses the accepted practice of evaluating the cost-effectiveness of a new technology in
                    comparison to an existing gold standard technology, similar to that used by NICE (The National
                    Institute for Health and Care Excellence).
                </p>
                <p>HecoAnalytics uses the accepted practice of evaluating the cost-effectiveness of a new technology in
                    comparison
                    to an existing gold standard technology, similar to that used by NICE.
                </p>
            </section>
            <section id="tools">
                <h2>Our tools</h2>
                <p>We provide Medtech companies with a set of Web-based tools that support their evidence gathering and
                    economic modelling journey. Our HecoAnalytics approach can be used to benefit medical devices and
                    software, including AI, by creating actionable evidence from literature and scenario-based modeling
                    tools.</p>
                <div className="tool-blocks">
                    {tools.map((tool: ITool, key: number) => {
                        return <ToolBlock key={key} tool={tool}></ToolBlock>
                    })}
                </div>
            </section>
            <TestimonialSection></TestimonialSection>
            <section id="platform">
                <h2>How the HecoAnalytics platform works</h2>
                <p>HecoAnalytics builds on over a decade of academic research in Health Economics and Computer Science.
                    HecoAnalytics uses the latest computing technology such as machine learning (ML), artificial
                    Intelligence (AI)
                    and other data science techniques to streamline health economic processes and models. In addition to
                    our own
                    staff, the company leverages a network of world-leading academic health economists so that
                    appropriate domain
                    expertise can be brought to bear on clients’ projects in a cost-effective manner. HecoAnalytics is
                    also a
                    licensed facilitator for the NICE META Tool, an online evidence gap analysis tool.
                </p>
            </section>
            <section id="services">
                <h2>What you can do with HecoAnalytics</h2>
                <p>HecoAnalytics is able to provide all services associated with health economic evidence generation and
                    support of
                    market access and HTA activities. The typical process of projects that HecoAnalytics undertakes for
                    companies
                    includes:</p>
                <ol>
                    <li>NICE Medtech Early Technical Assessment (META) Tool - an affordable, online, platform developed
                        by NICE to
                        help product developers understand what evidence is needed to make a convincing case to payers
                        and
                        commissioners for their technology. It is delivered by HecoAnalytics under licence to NICE as a
                        Facilitating Organisation.
                    </li>
                    <li>Value Proposition (VP) Development – a clear argument to support commissioning of the product
                        backed by
                        measurable data and a robust evidence base. A principal objective to understand where the
                        product will fall
                        within the cost-effectiveness plane compared to the current Standard of Care (SoC).
                    </li>
                    <li>Early Health Economic Modelling (EEM) - an exercise to gain an appreciation of the possible
                        cost-effectiveness of proposed interventions. EEM is employed to evaluate the potential
                        cost-effectiveness
                        related to different product performance characteristics, potential pricing of the product or
                        results of
                        clinical trials. Often this can be the first supporting evidence that a product, or
                        intervention, has
                        clinical and commercial potential.
                    </li>
                    <li>Budget Impact (BI) Model development - A budget impact analysis is an economic assessment that
                        estimates the
                        financial consequences of adopting a new intervention for a specific budget holder resulting
                        from a decision
                        to reimburse a new healthcare intervention. A budget impact analysis evaluates whether the
                        intervention is
                        affordable for a budget holder.
                    </li>
                    <li>Cost Effectiveness (CE) Model development - A cost-effectiveness analysis evaluates whether an
                        intervention
                        offers value relative to an existing intervention, usually the Standard of Care (SoC), the
                        outcomes are
                        defined as cost relative to specified health outcomes. A cost-effectiveness analysis evaluates
                        whether an
                        intervention represents value for money compared to comparable interventions.
                    </li>
                    <li>Development of real time data collection and economic analysis – HeConnect. HecoAnalytics can
                        assist in data
                        integration from a Digital Health Technology (DHT) or app into health economic models (including
                        real time).
                        Consequently, facilitating significant improvements in the quality and quantity of data that are
                        collected
                        and the speed at which economic models can be produced that can be updated with new data as they
                        become
                        available.
                    </li>
                    <li>Development of AI and machine learning for analysing trial, public and private health data.
                        Findings are
                        able to target products or patient groups in order to improve health economic models.
                    </li>
                </ol>
            </section>

            <section>
                <div className="more-info">
                    <p className='tag-line'>INTERESTED IN HECOANALYTICS?</p>
                    <p className="explore-tools">Explore our tools</p>
                    <div className="actions">
                        <button type='button' onClick={() => scroll('tools')} className="btn-big">Get Started</button>
                    </div>
                </div>
            </section>

            <Footer></Footer>
        </div>
    );
}

export default App;
