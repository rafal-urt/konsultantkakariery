import { z } from 'zod'

export const contactSchema = z.object({
  name: z.string().min(2, 'Imię musi mieć co najmniej 2 znaki'),
  email: z.string().email('Podaj prawidłowy adres email'),
  phone: z.string().optional(),
  subject: z.enum(
    ['Konsultacja kariery', 'Pakiet rozwoju', 'Przygotowanie do zmiany', 'Inne'],
    { required_error: 'Wybierz temat wiadomości' }
  ),
  message: z.string().min(10, 'Wiadomość musi mieć co najmniej 10 znaków'),
})

export type ContactFormData = z.infer<typeof contactSchema>
