type Props = {
  title?: string;
  subtitle?: string;
}

const Header = ({ title, subtitle }: Props) => {
  return (
    <header>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <hr></hr>
    </header>
  )
}
export default Header