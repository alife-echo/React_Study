import { BlogTypesBody } from "../helpers/blog"
type Props = {
  data: BlogTypesBody

}
export const PostItem = ({ data }: Props) => {

  return (
    <>
      <div className='w-2/5  mt-5  bg-[#2F3136] p-5 rounded-md'>
        <h4 className="font-bold text-[#8F9296]">{(data.title).toUpperCase()}</h4>
        <small className="text-white">#{data.id} - Usuário:{data.userId}</small>
        <div className="text-white">{data.body}</div>
      </div>
    </>
  )


}