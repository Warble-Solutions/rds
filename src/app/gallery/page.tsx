'use client';

import React, { useState, useCallback, useEffect } from 'react';
import Image from 'next/image';
import { PageHeader } from '@/components/PageHeader';
import { GALLERY_ALBUMS } from '@/data/content';
import type { GalleryImage } from '@/data/content';

/* ───── Lightbox Component ───── */
function Lightbox({
  images,
  index,
  onClose,
  onPrev,
  onNext,
}: {
  images: GalleryImage[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', handler);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handler);
      document.body.style.overflow = '';
    };
  }, [onClose, onPrev, onNext]);

  const img = images[index];

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        className="absolute top-5 right-5 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
        onClick={onClose}
        aria-label="Close lightbox"
      >
        <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Prev */}
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        aria-label="Previous image"
      >
        <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Next */}
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        aria-label="Next image"
      >
        <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Image */}
      <div
        className="relative max-h-[85vh] max-w-[90vw]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={img.src}
          alt={img.alt}
          className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg"
        />
      </div>

      {/* Counter */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white/70 text-sm font-medium">
        {index + 1} / {images.length}
      </div>
    </div>
  );
}

/* ───── Gallery Page ───── */
export default function GalleryPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState<GalleryImage[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = useCallback((images: GalleryImage[], idx: number) => {
    setLightboxImages(images);
    setLightboxIndex(idx);
    setLightboxOpen(true);
  }, []);

  const closeLightbox = useCallback(() => setLightboxOpen(false), []);

  const prevImage = useCallback(() => {
    setLightboxIndex((i) => (i === 0 ? lightboxImages.length - 1 : i - 1));
  }, [lightboxImages.length]);

  const nextImage = useCallback(() => {
    setLightboxIndex((i) => (i === lightboxImages.length - 1 ? 0 : i + 1));
  }, [lightboxImages.length]);

  return (
    <div>
      {/* Header */}
      <PageHeader
        eyebrow="Gallery"
        title="Together, we complete the picture"
        text="Photos from RDS events, task force meetings, community partnerships, and moments that capture the spirit of our mission."
        img="/gallery/RDSMeeting3.jpg"
      />

      {/* Albums */}
      {GALLERY_ALBUMS.map((album, albumIdx) => (
        <section key={albumIdx} className="mx-auto max-w-7xl px-5 sm:px-8 py-16">
          {/* Album Header */}
          <div className="mb-10" data-reveal="true">
            <p className="uppercase tracking-[0.2em] text-leaf-600 text-xs font-semibold mb-3">
              {album.date}
            </p>
            <h2 className="font-display text-3xl sm:text-4xl text-forest-950 mb-4">
              {album.title}
            </h2>
            <p className="text-forest-900/80 max-w-3xl leading-relaxed">
              {album.description}
            </p>
          </div>

          {/* Masonry Grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
            {album.images.map((img, imgIdx) => (
              <button
                key={imgIdx}
                className="group relative w-full break-inside-avoid overflow-hidden rounded-xl bg-forest-100 cursor-pointer border-0 p-0 block"
                onClick={() => openLightbox(album.images, imgIdx)}
                aria-label={`View ${img.alt}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white text-sm font-medium">{img.alt}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Photo count */}
          <div className="mt-8 text-center">
            <span className="inline-flex items-center gap-2 text-forest-900/60 text-sm">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0 0 22.5 18.75V5.25A2.25 2.25 0 0 0 20.25 3H3.75A2.25 2.25 0 0 0 1.5 5.25v13.5A2.25 2.25 0 0 0 3.75 21Z" />
              </svg>
              {album.images.length} photos
            </span>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="bg-forest-950 py-16">
        <div className="mx-auto max-w-3xl px-5 sm:px-8 text-center">
          <h2 className="font-display text-3xl text-sand-50 mb-4">
            Every piece matters
          </h2>
          <p className="text-sand-100/80 leading-relaxed mb-8">
            When we put all of our pieces together, the picture we are creating is beautiful: a survivor who is no longer simply surviving, but healing, restored, empowered, independent, and thriving.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/events"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-olive-500 px-7 py-3 text-sm font-semibold text-forest-950 hover:bg-olive-400 transition-colors"
            >
              Upcoming Events
            </a>
            <a
              href="/about"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-sand-100/30 px-7 py-3 text-sm font-semibold text-sand-100 hover:bg-sand-100/10 transition-colors"
            >
              Learn About RDS
            </a>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <Lightbox
          images={lightboxImages}
          index={lightboxIndex}
          onClose={closeLightbox}
          onPrev={prevImage}
          onNext={nextImage}
        />
      )}
    </div>
  );
}
