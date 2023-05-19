import { h } from 'preact';
import style from './style.css';

const Home = () => {
	return (
		<div class={style.home}>
			<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;900&display=swap" rel="stylesheet" />


      <h1>Generative Gestaltung</h1>
      <hr />
      <br />
      Jonathan Grupp
      <h2>Guilty Pleasure (sound on!)</h2>
      Arduino Heartbeat & Pressure Sensor, Touchdesigner, Python, Midi, Ableton
      <div class="gallery">
        <div>
          <img src="/assets/media/guilty/guilty1.jpeg" />
        </div>
        <div>
          {/* <!-- video previews https://muffinman.io/blog/hack-for-ios-safari-to-display-html-video-thumbnail/ --> */}
          <video controls preload="metadata">
            <source src="/assets/media/guilty/guilty2.mp4#t=0.001" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div>
          <video controls preload="metadata">
            <source src="/assets/media/guilty/guilty3.mp4#t=0.001" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <h2>Various</h2>
      Touchdesigner, p5.js
      <div class="gallery">
        <div>
          <video controls preload="metadata">
            <source src="/assets/media/various/b.mp4#t=0.001" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div>
          <video controls preload="metadata">
            <source src="/assets/media/various/rotate.mp4#t=0.001" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div>
          <video controls preload="metadata">
            <source src="/assets/media/various/plane.mp4#t=0.001" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div>
          <video controls preload="metadata">
            <source src="/assets/media/various/abc_wire.mp4#t=0.001" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div>
          <video controls preload="metadata">
            <source src="/assets/media/various/abc.mp4#t=0.001" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div>
          <video controls preload="metadata">
            <source src="/assets/media/various/flow.mp4#t=0.001" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div>
          <video controls preload="metadata">
            <source src="/assets/media/various/flow2.mp4#t=0.001" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div>
          <video controls preload="metadata">
            <source src="/assets/media/various/lineshader.mp4#t=0.001" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div>
          <video controls preload="metadata">
            <source src="/assets/media/various/disco.mp4#t=0.001" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div>
          <video controls preload="metadata">
            <source src="/assets/media/various/grid.mp4#t=0.001" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div>
          <video controls preload="metadata">
            <source src="/assets/media/various/disco_mini.mp4#t=0.001" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div>
          <video controls preload="metadata">
            <source src="/assets/media/various/roughjapan.mp4#t=0.001" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div>
          <video controls preload="metadata">
            <source src="/assets/media/various/topo2.mp4#t=0.001" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div>
          <video controls preload="metadata">
            <source src="/assets/media/various/topo.mp4#t=0.001" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div>
          <video controls preload="metadata">
            <source src="/assets/media/various/windows_2.mp4#t=0.001" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

		</div>
	);
};


export default Home;
