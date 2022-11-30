import { ReactNode } from 'react'
type Props = {
  children: ReactNode
}

const Photo = ({ children }: Props) => {
  return (
    <>

      {children}

    </>

  )
}

export default Photo