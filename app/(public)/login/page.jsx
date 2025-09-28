import Link from 'next/link';

export default function LoginPage() {
    return (
        <div className="min-h-screen flex items-center justify-center  container mx-auto px-6 md:px-10 py-8 md:py-12 lg:py-16">
            <div className="w-full max-w-md">
                {/* Title */}
                <h2 className="text-2xl md:text-3xl mb-2  font-semibold text-center text-[#1F2937]">
                    Welcome back
                </h2>
                <p className="text-sm text-[#6B7280] text-center mb-7">
                    Login to continue your journey with us.
                </p>

                {/* Social Logins */}
                <div className="space-y-3">
                    <button
                        type="button"
                        className=" cursor-pointer w-full flex items-center text-[#1F2937] font-medium justify-center gap-2 border border-[#D1D5DB] rounded-lg py-2 hover:bg-gray-100 transition"
                    >
                        <img
                            src="/icon/google.svg"
                            alt="Google"
                            className="w-5 h-5"
                        />
                        Sign in with Google
                    </button>
                    <button
                        type="button"
                        className=" cursor-pointer w-full flex items-center text-[#1F2937] font-medium justify-center gap-2 border border-[#D1D5DB] rounded-lg py-2 hover:bg-gray-100 transition"
                    >
                        <img
                            src="/icon/FacebookIcon.svg"
                            alt="Facebook"
                            className="w-5 h-5"
                        />
                        Sign in with Facebook
                    </button>
                </div>

                {/* Divider */}
                <div className="flex items-center my-6">
                    <div className="flex-grow border-t border-[#6B7280]"></div>
                    <span className="px-3 text-sm text-[#6B7280]">
                        Or sign in with email
                    </span>
                    <div className="flex-grow border-t border-[#6B7280]"></div>
                </div>

                {/* Form */}
                <form className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-[#374151] mb-2">
                            Email <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full mt-1 px-4 py-3 border border-[#D1D5DB] rounded-xl font-normal focus:ring-2 focus:ring-blue-500 outline-none placeholder:text-[#9CA3AF] text-sm"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-[#374151] mb-2">
                            Password <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            className="w-full mt-1 px-4 py-3 border border-[#D1D5DB] rounded-xl font-normal focus:ring-2 focus:ring-blue-500 outline-none placeholder:text-[#9CA3AF] text-sm"
                        />
                    </div>

                    {/* Remember me + Forgot */}
                    <div className="flex items-center justify-between text-sm">
                        <label className="flex items-center gap-2 text-[#374151] font-normal">
                            <input
                                type="checkbox"
                                className="h-4 w-4 rounded-md border border-[#D1D5DB] accent-blue-600"
                            />
                            Remember me
                        </label>

                        <a
                            href="#"
                            className="text-[#1F2937] hover:underline font-medium"
                        >
                            Forgot password?
                        </a>
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        className="cursor-pointer w-full bg-blue-600 text-white py-[12px] rounded-lg font-medium hover:bg-blue-700 transition"
                    >
                        Login
                    </button>
                </form>

                {/* Footer */}
                <p className="text-center text-sm text-gray-600 mt-6">
                    Don’t have an account?{' '}
                    <Link
                        href="/register"
                        className="text-[#374151] font-medium hover:underline"
                    >
                        Sign Up
                    </Link>
                </p>
            </div>
        </div>
    );
}
