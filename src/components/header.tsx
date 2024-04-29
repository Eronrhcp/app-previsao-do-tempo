export function Header() {
  return (
    <div className='-mt-20 max-w-4xl w-full text-center mx-auto px-4 sm:px-6 lg:px-8'>
      <img
        src='logo.gif'
        className='h-auto mx-auto'
        width={116}
        height={32}
        alt='Logo do App de Previsão do Tempo'
      />
      <h1 className='text-3xl font-bold text-gray-800 sm:text-4xl dark:text-white'>
        Previsão do Tempo
      </h1>
      <p className='mt-3 text-gray-600 dark:text-neutral-400'>
        O aplicativo utiliza a API do <a
          href='https://openweathermap.org/'
          target='_blank'
          className='font-semibold hover:text-orange-600'
        >
          OpenWeatherMap
        </a>{' '}
        para obter as previsões do tempo.
      </p>
    </div>
  )
}
