export function Form() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-r from-sky-500 to-indigo-500">
      <form>
        <input
          type="text"
          placeholder="Insira aqui a localidade que você deseja consultar"
          
        />
        <button type="submit">Pesquisar</button>
      </form>
    </div>
  )
}