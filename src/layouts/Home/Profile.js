import profileKatakana from 'assets/katakana-profile.svg?url';
import profileImgLarge from 'assets/profile-large.jpg';
import profileImgPlaceholder from 'assets/profile-placeholder.jpg';
import profileImg from 'assets/profile.jpg';
// import { Button } from 'components/Button';
import { DecoderText } from 'components/DecoderText';
import { Divider } from 'components/Divider';
import { Heading } from 'components/Heading';
// import { Icon } from 'components/Icon';
import { Image } from 'components/Image';
// import { Link } from 'components/Link';
import { Section } from 'components/Section';
import { Table, TableBody, TableCell, TableHeadCell, TableRow } from 'components/Table';
import { Text } from 'components/Text';
import { Transition } from 'components/Transition';
import { Fragment, useState } from 'react';
import { media } from 'utils/style';
import styles from './Profile.module.css';

const ProfileText = ({ visible, titleId }) => (
  <Fragment>
    <Heading className={styles.title} data-visible={visible} level={3} id={titleId}>
      <DecoderText text="Hello World!" start={visible} delay={250} />
    </Heading>
    <Text className={styles.description} data-visible={visible} size="l" as="p" delay={500}>
      I recently graduated this summer of 2023 at the University of California Berkeley with a degree
      in Electrical Engineering and Computer Science. I am transitioning into software engineering
      with a strong focus on merging human-centric design with software.I am enthusiastic
      about harnessing Machine Learning and Artificial Intelligence to drive
      responsible and ethically grounded technological innovations.
     </Text>
    <br /><br /><br /><br />
    <Heading className={styles.title} data-visible={visible} level={3}>
      <DecoderText text="Skills" start={visible} delay={750} />
    </Heading>
    
    <Table delay={1000}>
      <TableBody>
        <TableRow>
          <TableHeadCell>Technical</TableHeadCell>
          <TableCell>
          <Text className={styles.description} data-visible={visible} size="8px" as="p">
              UX Design, Software Engineering, Agile Software Development, Algorithms,
              Optimization, SaaS, Data Structure, Artificial Intelligence, Cybersecurity,
              Signals and Systems
              
            </Text>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableHeadCell>Languages</TableHeadCell>
          <TableCell>
            <Text className={styles.description} data-visible={visible} size="8px" as="p">
              Python, Java, C++, C, Golang, HTML, CSS, Ruby, Javascript
            </Text>   
          </TableCell>
        </TableRow>
        <TableRow>
          <TableHeadCell>Framework/ Tools</TableHeadCell>
          <TableCell>
            <Text className={styles.description} data-visible={visible} size="8px" as="p">
              Adobe Suite, Figma, Git(Hub), React, Rails,
              Bootstrap, Numpy, Kubernetes, AWS, Cucumber
            </Text>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>

  </Fragment>
);

const ProfileHistory = ({ visible, titleId }) => (
  <Fragment>
    <Heading className={styles.title} data-visible={visible} level={3}>
      <DecoderText text="My Humble beginnings" start={visible} delay={750} />
    </Heading>
    <Text className={styles.historyText} data-visible={visible} size="l" as="p" delay={500}>
      Navigating life as a Filipino immigrant was a challenging odyssey. Hindered by numerous immigration obstacles, 
      my aspirations for higher education were postponed for years, pushing me into survival mode. Lacking documentation,
      I took on roles such as house cleaning and various odd jobs, which, though demanding and humble, I embraced with appreciation and resilience. 
      This period, however, also ignited my curiosity in technology. Driven by a desire to innovate in online selling and website creation, 
      I embarked on a self-taught tech journey.
    </Text>

    <Text className={styles.historyText} data-visible={visible} size="l" as="p" delay={500}>
      A particular incident that fueled my curiosity was an encounter with a technical book filled with complex symbols and equations during a cleaning job. 
      It intrigued me and sparked a newfound passion for mathematics. Becoming a citizen marked a significant turn in my life, enabling me 
      to chase my deferred educational dreams.
    </Text>

    <Text className={styles.historyText} data-visible={visible} size="l" as="p" delay={500}>
      I dived into rigorous foundational courses in math and science at a city college, eventually finding myself passionately 
      pursuing a bachelor’s degree in EECS. Returning to college was a test of perseverance against a backdrop of 
      limited foundational knowledge and a generational learning gap. However, fueled by determination, curiosity, and a vision to 
      explore beyond the ordinary, I embraced the journey. Now, with a fortified spirit, I stand on the brink of new possibilities, 
      ready to expand, innovate, and make a meaningful impact in the world.
    </Text>
  </Fragment>
);

export const Profile = ({ id, visible, sectionRef }) => {
  const [focused, setFocused] = useState(false);
  const titleId = `${id}-title`;

  return (
    <Section
      className={styles.profile}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      as="section"
      id={id}
      ref={sectionRef}
      aria-labelledby={titleId}
      tabIndex={-1}
    >
      <Transition in={visible || focused} timeout={0}>
        {visible => (
        <div>
          <div className={styles.content}>
            <div className={styles.column}>
              <ProfileText visible={visible} titleId={titleId} />
              {/* <Button
                secondary
                className={styles.button}
                data-visible={visible}
                href="/contact"
                icon="send"
              >
                Send me a message
              </Button> */}
            </div>
            <div className={styles.column}>
              <div className={styles.tag} aria-hidden>
                <Divider
                  notchWidth="64px"
                  notchHeight="8px"
                  collapsed={!visible}
                  collapseDelay={1000}
                />
                <div className={styles.tagText} data-visible={visible}>
                This is me - Irvin.
                </div>
              </div>
              <div className={styles.image}>
                <Image
                  reveal
                  delay={100}
                  placeholder={profileImgPlaceholder}
                  srcSet={[profileImg, profileImgLarge]}
                  sizes={`(max-width: ${media.mobile}px) 100vw, 480px`}
                  alt="Image taken from Bellagio Hotel at Las Vegas"
                />
                <svg
                  aria-hidden="true"
                  width="135"
                  height="765"
                  viewBox="0 0 135 765"
                  className={styles.svg}
                  data-visible={false}
                >
                  <use href={`${profileKatakana}#katakana-profile`} />
                </svg>
              </div>
            </div>
          </div>
          <Text>
            <ProfileHistory visible={visible} titleId={titleId} />
          </Text>
        </div>
        )}
      </Transition>
    </Section>
  );
};
