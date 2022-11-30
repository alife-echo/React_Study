type Props = {
  url: string
}
const Capture = ({ url }: Props) => {
  fetch(url).then(res => { return res.json })
  return (
    <p>{url}</p>
  )
}
export default Capture