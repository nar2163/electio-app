import * as React from 'react'

interface DataItems {
  data: string
}

const MainPage: React.FC = () => {
  const [data, setData] = React.useState<DataItems[]>()

  React.useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const data = await fetch('/mainPage')
      const dataItems = await data.json()
      setData(dataItems)
    } catch {
      console.error('error fetching data')
    } finally {
      // leave undefined to register as error
    }
  }
  return <div>{data && data[0].data}</div>
}

export default MainPage
