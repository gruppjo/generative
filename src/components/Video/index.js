import { h } from 'preact';
import { useEffect, useRef, useState } from 'preact/hooks';

const Video = (props) => {
  const { basePath } = props;
  const ref = useRef();

  const [ showVideo, setShowVideo ] = useState('');

  useEffect(() => {
    if (!ref.current) return;
    // const rect = ref.current.getBoundingClientRect();
    // if (
    //     rect.top >= 0 &&
    //     rect.left >= 0 &&
    //     rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    //     rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    // ) {
      setShowVideo(true);
    // }
  }, [])
	return (
    /* <!-- video previews https://muffinman.io/blog/hack-for-ios-safari-to-display-html-video-thumbnail/ --> */
		<video ref={ref} controls preload="metadata">
      { showVideo && (
        <>
          <source src={`${basePath}.mp4#t=0.001`} type="video/mp4" />
          Your browser does not support the video tag.
        </>
      )}
    </video>
	);
};


export default Video;
