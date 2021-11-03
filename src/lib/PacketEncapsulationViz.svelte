<script lang="ts">
  export let colorApp:string = "#d9ead3"
  export let colorTransport:string = "#ffe599"
  export let colorIP:string = "#c9daf8"
  export let colorData:string = "lightgray"
  export let colorVPN:string = "#f4cccc"

  export let cellHeight:number = 60
  export let cellMargin: number = 25
  export let cellWidth: number = 100
  export let fontSize:number = 23
	export let padding:{t:number,b:number,l:number,r:number} = {t:20,b:20,l:20,r:20}
  export let pathStrokeWidth:number = 1
  export let stroke:string = "gray"
  export let strokeDasharray:string = "5,5"
  export let strokeWidth:number = 2
  export let vpn:boolean = false

  function getHalfBracePathD(x1:number,y1:number,x2:number,y2:number) {
    const halfDy = Math.abs((y2 - y1) / 2)
    const midY = (y1 + y2) / 2

    return `M ${x1} ${y1} Q ${x1} ${midY} ${x1 + halfDy} ${midY} L ${x2 - halfDy} ${midY} Q ${x2} ${midY} ${x2} ${y2}`
  }

  const centerFlexStyle = 'display:flex;align-items:center;justify-content:center;'
  $: fontSizeStyle = `font-size:${fontSize}px;`
  $: divStyle = `height:${cellHeight}px;text-align:center;${centerFlexStyle}${fontSizeStyle}`
  
  $: vpnOffsetX = vpn ? cellWidth : 0


  $: pathProps = {
    fill: "transparent",
    stroke,
    "stroke-width": pathStrokeWidth
  }

  $: strokeProps = {
    stroke,
    "stroke-width": strokeWidth,
  }

  $: strokeDashProps = {
    ...strokeProps,
    "stroke-dasharray": strokeDasharray,
  }

  $: rectDimsApp = {
    height: cellHeight,
    width: cellWidth,
    x: cellWidth*3 + vpnOffsetX,
    y: 0,
  }

  $: rectDimsTransport = {
    height: cellHeight,
    width: cellWidth,
    x: cellWidth*2 + vpnOffsetX,
    y: 0,
  }

  $: rectDimsNetwork = {
    height: cellHeight,
    width: cellWidth,
    x: cellWidth + vpnOffsetX,
    y: 0,
  }

  $: rectDimsData = {
    height: cellHeight,
    width: cellWidth,
    x: vpnOffsetX,
    y: 0,
  }

  $: svgWidth = padding.l + (vpn?5:4)*cellWidth + padding.r
  $: svgHeight = padding.t + (vpn?5:4)*cellHeight + (vpn?4:3)*cellMargin + padding.b
</script>

