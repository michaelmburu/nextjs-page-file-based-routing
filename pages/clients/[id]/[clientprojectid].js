import { useRouter } from 'next/router'
const SelectedClientProjectPage = () => {
  const router = useRouter()
  console.log(router)
  return (
    <>
      <h1>The project page for a specific project for a specific client</h1>
    </>
  )
}

export default SelectedClientProjectPage
