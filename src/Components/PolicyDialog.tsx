import React from "react";
import '../Assets/css/policy-dialog.css';
import Icon from "@mdi/react";
import {mdiClose} from "@mdi/js";

interface Props {
    closeDialog: () => void;
    policyType: String;
}

const PolicyDialog = ({closeDialog, policyType}: Props) => {
    if (policyType === 'terms') {
        return (
            <div className='policy-dialog'>
                <button type='button' title='close' onClick={closeDialog}><Icon path={mdiClose} size={1}></Icon>
                </button>
                <h2>Terms of Use</h2>
                <h3>1. TERMS OF WEBSITE USE</h3>
                <p>1.1 This page (together with the documents referred to on it) explains the terms on which you may
                    make use of the website located at <a href="https://www.hecoanalytics.com/"
                                                          target="_blank" rel="noreferrer">https://www.hecoanalytics.com/</a> (the site),
                    whether as a guest or
                    a registered user. Please read these terms of use (Terms) carefully before you start to use the site
                    and the services launched from the site. By using the site, you indicate that you accept these Terms
                    and that you agree to abide by them. If you do not agree to these Terms, please refrain from using
                    the site.</p>
                <h3>2. INFORMATION ABOUT US</h3>
                <p>2.1 The site is operated by HecoAnalytics Limited and referred to in these Terms as “we”, “us” or
                    “our”.
                    HecoAnalytics Limited is a company registered in England and Wales under Company No. 09795243 having
                    its
                    registered office at Brunel Science Park, Kingston Lane, Uxbridge, Middlesex, England, UB8 3PQ.</p>
                <h3>3. ACCESSING OUR SITE</h3>
                <p>3.1 Access to the site and services is permitted on a temporary basis, and we reserve the right to
                    withdraw or amend the service we provide on the site without notice (see below). We will not be
                    liable
                    if for any reason the site is unavailable at any time or for any period.</p>
                <p>3.2 From time to time, we may restrict access to some parts of the site, services that are launched,
                    or
                    the entire site, to users who have registered with us.</p>
                <p>
                    3.3 You are responsible for making all arrangements necessary for you to have access to the site.
                    You
                    are also responsible for ensuring that all persons who access the site through your internet
                    connection
                    are aware of these terms, and that they comply with them.</p>
                <p>
                    3.4 We aim to update the site regularly and may change the content at any time. If we consider it
                    necessary, we may suspend access to the site or close it indefinitely. Where possible, we will try
                    to
                    provide registered users with prior notice of any planned maintenance or closure of the site.</p>
                <h3>4. PROHIBITED USES</h3>
                <p>4.1 You may only use the site only for lawful purposes. You may not use the site:</p>
                <ol type="a">
                    <li>In any way that breaches any applicable local, national or international law or regulation;
                    </li>
                    <li>In any way that is unlawful or fraudulent, or has any unlawful or fraudulent purpose or
                        effect;
                    </li>
                    <li>For the purpose of harming or attempting to harm any other person in any way;
                    </li>
                    <li>To send, knowingly receive, upload, download, use or re-use any material that is inaccurate,
                        misleading, obscene, derogatory, or intended to harm any person;
                    </li>
                    <li>To transmit, or procure the sending of, any unsolicited or unauthorised advertising or
                        promotional
                        material or any other form of similar solicitation; or
                    </li>
                    <li>To knowingly transmit any data, send or upload any material that contains viruses, Trojan
                        horses,
                        worms, time-bombs, keystroke loggers, spyware, adware or any other harmful programs or similar
                        computer
                        code designed to adversely affect the operation of any computer software or hardware.
                    </li>
                </ol>
                <p>4.2 You also agree not to access without authority, interfere with, damage or disrupt:</p>
                <ol type="a">
                    <li>Any part of the site;</li>
                    <li>Any equipment or network on which the site is stored;</li>
                    <li>Any software used in the provision of the site; or</li>
                    <li>Any equipment or network or software owned or used by any third party.</li>
                </ol>
                <h3>5. INTELLECTUAL PROPERTY RIGHTS</h3>
                <p>5.1 We are the owner or the licensee of all intellectual property rights in the site, and in the
                    material published on it, excluding any user generated content or third-party content. Those works
                    are
                    protected by copyright laws and treaties around the world. All such rights are reserved.
                </p><p>5.2 You may print off one copy, and may download extracts, of any page(s) from the site for your
                personal reference and you may draw the attention of others within your organisation to material posted
                on the site.
            </p><p>5.3 You must not modify the paper or digital copies of any materials you have printed off or
                downloaded
                in any way, and you must not use any illustrations, photographs, video or audio sequences or any
                graphics separately from any accompanying text.
            </p><p>5.4 Our status (and that of any identified contributors) as the authors of material on the site must
                always be acknowledged.
            </p><p>5.5 You must not use any part of the materials on the site for commercial purposes without obtaining
                a licence to do so from us or our licensors. If you print off, copy or download any part of the site in
                breach of these Terms, your right to use the site will cease immediately and you must, at our option,
                return or destroy any copies of the materials you have made.</p>
                <p>5.6 You must not replicate:</p>
                <ol type="a">
                    <li>Copyrighted material on the site;</li>
                    <li>HecoAnalytics software services provided by the site and</li>
                    <li>Data presented on the site or within HecoAnalytics software services (unless authorised to
                        do do).
                    </li>
                </ol>
                <p>5.7 Unless otherwise expressly set out to the contrary, nothing in these Terms shall transfer from us
                    to you, any intellectual property rights owned by and/or licensed to us.</p>
                <p>5.8 Nothing in these Terms grants you any legal rights in the site or contribution, other than as
                    necessary for you to access it.</p>
                <h3>6. RELIANCE ON INFORMATION POSTED</h3>
                <p>6.1 Our site, and content published on it, is for information purposes only. Nothing published on the
                    site intended to amount to advice on which you should rely. While we aim to ensure that any content
                    is
                    correct at the time it is published, we can’t guarantee that it will continue to be correct at the
                    time
                    you access it. We don’t accept any liability or responsibility of any nature, arising from any
                    reliance
                    placed by you or anyone else on the content published on our website. To the maximum extent
                    permitted by
                    law, we exclude our liability for direct, indirect or consequential loss.</p>
                <h3>7. BREACH OF THESE TERMS OF USE</h3>
                <p>7.1 If we consider that a breach of these Terms has occurred, we may take such action as we deem
                    appropriate.</p>
                <p>7.2 Failure to comply with these Terms constitutes a material breach of these Terms and may result in
                    our taking all or any of the following actions:</p>
                <ol type='a'>
                    <li>Immediate, temporary or permanent withdrawal of your right to use the site;</li>
                    <li>Immediate, temporary or permanent removal of any contribution uploaded by you to the site;</li>
                    <li>Issue of a warning to you;</li>
                    <li>Legal proceedings against you for reimbursement of all costs on an indemnity basis (including,
                        but not limited to, reasonable administrative and legal costs) resulting from the breach;
                    </li>
                    <li>Further legal action against you; and/or</li>
                    <li>Disclosure of such information to law enforcement authorities as we reasonably feel is necessary
                        or as required by law.
                    </li>
                </ol>
                <p>7.3 We exclude our liability for all action we may take in response to breaches of these Terms. The
                    actions we may take are not limited to those described above, and we may take any other action we
                    reasonably deem appropriate.</p>
                <h3>8. OUR LIABILITY</h3>
                <p>8.1 The material displayed free of charge on the site is provided without any guarantees, conditions
                    or
                    warranties as to its accuracy. To the extent permitted by law, we expressly exclude:</p>
                <ol type="a">
                    <li>All conditions, warranties and other terms which might otherwise be implied by statute, common
                        law or the law of equity; and
                    </li>
                    <li>Any liability for any direct, indirect or consequential loss or damage incurred by any user in
                        connection with the site or in connection with the use, inability to use, or results of the use
                        of the site, any websites linked to it and any materials posted on it, including, without
                        limitation any liability for:
                    </li>
                    <ol type='i'>
                        <li>Any loss of profits, sales, business, or revenue;</li>
                        <li>Loss or corruption of data, information or software;</li>
                        <li>Loss of business opportunity;</li>
                        <li>Loss of anticipated savings;</li>
                        <li>Loss of goodwill; or</li>
                        <li>Any indirect or consequential loss</li>
                        <li>For any other loss or damage of any kind, however arising and whether caused by tort
                            (including negligence), breach of contract or otherwise, even if foreseeable.
                        </li>
                    </ol>

                </ol>
                <p>8.2 We will not be liable for any loss or damage caused by a distributed denial-of-service attack,
                    viruses or other technologically harmful material that may infect your computer equipment, computer
                    programs, data or other proprietary material due to your use of the site or to your downloading of
                    any
                    material posted on it, or on any website linked to it.</p>
                <p>8.3 Nothing in these terms shall limit our liability for death or personal injury arising from our
                    negligence, nor our liability for fraudulent misrepresentation or misrepresentation as to a
                    fundamental matter</p>
                <h3>9. LINKING TO OUR SITE</h3>
                <p>9.1 You may link to our home page, provided you do so in a way that is fair and legal and does not
                    damage our reputation or take advantage of it. You must not establish a link in such a way as to
                    suggest
                    any form of association, approval or endorsement on our part where none exists.</p>
                <p>9.2 You must not establish a link from any website that is not owned by you.</p>
                <p>9.3 The site must not be framed on any other website, nor may you create a link to any part of the
                    site
                    other than the home page. We reserve the right to withdraw linking permission without notice.</p>
                <p>9.4 If you wish to make any use of material on the site other than that set out above, please address
                    your request to <a href="mailto:info@hecoanalytics.com">info@hecoanalytics.com</a>. HecoAnalytics
                    will endeavour to respond to your request as
                    soon
                    as reasonably possible. Please ensure that your request contains, at a minimum, the following
                    information:</p>
                <ol type="a">
                    <li>The material in question (including a link to such material);</li>
                    <li>The purpose for which you wish to use the material that differs from that set out above;
                        and
                    </li>
                    <li>Your intention (if at all) to share such material, and if so, where and with whom the
                        material will
                        be shared.
                    </li>
                </ol>
                <h3>10. LINKS FROM OUR SITE</h3>
                <p>10.1 Where the site contains links to other sites and resources provided by third parties, these
                    links
                    are provided for your information only. We have no control over the contents of those sites or
                    resources
                    and accept no responsibility for them or for any loss or damage that may arise from your use of
                    them.</p>
                <h3>11. JURISDICTION AND APPLICABLE LAW</h3>
                <p>11.1 The English courts will have exclusive jurisdiction over any claim arising from, or related to,
                    a
                    visit to the site including any non-contractual obligations. These Terms including any
                    non-contractual
                    obligations are governed by English law.</p>
                <h3>12. VARIATIONS</h3>
                <p>12.1 We may revise these Terms at any time by amending this page. Our updated Terms will be displayed
                    on
                    the site and by continuing to use and access the site following such changes, you agree to be bound
                    by
                    these changes. If you have are registered with us, we will also email you at the address provided on
                    registration to let you know about any changes to our Terms. Some of the provisions contained in
                    these
                    Terms may also be superseded by provisions or notices published elsewhere on the site.</p>
                <h3>13. CONTACT DETAILS</h3>
                <p>13.1 If you have any questions or concerns about material that appears on our site, or any questions
                    about these Terms, please contact <a href="mailto:info@hecoanalytics.com">info@hecoanalytics.com</a>.
                </p>
                <p>Welcome to our site.</p>
            </div>
        )
    } else {
        return (
            <div className='policy-dialog'>
                <button type='button' title='close' onClick={closeDialog}><Icon path={mdiClose} size={1}></Icon>
                </button>
                <h2>Privacy Policy</h2>
                <p>At HecoAnalytics we know how important it is to protect your personal information. Whether
                    you are using our online services or in person we want to make every customer experience
                    safe and secure.
                </p>
                <p>
                    In keeping with that goal, we have developed this Privacy Policy to explain our practices for
                    the collection, use, and disclosure of your personal information.
                </p>
                <p>This Policy applies to our Web Sites, mobile apps, call centres, and all other channels in
                    which HecoAnalytics collects and uses your personal information. All references to "Web
                    Sites" in this Privacy Policy mean <a href="https://www.hecoanalytics.com"
                                                          target="_blank" rel="noreferrer">www.hecoanalytics.com</a> or mobile apps where
                    this Privacy
                    Policy is posted.
                </p>
                <h3>1.WHAT WE COLLECT</h3>
                <p>The types of information we collect depend on the nature of your interaction with us.</p>
                <h4>1.1 Personal Information</h4>
                <p>Personal information is information that can identify an individual or information about an
                    identifiable individual. We may collect personal information such as:</p>
                <ul>
                    <li>Your contact information - e.g., name, postal address, telephone number, cloud
                        provider identifiers and email address;
                    </li>
                    <li>Your personal preferences - e.g., default data, language preferences, and marketing
                        consent.
                    </li>
                </ul>
                <p>In addition, we may collect the following types of information:</p>
                <ul>
                    <li>We may collect certain data when you visit our Web Sites, such as your IP address, the
                        type of browser you are using or the referring URL; or
                    </li>
                    <li>We may collect and summarize customer information in an aggregate format for
                        internal statistical and research purposes. We may, for example, summarize our data
                        to determine usage of our products and services.
                    </li>
                </ul>
                <p>You may choose not to provide us with your personal information. However, if you decide to
                    do this, we may not be able to provide you with the product, service, or information that you
                    requested. For example, some of our services will not be able to display all computed
                    information.</p>
                <h4>1.2 Supplementing Information</h4>
                <p>From time to time we may supplement the information you give us with information from
                    other sources, such as information validating your address or other available information you
                    have provided us. This is to help us maintain the accuracy of the information we collect and
                    to help us provide better service.</p>
                <h3>2.HOW WE COLLECT AND USE INFORMATION COLLECTED FROM YOU</h3>
                <p>Listed here are some further examples of the ways that we collect personal information
                    directly from you and how we use it.</p>
                <h4>2.1 Service Usage Follow-Up, Surveys, and Customer Research</h4>
                <p>Following a purchase, we may send you a follow-up letter to thank you for your business, or
                    we may contact you to ensure that you are completely satisfied with the delivery, setup, or
                    installation of your new product.</p>
                <p>We may use contact information collected online to conduct occasional surveys and other
                    customer research. These surveys are entirely voluntary and you may easily decline to
                    participate. The information obtained through our surveys and customer research is used to
                    help us understand our customers, to enhance our product and service offerings, promotions
                    and events, and/or to assist in the selection of store locations.</p>
                <h4>2.2 Online Accounts</h4>
                <p>To engage in certain special features or functions of our Web Sites, or to utilise services from
                    our Web Sites, you may be asked to provide certain personal information, such as your name,
                    email address, postal address, telephone number, cloud identifiers. We use this information to
                    create your account, contact and correspond with you about your order, respond to your
                    inquiries, and monitor services launched of our Web Sites that you choose to use, such as
                    HecoCalc for early stage health economic analysis.</p>
                <h4>2.3 Customer Reviews</h4>
                <p>Customer Review functionality is provided as a rating system that offers you the chance to
                    share your thoughts on a product. These reviews are accessible to all Web Site visitors so
                    please use discretion when posting information to them and do not post personal information.</p>
                <h4>2.4 Newsletters or Updates</h4>
                <p>HecoAnalytics offers a variety of newsletters and promotional communications. If you signup or are
                    subscribed for our newsletter or other promotional communications, we will send
                    you communications that may be tailored based on your interests, preferences, and behaviour.
                    You may choose to stop receiving these communications at any time. This will include signup to
                    social
                    media platforms, for example LinkedIn.</p>
                <p>Please note that even if you unsubscribe from receiving our promotional communications,
                    you may continue to receive certain service or account-related communications from us. Our
                    subscriber list is not sold or rented to other parties.</p>
                <h4>2.5 Subscription Services and Activations</h4>
                <p>HecoAnalytics may offer activation of services like health economic or AI data services.
                    These subscription and activations will be recorded for audit purposes.</p>
                <h3>3.INFORMATION COLLECTED AUTOMATICALLY</h3>
                <p>In some cases, we automatically collect certain information.</p>
                <h4>3.1 Our Web Sites</h4>
                <p>Our Web Sites can be browsed without you providing us with any personal information.
                    However, when using our Web Sites, we may collect the Internet Protocol (IP) address of
                    your computer, the IP address of your Internet Service Provider, the date and time you access
                    our Web Sites, the Internet address of the Web site from which you linked directly to our
                    Web Site, the operating system you are using, the sections of the Web Site you visit, the Web
                    Site pages read and images viewed, and the content you download from the Web Site.
                    This information is used for Web Site and system administration purposes, to understand
                    Web Site activity, and to improve the Web Sites.</p>
                <h4>3.2 Cookies, Tracer Tags, and Web Beacons</h4>
                <p>The Web Sites use "cookies", a tiny element of data that our Web Sites can send to your
                    browser, which may then be stored on a Web Site user's computer to permit the Web Site to
                    recognize future visits using that browser. Cookies enhance the convenience and use of the
                    Web Site. For example, the information provided through cookies is used to recognize you as
                    a previous user of the Web Site (so you do not have to enter your language preference every
                    time), to offer personalized Web page content and information for your use, to track your
                    activity at the Web Site, to respond to your needs, and to otherwise facilitate your Web Site
                    experience. You may choose to decline cookies if your browser permits, but doing so may
                    affect your use of the Web Site and your ability to access certain features of the Web Site or
                    engage in transactions through the Web Site.</p>
                <p>Our Web Sites or email communications may also use technology such as "tracer tags" or
                    “Web Beacons”. This technology allows us to understand which areas of our emails you click
                    on and our behaviour on our Web Sites, such as which pages you visit. These tracer tags are
                    used to help us optimize and tailor our Web Site for you and other future visitors to our Web
                    Site, and to help provide you with email content and ads tailored to your interests.</p>
                <h4>3.3 Web Site Tracking Information</h4>
                <p>We may use web beacons or pixel tags to compile tracking information reports regarding
                    Web Site user demographics, Web Site traffic patterns, and Web Site purchases. We may
                    then provide these reports to advertisers and others. For our own research purposes, we may
                    link tracking information with personal information voluntarily provided to us. Once such a
                    link is made, all of the linked information is treated as personal information and will be used
                    and disclosed only in accordance with this Privacy Policy.</p>
                <h4>3.4 Social Media</h4>
                <p>We may offer you the opportunity to engage with our content on or through third-party social
                    networking websites, plug-ins, and applications. When you engage with our content on or
                    through third-party social networking websites, plug-ins, and applications, you may allow us
                    to have access to certain information associated with your social media account (e.g., name,
                    username, email address, profile picture, gender) to deliver the content or as part of the
                    operation of the website, plug-in or application.</p>
                <p>When you provide information from your social media account, we may use this information
                    to personalize your experience on the Web Site and on the third-party social networking
                    websites, plug-ins, and applications, and to provide you with other products or services you
                    may request.</p>
                <h4>3.5 Links to Other Web Sites</h4>
                <p>Our Web Site may contain links to other Web sites or Internet resources that are provided
                    solely for your convenience and information. When you click on one of those links you are
                    contacting another Web site or Internet resource. HecoAnalytics has no responsibility or
                    liability for, or control over, those other Web sites or Internet resources or their collection,
                    use, and disclosure of your personal information.</p>
                <p>We encourage you to read the privacy policies of those other Web sites to learn how they
                    collect and use your personal information.</p>
                <h3>4.HOW ELSE WE USE THE INFORMATION WE COLLECT</h3>
                <p>In addition to the uses described above, HecoAnalytics may use your personal information
                    for a number of different business purposes, for example to:</p>
                <ul>
                    <li>Detect and protect against fraud and error;</li>
                    <li>Establish and manage your accounts with us;</li>
                    <li>Track and confirm online service usage;</li>
                    <li>Track and analyse your purchases and preferences to better understand your product
                        and service needs and eligibility;
                    </li>
                    <li>Market and advertise our services;</li>
                    <li>Communicate things like special events, promotions, and surveys;</li>
                    <li>Tailor our online content or in-store offerings to you based on your interactions with us
                        and your preferences;
                    </li>
                    <li>Conduct research and analysis;</li>
                    <li>Operate, evaluate and improve our business; and</li>
                    <li>For other purposes as described in this Privacy Policy.</li>
                </ul>
                <h3>5.WHEN IS YOUR INFORMATION REMOVED</h3>
                <p>We keep your information only as long as we need it for legitimate business purposes and to
                    meet any legal requirements. We have retention standards that meet these parameters. We
                    destroy or erase your information when it is no longer needed, or we remove your personally
                    identifiable information to render it anonymous.</p>
                <h3>6.HOW WE SHARE YOUR INFORMATION</h3>
                <p>HecoAnalytics does not sell or rent our customers’ personal information to any other party.
                    However, in the normal course of business, we may share some of your personal information
                    within our corporate family and with third parties acting on our behalf or as permitted or
                    required by applicable law.</p>
                <p>Our affiliates and third-party service providers may be located outside of the UK and this
                    may result in personal information collected by HecoAnalytics being stored or processed
                    outside of UK and, as a result, your personal information may be accessible to law
                    enforcement, courts, and regulatory authorities in accordance with the law of these foreign
                    jurisdictions.</p>
                <h3>7. SERVICE PROVIDERS</h3>
                <p>HecoAnalytics may use third parties to manage one or more aspects of our business
                    operations, including the processing or handling of personal information. When we do use an
                    outside company, we use contractual or other appropriate means to ensure that your personal
                    information is used in a manner that is consistent with this Privacy Policy.</p>
                <p>For example, we may share personal information with third parties to perform services on our
                    behalf such as hosting data securely and carrying out computational services.</p>
                <p>HecoAnalytics has taken precautions to prevent the fraudulent use of your information on our
                    Web Sites. HecoAnalytics has adopted industry-standard authentication procedures to ensure
                    your protection while shopping with us online. This includes, but is not limited to, contacting
                    financial institutions or credit reporting agencies to ensure the authenticity of your credit card
                    and to validate your credit card billing information.</p>
            </div>
        )
    }
}

export default PolicyDialog