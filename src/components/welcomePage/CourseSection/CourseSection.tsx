import { Typography, Flex } from 'antd';
import { Link } from 'react-router-dom';
import RssLogo from '@/assets/svg/rss.svg?react';
import ReactLogo from '@/assets/svg/react-svgrepo-com.svg?react';
import styles from './CourseSection.module.scss';
import { COURSE_HEADINGS_TEXT } from './CourseSectionConstants';

function CourseSection() {
  const { Title } = Typography;
  return (
    <section className={styles.course__wrapper}>
      <Title className={styles.course__heading + ' ' + styles.main__heading} level={2}>
        {COURSE_HEADINGS_TEXT.heading}
      </Title>
      <Title level={4} className={styles.course__heading + ' ' + styles.sub__heading}>
        {COURSE_HEADINGS_TEXT.subheading}
      </Title>
      <Flex justify={'space-evenly'}>
        <Link to="https://rs.school/js/">
          <RssLogo style={{ width: '200px', height: '130px' }} />
        </Link>
        <Link className={styles.link} to="https://rs.school/react/">
          <ReactLogo style={{ width: '200px', height: '130px' }} />
        </Link>
      </Flex>
    </section>
  );
}

export default CourseSection;
