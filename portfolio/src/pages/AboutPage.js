import React from "react";
import Portfolio from "../components/Portfolio";
import Content from "../components/Content";



function AboutPage(props) {
return(
 <div>

 <Portfolio title={props.title} />
 <Content> Hello!! my name is Elisha Badio and I’m very excited for the opportunity to share my experience, education background and my career aspiration. I have been a Financial Analyst the las t six to seven years. As far I can remember, I started investing in my education and leadership skills during my undergrade at Quinnipiac University. During that time, I had the opportunity to take few investments, accounting classes and joined the investment club that gave me the skill sets to successfully manage my first financial portfolio of ETF’s, Mutual funds, stocks and other financial instruments. In fact, I’m currently managing my family members saving and investment at no cost.   During my senior year at Quinnipiac University, I accepted a Coop  for a Financial Analyst Position at United Technologies Corporation (UTC), currently known as Raytheon Technologies. One of the key roles was to create financial reports that are tailored to UTC’s partners based on their investments level in our major Commercial Engine products or platforms. Also, I successfully collaborated in various projects with our partners and led some of these projects as well. After 9 months or so, I accepted a full time offer at UTC as a Senior Associate Financial Analyst for the Military Development Programs. I was fortunate to manage a $12M dollar portfolio that grew up to become a $40M after 3 years, we had successfully negotiated and received some major Government awards.</Content>
 </div>  
);

}


export default AboutPage;