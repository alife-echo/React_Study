type Props = {
  data: {
    name: string,
    age: number
  }
}
const Pessoa = ({ data }: Props) => {
  return (
    <li>
      {data.name} - {data.age} anos.
    </li>
  )
}
export default Pessoa