interface MainProps {
  title?: string
  description?: string
}

export default function Main({
  title = 'React Avançado',
  description = 'TypeScript, ReactJS, NextJS e Tailwind'
}: MainProps) {
  return (
    <main className="bg-[#06092b] text-white w-full h-full p-12 text-center flex flex-col items-center">
      <h1 className="text-[2.5rem] font-bold">{title}</h1>
      <p className="text-[2rem] font-normal">{description}</p>
    </main>
  )
}
