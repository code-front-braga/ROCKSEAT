import { ImgHTMLAttributes } from 'react';

import styles from './Avatar.module.css';

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  hasBorder?: boolean; //Quando for opcional usa a ?
}

export function Avatar({ hasBorder = true, ...props }: AvatarProps) {
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      {...props}
    />
  );
}
