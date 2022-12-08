import { useRouter } from 'next/router'
const ClientsProjectsPage = () => {
  const router = useRouter()
  console.log(router.query)

  const loadProjectHandler = () => {
    // load data
    router.push('/clients/max/projecta')
  }

  return (
    <div>
      <h1>The projects of a given client</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  )
}
export default ClientsProjectsPage
