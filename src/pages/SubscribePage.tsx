import { ChangeEvent, FormEvent, useState } from 'react'
import { useCreateSubscriberMutation } from '../graphql/generated'
import { useNavigate } from 'react-router-dom'
import { Logo } from '../components/Logo'
import EventFooterImg from '/scr/assets/home-code_mockup.png'
import { Footer } from '../components/Footer'

export const SubscribePage = () => {
  const navigate = useNavigate()

  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')

  const [createSubscriber, { loading }] = useCreateSubscriberMutation()

  const handleSubscribe = async (event: FormEvent) => {
    event.preventDefault()

    await createSubscriber({
      variables: {
        name,
        email,
      },
    })

    navigate('/event')
  }

  return (
    <div className="min-h-screen bg-home bg-cover bg-no-repeat flex flex-col items-center">
      <div className="w-full max-w-[1100px] flex items-center justify-between mt-20 mx-auto">
        <div className="max-w-[640px]">
          <Logo />
          <h1 className="mt-8 text-[2.5rem] leading-tight">
            Construa uma{' '}
            <strong className="text-blue-500">aplicação completa</strong>, do
            zero, com <strong className="text-blue-500">React</strong>
          </h1>
          <p className="mt-4 text-gray-200 leading-relaxed">
            Em apenas uma semana você vai dominar na prática uma das tecnologias
            mais utilizadas e com alta demanda para acessar as melhores
            oportunidades do mercado.
          </p>
        </div>
        <div className="p-8 bg-gray-700 border border-gray-500 rounded ">
          <strong className="text-2xl mb-6 block">
            Increva-se gratuitamente
          </strong>

          <form
            onSubmit={handleSubscribe}
            className="flex flex-col gap-2 w-full"
          >
            <input
              type="text"
              placeholder="Seu nome completo"
              className="bg-gray-900 rounded px-5 h-14"
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                setName(event.target.value)
              }
            />
            <input
              type="email"
              placeholder="Seu melhor e-mail"
              className="bg-gray-900 rounded px-5 h-14"
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                setEmail(event.target.value)
              }
            />

            <button
              type="submit"
              disabled={loading}
              className="bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50"
            >
              Garantir minha vaga
            </button>
          </form>
        </div>
      </div>
      <img src={EventFooterImg} className="mt-10" alt="" />

      <Footer />
    </div>
  )
}
