import { Lesson } from './Lesson'
import { useGetLessonsQuery } from '../graphql/generated'

export const Sidebar: React.FC = () => {
  const { data } = useGetLessonsQuery()

  return (
    <aside className="w-[348px] bg-gray-700 p-6 border-l border-gray-600">
      <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
        Cronograma de Aulas
      </span>
      <div className="flex flex-col gap-8">
        {data?.lessons.map((lesson) => (
          <Lesson
            key={lesson.id}
            title={lesson.title}
            availableAt={new Date(lesson.availableAt)}
            type={lesson.lessonType}
            lessonSlug={lesson.slug}
          />
        ))}
      </div>
    </aside>
  )
}
