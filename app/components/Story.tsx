'use client'; // This is now a client component because it uses state

import { useState } from 'react';
import Image from 'next/image';
import styles from './Story.module.css';

const Story = () => {
  const [videoPlayed, setVideoPlayed] = useState(false);
  const videoId = 'fGr39Hr3Gjk'; 

  const handlePlayClick = () => {
    setVideoPlayed(true);
  };

  return (
    <section className={styles.storySection}>
      <div className={styles.container}>
        {/* Left Column: Video Embed */}
        <div className={styles.videoContainer}>
          {!videoPlayed ? (
            <div className={styles.videoThumbnail} onClick={handlePlayClick}>
              <Image
                src="/story-thumbnail.jpg"
                alt="A scene from the Railton Foundation story video"
                layout="fill"
                objectFit="cover"
                priority
              />
              <button className={styles.playButton} aria-label="Play Video">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.647c1.295.748 1.295 2.538 0 3.286L7.279 20.99c-1.25.72-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          ) : (
            <iframe
              className={styles.videoIframe}
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
              title="The Story of Railton Foundation"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          )}
        </div>

        {/* Right Column: Text Content (remains the same) */}
        <div className={styles.textWrapper}>
          <h2 className={styles.title}>Our Story: A Promise to a Community</h2>
          <blockquote className={styles.pullQuote}>
            A bridge of support built on partnership and a deep belief in community-led solutions.
          </blockquote>
          <div className={styles.missionBlock}>
            <p>
              <strong>Our mission:</strong> to foster a thriving Railton by providing
              resources for education, youth development, and community welfare.
            </p>
          </div>
          <div className={styles.trustSignal}>
            <p>Registered Public Benefit Organisation (ANBI) in the Netherlands.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;