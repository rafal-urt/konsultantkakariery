import { Camera } from 'lucide-react'

interface ImagePlaceholderProps {
  text?: string
  className?: string
  aspectRatio?: '3/4' | '4/3' | '1/1' | '16/9'
}

export default function ImagePlaceholder({
  text = 'Zdjęcie Eweliny',
  className = '',
  aspectRatio = '3/4',
}: ImagePlaceholderProps) {
  const aspectClasses = {
    '3/4': 'aspect-[3/4]',
    '4/3': 'aspect-[4/3]',
    '1/1': 'aspect-square',
    '16/9': 'aspect-video',
  }

  return (
    /* TODO: Zamień na prawdziwe zdjęcie */
    <div
      className={`relative bg-warm rounded-2xl overflow-hidden flex flex-col items-center justify-center ${aspectClasses[aspectRatio]} ${className}`}
      role="img"
      aria-label={text}
    >
      <div className="flex flex-col items-center gap-3 text-gray-400">
        <Camera size={40} strokeWidth={1.5} className="text-gold/40" />
        <span className="text-sm font-medium text-gray-400">{text}</span>
      </div>
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-warm/50 to-beige/50" />
    </div>
  )
}
