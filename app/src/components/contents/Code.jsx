import React from 'react';
import './Code.css';


const Code = (props) => {
  return (
    <div>
      <h3 class="mt-5">NPM</h3>
      <p>Install reactstrap and peer dependencies via NPM</p>

      <pre class="language-bash">
      <code class="language-bash">
      <span class="token function">npm</span>
       <span class="token function">install</span> 
       --save reactstrap react react-dom</code>
       </pre>
    </div>
  );
};

export default Code;