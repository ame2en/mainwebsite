import React from 'react';
import Marquee from 'react-fast-marquee';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display : flex;
  align-items : center;
 // Adjust the height as needed
  overflow: hidden;
`;

const MarqueeWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
    display : flex;
  align-items : center;
`;

const Fade = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100px; // Adjust the width as needed
  z-index: 20;

  &.left {
    left: 0;
    background: linear-gradient(to right, rgba(12, 34, 61, 1), rgba(12, 34, 61, 0));
  }

  &.right {
    right: 0;
    background: linear-gradient(to left, rgba(12, 34, 61, 1), rgba(12, 34, 61, 0));
  }
`;

const MarqueeItem = styled.li`
  list-style: none;
  margin-right: 20px;
  white-space: nowrap;
  position: relative;
  padding-left: 20px; // Space for the disc

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 8px; // Adjust the size as needed
    height: 8px; // Adjust the size as needed
    background-color: white; // Adjust the color as needed
    border-radius: 50%;
  }
`;

const MarqueeLink = styled.a`
  text-decoration: none;
  color: inherit;
  display: flex;
  align-items: center;
  
  img {
    margin-left: 10px;
  }
`;

const MarqueeComponent = () => {
  const items = [
    {
      href: 'https://www.powergrid.in/sites/default/files/meetings-notices-file/NSEBSEReg30RKTyagidt06062024.pdf',
      date : "April 30th,2024 ",
      title: 'Extension of last date for submission of Tenders for courier service to Corporate Office,Vidyuth Bhavan,TGNPDCL',
    },
    {
      href: 'https://www.powergrid.in/sites/default/files/press_document/EngPressRelease.pdf',
      date : "March 18th, 2024 ",
      title: 'Paper clippings on orders of Additional Surcharge for H1 of FY 2024-25',
    },
    {
      href: 'https://www.powergrid.in/en/events/power-transmission-sector-partner-ceo-meet-2024',
      date : "March 18th, 2024 ",
      title: 'TGERC order on Continuation of Retail Supply Tariffs, Cross Subsidy surcharge of FY 2023-24 from 01.04.2024',
    },
    {
      href: 'https://www.powergrid.in/sites/default/files/press_document/ABMS_Press_Release.pdf',
      date : "March 18th, 2024 ",
      title: 'ANTI BRIBERY MANAGEMENT SYSTEM (ABMS) CERTIFICATION TO POWERGRID',
    },
    {
      href: 'https://www.powergrid.in/en/events/world-energy-congress-wec-2024',
      date : "March 18th, 2024 ",
      title: 'World Energy Congress (WEC) 2024',
    },
  ];

  return (
    <Container>
      <Fade className="left" />
      <MarqueeWrapper>
        <Marquee gradient={false} pauseOnHover direction="left" play={true} delay={3} speed={50}>
          {items.map((item, index) => (
            <MarqueeItem key={index}>
              <MarqueeLink href={item.href} target="_blank" title={item.title}>
                {item.date} - {item.title}
              </MarqueeLink>
            </MarqueeItem>
          ))}
        </Marquee>
      </MarqueeWrapper>
      <Fade className="right" />
    </Container>
  );
};

export default MarqueeComponent;
