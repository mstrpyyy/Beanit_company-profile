'use client'

import { useEffect } from 'react';
import React from 'react'

export default function PageLocator({store}: { store:string}) {
  useEffect(() => {
    localStorage.removeItem('activeButton');
    localStorage.setItem('activeButton', store);
  }, [store]);

  return (
    <div>
    </div>
  )
}
