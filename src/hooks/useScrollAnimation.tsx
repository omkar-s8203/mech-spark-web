import { useEffect, useState } from 'react';

export const useScrollAnimation = (threshold: number = 0.1) => {
  const [isVisible, setIsVisible] = useState(false);
  const [elementRef, setElementRef] = useState<HTMLElement | null>(null);

  useEffect(() => {
    if (!elementRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(elementRef);
        }
      },
      { threshold }
    );

    observer.observe(elementRef);

    return () => {
      if (elementRef) {
        observer.unobserve(elementRef);
      }
    };
  }, [elementRef, threshold]);

  return { isVisible, elementRef: setElementRef };
};

export const useStaggeredAnimation = (items: any[], delay: number = 0.1) => {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const [elementRef, setElementRef] = useState<HTMLElement | null>(null);

  useEffect(() => {
    if (!elementRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          items.forEach((_, index) => {
            setTimeout(() => {
              setVisibleItems(prev => new Set([...prev, index]));
            }, index * delay * 1000);
          });
          observer.unobserve(elementRef);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(elementRef);

    return () => {
      if (elementRef) {
        observer.unobserve(elementRef);
      }
    };
  }, [elementRef, items, delay]);

  return { visibleItems, elementRef: setElementRef };
};