
import React from 'react';

const imageUrls = [
  "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?q=80&w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1431576901776-e539bd916ba2?q=80&w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?q=80&w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1466442929976-97f336a657be?q=80&w=400&h=300&fit=crop"
];

const shuffle = (array: string[]) => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

const shuffledImageUrls = shuffle(imageUrls);

const MarqueeRow = ({ images, reverse = false }: { images: string[], reverse?: boolean }) => {
    const animationClass = reverse ? 'animate-marquee-reverse' : 'animate-marquee';
    return (
        <div className="flex w-full overflow-hidden">
            <div className={`flex shrink-0 items-center ${animationClass}`}>
                {images.map((url, index) => (
                    <img key={`img-${index}`} src={url} alt={`Marquee image ${index + 1}`} className="object-cover w-64 h-48 mx-2 rounded-lg shadow-md shrink-0 transition-transform duration-300 hover:scale-105 hover:z-10" />
                ))}
            </div>
            <div className={`flex shrink-0 items-center ${animationClass}`} aria-hidden="true">
                 {images.map((url, index) => (
                    <img key={`img-dup-${index}`} src={url} alt="" className="object-cover w-64 h-48 mx-2 rounded-lg shadow-md shrink-0 transition-transform duration-300 hover:scale-105 hover:z-10" />
                ))}
            </div>
        </div>
    );
};

const ImageMarquee = () => {
  return (
    <div className="relative w-full overflow-hidden group py-8 space-y-4 -skew-y-2">
      <MarqueeRow images={imageUrls} />
      <MarqueeRow images={shuffledImageUrls} reverse />
    </div>
  );
};

export default ImageMarquee;
