interface WeatherInfoProps {
  title: string;
  children: React.ReactNode
}

export function WeatherInfo({ title, children }: WeatherInfoProps) {
  return (
    <div className="flex flex-col items-center justify-center">
      <p className="text-xs">{title}</p>
      <div className="flex items-center">
        {children}
      </div>
    </div>
  )
}