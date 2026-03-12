'use client';

import Link from 'next/link';
import { useForm } from 'react-hook-form';

type SignInFormValues = {
  email: string;
  password: string;
};

export default function SignInPage() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignInFormValues>({
    defaultValues: { email: '', password: '' },
  });

  const onSubmit = (values: SignInFormValues) => {
    // Wire up to backend auth later.
    // For now, just log and keep UX ready.
    console.log('Sign in', values);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div>
        <h1 className="text-xl font-semibold tracking-tight text-white">
          Sign in to workspace
        </h1>
      </div>

      <div className="space-y-4 text-sm">
        <div className="space-y-1">
          <label className="text-xs text-[var(--muted)]" htmlFor="email">
            Work email
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            required
            {...register('email')}
            className="h-10 w-full rounded-xl border border-white/10 bg-black/20 px-3 text-sm text-white placeholder:text-white/35 focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/40"
            placeholder="analyst@clubname.com"
          />
        </div>

        <div className="space-y-1">
          <label className="text-xs text-[var(--muted)]" htmlFor="password">
            Password
          </label>
          <input
            id="password"
            type="password"
            autoComplete="current-password"
            required
            {...register('password')}
            className="h-10 w-full rounded-xl border border-white/10 bg-black/20 px-3 text-sm text-white placeholder:text-white/35 focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/40"
            placeholder="••••••••"
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-1 inline-flex h-10 w-full items-center justify-center rounded-xl bg-gradient-to-r from-[var(--accent)] to-[var(--accent-2)] px-4 text-sm font-semibold text-black shadow-[0_10px_30px_rgba(124,92,255,0.25)] hover:opacity-95 transition disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting ? 'Signing in…' : 'Sign in'}
      </button>

      <div className="flex items-center justify-end text-xs text-[var(--muted)]">
        <Link href="/auth/sign-up" className="text-[var(--accent-2)] hover:underline">
          Request access
        </Link>
      </div>
    </form>
  );
}

