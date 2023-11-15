"use client";
import React from 'react'

function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
    <small className="mb-2 block text-xs">
      &copy; 2023 Ahmed Mohamed. All rights reserved.
    </small>
    <div className="text-xs">
      <span className="font-semibold">About this website:</span> built with
      React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS,
      Framer Motion, React Email & Resend, Vercel hosting.
    </div>
  </footer>
  )
}

export default Footer