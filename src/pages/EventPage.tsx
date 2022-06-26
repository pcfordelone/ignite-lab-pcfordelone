import { Student } from 'phosphor-react'
import { useParams } from 'react-router-dom'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Sidebar } from '../components/Sidebar'
import { Video } from '../components/Video'

export const EventPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>()

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex flex-1">
        {slug ? (
          <Video lessonSlug={slug} />
        ) : (
          <div className="flex-1 flex flex-col justify-between">
            <div className="bg-black flex justify-between">
              <div className="h-full w-full max-w-[1100px] max-h-[70vh] aspect-video border border-gray-500 flex flex-col items-center justify-center">
                <Student size={128} />
                <p className="text-2xl">Selecione uma aula ao lado</p>
              </div>
            </div>

            <Footer />
          </div>
        )}
        <Sidebar />
      </main>
    </div>
  )
}
