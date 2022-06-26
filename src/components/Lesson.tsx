import { CheckCircle, Lock } from "phosphor-react";
import { isPast, format } from "date-fns";
import ptBrLocalw from "date-fns/locale/pt-BR";
import { Link, useParams } from "react-router-dom";
import classNames from "classnames";

interface ILessonProps {
  title: string;
  lessonSlug: string;
  availableAt: Date;
  type: "live" | "class";
}

export const Lesson: React.FC<ILessonProps> = ({
  title,
  lessonSlug,
  availableAt,
  type,
}: ILessonProps) => {
  const { slug } = useParams();
  const isLessonAvailable: boolean = isPast(availableAt);

  const isActiveLesson: boolean = slug === lessonSlug;

  return (
    <Link to={`/event/lesson/${lessonSlug}`} className="group">
      <span className="text-gray-300">
        {format(availableAt, "EEEE' • 'dd' de 'LLLL' de 'yyyy' • 'k'h'mm", {
          locale: ptBrLocalw,
        })}
      </span>

      <div
        className={classNames(
          "rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500 transition-colors",
          {
            "bg-green-500": isActiveLesson,
          }
        )}
      >
        <header className="flex items-center justify-between">
          {isLessonAvailable ? (
            <span
              className={classNames(
                "flex items-center gap-2 text-sm font-medium",
                {
                  "text-white": isActiveLesson,
                  "text-blue-500": !isActiveLesson,
                }
              )}
            >
              <CheckCircle size={20} />
              Conteúdo Liberado
            </span>
          ) : (
            <span className="flex items-center gap-2 text-sm text-orange-500 font-medium">
              <Lock size={20} />
              Em breve
            </span>
          )}
          <span
            className={classNames(
              "text-xs uppercase rounded py[2px] px-2 text-white border font-bold",
              {
                "border-white": isActiveLesson,
                "border-green-300": !isActiveLesson,
              }
            )}
          >
            {type === "live" ? "Ao vivo" : "Aula prática"}
          </span>
        </header>

        <strong
          className={classNames("mt-5 block", {
            "text-white": isActiveLesson,
            "text-gray-200": !isActiveLesson,
          })}
        >
          {title}
        </strong>
      </div>
    </Link>
  );
};
