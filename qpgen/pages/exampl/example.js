import React from 'react';
import 'katex/dist/katex.min.css';
import { BlockMath, InlineMath } from 'react-katex';


const ExamplePage = () => (
  <div
    style={{
      width: '40%',
      margin: '0 auto',
    }}
  >
    <h1>
      <InlineMath>{'\\text{React-}\\KaTeX \\space \\text{usage examples}'}</InlineMath>
    </h1>
    <h2>
      <code>{'<InlineMath />'}</code>
    </h2>
    This is an in-line expression <InlineMath math={'\\int_0^\\infty x^2 dx'} /> passed as <code>math prop</code>. This
    is an in-line <InlineMath math={'\\int_0^\\infty x^2 dx'} /> expression passed as <code>children prop</code>.
    <h2>
      <code>{'<BlockMath />'}</code>
    </h2>
    <BlockMath math={'\\int_0^\\infty x^2 dx'} />
    <BlockMath>{`A =
        \\begin{pmatrix}
        1 & 0 & 0 \\\\
        0 & 1 & 0 \\\\
        0 & 0 & 1 \\\\
        \\end{pmatrix}`}</BlockMath>
    <h2>Error handling</h2>
  </div>
);

export default ExamplePage