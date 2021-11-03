<script context="module" lang="ts">
  import Fa from 'svelte-fa'
  import { faGithub } from '@fortawesome/free-brands-svg-icons'
  import { faFilePowerpoint } from '@fortawesome/free-solid-svg-icons'

	import Blanchor from '$lib/Blanchor.svelte';
	// import PacketEncapsulationViz from '$lib/PacketEncapsulationViz.svelte';

  import ownExample from "$lib/images/examplePacketEncapsulation.png"
  import whatIThought from "$lib/images/whatIThought.png"
  import wikipediaImage from "$lib/images/2880px-UDP_encapsulation.svg.png"
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<main>
  <header>
    <div>
      <h1>Improved Packet Encapsulation Visualization</h1>

      <div style="font-size:2em">
        <Blanchor href="https://github.com/harryli0088/improved-packet-encapsulation-visualization">
          <Fa class="icon-button" icon={faGithub} style="color:white;"/>
        </Blanchor>
      </div>

      <br/>
      <br/>

      <div class="img-parent"><img src="./improvedPacketEncapsulation.svg" alt="improved packet encapsulation" style="background-color:white"/></div>
    </div>
  </header>

  <section>
    <Blanchor href="https://docs.google.com/presentation/d/1zAoo-gQp8Dvv8wP9MSVR4KtrOzsT9i6xAuVzN9musTs/edit?usp=sharing">
      Google Slides Version <Fa class="icon-button" icon={faFilePowerpoint}/>
    </Blanchor>
  </section>

  <section>
    <h2>Background</h2>

    <p>
      In computer networking, several communication layers have separate and abstracted responsibilities.
      “Encapsulation takes information from a higher layer and adds a header to it, treating the higher layer information as data”
       - <Blanchor href="https://en.wikipedia.org/wiki/Encapsulation_(networking)">Wikipedia</Blanchor>.
      Images that visualize this layered encapsulation usually look like the image below.
    </p>

    <div class="img-parent">
      <img src={wikipediaImage} alt="Wikipedia packet encapsulation"/>
      <div class="caption">Example Image from <Blanchor href="https://en.wikipedia.org/wiki/Encapsulation_(networking)">Wikipedia</Blanchor></div>
    </div>
  </section>

  <section>
    <h2>Important Ideas</h2>

    <p>The important ideas to capture in this visualization include:</p>

    <ul>
      <li>Communication Layers</li>
      <li>Each layer adds its own header</li>
      <li>Each layer encapsulates the data from the previous layer</li>
    </ul>
  </section>

  <section>
    <h2>Main Confusion</h2>

    <p>
      The main problem I have with the visualization from Wikipedia is that it made me think that all the blocks from all the layers were being transmitted together.
      I have also seen images like the the one below that, without any separation between the layers, make this even more confusing.
    </p>

    <p></p>
    <div class="img-parent">
      <img src={ownExample} alt="example packet encapsulation"/>
    </div>

    <p>
      In the image above, the first 3 layers visually breakdown the encapsulation, but the bottom layer is that is actually sent.
      I was confused and thought that all the blocks in all the layers were being sent (below).
    </p>

    <div class="img-parent">
      <img src={whatIThought} alt="what I thought was being sent" style="max-width:100%;"/>
    </div>
  </section>

  <section>
    <h2>Improvements </h2>
    
    <p>
      I made (in my opinion) improved packet encapsulation visualizations.
      The main ideas to communicate are preserved, namely that each subsequent layer encapsulates and abstracts the data from the previous layer.
      At the same time, the dotted lines and curly braces make it more evident that the upper layers are not duplicated and also sent along,
      but rather are a way of visually breaking down the encapsulations. I also made a stack for VPN encrypted traffic.
    </p>

    <div class="img-parent"><img src="./improvedPacketEncapsulation.svg" alt="improved packet encapsulation"/></div>
    <div class="img-parent"><img src="./improvedPacketEncapsulationVpn.svg" alt="improved packet encapsulation VPN"/></div>
    <!-- <PacketEncapsulationViz />
    <PacketEncapsulationViz vpn={true}/> -->

    <p>
      You can modify and generate these SVG images yourself by cloning the repo and tweaking
      <Blanchor href="https://github.com/harryli0088/improved-packet-encapsulation-visualization/blob/main/src/lib/PacketEncapsulationViz.svelte">this component</Blanchor>.
    </p>
  </section>
</main>

<style>
  header {
		display: flex;
		align-items: center;
		justify-content: center;
		overflow: hidden;
		background-color: #17202A;
		color: white;
    text-align: center;
    padding-top: 5em;
    padding-bottom: 5em;
  }

  .img-parent {
    text-align: center;
  }

  img {
    max-width: 500px;
  }

  .caption {
    font-size: 14px;
    font-style: italic;
  }
</style>
