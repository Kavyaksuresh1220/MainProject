import React from 'react'
import Header from '../components/Header'

function Landing() {
  return (
    <>
      <Header />

      {/* Page background + animations */}
      <style>{`
        body {
          background: radial-gradient(
            1200px 600px at 20% 10%,
            #f8fafc,
            #e2e8f0
          );
        }

        .dark body {
          background: radial-gradient(
            1200px 600px at 20% 10%,
            #020617,
            #0f172a
          );
        }

        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(3deg); }
        }

        @keyframes float-reverse {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(20px) rotate(-3deg); }
        }

        @keyframes spin-float {
          0% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(180deg); }
          100% { transform: translateY(0) rotate(360deg); }
        }
      `}</style>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20
                          grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

        {/* Left Content */}
        <div className="text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight
                         text-slate-800 dark:text-white">
            All essential <br className="hidden sm:block" />
            services near you <br className="hidden sm:block" />
            in one place
          </h1>

          <p className="text-slate-600 dark:text-slate-300
                        mt-6 max-w-md mx-auto lg:mx-0">
            Laundry, grocery, food delivery, medicine, waste management,
            and hospital appointments — fast, reliable, and nearby.
          </p>

          <div className="mt-8 flex justify-center lg:justify-start gap-4">
            <button className="px-6 py-3 rounded-lg shadow transition
                               bg-slate-900 text-white hover:bg-slate-800
                               dark:bg-indigo-600 dark:hover:bg-indigo-500">
              Get Started
            </button>

            <button className="px-6 py-3 rounded-lg transition
                               border border-slate-300 text-slate-700
                               hover:bg-slate-100
                               dark:border-slate-600 dark:text-slate-300
                               dark:hover:bg-slate-800">
              View Services
            </button>
          </div>
        </div>

        {/* Right Animation Cards */}
        <div className="relative hidden md:flex items-center justify-center h-[420px]">

          {/* Laundry Card */}
          <div
            className="absolute right-10 top-0 w-36 h-36
                       bg-white/80 dark:bg-slate-800/80
                       backdrop-blur-lg
                       border border-slate-200 dark:border-slate-700
                       rounded-xl shadow-xl
                       flex items-center justify-center"
            style={{ animation: 'float 6s ease-in-out infinite' }}
          >
            <span className="text-sm font-semibold text-slate-600 dark:text-slate-200">
              🧺 Laundry
            </span>
          </div>

          {/* Healthcare Card */}
          <div
            className="absolute right-24 top-28 w-40 h-40
                       bg-white/70 dark:bg-slate-800/70
                       backdrop-blur-lg
                       border border-slate-200 dark:border-slate-700
                       rounded-xl shadow-xl
                       flex items-center justify-center"
            style={{ animation: 'float-reverse 7s ease-in-out infinite' }}
          >
            <span className="text-sm font-semibold text-slate-600 dark:text-slate-200">
              🏥 Healthcare
            </span>
          </div>

          {/* Center Icon */}
          <div
            className="w-28 h-28 rounded-full
                       bg-gradient-to-br
                       from-slate-100 to-slate-300
                       dark:from-slate-700 dark:to-slate-900
                       shadow-2xl flex items-center justify-center"
            style={{ animation: 'spin-float 8s ease-in-out infinite' }}
          >
            <span className="text-4xl">📍</span>
          </div>

        </div>
      </section>
    </>
  )
}

export default Landing
