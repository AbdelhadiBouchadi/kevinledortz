'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Parallax } from './Parallax';
import { fadeIn } from '../variants';
import { motion } from 'framer-motion';
import Modal from './Modal';

interface ImageData {
  source: string;
  alt: string;
  width: number;
  height: number;
  priority: boolean;
  sizes: string;
  class: string;
  speed: number;
  vidSource: string;
  text: string;
}

const images: ImageData[] = [
  {
    source: `https://picsum.photos/700/400?random=1`,
    alt: 'Image',
    width: 700,
    height: 400,
    priority: true,
    sizes: '50vw',
    class: 'self-start cursor-pointer',
    speed: 1,
    vidSource: 'https://player.vimeo.com/video/610505833?h=63772064cf',
    text: 'Dior',
  },
  {
    source: `https://picsum.photos/400/700?random=2`,
    alt: 'Image',
    width: 400,
    height: 700,
    priority: true,
    sizes: '50vw',
    class: 'self-end cursor-pointer',
    speed: -2,
    vidSource: 'https://player.vimeo.com/video/610505833?h=63772064cf',
    text: 'Dior',
  },
  {
    source: `https://picsum.photos/700/400?random=3`,
    alt: 'Image',
    width: 700,
    height: 400,
    priority: false,
    sizes: '50vw',
    class: 'self-start cursor-pointer',
    speed: -4,
    vidSource: 'https://player.vimeo.com/video/610505833?h=63772064cf',
    text: 'Dior',
  },
  {
    source: `https://picsum.photos/400/700?random=4`,
    alt: 'Image',
    width: 400,
    height: 700,
    priority: false,
    sizes: '50vw',
    class: 'self-start cursor-pointer',
    speed: -2,
    vidSource: 'https://player.vimeo.com/video/610505833?h=63772064cf',
    text: 'Dior',
  },
  {
    source: `https://picsum.photos/700/400?random=5`,
    alt: 'Image',
    width: 700,
    height: 400,
    priority: false,
    sizes: '50vw',
    class: 'self-center cursor-pointer',
    speed: -3,
    vidSource: 'https://player.vimeo.com/video/610505833?h=63772064cf',
    text: 'Dior',
  },
  {
    source: `https://picsum.photos/700/400?random=6`,
    alt: 'Image',
    width: 700,
    height: 400,
    priority: false,
    sizes: '50vw',
    class: 'self-end cursor-pointer',
    speed: -1,
    vidSource: 'https://player.vimeo.com/video/610505833?h=63772064cf',
    text: 'Dior',
  },
  {
    source: `https://picsum.photos/400/700?random=7`,
    alt: 'Image',
    width: 400,
    height: 700,
    priority: false,
    sizes: '50vw',
    class: 'self-end cursor-pointer',
    speed: 2,
    vidSource: 'https://player.vimeo.com/video/610505833?h=63772064cf',
    text: 'Dior',
  },
  {
    source: `https://picsum.photos/700/400?random=8`,
    alt: 'Image',
    width: 700,
    height: 400,
    priority: false,
    sizes: '50vw',
    class: 'self-start cursor-pointer',
    speed: -4,
    vidSource: 'https://player.vimeo.com/video/610505833?h=63772064cf',
    text: 'Dior',
  },
  {
    source: `https://picsum.photos/400/700?random=9`,
    alt: 'Image',
    width: 400,
    height: 700,
    priority: true,
    sizes: '50vw',
    class: 'self-center cursor-pointer',
    speed: -2,
    vidSource: 'https://player.vimeo.com/video/610505833?h=63772064cf',
    text: 'Dior',
  },
];

const ImageList = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<ImageData | null>(null);

  function openModal(image: ImageData) {
    setSelectedImage(image);
    setIsOpen(true);
  }

  function closeModal() {
    setSelectedImage(null);
    setIsOpen(false);
  }

  return (
    <>
      {images.map((img, index) => (
        <Parallax
          speed={img.speed}
          key={index}
          className={`${img.class} scale-75 2xl:scale-100 z-[60]`}
        >
          <motion.div
            variants={fadeIn(`${index % 2 === 0 ? 'right' : 'left'}`, 0.4)}
            initial="hidden"
            whileInView="show"
            exit="hidden"
            className="relative h-full w-full group"
            onClick={() => openModal(img)}
          >
            <Image
              src={img.source}
              alt={img.alt}
              width={img.width}
              height={img.height}
              priority={img.priority}
              sizes={img.sizes}
            />
            <div className="absolute top-0 left-0 w-full h-full hidden group-hover:flex group-hover:justify-center group-hover:items-center bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300 ease-in-out" />
            <div className="absolute top-0 left-0 w-full h-full justify-center items-center flex text-white text-4xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out ">
              {img.text}
            </div>
          </motion.div>
        </Parallax>
      ))}
      {selectedImage && (
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <div className="h-0 w-full pb-[100%] sm:pb-[80%] md:pb-[60%] ">
            <div className="absolute top-0 left-0 w-full h-full flex flex-col">
              <div className="w-full h-full bg-black relative">
                <iframe
                  src={selectedImage.vidSource}
                  width="1920"
                  height="1080"
                  allowFullScreen
                  className="w-full h-full object-cover"
                ></iframe>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default ImageList;
