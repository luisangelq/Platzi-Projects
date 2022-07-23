import * as React from "react";
import { SvgWapper } from "./styles";

const Logo = (props) => (
  <SvgWapper>
    <svg
      width={252.779}
      height={154.4}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="123.61 -2.2 252.779 154.4"
      style={{
        background: "0 0",
      }}
      preserveAspectRatio="xMidYMid"
      {...props}
    >
      <defs>
        <linearGradient id="b" x1={-0.329} x2={1.329} y1={-0.059} y2={1.059}>
          <stop offset={0} stopColor="#ee4208" />
          <stop offset={1} stopColor="#4139ff" />
        </linearGradient>
        <filter id="a" x="-100%" y="-100%" width="300%" height="300%">
          <feMorphology
            in="SourceGraphic"
            operator="dilate"
            radius={4}
            result="outline"
          />
          <feComposite operator="out" in="outline" in2="SourceAlpha" />
        </filter>
      </defs>
      <g filter="url(#a)">
        <path
          d="M15.62-20.67q-.45.83-5.38 10.81Q6.98-3.2 3.68.22.38 3.65-1.34 3.65q-.77 0-.77-.71l.19-.76q.7-1.92 4.38-9.03 3.68-7.1 6.88-12.61 3.01-5.24 5.89-10.14t4.29-7.2l1.41-2.3q.13-.2.32-.52t.86-1.15q.67-.83 1.38-1.44.7-.61 1.66-1.12.96-.51 1.86-.51.83 0 .83.45 0 .57-.77 1.66-4.8 8.19-10.24 18.63-.06.12-.06.25 0 .19.25.19 4.04 0 7.46-1.53 3.42-1.54 5.57-4 2.14-2.47 3.33-5.28 1.18-2.82 1.18-5.57 0-3.9-2.94-5.89-2.95-1.98-6.92-1.98-3 0-5.85.89-2.85.9-4.99 3.08-2.15 2.17-2.15 5.18 0 1.79.96 3.46.32.64.32.89 0 .39-.51.39-.13 0-.51-.13-.19-.07-.51-.26t-1.16-.77q-.83-.57-1.47-1.21t-1.15-1.7q-.51-1.05-.51-2.14 0-3.97 4.89-6.66 4.9-2.69 11.11-2.69 3.01 0 5.73.52 2.72.51 5.31 1.63 2.59 1.12 4.13 3.23 1.53 2.11 1.53 4.99 0 4.29-2.21 7.71-2.2 3.43-5.76 5.44-3.55 2.02-7.58 3.08-4.03 1.05-8.13 1.05-.06-.06-.19-.06-.26 0-.38.32Zm24.57-1.03q.77-1.6.77-2.81 0-1.03-.64-1.03-.38 0-.86.23-.48.22-.74.48l-.32.25q-1.98 1.73-4.96 6.31-2.98 4.57-2.98 5.85 0 .26.13.26.39 0 1.7-.64t3.77-3.01q2.47-2.37 4.13-5.89ZM37.31-7.04q3.39-3.14 9.73-10.37.19-.19.32-.19t.13.26q0 1.21-.96 2.36-4.74 5.25-8.39 8.77-2.68 2.69-6.4 5.15-3.71 2.47-6.14 2.47-2.94 0-2.94-4.1 0-6.78 5.02-14.21 5.02-7.42 11.62-10.04 2.75-1.16 4.99-1.16 2.49 0 2.49 1.99 0 3.71-5.24 8.51-5.25 4.8-11.78 7.3-.26.06-.45.44-.96 2.63-.96 4.68 0 2.3 1.73 2.3 2.75 0 7.23-4.16ZM52.1-9.66q2.68-2.69 7.1-7.75.19-.19.32-.19t.13.26q0 1.21-.96 2.36-4.74 5.25-8.39 8.77-7.68 7.43-10.17 7.43-.9 0-.9-1.16 0-1.34 1.03-4.03 1.02-2.69 2.04-4.73l1.03-1.99q1.47-2.62 4.86-8.96 3.39-6.33 6.56-11.97 3.17-5.63 5.99-10.17h-5.06q-.64 0-.64-.32t.51-.64q.51-.32 1.09-.32 1.41 0 4.93-.07 3.13-4.92 5.37-7.8 1.99-2.5 2.76-2.5.44 0 .44.58 0 1.34-2.43 5.76l-2.17 3.96h6.59q.57 0 .57.32 0 1.03-1.85 1.03h-6.02Q50.05-13.76 49.28-12.42q-2.69 4.93-2.69 6.4 0 .45.32.45.9 0 5.19-4.09Zm33.34-12.8Q74.3-3.2 73.98 2.11q0 .9-.57.9-.96 0-1.73-1.7-.77-1.69-.77-3.36 0-2.24.96-4.99t1.99-4.35l.96-1.6q.19-.26.19-.45 0-.13-.13-.13l-.38.19q-4.87 5.96-8.93 9.64Q61.5-.06 59.49.96q-2.02 1.02-3.3 1.02-3.01 0-3.01-5.63 0-4.67 1.8-10.72 1.79-6.05 5.05-12.06 3.27-6.02 7.3-11.11 4.03-5.08 9.02-8.25 4.99-3.17 9.79-3.17 1.03 0 1.83.16t1.25.29q.44.13.51.13.45 0 .77-.45 1.4-.77 3.58-.77 1.92 0 1.92.96 0 1.66-3.68 7.42t-4.9 5.76q-.51 0-.51-1.02t.45-3.01q.45-1.98.93-3.49.48-1.5.48-1.44.13-.51.13-.76 0-1.03-.87-1.54-.86-.51-1.89-.51-4.73 0-10.91 7.45-6.17 7.46-10.43 17.16-4.26 9.69-4.26 15.96 0 2.76 1.35 2.76 1.53 0 5.44-3.91 7.1-7.1 10.81-13.25 1.6-2.36 1.6-4.54 0-1.15-.44-1.76-.45-.61-.45-.86 0-.64.89-.71 1.92-.19 4.29-.19 2.69 0 4.55.32.51.06.51.51 0 .39-.45.9-1.41 1.85-3.2 4.93Zm11.78 9.21q-.52 0-.52-.38 0-.19.2-.51 3.77-5.89 3.77-8.07 0-.57-.45-.57-1.92 0-9.02 8.7-2.11 2.69-3.94 5.57-1.82 2.88-2.52 4.41l-.77 1.48Q83.2-1.09 81.6.22 80 1.54 78.27 1.54q-.89 0-.89-.45 0-.39.54-1.6.54-1.22 1.31-2.69t1.54-2.88q.77-1.41 1.28-2.37l.57-.96 6.72-11.71q3.91-7.36 8.2-7.36.57 0 .57.45 0 .57-2.78 4.77-2.79 4.19-3.23 5.34-.13.38-.13.45 0 .13.13.13.12 0 .44-.32 4.8-5.44 10.18-9.67.32-.32 1.41-.93 1.09-.6 1.92-.6 1.21 0 1.21 2.11 0 2.3-1.53 5.5-1.54 3.2-4.16 5.63l-.26.26q-.25.19-.54.42-.29.22-.74.54-.45.32-.89.54-.45.23-.96.42-.52.19-.96.19Zm21.24 9.22Q113.15.83 111.17.83q-.9 0-.9-1.02 0-1.28 1.12-3.91 1.12-2.62 2.27-4.6l1.16-1.99q.25-.45.25-.57 0-.13-.13-.13-.25 0-.96.7-1.92 2.11-4.38 4.51t-4 3.75l-1.47 1.28q-2.5 1.92-3.84 1.92-1.41 0-1.41-2.18 0-1.09.61-3.33t.93-3q1.47-3.59 3.68-6.98 2.2-3.39 5.21-6.5 3.01-3.1 7.01-5.02 4-1.92 8.29-1.92 3.58 0 3.58 1.09 0 .64-1.6.64-5.89 0-11.04 5.02-5.15 5.03-8.35 11.55-.9 1.8-.9 3.01 0 .71.45.71.77 0 1.99-1.09.76-.71 2.08-1.86 1.31-1.15 4.25-4.41 2.95-3.27 4.67-6.08.26-.52.8-1.22.55-.7 2.08-1.89 1.54-1.18 3.08-1.18.83 0 .83.45 0 .12-.19.44-.26.52-1.44 2.56-1.19 2.05-2.21 3.88-1.03 1.82-2.18 3.96-1.15 2.15-1.82 3.68-.67 1.54-.67 2.05 0 .39.32.39.96 0 4.67-3.72 2.81-2.94 6.59-7.23.19-.19.32-.19t.13.26q0 1.21-.96 2.36Q122.82-8 118.46-4.03Zm41.16-5.63q2.68-2.69 7.1-7.75.19-.19.32-.19t.13.26q0 1.21-.96 2.36-4.74 5.25-8.39 8.77Q150.27.83 147.9.83q-1.02 0-1.02-1.21 0-1.22 1.31-4.04 1.31-2.81 2.63-5.12 1.31-2.3 3.32-5.63 2.02-3.33 2.15-3.58 1.15-1.86 1.15-2.37 0-.32-.32-.32l-.9.32q-2.94 2.11-7.04 6.56-4.09 4.45-6.72 7.78l-2.62 3.39Q136.9.83 134.08.83q-.83 0-.83-.51 0-.58 1.21-3.04 1.22-2.46 2.44-4.64l1.21-2.18q.45-.89 2.21-3.87 1.76-2.97 2.94-5.12 1.19-2.14 1.19-2.65 0-.32-.26-.32l-.89.38q-3.01 2.11-7.11 6.56-4.09 4.45-6.65 7.78l-2.63 3.39Q123.9.77 121.15.77q-.83 0-.83-.45 0-.58 1.22-3.04 1.21-2.46 2.43-4.64l1.21-2.18 6.21-11q1.54-2.88 3.71-5.16 2.18-2.27 4.55-2.27.51 0 .51.45 0 .38-.74 1.63-.73 1.25-2.11 3.46-1.37 2.21-2.33 4.06-.58 1.09-1.38 2.47-.8 1.37-1.31 2.3-.51.93-.71 1.31-.19.39-.19.58 0 .13.13.13.19 0 .64-.45 1.22-1.41 3.17-3.52 1.95-2.11 6.62-6.37t7.68-5.73q.64-.32 1.28-.32.9 0 .9.9 0 1.66-3.78 8.64-.32.57-1.31 2.24-.99 1.66-1.66 2.88-.68 1.21-.68 1.53 0 .2.13.2.19 0 .64-.45 1.22-1.41 3.17-3.52 1.95-2.11 6.59-6.37t7.65-5.73q.77-.32 1.34-.32.96 0 .96.9 0 .25-.25 1.12-.26.86-1.47 3.52-1.22 2.65-3.2 5.85-4.87 7.49-4.87 9.41 0 .58.39.58 1.08 0 4.16-3.07Z"
          fill="url(#b)"
          transform="translate(170.082 103.545)"
        />
      </g>
    </svg>
  </SvgWapper>
);

export { Logo };
