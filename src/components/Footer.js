import React from "react";
import image from '../github.svg';

export default function Footer() {
  return (
    <footer>
      <p>Created by Marios Mpofilakis</p>
      <a><img src={image} /></a>
    </footer>
  );
}
