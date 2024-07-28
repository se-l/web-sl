import { MathJaxProvider, MathJaxHtml } from 'mathjax3-react';

interface IRenderNbProps {
    notebook: string
}

function RenderNb({notebook}: IRenderNbProps) {
    return (
        <MathJaxProvider options={{
            tex: {
                inlineMath: [
                    ['$', '$'],
                ],
            },
            displayAlign: 'right',
            displayIndent: '5em'
        }}>
            <MathJaxHtml html={notebook} />
        </MathJaxProvider>
    )
}

export default RenderNb
