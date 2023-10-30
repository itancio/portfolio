import Barcode from 'assets/barcode.svg';
import { Button } from 'components/Button';
import { DecoderText } from 'components/DecoderText';
import { Divider } from 'components/Divider';
import { Footer } from 'components/Footer';
import { Heading } from 'components/Heading';
import { Image } from 'components/Image';
import { KeywordList } from 'components/Inline';
import { Meta } from 'components/Meta';
import { Section } from 'components/Section';
import { SegmentedControl, SegmentedControlOption } from'components/SegmentedControl';
import { Text } from 'components/Text';
import { useReducedMotion } from 'framer-motion';
import { useWindowSize } from 'hooks';
import RouterLink from 'next/link';
import { useState, useEffect } from 'react';
import { formatDate } from 'utils/date';
import { classes, cssProps } from 'utils/style';
import styles from './Projects.module.css';



const ProjectsPost = ({
  slug,
  title,
  abstract,
  keywords,
  date,
  featured,
  banner,
  timecode,
  index,
}) => {
  const [hovered, setHovered] = useState(false);
  const [dateTime, setDateTime] = useState(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    setDateTime(formatDate(date));
  }, [date, dateTime]);
  
  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <article
      className={styles.post}
      data-featured={!!featured}
      style={index !== undefined ? cssProps({ delay: index * 100 + 200 }) : undefined}
    >
      {featured && (
        <Text className={styles.postLabel} size="s">
          Featured
        </Text>
      )}
      {featured && !!banner && (
        <div className={styles.postImage}>
          <Image
            noPauseButton
            play={!reduceMotion ? hovered : undefined}
            src={{ src: banner }}
            placeholder={{ src: `${banner.split('.')[0]}-placeholder.jpg` }}
            alt=""
            role="presentation"
          />
        </div>
      )}
      <RouterLink
        href={`/projects/${slug}`}
        scroll={false}
        className={styles.postLink}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>

        <div className={styles.postDetails}>
          <div aria-hidden className={styles.postDate}>
            <Divider notchWidth="64px" notchHeight="8px" />
            {dateTime}
          </div>
          <Heading as="h2" level={featured ? 2 : 4}>
            {title}
          </Heading>
          <KeywordList keywords={keywords} />
          <Text size={featured ? 'l' : 's'} as="p">
            {abstract}
          </Text>
          <div className={styles.postFooter}>
            <Button secondary iconHoverShift icon="arrowRight" as="div">
              View project
            </Button>
            <Text className={styles.timecode} size="s">
              {timecode}
            </Text>
          </div>
        </div>

      </RouterLink>
      {featured && (
        <Text aria-hidden className={styles.postTag} size="s">
          477
        </Text>
      )}
    </article>
  );
};

const SkeletonPost = ({ index }) => {
  return (
    <article
      aria-hidden="true"
      className={classes(styles.post, styles.skeleton)}
      style={index !== undefined ? cssProps({ delay: index * 100 + 200 }) : undefined}
    >
      <div className={styles.postLink}>
        <div className={styles.postDetails}>
          <div aria-hidden className={styles.postDate}>
            <Divider notchWidth="64px" notchHeight="8px" />
            Coming soon...
          </div>
          <Heading
            className={styles.skeletonBone}
            as="h2"
            level={4}
            style={{ height: 24, width: '70%' }}
          />
          <Text
            className={styles.skeletonBone}
            size="s"
            as="p"
            style={{ height: 90, width: '100%' }}
          />
          <div className={styles.postFooter}>
            <Button secondary iconHoverShift icon="chevronRight" as="div">
              Read more
            </Button>
            <Text className={styles.timecode} size="s">
              00:00:00:00
            </Text>
          </div>
        </div>
      </div>
    </article>
  );
};

export const Projects = ({ posts, featured }) => {
  const [currentSegment, setCurrentSegment] = useState(0);

  const { width } = useWindowSize();
  const singleColumnWidth = 1190;
  const isSingleColumn = width <= singleColumnWidth;

  const postsHeader = (
    <header className={styles.header}>
      <Heading className={styles.heading} level={5} as="h1">
        <DecoderText text="Latest projects" />
      </Heading>
      <Barcode />
    </header>
  );

  const categories = ['All', 'Code', 'Design', 'Make'];
  const selectedCategory = categories[currentSegment];
  const filteredPosts = posts.filter(post => 
    post.categories && Array.isArray(post.categories) && post.categories.includes(selectedCategory)
  );

  const postList = (
    <div className={styles.list}>
      {!isSingleColumn && postsHeader}
      {filteredPosts.map(({ slug, ...post }, index) => (
        <ProjectsPost key={slug} slug={slug} index={index} {...post} />
      ))}
      {posts.map(({ slug, ...post }, index) => (
        <ProjectsPost key={slug} slug={slug} index={index} {...post} />
      ))}
      {/* Add this section if post is empty */}
      {/* {Array(0)
        .fill()
        .map((skeleton, index) => (
          <SkeletonPost key={index} />
        ))} */}
    </div>
  );

  const featuredPost = <ProjectsPost {...featured} />;

  return (
    <article className={styles.projects}>
      <Meta
        title="Project"
        description="A collection of technical design and software development projects."
      />
            
      <Section className={styles.content}>
        <SegmentedControl 
            currentIndex={currentSegment} 
            onChange={setCurrentSegment}
            label="Project Categories">
            <SegmentedControlOption>All</SegmentedControlOption>
            <SegmentedControlOption>Code</SegmentedControlOption>
            <SegmentedControlOption>Design</SegmentedControlOption>
            <SegmentedControlOption>Make</SegmentedControlOption>
        </SegmentedControl>
      </Section>

      <Section className={styles.content}>
        {!isSingleColumn && (
          <div className={styles.grid}>
            {postList}
            {featuredPost}
          </div>
        )}
        {isSingleColumn && (
          <div className={styles.grid}>
            {postsHeader}
            {featuredPost}
            {postList}
            
          </div>
        )}
      </Section>

      <Footer />
    </article>
  );
};
