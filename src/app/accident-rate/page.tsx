import { useTranslations } from "next-intl"

export default function AccidentRate() {
  const  t  = useTranslations()
  return (
    <>
    <h1>Hello, AccidentRate Page!</h1>
    <h2>Ejemplo de traducción: {t('header')}</h2>
    </>
  )
}