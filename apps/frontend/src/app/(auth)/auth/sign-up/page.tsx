'use client';

import Link from 'next/link';
import { useForm } from 'react-hook-form';

type SignUpFormValues = {
  name: string;
  email: string;
  team: string;
};

export default function SignUpPage() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignUpFormValues>({
    defaultValues: { name: '', email: '', team: '' },
  });

  const onSubmit = (values: SignUpFormValues) => {
    console.log('Request access', values);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div>
        <h1 className="text-xl font-semibold tracking-tight text-white">
          Request workspace access
        </h1>
      </div>

      <div className="space-y-4 text-sm">
        <div className="space-y-1">
          <label className="text-xs text-[var(--muted)]" htmlFor="name">
            Full name
          </label>
          <input
            id="name"
            type="text"
            required
            {...register('name')}
            className="h-10 w-full rounded-xl border border-white/10 bg-black/20 px-3 text-sm text-white placeholder:text-white/35 focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/40"
            placeholder="Head analyst / coach"
          />
        </div>
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
            placeholder="you@clubname.com"
          />
        </div>
        <div className="space-y-1">
          <label className="text-xs text-[var(--muted)]" htmlFor="team">
            Team / organisation
          </label>
          <input
            id="team"
            type="text"
            required
            {...register('team')}
            className="h-10 w-full rounded-xl border border-white/10 bg-black/20 px-3 text-sm text-white placeholder:text-white/35 focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/40"
            placeholder="Franchise / national board / academy"
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-1 inline-flex h-10 w-full items-center justify-center rounded-xl bg-gradient-to-r from-[var(--accent)] to-[var(--accent-2)] px-4 text-sm font-semibold text-black shadow-[0_10px_30px_rgba(124,92,255,0.25)] hover:opacity-95 transition disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting ? 'Submitting…' : 'Request access'}
      </button>

      <div className="flex items-center justify-end text-xs text-[var(--muted)]">
        <Link href="/auth/sign-in" className="text-[var(--accent-2)] hover:underline">
          Back to sign in
        </Link>
      </div>
    </form>
  );
}

