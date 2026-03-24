'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Send, CheckCircle, Loader2 } from 'lucide-react'

const contactSchema = z.object({
  name: z.string().min(2, 'Imię musi mieć co najmniej 2 znaki'),
  email: z.string().email('Podaj prawidłowy adres email'),
  phone: z.string().optional(),
  subject: z.enum(
    ['Konsultacja kariery', 'Pakiet rozwoju', 'Przygotowanie do zmiany', 'Inne'],
    { required_error: 'Wybierz temat wiadomości' }
  ),
  message: z.string().min(10, 'Wiadomość musi mieć co najmniej 10 znaków'),
})

type ContactFormData = z.infer<typeof contactSchema>

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsLoading(true)
    // Simulate network request — backend do dodania przez klienta
    await new Promise((resolve) => setTimeout(resolve, 1200))
    console.log('Formularz kontaktowy:', data)
    setIsLoading(false)
    setIsSubmitted(true)
    reset()
  }

  if (isSubmitted) {
    return (
      <div className="text-center py-16 px-8">
        <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-8 h-8 text-green-500" />
        </div>
        <h3 className="text-2xl font-semibold text-[#1A1A1A] mb-3">
          Wiadomość wysłana!
        </h3>
        <p className="text-gray-500 mb-8 leading-relaxed">
          Dziękuję za kontakt. Odpiszę najszybciej jak to możliwe,
          zazwyczaj w ciągu 24 godzin.
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="text-gold hover:text-gold-dark font-medium transition-colors duration-200 underline underline-offset-4"
        >
          Wyślij kolejną wiadomość
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
      {/* Name */}
      <div>
        <label htmlFor="name" className="form-label">
          Imię <span className="text-red-400">*</span>
        </label>
        <input
          id="name"
          type="text"
          autoComplete="given-name"
          placeholder="Twoje imię"
          className={`form-input ${errors.name ? 'border-red-400 focus:ring-red-400' : ''}`}
          {...register('name')}
          aria-describedby={errors.name ? 'name-error' : undefined}
        />
        {errors.name && (
          <p id="name-error" className="form-error" role="alert">
            {errors.name.message}
          </p>
        )}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="form-label">
          Email <span className="text-red-400">*</span>
        </label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          placeholder="twoj@email.pl"
          className={`form-input ${errors.email ? 'border-red-400 focus:ring-red-400' : ''}`}
          {...register('email')}
          aria-describedby={errors.email ? 'email-error' : undefined}
        />
        {errors.email && (
          <p id="email-error" className="form-error" role="alert">
            {errors.email.message}
          </p>
        )}
      </div>

      {/* Phone (optional) */}
      <div>
        <label htmlFor="phone" className="form-label">
          Telefon{' '}
          <span className="text-gray-400 font-normal">(opcjonalnie)</span>
        </label>
        <input
          id="phone"
          type="tel"
          autoComplete="tel"
          placeholder="+48 000 000 000"
          className="form-input"
          {...register('phone')}
        />
      </div>

      {/* Subject */}
      <div>
        <label htmlFor="subject" className="form-label">
          Temat <span className="text-red-400">*</span>
        </label>
        <select
          id="subject"
          className={`form-input bg-white ${errors.subject ? 'border-red-400 focus:ring-red-400' : ''}`}
          defaultValue=""
          {...register('subject')}
          aria-describedby={errors.subject ? 'subject-error' : undefined}
        >
          <option value="" disabled>
            Wybierz temat
          </option>
          <option value="Konsultacja kariery">Konsultacja kariery</option>
          <option value="Pakiet rozwoju">Pakiet rozwoju kariery</option>
          <option value="Przygotowanie do zmiany">Przygotowanie do zmiany pracy</option>
          <option value="Inne">Inne</option>
        </select>
        {errors.subject && (
          <p id="subject-error" className="form-error" role="alert">
            {errors.subject.message}
          </p>
        )}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="form-label">
          Wiadomość <span className="text-red-400">*</span>
        </label>
        <textarea
          id="message"
          rows={5}
          placeholder="Opisz krótko swoją sytuację lub zadaj pytanie..."
          className={`form-input resize-none ${errors.message ? 'border-red-400 focus:ring-red-400' : ''}`}
          {...register('message')}
          aria-describedby={errors.message ? 'message-error' : undefined}
        />
        {errors.message && (
          <p id="message-error" className="form-error" role="alert">
            {errors.message.message}
          </p>
        )}
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={isLoading}
        className="w-full flex items-center justify-center gap-3 bg-gold text-white py-4 rounded-full font-semibold text-sm hover:bg-gold-dark transition-all duration-200 shadow-sm hover:shadow-md disabled:opacity-70 disabled:cursor-not-allowed"
        aria-live="polite"
      >
        {isLoading ? (
          <>
            <Loader2 size={18} className="animate-spin" />
            Wysyłanie...
          </>
        ) : (
          <>
            <Send size={18} />
            Wyślij wiadomość
          </>
        )}
      </button>

      <p className="text-xs text-gray-400 text-center">
        Odpowiem w ciągu 24 godzin w dni robocze.
      </p>
    </form>
  )
}
