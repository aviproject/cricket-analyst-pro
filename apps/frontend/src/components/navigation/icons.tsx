import { SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement> & { title?: string };

function Base({ title, ...props }: IconProps) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden={title ? undefined : true}
      role={title ? 'img' : 'presentation'}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      {props.children}
    </svg>
  );
}

export function IconDashboard(props: IconProps) {
  return (
    <Base {...props}>
      <path
        d="M4 13.4c0-4.64 0-6.96 1.44-8.4C6.88 3.6 9.2 3.6 13.84 3.6h.32c4.64 0 6.96 0 8.4 1.4C24 6.44 24 8.76 24 13.4v.2c0 4.64 0 6.96-1.44 8.4-1.44 1.4-3.76 1.4-8.4 1.4h-.32c-4.64 0-6.96 0-8.4-1.4C4 20.56 4 18.24 4 13.6v-.2Z"
        fill="currentColor"
        opacity="0.12"
      />
      <path
        d="M7.2 16.6h4.1M7.2 12.2h9.6M7.2 7.8h6.4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </Base>
  );
}

export function IconMatches(props: IconProps) {
  return (
    <Base {...props}>
      <path
        d="M7 8.5c0-2.3 1.9-4.2 4.2-4.2h1.6C15.1 4.3 17 6.2 17 8.5v7c0 2.3-1.9 4.2-4.2 4.2h-1.6C8.9 19.7 7 17.8 7 15.5v-7Z"
        fill="currentColor"
        opacity="0.12"
      />
      <path
        d="M9.2 9.2h5.6M9.2 12h5.6M9.2 14.8h3.8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </Base>
  );
}

export function IconPlayers(props: IconProps) {
  return (
    <Base {...props}>
      <path
        d="M12 12.4a4.2 4.2 0 1 0 0-8.4 4.2 4.2 0 0 0 0 8.4Z"
        fill="currentColor"
        opacity="0.12"
      />
      <path
        d="M4.2 20.2c.9-4 4-6 7.8-6s6.9 2 7.8 6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </Base>
  );
}

export function IconSimulation(props: IconProps) {
  return (
    <Base {...props}>
      <path
        d="M12 3.8c4.5 0 8.2 3.7 8.2 8.2S16.5 20.2 12 20.2 3.8 16.5 3.8 12 7.5 3.8 12 3.8Z"
        fill="currentColor"
        opacity="0.12"
      />
      <path
        d="M12 7.2v5l3.6 2"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </Base>
  );
}

export function IconReports(props: IconProps) {
  return (
    <Base {...props}>
      <path
        d="M7 4.6h7.2l2.8 2.8V19c0 1.2-1 2.2-2.2 2.2H7c-1.2 0-2.2-1-2.2-2.2V6.8C4.8 5.6 5.8 4.6 7 4.6Z"
        fill="currentColor"
        opacity="0.12"
      />
      <path
        d="M8 12.2h8M8 15.2h8M8 9.2h5.4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </Base>
  );
}

export function IconSettings(props: IconProps) {
  return (
    <Base {...props}>
      <path
        d="M12 14.8a2.8 2.8 0 1 0 0-5.6 2.8 2.8 0 0 0 0 5.6Z"
        fill="currentColor"
        opacity="0.12"
      />
      <path
        d="M19.2 12a7.2 7.2 0 0 0-.1-1l2-1.6-2-3.6-2.4 1a7.6 7.6 0 0 0-1.7-1l-.4-2.6H9.4L9 5.8c-.6.3-1.2.6-1.7 1l-2.4-1-2 3.6 2 1.6a7.2 7.2 0 0 0 0 2l-2 1.6 2 3.6 2.4-1c.5.4 1.1.7 1.7 1l.4 2.6h5.2l.4-2.6c.6-.3 1.2-.6 1.7-1l2.4 1 2-3.6-2-1.6c.1-.3.1-.6.1-1Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </Base>
  );
}

