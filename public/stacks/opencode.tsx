import { SVGProps } from "react";

interface OpenCodeIconProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}

export default function OpenCodeIcon({ size = 14, ...props }: OpenCodeIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 240 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M180 240H60V120H180V240Z" fill="currentColor" opacity={0.4} />
      <path d="M180 60H60V240H180V60ZM240 300H0V0H240V300Z" fill="currentColor" />
    </svg>
  );
}
