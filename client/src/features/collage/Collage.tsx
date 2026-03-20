import Image from 'next/image'

const PHOTOS = [
  { src: '/2026-images/image3.png', alt: 'Team Vibes',   rotate: -3,  top: '2%',  left: '13%',   tape: 'left',   fit: 'contain' },
  { src: '/2026-images/image4.png', alt: 'Team Vibes',   rotate:  4,  top: '3%',  left: '59%',  tape: 'center', w: 520, h: 390 },
  { src: '/2026-images/image5.png', alt: 'Team Vibes',   rotate: -4,  top: '41%', left: '7%',   tape: 'center' },
  { src: '/2026-images/image6.png', alt: 'Hacking Away', rotate:  3,  top: '48%', left: '45%',  tape: 'left'   },
  { src: '/2026-images/image7.png', alt: 'Winners',      rotate: -2,  top: '47%', left: '89%',  tape: 'center' },
  { src: '/2026-images/image8.png', alt: 'Winners',      rotate:  2,  top: '53%', left: '-29%',   tape: 'right'  },
  { src: '/2026-images/image9.png', alt: 'Winners',      rotate: -3,  top: '10%', left: '-30%',  tape: 'center' },
]

const TAPE_OFFSET: Record<string, string> = {
  left:   '20%',
  center: '50%',
  right:  '75%',
}

export default function Collage() {
  return (
    <section className="relative w-full overflow-hidden py-10 px-6"
      style={{ background: 'linear-gradient(to bottom, #251884 0%, #4C27A0 100%)' }}>

      {/* Fade the top edge so the collage blends into the previous section instead of feeling like a hard cut. */}
      <div aria-hidden style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 80,
        background: 'linear-gradient(to bottom, #251884 0%, transparent 100%)',
        pointerEvents: 'none', zIndex: 5,
      }} />

      {/* A light grain pass keeps the scrapbook area from looking too digitally flat. */}
      <div aria-hidden style={{
        position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.08'/%3E%3C/svg%3E")`,
        backgroundRepeat: 'repeat', backgroundSize: '200px 200px', opacity: 0.35,
      }} />

      {/* Corner clouds */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/Purple Cloud Cluster 1.webp" alt="" aria-hidden
        className="pn-corner-cloud" style={{ position: 'absolute', left: -60, top: '10%', width: 320, opacity: 0.85, pointerEvents: 'none', zIndex: 0 }} />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/Violet Cloud Cluster 1.webp" alt="" aria-hidden
        className="pn-corner-cloud" style={{ position: 'absolute', left: -40, bottom: '5%', width: 280, opacity: 0.75, pointerEvents: 'none', zIndex: 0 }} />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/Purple Cloud Cluster 2.webp" alt="" aria-hidden
        className="pn-corner-cloud" style={{ position: 'absolute', right: -60, top: '8%', width: 320, opacity: 0.85, pointerEvents: 'none', zIndex: 0, transform: 'scaleX(-1)' }} />
      {/* Top cloud */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/Pink Cloud Cluster 1.webp" alt="" aria-hidden style={{
          position: 'absolute', bottom: 670, left: '60%',
          transform: 'translateX(-50%)',
          width: '110%', maxWidth: 1100,
          opacity: 0.5, pointerEvents: 'none', zIndex: 0,
        }} />

      {/* Polaroid grid */}
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
      <div className="polaroid-grid" style={{ position: 'relative', width: '100%', minHeight: 1150 }}>

        {/* This lower cloud fills the open base of the collage and softens the handoff into the sections below. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/Pink Cloud Cluster 1.webp" alt="" aria-hidden style={{
          position: 'absolute', bottom: -60, left: '50%',
          transform: 'translateX(-50%)',
          width: '110%', maxWidth: 1300,
          opacity: 0.6, pointerEvents: 'none', zIndex: 0,
        }} />
        {PHOTOS.map((photo, i) => (
          <div
            key={i}
            className="polaroid"
            style={{
              position: 'absolute',
              top: photo.top,
              left: photo.left,
              transform: `rotate(${photo.rotate}deg)`,
              zIndex: i % 3 + 1,
              width: photo.w ?? undefined,
            }}
          >
            {/* Tape strip */}
            <div className="tape" style={{ left: TAPE_OFFSET[photo.tape] }} />

            {/* Photo */}
            <div className="photo-area" style={photo.w ? { width: photo.w - 24, height: photo.h } : {}}>
              <Image
                src={photo.src}
                alt={photo.alt}
                width={photo.w ?? 380}
                height={photo.h ?? 270}
                style={{ objectFit: (photo.fit as 'cover' | 'contain') ?? 'cover', display: 'block', width: '100%', height: '100%' }}
              />
            </div>

            {/* Caption area */}
            <div className="caption">{photo.alt}</div>
          </div>
        ))}
      </div>
      </div>

      <style>{`
        .polaroid {
          background: #d4caf0;
          padding: 12px 12px 0 12px;
          width: 380px;
          box-shadow:
            2px 4px 8px rgba(0,0,0,0.4),
            6px 10px 28px rgba(0,0,0,0.35);
          transition: transform 0.3s cubic-bezier(.34,1.56,.64,1), box-shadow 0.3s ease;
          cursor: pointer;
        }
        .polaroid:hover {
          transform: rotate(0deg) scale(1.05) !important;
          box-shadow:
            4px 8px 16px rgba(0,0,0,0.5),
            10px 18px 40px rgba(0,0,0,0.4);
          z-index: 20 !important;
        }

        .tape {
          position: absolute;
          top: -12px;
          transform: translateX(-50%);
          width: 64px;
          height: 26px;
          background: rgba(30, 20, 60, 0.72);
          border-radius: 2px;
          z-index: 2;
        }

        .photo-area {
          width: 356px;
          height: 270px;
          overflow: hidden;
          background: #d4caf0;
          filter: saturate(0.8) contrast(1.05);
        }

        .caption {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 58px;
          font-size: 1.25rem;
          font-style: italic;
          color: #3b2580;
          letter-spacing: 0.3px;
          font-family: Georgia, serif;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        @media (max-width: 768px) {
          .pn-corner-cloud { display: none !important; }

          /* On mobile the absolute scrapbook layout turns into a wrapped stack so each photo stays readable and tappable. */
          .polaroid-grid {
            position: relative !important;
            display: flex !important;
            flex-wrap: wrap !important;
            justify-content: center !important;
            gap: 28px !important;
            min-height: auto !important;
            padding: 20px 0 60px !important;
          }

          .polaroid {
            position: relative !important;
            left: auto !important;
            top: auto !important;
            width: calc(50% - 14px) !important;
            max-width: 300px !important;
            transform: rotate(var(--mob-rotate, 0deg)) !important;
          }
          .polaroid:nth-child(odd)  { --mob-rotate: -2deg; }
          .polaroid:nth-child(even) { --mob-rotate:  2deg; }

          .photo-area {
            width: 100% !important;
            height: 180px !important;
          }

          .caption { font-size: 1rem !important; height: 48px !important; }
          .tape    { width: 48px !important; height: 20px !important; }
        }

        @media (max-width: 480px) {
          .polaroid {
            width: 80% !important;
            max-width: 320px !important;
          }
          .photo-area { height: 200px !important; }
        }
      `}</style>
    </section>
  )
}
