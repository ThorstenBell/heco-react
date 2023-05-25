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
            icon: HecoMapIcon,
            link: "xeqwlbre"
        },
        {
            name: 'HecoSAILR',
            short: 'A systematic AI based literature and cost review.',
            description: [
                'Our systematic literature review gathers academic and market information about your health intervention. Novel AI approaches extract and organise findings.',
                'If you would like to use HecoSAILR, enter your details below and we’ll be in touch.'
            ],
            image: HecoSAILR,
            icon: HecoSAILRIcon,
            link: "xyyadqny"
        },
        {
            name: 'HecoCost',
            short: 'A budget impact modelling platform.',
            description: [
                'Our on-line budget impact modelling platform facilitates accurate unit and fixed cost capture. We present budget impact models and sensitivity analysis in a dashboard.',
                'If you would like to use HecoCost, enter your details below and we’ll be in touch.'
            ],
            image: HecoCost,
            icon: HecoCostIcon,
            link: "mzbqklna"
        },
        {
            name: 'HecoCalc',
            short: 'An early stage health economics calculator.',
            description: [
                'Our on-line health economic modelling platform supports cost-effectiveness analysis from an early development stage to later trial presentation. We display cost-effectiveness visuals and sensitivity analysis in a dashboard.',
                'If you would like to use HecoCalc, enter your details below and we’ll be in touch.'
            ],
            image: HecoCalc,
            icon: HecoCalcIcon,
            link: "mayzdgdg"
        },
        {
            name: 'HeConnect',
            short: 'A Web interface for collecting real-time evidence.',
            description: [
                'Real-time data is securely sent to our platforms and used to update evidence mapping (HecoMap), budget analysis (HecoCost) or economic models (HecoCalc).',
                'If you would like to use HeConnect, enter your details below and we’ll be in touch.'
            ],
            image: HeConnect,
            icon: HeConnectIcon,
            link: "xlekwypr"
        },
        {
            name: 'HecoPath',
            short: 'An AI based path analysis tool',
            description: [
                'Our hybrid AI approach extracts health pathway models from big or small data sets. Pathway models can then adapt models for newly identified patient groups or pathway elements.',
                'If you would like to use HecoPath, enter your details below and we’ll be in touch.'
            ],
            image: HecoPath,
            icon: HecoPathIcon,
            link: "xpzejgyr"
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
                    is generated.</p>
                <p>
                    HecoAnalytics uses the accepted practice of evaluating the cost-effectiveness of a new technology in
                    comparison to an existing gold standard technology, similar to that used by <a
                    href="https://www.nice.org.uk/" rel="noreferrer" target="_blank" title="The National Institute for
                    Health and Care Excellence">NICE</a> (The National Institute for
                    Health and Care Excellence).
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
                    Intelligence (AI) and other data science techniques to streamline health economic processes and
                    models. In addition to our own staff, the company leverages a network of world-leading academic
                    health economists so that appropriate domain expertise can be brought to bear on clients’ projects
                    in a cost-effective manner. HecoAnalytics is also a licensed facilitator for the NICE META Tool, an
                    online evidence gap analysis tool.
                </p>

                <p>HecoAnalytics provides a unique set of data-driven health evidence services:</p>
                <ol className="platform-list">
                    <li>Early evaluation and scoping as a licensed facilitation organisation for the NICE MedTech Early
                        Assessment (META) Tool – building an Evidence Map with PICO analysis.
                    </li>
                    <li>Systematic Literature reviews can then be used to better understand competitor offerings and
                        pathway impact, augmenting the Evidence Map.
                    </li>
                    <li>Early health economic models using HecoCalc provide a scenario-based approach to analysing
                        health and cost effectiveness. Budget impact and more detail health economic modelling and
                        simulation can follow.
                    </li>
                    <li>Data collection (HeConnect) and AI tools (HecoPath) can be used to refine models with more detailed pathway representations and patient groupings.
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
