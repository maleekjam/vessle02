"use client";

import Header from "../_components/header";
import Container from "../_components/container";
import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleSumbit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // Add your logic logic here
        setTimeout(() => setIsLoading(false), 1000);
    };

    return (
        <main>
            <Header />
            <Container>
                <div className="max-w-md mx-auto py-12">
                    <h1 className="text-4xl font-bold tracking-tighter leading-tight mb-8 text-center">
                        Login
                    </h1>

                    <form onSubmit={handleSumbit} className="space-y-6">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-slate-900 dark:text-white mb-2">
                                Email Address
                            </label>
                            <input
                                id="email"
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="you@example.com"
                                className="w-full px-4 py-2 rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan/60"
                            />
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-slate-900 dark:text-white mb-2">
                                Password
                            </label>
                            <input
                                id="password"
                                type="password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="••••••••"
                                className="w-full px-4 py-2 rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan/60"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full px-4 py-2 rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan/60"
                        >
                            {isLoading ? "Logging in..." : "Login"}
                        </button>
                    </form>

                    <div className="mt-6 text-center space-y-2">
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                            Don't have an account?{" "}
                            <Link href="/signup" className="underline hover:text-slate-900 dark:hover:text-white">
                                Sign up
                            </Link>
                        </p>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                            <Link href="/" className="underline hover:text-slate-900 dark:hover:text-white">
                                Back to Home
                            </Link>
                        </p>
                    </div>
                </div>
            </Container>
        </main>
    )
}