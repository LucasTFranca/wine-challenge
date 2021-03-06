import axios from 'axios'

const baseUrl = 'https://wine-back-test.herokuapp.com'

export const getAllProducts = async () => {
  const { data } = await axios.get(`${baseUrl}/products`)

  return data
}
