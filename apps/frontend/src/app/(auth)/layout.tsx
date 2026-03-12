import { PropsWithChildren } from 'react';

export default function AuthLayout({ children }: PropsWithChildren) {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="mb-4 text-center">
          <div className="text-sm font-semibold tracking-tight text-white">
            Cricket Analyst Pro
          </div>
        </div>
        <div className="cap-panel rounded-2xl p-6">{children}</div>
      </div>
    </div>
  );
}

