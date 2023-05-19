import { h } from 'preact';
import style from './style.css';

import Video from '../../components/Video';


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
          <img src="assets/media/guilty/guilty1.jpeg" />
        </div>
        <div>
          <Video basePath="assets/media/guilty/guilty2" />
        </div>
        <div>
          <Video basePath="assets/media/guilty/guilty3" />
        </div>
      </div>
      <h2>Various</h2>
      Touchdesigner, p5.js
      <div class="gallery">
        <div>
          <Video basePath="assets/media/various/b" />
        </div>
        <div>
          <Video basePath="assets/media/various/rotate" />
        </div>
        <div>
          <Video basePath="assets/media/various/plane" />
        </div>
        <div>
          <Video basePath="assets/media/various/abc_wire" />
        </div>
        <div>
          <Video basePath="assets/media/various/abc" />
        </div>
        <div>
          <Video basePath="assets/media/various/flow" />
        </div>
        <div>
          <Video basePath="assets/media/various/flow2" />
        </div>
        <div>
          <Video basePath="assets/media/various/lineshader" />
        </div>
        <div>
          <Video basePath="assets/media/various/disco" />
        </div>
        <div>
          <Video basePath="assets/media/various/grid" />
        </div>
        <div>
          <Video basePath="assets/media/various/disco_mini" />
        </div>
        <div>
          <Video basePath="assets/media/various/roughjapan" />
        </div>
        <div>
          <Video basePath="assets/media/various/topo2" />
        </div>
        <div>
          <Video basePath="assets/media/various/topo" />
        </div>
        <div>
          <Video basePath="assets/media/various/windows_2" />
        </div>
      </div>

		</div>
	);
};


export default Home;
