import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { contactSchema } from '@/lib/contact-schema'

const RECIPIENTS = [
  'Doradztwo.coaching@gmail.com',
  'rafal@urtate.pl',
  'piotr.dyjak@marsi.pl',
]

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.error('Brak zmiennej środowiskowej RESEND_API_KEY')
    return NextResponse.json(
      { error: 'Wysyłka wiadomości jest chwilowo niedostępna.' },
      { status: 500 }
    )
  }

  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Nieprawidłowe dane.' }, { status: 400 })
  }

  const parsed = contactSchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json(
      { error: 'Formularz zawiera błędy. Sprawdź wprowadzone dane.' },
      { status: 400 }
    )
  }

  const { name, email, phone, subject, message } = parsed.data

  const html = `
    <h2>Nowa wiadomość z formularza kontaktowego</h2>
    <p><strong>Imię:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Telefon:</strong> ${phone ? escapeHtml(phone) : '—'}</p>
    <p><strong>Temat:</strong> ${escapeHtml(subject)}</p>
    <p><strong>Wiadomość:</strong></p>
    <p style="white-space: pre-wrap;">${escapeHtml(message)}</p>
  `

  const resend = new Resend(apiKey)
  const { error } = await resend.emails.send({
    from: 'Formularz kontaktowy <formularz@konsultantkakariery.pl>',
    to: RECIPIENTS,
    replyTo: email,
    subject: `[konsultantkakariery.pl] ${subject} — ${name}`,
    html,
    text: [
      'Nowa wiadomość z formularza kontaktowego',
      `Imię: ${name}`,
      `Email: ${email}`,
      `Telefon: ${phone || '—'}`,
      `Temat: ${subject}`,
      '',
      message,
    ].join('\n'),
  })

  if (error) {
    console.error('Błąd Resend:', error)
    return NextResponse.json(
      { error: 'Nie udało się wysłać wiadomości. Spróbuj ponownie później.' },
      { status: 502 }
    )
  }

  return NextResponse.json({ ok: true })
}
