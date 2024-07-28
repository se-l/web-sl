import { useEffect, useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { getScriptElements } from '../helper';
import parse from 'html-react-parser';

interface IHelmetWrapperProps {
    notebook: string
    children: any
}

export default function HelmetWrapper({notebook, children}: IHelmetWrapperProps) {
    const [helmets, setHelmets] = useState<any[]>([])

    useEffect(() => {
        console.log('Running Helmet again')
        const helmetsTmp: any[] = []
        //@ts-ignore
        const scriptElements = getScriptElements(parse(notebook))
        scriptElements.forEach((el: React.ReactElement<any, any>, i: number) => {
        var s = document.createElement('script')
        if (el.props.type !== undefined) {
            s.type = el.props.type
        }
        if (el.props.src !== undefined) s.src = el.props.src
        if (el.props.dangerouslySetInnerHTML !== undefined) s.text = el.props.dangerouslySetInnerHTML.__html
        helmetsTmp.push(<script type={s.type} key={i}>{s.text}</script>);
        });
        setHelmets(helmetsTmp)
        
    }, [notebook])

  return (
    <HelmetProvider>
        <Helmet>
            {helmets}
        </Helmet>
        {children}
    </HelmetProvider>
  )
}
