<script lang="ts">
  export let colorApp:string = "#d9ead3"
  export let colorTransport:string = "#ffe599"
  export let colorIP:string = "#c9daf8"
  export let colorData:string = "lightgray"

  export let cellHeight:number = 60
  export let cellMargin: number = 25
  export let cellWidth: number = 100
  export let fontSize:number = 23
	export let padding:{t:number,b:number,l:number,r:number} = {t:20,b:20,l:20,r:20}
  export let stroke:string = "gray"
  export let strokeDasharray:string = "5,5"
  export let strokeWidth:number = 2

  const centerFlexStyle = 'display:flex;align-items:center;justify-content:center;'
  $: fontSizeStyle = `font-size:${fontSize}px;`
  $: divStyle = `height:${cellHeight}px;text-align:center;${centerFlexStyle}${fontSizeStyle}`

  $: rectDimsApp = {
    height: cellHeight,
    width: cellWidth,
    x: cellWidth*3,
    y: 0,
  }

  $: rectDimsTransport = {
    height: cellHeight,
    width: cellWidth,
    x: cellWidth*2,
    y: 0,
  }

  $: rectDimsNetwork = {
    height: cellHeight,
    width: cellWidth,
    x: cellWidth,
    y: 0,
  }
</script>

<div>
	<svg viewBox={`0 0 ${padding.l + 4*cellWidth + padding.r} ${padding.t + 4*cellHeight + 3*cellMargin + padding.b}`} xmlns="http://www.w3.org/2000/svg">
    <g transform={`translate(${padding.l},${padding.t})`}>
      <rect {...rectDimsApp} fill={colorApp}/>
      <rect {...rectDimsApp} fill="transparent" {stroke} stroke-width={strokeWidth} stroke-dasharray={strokeDasharray}/>

      <foreignObject {...rectDimsApp}>
        <div xmlns="http://www.w3.org/1999/xhtml" style={`width:${cellWidth};${divStyle}`}><b>App Data</b></div>
      </foreignObject>
    </g>

    <g transform={`translate(${padding.l},${padding.t + (cellHeight + cellMargin)})`}>
      <rect {...rectDimsTransport} fill={colorTransport}/>
      <rect {...rectDimsApp} fill={colorApp}/>
      <rect x={cellWidth*2} y={0} width={cellWidth*2} height={cellHeight} fill="transparent" {stroke} stroke-width={strokeWidth} stroke-dasharray={strokeDasharray}/>
      <line x1={cellWidth*3} y1={0} x2={cellWidth*3} y2={cellHeight} {stroke} stroke-width={strokeWidth} stroke-dasharray={strokeDasharray}/>

      <foreignObject {...rectDimsTransport}>
        <div xmlns="http://www.w3.org/1999/xhtml" style={`width:${cellWidth};${divStyle}`}><b>TCP Headers</b></div>
      </foreignObject>
      <foreignObject {...rectDimsApp}>
        <div xmlns="http://www.w3.org/1999/xhtml" style={`width:${cellWidth};${divStyle}`}><b>TCP Data</b></div>
      </foreignObject>
    </g>

    <g transform={`translate(${padding.l},${padding.t + (cellHeight + cellMargin)*2})`}>
      <rect {...rectDimsNetwork} fill={colorIP}/>
      <rect {...rectDimsTransport} fill={colorTransport}/>
      <rect {...rectDimsApp} fill={colorApp}/>
      <rect x={cellWidth} y={0} width={cellWidth*3} height={cellHeight} fill="transparent" {stroke} stroke-width={strokeWidth} stroke-dasharray={strokeDasharray}/>
      <line x1={cellWidth*2} y1={0} x2={cellWidth*2} y2={cellHeight} {stroke} stroke-width={strokeWidth} stroke-dasharray={strokeDasharray}/>

      <foreignObject {...rectDimsNetwork}>
        <div xmlns="http://www.w3.org/1999/xhtml" style={`width:${cellWidth};${divStyle}`}><b>IP Headers</b></div>
      </foreignObject>
      <foreignObject x={cellWidth*2} y={0} width={cellWidth*2} height={cellHeight}>
        <div xmlns="http://www.w3.org/1999/xhtml" style={`width:${cellWidth};${divStyle}`}><b>IP Data</b></div>
      </foreignObject>
    </g>

    <g transform={`translate(${padding.l},${padding.t + (cellHeight + cellMargin)*3})`}>
      <rect x={0} y={0} width={cellWidth} height={cellHeight} fill="lightgray" {stroke} stroke-width={strokeWidth}/>
      <rect {...rectDimsNetwork} fill={colorIP}/>
      <rect {...rectDimsTransport} fill={colorTransport}/>
      <rect {...rectDimsApp} fill={colorApp}/>
      <rect x={0} y={0} width={cellWidth*4} height={cellHeight} fill="transparent" {stroke} stroke-width={strokeWidth}/>
      <line x1={cellWidth} y1={0} x2={cellWidth} y2={cellHeight} {stroke} stroke-width={strokeWidth}/>

      <foreignObject x={0} y={0} width={cellWidth} height={cellHeight}>
        <div xmlns="http://www.w3.org/1999/xhtml" style={`width:${cellWidth};${divStyle}`}><b>Frame Header</b></div>
      </foreignObject>
      <foreignObject x={cellWidth} y={0} width={cellWidth*3} height={cellHeight}>
        <div xmlns="http://www.w3.org/1999/xhtml" style={`width:${cellWidth};${divStyle}`}><b>Frame Data</b></div>
      </foreignObject>
    </g>
  </svg>
</div>
