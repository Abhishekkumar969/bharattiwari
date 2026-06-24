import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Bharat Tiwari',
    short_name: 'Bharat Tiwari',
    description: 'Anyay ke khilaf awaz uthayein. Hamari maangein padhein aur jan samarthan dein.',
    start_url: '/',
    display: 'standalone',
    background_color: '#050505',
    theme_color: '#050505',
    icons: [
      {
        src: '/images/bharattiwarijustice.png',
        sizes: '192x192 512x512',
        type: 'image/png',
      },
    ],
  }
}
