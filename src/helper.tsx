export function getScriptElements(element: React.ReactElement<any, any>): React.ReactElement<any, any>[] {
    const scriptElements: React.ReactElement<any, any>[] = [];
  
    if (element.props.children !== undefined && Array.isArray(element.props.children)) {
      element.props.children.forEach((child: React.ReactElement<any, any>) => {
        // console.log(typeof child)
        if (typeof child === 'object') {
          if (child.type === "script") {
            scriptElements.push(child);          
            // console.log(child)
            // remove child from parent
            element.props.children.splice(element.props.children.indexOf(child), 1);
          } else {
            getScriptElements(child).forEach(scriptElement => {
              scriptElements.push(scriptElement);
            });
          }
        }
  
      });
    }
  
    return scriptElements;
  }

// const parsed = parse(require('./c.html').default)
// const scriptPlotly = document.createElement('script')
// const scriptPlot = document.createElement('script')
// scriptPlotly.type = "text/javascript"
// scriptPlot.type = "text/javascript"
// if (Array.isArray(parsed)) {
//   scriptPlotly.text = parsed[0].props.dangerouslySetInnerHTML.__html
//   scriptPlot.text = parsed[4].props.dangerouslySetInnerHTML.__html
// }
// const divPlot = Array.isArray(parsed) ? parsed[2] : parsed
// console.log("divPlot")
// console.log(divPlot)

// console.log(scriptElements)
// const docScriptElements: any[] = []//scriptPlotly, scriptPlot];