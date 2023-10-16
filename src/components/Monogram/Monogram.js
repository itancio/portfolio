import { forwardRef, useId } from 'react';
import { classes } from 'utils/style';
import styles from './Monogram.module.css';

export const Monogram = forwardRef(({ highlight, className, ...props }, ref) => {
  const id = useId();
  const clipId = `${id}monogram-clip`;

  return (
    <svg
      aria-hidden
      className={classes(styles.monogram, className)}
      width="46"
      height="29"
      viewBox="0 0 46 29"
      ref={ref}
      {...props}
    >
      <defs>
        <clipPath id={clipId}>
          <path d=
          "M6.5,0.3C5.7,0.5,5.5,0.5,4.9,0.8c-1.9,0.8-3.4,2.4-4,4.3C0.8,5.6,0.6,6.5,0.6,6.9c0,0.4,0.1,1.3,0.3,1.7
          c0.5,1.9,2,3.6,3.9,4.3l0.5,0.2l0,5.3c0,5.9,0,5.4,0.4,5.9c0.4,0.5,0.9,0.7,1.9,0.7c0.9,0,1.3-0.1,1.8-0.6c0.3-0.3,0.4-0.5,0.5-0.9
          c0-0.2,0.1-1.8,0.1-5.3v-5l0.3-0.1c1.2-0.5,2.2-1.3,3-2.3c0.1-0.2,0.3-0.5,0.5-0.8l0.3-0.5h2.6h2.7l0.1,9l0,9l0.1,0.3
          c0.4,0.8,1.1,1.2,2.2,1.2c1.1,0,1.8-0.3,2.2-1.1l0.1-0.3l0.1-9v-9l1.8,0c1.2,0,1.9-0.1,2-0.1c0.3-0.1,0.7-0.4,0.9-0.7
          c0.3-0.4,0.4-0.8,0.4-1.6c0-0.8-0.1-1.2-0.3-1.6c-0.2-0.3-0.6-0.6-0.9-0.8l-0.3-0.2l-6.8,0.1h-6.8L13.8,4c-1-2-2.8-3.2-5.2-3.6
          C7.8,0.2,7.3,0.2,6.5,0.3z M8.4,4c0.8,0.2,1.6,0.8,2,1.6l0.2,0.5v0.8v0.8l-0.2,0.5c-0.4,0.8-1.1,1.4-2,1.6C7.7,9.9,6.8,9.8,6.2,9.5
          C4.5,8.6,4,6.6,5.1,5.1c0.2-0.3,0.8-0.7,1.1-0.9C6.9,3.9,7.7,3.8,8.4,4z"
          />
        </clipPath>
      </defs>
      <rect clipPath={`url(#${clipId})`} width="100%" height="100%" />
      {highlight && (
        <g clipPath={`url(#${clipId})`}>
          <rect className={styles.highlight} width="100%" height="100%" />
        </g>
      )}
    </svg>
  );
});
