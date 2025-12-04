import React from "react";
import { motion } from "framer-motion";

export default function BirthdaySite() {
  return (
    <div className="min-h-screen bg-pink-50 text-pink-900 antialiased">
      <header className="py-6 bg-pink-100 shadow-sm sticky top-0 z-40 text-center">
        <h1 className="text-2xl font-bold tracking-wide">Happy Birthday, My Love 🎂❤️</h1>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-12">
        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="text-center">
          <h2 className="text-4xl font-extrabold text-pink-700">To the one who owns my heart</h2>
          <p className="mt-4 text-pink-700 text-lg">A small surprise, made with love and made just for you. 💕</p>
          <div className="mt-8 w-full overflow-hidden rounded-2xl shadow-lg border border-pink-200">
            <img src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=60" className="w-full object-cover" />
          </div>
        </motion.section>

        <section className="mt-16 bg-white shadow-md rounded-2xl p-6 border border-pink-200">
          <h3 className="text-xl font-semibold text-pink-700">My Letter for You</h3>
          <p className="mt-4 leading-relaxed text-pink-800">
            My love, today is your special day, but every day with you already feels special. Thank you for being the brightest part of my life—my safe place, my joy, and my reason to smile even when things get heavy.
          </p>
          <p className="mt-4 leading-relaxed text-pink-800">
            I made this little website for you because you deserve something unique, something made from the heart. I hope this small surprise makes you smile, even just a little.
          </p>
        </section>

        <section className="mt-12 bg-white shadow-md rounded-2xl p-6 border border-pink-200">
          <h3 className="text-xl font-semibold text-pink-700">Another Message From Me</h3>
          <p className="mt-4 leading-relaxed text-pink-800">
            You inspire me every single day with your strength, kindness, and warmth. I’m so grateful for every moment I get to spend with you—your laugh, your voice, your hugs, your existence… everything about you is a blessing to me.
          </p>
          <p className="mt-4 leading-relaxed text-pink-800">
            I love you more than words can ever say, but I hope this surprise website brings you even a piece of the happiness you bring into my life.
          </p>
        </section>

        <section className="mt-16">
          <h3 className="text-2xl font-bold text-pink-700 mb-4 text-center">Our Memories ❤️</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[1,2,3,4].map((i)=> (
              <div key={i} className="rounded-xl overflow-hidden shadow border border-pink-200">
                <img src={`https://picsum.photos/seed/bday${i}/800/600`} className="w-full h-48 object-cover" />
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 bg-pink-100 shadow-inner rounded-2xl p-6 border border-pink-200 text-center">
          <h3 className="text-2xl font-bold text-pink-700">I Love You Always</h3>
          <p className="mt-4 text-pink-800 leading-relaxed">
            No matter what happens, no matter where life takes us, I will always choose you. You deserve the world, my love, and I will spend my life trying to give you as much of it as I can.
          </p>
          <p className="mt-4 text-pink-800 font-semibold text-lg">Happy Birthday, my heart. ❤️</p>
        </section>

        <footer className="mt-20 py-6 text-center text-pink-700 text-sm opacity-80">
          Made with love — just for you.
        </footer>
      </main>
    </div>
  );
}
