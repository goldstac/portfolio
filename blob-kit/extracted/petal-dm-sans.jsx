import * as React from 'react';

// Static, standalone mascot. Colors match the selected brand identity.
export default function PetalBlob(props) {
  return (<svg {...props} viewBox="0 0 128 128" role="img" aria-label="Petal" fill="rgb(0, 0, 0)" xmlns="http://www.w3.org/2000/svg" width={props.width ?? 128} height={props.height ?? 128}><g fill="rgb(0, 0, 0)"><path fill="oklch(0.18 0.008 260)" d="M26 72C8 56 21 35 41 38C35 16 58 10 69 29C85 11 107 26 99 45C118 53 114 76 96 81L99 105Q85 116 73 100Q59 112 50 99Q29 111 26 94Z"/><g transform=" translate(0 0)" fill="oklch(0.77 0.12 45)"><rect x="44" y="52" width="9" height="18" rx="4.5" fill="oklch(0.77 0.12 45)"/><rect x="77" y="52" width="9" height="18" rx="4.5" fill="oklch(0.77 0.12 45)"/></g></g></svg>);
}
