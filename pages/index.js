import Head from 'next/head';
import { useState, useEffect } from 'react';
import { allmessages, Messages } from './messages/index.js';

export default function Inbox() {
  const [sender1_msg, setTMessages1] = useState([]);
  const [sender2_msg, setTMessages2] = useState([]);

  const s1_click = () => {
    if (sender1_msg != '') {
      Messages({name: 'sender1', message: sender1_msg});
      setTMessages1('');
      prev();
    }
  };

  const s2_click = () => {
    if (sender2_msg != '') {
      Messages({name: 'sender2', message: sender2_msg});
      setTMessages2('');
      prev();
    }
  };

  const prev = () => {
    const screen = document.querySelector('#screen');
    screen.innerHTML = '';
    allmessages.map((msg) => {
      screen.innerHTML += `<p><b>${msg.name}</b>: ${msg.message}</p>`;
    });
  };

  const previous = () => {
    prev();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };


  return (
    <>
      <Head>
        <title>Chat Box</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
          <h3>ChatBox Messaging</h3>
          <div>
            <div id='screen'>
            </div>
            <br />
            <br />
            <div className='field'>
              <p>received: {sender2_msg}</p>
              {/* <label htmlFor="sender1">Send</label> */}
              <input type="text" id="sender1" name="sender_1" value={sender1_msg} onChange={(e) => setTMessages1(e.target.value)}/>
              <button id='s1_bttn' onClick={s1_click}>Send</button>
            </div>
            <br />
            <div className='field'>
              <p>received: {sender1_msg}</p>
              {/* <label htmlFor="sender2">Send</label> */}
              <input type="text" id="sender2" name="sender_2" value={sender2_msg} onChange={(e) => setTMessages2(e.target.value)}/>
              <button id='s2_bttn' onClick={s2_click}>Send</button>
            </div>
            <br />
           
          </div>
      </main>
    </>
  )
}
