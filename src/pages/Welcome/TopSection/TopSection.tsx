import { ButtonsWrapper } from './ButtonsWrapper';
import { HEADINGS_TEXT } from './TopSectionConstants';
import styles from './TopSection.module.scss';
import { Typography, Flex, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useTranslate } from '@/context/TranslateContext';

export function TopSection() {
  const { Title, Text } = Typography;
  const navigate = useNavigate();
  const { t } = useTranslate();

  return (
    <section className={styles.topWrapper}>
      <Flex className={styles.topWrapperFlex} justify="space-between" gap="1.2rem">
        <div className={styles.titleWrapper}>
          <Title className={styles.welcomeHeading + ' ' + styles.mainHeading}>
            {t('Welcome.Top.Heading1', 'Welcome to Setun-70')}
          </Title>

          <Title
            className={styles.welcomeHeading + ' ' + styles.secondMainHeading}
            style={{ marginTop: '0' }}
            level={2}
          >
            {t('Welcome.Top.Heading2', 'GraphiQL Playround!')}
          </Title>
        </div>
        <ButtonsWrapper />
      </Flex>

      <div className={styles.subHeadingWrapper}>
        <Text className={styles.welcomeHeading + ' ' + styles.subHeading}>
          {t('Welcome.Top.Subheading1', HEADINGS_TEXT.first)}
          <br />
          {t('Welcome.Top.Subheading2', HEADINGS_TEXT.second)}
        </Text>
      </div>
      <Flex justify="center" id={styles.linkBtnWrapper}>
        <Button
          onClick={() => {
            navigate('main');
          }}
          id={styles.linkBtn}
          type="link"
        >
          {t('Welcome.Top.Link', 'Explore GraphiQL Playground')}
        </Button>
      </Flex>
    </section>
  );
}
