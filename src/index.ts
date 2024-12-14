import settings from './settings.json';
import './app.css'
import App from './GeneralRelay.svelte'

const app = new App({
  target: document.getElementById('app')!,
})
console.log(settings);
export default app
