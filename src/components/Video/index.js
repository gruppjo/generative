import { h } from 'preact';
import { useRef } from 'preact/hooks';
import { useInViewport } from '../../utils/client';

// Video previews: https://muffinman.io/blog/hack-for-ios-safari-to-display-html-video-thumbnail/

const Video = (props) => {
  const { basePath } = props;
  const ref = useRef();

  const showVideo = useInViewport(ref);

	return (
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
