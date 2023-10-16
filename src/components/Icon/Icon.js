import { classes } from 'utils/style';
import styles from './Icon.module.css';
import Arduino from './svg/arduino.svg';
import ArrowLeft from './svg/arrow-left.svg';
import ArrowRight from './svg/arrow-right.svg';
import Aws from './svg/aws.svg';
import Bootstrap from './svg/Bootstrap.svg';
import Check from './svg/check.svg';
import ChevronRight from './svg/chevron-right.svg';
import Close from './svg/close.svg';
import Copy from './svg/copy.svg';
import Cplusplus from './svg/cplusplus.svg';
import Css from './svg/css.svg';
import Error from './svg/error.svg';
import Figma from './svg/figma.svg';
import Github from './svg/github.svg';
import Html from './svg/html.svg';
import Illustrator from './svg/illustrator.svg';
import Java from './svg/java.svg';
import Link from './svg/link.svg';
import Linkedin from './svg/linkedin.svg';
import Menu from './svg/menu.svg';
import Pause from './svg/pause.svg';
import Play from './svg/play.svg';
import Python from './svg/python.svg';
import React from './svg/react.svg';
import Send from './svg/send.svg';
import Twitter from './svg/twitter.svg';
import Youtube from './svg/play.svg';

export const icons = {
  arduino: Arduino,
  arrowLeft: ArrowLeft,
  arrowRight: ArrowRight,
  aws: Aws,
  bootstrap: Bootstrap,
  check: Check,
  chevronRight: ChevronRight,
  close: Close,
  copy: Copy,
  cplusplus: Cplusplus,
  css: Css,
  error: Error,
  figma: Figma,
  github: Github,
  html: Html,
  illustrator: Illustrator,
  java: Java,
  link: Link,
  linkedin: Linkedin,
  menu: Menu,
  pause: Pause,
  play: Play,
  python: Python,
  react: React,
  send: Send,
  twitter: Twitter,
  youtube: Youtube,
};

export const Icon = ({ icon, className, ...rest }) => {
  const IconComponent = icons[icon];

  return (
    <IconComponent aria-hidden className={classes(styles.icon, className)} {...rest} />
  );
};
