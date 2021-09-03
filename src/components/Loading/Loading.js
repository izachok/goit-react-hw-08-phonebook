import Loader from 'react-loader-spinner';
import React from 'react';
import s from './Loading.module.css';

export default function Loading() {
  return (
    <Loader
      className={s.item}
      type="Audio"
      color="#52ab98"
      height={50}
      width={50}
    />
  );
}
