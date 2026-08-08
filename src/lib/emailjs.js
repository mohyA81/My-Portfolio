import emailjs from '@emailjs/browser'

export const sendEmail = async (formData) => {
  const serviceId = import.meta.env.VITE_EMAIL_SERVICE_ID
  const templateId = import.meta.env.VITE_EMAIL_TEMPLATE_ID
  const publicKey = import.meta.env.VITE_EMAIL_PUBLIC_KEY

  return emailjs.send(serviceId, templateId, formData, publicKey)
}