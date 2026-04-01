"use client";

export default function AccountPage() {
  return (
    <div className="max-w-sm mx-auto px-4 py-20">
      <h1 className="text-[14px] tracking-[0.15em] font-light text-[#111] text-center mb-12">
        Account
      </h1>

      <form className="space-y-5">
        <div>
          <label className="block text-[9px] tracking-[0.2em] uppercase text-[#bbb] mb-2">Email</label>
          <input type="email" placeholder="your@email.com" className="w-full border-b border-[#e5e5e5] pb-2 text-[12px] text-[#111] placeholder-[#ddd] focus:outline-none focus:border-[#111] transition-colors bg-transparent" />
        </div>
        <div>
          <label className="block text-[9px] tracking-[0.2em] uppercase text-[#bbb] mb-2">Password</label>
          <input type="password" placeholder="Enter password" className="w-full border-b border-[#e5e5e5] pb-2 text-[12px] text-[#111] placeholder-[#ddd] focus:outline-none focus:border-[#111] transition-colors bg-transparent" />
        </div>
        <button className="w-full bg-[#111] text-white py-3 text-[10px] tracking-[0.2em] uppercase hover:bg-[#333] transition-colors duration-300 mt-4">
          Sign In
        </button>
        <div className="text-center">
          <button className="text-[9px] text-[#bbb] hover:text-[#111] transition-colors">
            Forgot Password?
          </button>
        </div>
      </form>

      <div className="relative my-10">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-[#f0f0f0]" />
        </div>
        <div className="relative flex justify-center">
          <span className="bg-white px-3 text-[9px] tracking-[0.2em] uppercase text-[#ccc]">Or</span>
        </div>
      </div>

      <button className="w-full border border-[#e5e5e5] py-3 text-[10px] tracking-[0.2em] uppercase text-[#111] hover:border-[#111] transition-colors duration-300">
        Create Account
      </button>
    </div>
  );
}
