import React from "react";
import image from '../github.svg';

export default function Footer() {
  return (
    <footer>
      <p>Created by Marios Mpofilakis</p>
      <a href='https://github.com/bofmar' target='_blank'><img src={image} /></a>
    </footer>
  );
}
