export function Footer() {
  return (
    <footer className="mt-auto max-w-4xl text-center mx-auto px-4 sm:px-6 lg:px-8">
      <p className="text-xs text-gray-600 dark:text-neutral-200">
        {new Date().getFullYear()} - App de Previsão do Tempo
      </p>

      <p className="text-xs text-gray-600 dark:text-neutral-200">
        Aplicação criada com ❤️ por:{" "}
        <a
          className="text-gray-800 decoration-2 hover:underline font-bold dark:text-neutral-200"
          href="https://github.com/Eronrhcp"
          target="_blank"
        >
          Eron Oliveira
        </a> e {' '}
        <a
          className="text-gray-800 decoration-2 hover:underline font-bold dark:text-neutral-200"
          href="https://github.com/lmdvlpr"
          target="_blank"
        >
          Lucas Mota
        </a>
      </p>
    </footer>
  )
}