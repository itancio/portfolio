import { classes } from 'utils/style';
import styles from './Inline.module.css';

export const Inline = ({ ordered, children, className, ...rest }) => {
  const Element = ordered ? 'ol' : 'ul';

  return (
    <Element className={classes(styles.list, className)} {...rest}>
      {children}
    </Element>
  );
};

export const InlineItem = ({ children, ...rest }) => {
  return (
    <li className={styles.item} {...rest}>
      {children}
    </li>
  );
};

export const KeywordList = ({ keywords }) => {
  return (
      <Inline>
      {keywords.map((keyword, index) => (
        <InlineItem key={index}>
          {keyword}
        </InlineItem>
      ))}
      </Inline>
  );
};
