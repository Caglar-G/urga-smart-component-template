<script lang="ts">
  import svelteLogo from './assets/svelte.svg'
  import viteLogo from '/vite.svg'
  import Counter from './lib/Counter.svelte'

  import { Cluster } from "urgasmartlib";
  import { onMount } from 'svelte';
	import Fa from 'svelte-fa';
	import { faPowerOff } from '@fortawesome/free-solid-svg-icons';

  /*
  onMount(()=>{
    UrgaSmart.getDeviceInfo("")
  })*/


  const spec = new Cluster("38d83101-e148-4a54-848b-faa5d074e481");

  let switch1 = spec.ON_OFF("1",(self)=>{ switch1 = self;});
</script>

<main>
  <div>
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div on:click={switch1.commands.Toggle} >
      <Fa icon={faPowerOff} size="8x" color={switch1.attributes.OnOff === "ON" ? "#55B785" : "#C33175"}/>
    </div>
  </div>
  <h1>Vite + Svelte</h1>

  <div class="card">
    <Counter />
  </div>

  <p>
    Check out <a href="https://github.com/sveltejs/kit#readme" target="_blank" rel="noreferrer">SvelteKit</a>, the official Svelte app framework powered by Vite!
  </p>

  <p class="read-the-docs">
    Click on the Vite and Svelte logos to learn more
  </p>
</main>

<style>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  .read-the-docs {
    color: #888;
  }
</style>
