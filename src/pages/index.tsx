import type { NextPage } from 'next'
import { Input } from '../components/Input'

const Home: NextPage = () => {
  return (
    <div className="bg-red-400 w-screen h-screen flex items-center justify-center flex-col overflow-hidden">
      <div className="w-[28.75rem] h-2/4 bg-gray-800 rounded flex items-center justify-center">
        <form className="w-4/5" action="">
          <div className="mb-4">
            <Input name="Usuario" type="text" label="Usuario" />
          </div>

          <div>
            <Input name="Senha" type="password" label="Senha" />
          </div>

          <button
            className="w-full h-11 bg-blue-700 transition ease-in transition-duration: 750ms hover:bg-blue-800 py-1 mt-6 rounded text-slate-100"
            type="submit"
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  )
}

export default Home
