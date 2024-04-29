export function Footer() {
  return (
    <footer className="mt-auto max-w-4xl text-center mx-auto px-4 sm:px-6 lg:px-8">
      <p className="text-sm text-gray-600 dark:text-neutral-600">
        {new Date().getFullYear()} - App de Previsão do Tempo
      </p>

      <p className="text-sm text-gray-600 dark:text-neutral-600">
        Aplicação criada com ❤️ por:{" "}
        <a
          className="text-gray-800 decoration-2 hover:underline font-semibold dark:text-neutral-600"
          href="https://github.com/Eronrhcp"
          target="_blank"
        >
          Eron Oliveira
        </a> e {' '}
        <a
          className="text-gray-800 decoration-2 hover:underline font-semibold dark:text-neutral-600"
          href="https://github.com/lmdvlpr"
          target="_blank"
        >
          Lucas Mota
        </a>
      </p>
    </footer>
  )
}