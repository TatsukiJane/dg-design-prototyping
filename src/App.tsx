import { Routes, Route, useParams, Navigate } from 'react-router-dom'
import Gallery from '@/pages/Gallery'
import { prototypes } from '@/prototypes/registry'

function PrototypeWrapper() {
  const { slug } = useParams<{ slug: string }>()
  const entry = prototypes.find((p) => p.slug === slug)
  if (!entry) return <Navigate to="/" replace />
  const { Component } = entry
  return <Component />
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Gallery />} />
      <Route path="/p/:slug/*" element={<PrototypeWrapper />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
