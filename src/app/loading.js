

import '@/app/globals.css'

import React from 'react';

export default function Loading() {
    return (
      <div 
        className="fixed inset-0 z-[9999] flex items-center justify-center pointer-events-none"
        style={{ 
          backgroundColor: '#18375d',
          position: 'fixed',
          zIndex: 9999,
          isolation: 'isolate'
        }}
      >
        <span className="loader pointer-events-auto"></span>
      </div>
    );
  }