<svg viewBox={`0 0 ${svgWidth} ${svgHeight}`} xmlns="http://www.w3.org/2000/svg">
  <g transform={`translate(${padding.l},${padding.t})`}>
    <rect {...rectDimsApp} fill={colorApp}/>
    <rect {...rectDimsApp} fill="transparent"  {...strokeDashProps}/>

    <foreignObject {...rectDimsApp}>
      <div xmlns="http://www.w3.org/1999/xhtml" style={`width:${cellWidth};${divStyle}`}><b>App Data</b></div>
    </foreignObject>

    <path d={getHalfBracePathD(cellWidth*3 + vpnOffsetX,cellHeight,cellWidth*3.5 + vpnOffsetX,cellHeight + cellMargin)} {...pathProps}/>
    <path d={getHalfBracePathD(cellWidth*3.5 + vpnOffsetX,cellHeight + cellMargin,cellWidth*4 + vpnOffsetX,cellHeight)} {...pathProps}/>
  </g>

  <g transform={`translate(${padding.l},${padding.t + (cellHeight + cellMargin)})`}>
    <rect {...rectDimsTransport} fill={colorTransport}/>
    <rect {...rectDimsApp} fill={colorApp}/>
    <rect x={cellWidth*2 + vpnOffsetX} y={0} width={cellWidth*2} height={cellHeight} fill="transparent"  {...strokeDashProps}/>
    <line x1={cellWidth*3 + vpnOffsetX} y1={0} x2={cellWidth*3 + vpnOffsetX} y2={cellHeight}  {...strokeDashProps}/>

    <foreignObject {...rectDimsTransport}>
      <div xmlns="http://www.w3.org/1999/xhtml" style={`width:${cellWidth};${divStyle}`}><b>TCP Headers</b></div>
    </foreignObject>
    <foreignObject {...rectDimsApp}>
      <div xmlns="http://www.w3.org/1999/xhtml" style={`width:${cellWidth};${divStyle}`}><b>TCP Data</b></div>
    </foreignObject>

    <path d={getHalfBracePathD(cellWidth*2 + vpnOffsetX,cellHeight,cellWidth*3 + vpnOffsetX,cellHeight + cellMargin)} {...pathProps}/>
    <path d={getHalfBracePathD(cellWidth*3 + vpnOffsetX,cellHeight + cellMargin,cellWidth*4 + vpnOffsetX,cellHeight)} {...pathProps}/>
  </g>

  <g transform={`translate(${padding.l},${padding.t + (cellHeight + cellMargin)*2})`}>
    <rect {...rectDimsNetwork} fill={colorIP}/>
    <rect {...rectDimsTransport} fill={colorTransport}/>
    <rect {...rectDimsApp} fill={colorApp}/>
    <rect x={cellWidth + vpnOffsetX} y={0} width={cellWidth*3} height={cellHeight} fill="transparent"  {...strokeDashProps}/>
    <line x1={cellWidth*2 + vpnOffsetX} y1={0} x2={cellWidth*2 + vpnOffsetX} y2={cellHeight}  {...strokeDashProps}/>

    <foreignObject {...rectDimsNetwork}>
      <div xmlns="http://www.w3.org/1999/xhtml" style={`width:${cellWidth};${divStyle}`}><b>IP Headers</b></div>
    </foreignObject>
    <foreignObject x={cellWidth*2 + vpnOffsetX} y={0} width={cellWidth*2} height={cellHeight}>
      <div xmlns="http://www.w3.org/1999/xhtml" style={`width:${cellWidth};${divStyle}`}><b>IP Data</b></div>
    </foreignObject>

    <path d={getHalfBracePathD(cellWidth*1 + vpnOffsetX,cellHeight,cellWidth*2.5 + vpnOffsetX,cellHeight + cellMargin)} {...pathProps}/>
    <path d={getHalfBracePathD(cellWidth*2.5 + vpnOffsetX,cellHeight + cellMargin,cellWidth*4 + vpnOffsetX,cellHeight)} {...pathProps}/>
  </g>

  {#if vpn}
    <g transform={`translate(${padding.l},${padding.t + (cellHeight + cellMargin)*3})`}>
      <rect {...rectDimsData} fill={colorIP}/>
      <rect x={cellWidth*2} y={0} width={cellWidth*3} height={cellHeight} fill={colorVPN}/>
      <rect x={cellWidth} y={0} width={cellWidth*4} height={cellHeight} fill="transparent"  {...strokeDashProps}/>
      <line x1={cellWidth*2} y1={0} x2={cellWidth*2} y2={cellHeight}  {...strokeDashProps}/>

      <foreignObject {...rectDimsData}>
        <div xmlns="http://www.w3.org/1999/xhtml" style={`width:${cellWidth};${divStyle}`}><b>VPN IP Headers</b></div>
      </foreignObject>
      <foreignObject x={cellWidth*2} y={0} width={cellWidth*3} height={cellHeight}>
        <div xmlns="http://www.w3.org/1999/xhtml" style={`width:${cellWidth};${divStyle}`}><b><i>Encrypted</i></b></div>
      </foreignObject>

      <path d={getHalfBracePathD(cellWidth,cellHeight,cellWidth*3,cellHeight + cellMargin)} {...pathProps}/>
      <path d={getHalfBracePathD(cellWidth*3,cellHeight + cellMargin,cellWidth*5,cellHeight)} {...pathProps}/>
    </g>

    <g transform={`translate(${padding.l},${padding.t + (cellHeight + cellMargin)*4})`}>
      <rect x={0} y={0} width={cellWidth} height={cellHeight} fill={colorData}/>
      <rect {...rectDimsData} fill={colorIP}/>
      <rect x={cellWidth*2} y={0} width={cellWidth*3} height={cellHeight} fill={colorVPN}/>
      <rect x={0} y={0} width={cellWidth*5} height={cellHeight} fill="transparent"  {...strokeProps}/>
      <line x1={cellWidth} y1={0} x2={cellWidth} y2={cellHeight}  {...strokeProps}/>

      <foreignObject x={0} y={0} width={cellWidth} height={cellHeight}>
        <div xmlns="http://www.w3.org/1999/xhtml" style={`width:${cellWidth};${divStyle}`}><b>Frame Header</b></div>
      </foreignObject>
      <foreignObject x={cellWidth} y={0} width={cellWidth*3} height={cellHeight}>
        <div xmlns="http://www.w3.org/1999/xhtml" style={`width:${cellWidth};${divStyle}`}><b>Frame Data</b></div>
      </foreignObject>
    </g>
  {:else}
    <g transform={`translate(${padding.l},${padding.t + (cellHeight + cellMargin)*3})`}>
      <rect {...rectDimsData} fill="lightgray"  {...strokeProps}/>
      <rect {...rectDimsNetwork} fill={colorIP}/>
      <rect {...rectDimsTransport} fill={colorTransport}/>
      <rect {...rectDimsApp} fill={colorApp}/>
      <rect x={0} y={0} width={cellWidth*4} height={cellHeight} fill="transparent"  {...strokeProps}/>
      <line x1={cellWidth} y1={0} x2={cellWidth} y2={cellHeight}  {...strokeProps}/>

      <foreignObject {...rectDimsData}>
        <div xmlns="http://www.w3.org/1999/xhtml" style={`width:${cellWidth};${divStyle}`}><b>Frame Header</b></div>
      </foreignObject>
      <foreignObject x={cellWidth} y={0} width={cellWidth*3} height={cellHeight}>
        <div xmlns="http://www.w3.org/1999/xhtml" style={`width:${cellWidth};${divStyle}`}><b>Frame Data</b></div>
      </foreignObject>
    </g>
  {/if}
</svg>
