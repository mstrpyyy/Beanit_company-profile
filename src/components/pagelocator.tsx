'use client'

import { useEffect } from 'react';
import React from 'react'

export default function PageLocator({store}: { store:string}) {
  useEffect(() => {
    localStorage.setItem('activeButton', store);
  });

  return (
    <div>
    </div>
  )
}
