import React from 'react'

interface Navigation {
  id: number
  name: string
  desc: string
  subs: string[]
}

interface ChildProps {
  children: React.ReactNode
}

export type { Navigation, ChildProps }
