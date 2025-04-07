import { connectToServer } from './socket-client';
import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h2>WebSockets - Client</h2>

    <input id='jwtoken' placeholder='jsonwebtoken' />
    <button id='btn-connect'>Connect</button>

    <br />
    <span id='server-status'>offline</span>

    <ul id='clients-ul'></ul>

    <form id='message-form'>
      <input placeholder='message' id='message-input' />
    </form>

    <h3>Messages</h3>
    <ul id='messages-ul'></ul>
  </div>
`

//connectToServer();
const inputJwt = document.querySelector<HTMLInputElement>('#jwtoken')!;
const btnConnect = document.querySelector<HTMLButtonElement>('#btn-connect')!;

btnConnect.addEventListener( 'click', () => {
  if ( inputJwt.value.trim().length <= 0 ) return alert('Enter a valid JWT');
  connectToServer( inputJwt.value.trim() );
});


