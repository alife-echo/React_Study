import { useState } from 'react'
type Props = {
  onSubmit: (title: string, body: string) => void
}

export const PostForm = ({ onSubmit }: Props) => {
  const [title, setTitle] = useState<string>('')
  const [body, setBody] = useState<string>('')

  const sendPost = async () => {
    if (title && body) {
      onSubmit(title, body)
    }
    else {
      alert('Preencha os campos corretamente')
    }

  }
  return (
    <div className="w-2/5  mt-5  bg-[#2F3136] p-5 rounded-md flex  flex-col">
      <h2 className="font-bold text-white ">ADICIONAR POST</h2>
      <input
        type='text'
        placeholder="Digite um título" className="mt-5 p-3 rounded-md  outline-none"
        value={title !== '' ? title : ''}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
      />
      <textarea
        className="mt-5 outline-none rounded-md p-5"
        placeholder="Digite o Texto"
        value={body !== '' ? body : ''}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setBody(e.target.value)}
      ></textarea>
      <button
        className="mt-5 text-white font-bold bg-black rounded-md p-3 hover:bg-amber-600 hover:duration-300 duration-300"
        onClick={sendPost}>ADICIONAR</button>
    </div>
  )
}