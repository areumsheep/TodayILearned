import React, { Suspense } from 'react';
import Skeleton from './Skeleton';
import fetchData from '../utils/fetchData';

const resource = fetchData();

const Image = () => {
  return (
    <Suspense fallback={<Skeleton />}>
      <ImageComponent />
    </Suspense>
  );
};

const ImageComponent = () => {
  const image = resource.images.read();
  return <img src={image} alt='고양이 사진' />;
};

export default Image;
