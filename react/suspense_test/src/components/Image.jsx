import React from 'react';
const Image = ({ resource }) => {
  const image = resource.images.read();
  return <img src={image} alt='고양이 사진' />;
};

export default Image;
