import { FooterLogo } from './FooterLogo'

export const Footer: React.FC = () => {
  return (
    <div className="w-full bg-black-500 p-5 text-gray-300 flex item-center justify-between border-t border-gray-600">
      <div className="flex items-center gap-5">
        <FooterLogo />
        <p>Rocketseat - Todos os direitos reservados</p>
      </div>
      <p>Política de privacidade</p>
    </div>
  )
}
