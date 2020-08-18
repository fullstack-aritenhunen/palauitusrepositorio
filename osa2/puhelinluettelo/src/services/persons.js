import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'


const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
  }
  
const create = personsObject => {
  const request = axios.post(baseUrl, personsObject)
  return request.then(response => response.data)
}

const deleteNumber = (id) => {
  console.log(id);
    const request = axios.delete(`${baseUrl}/${id}`)
    return request.then(response => request.data)
}

const update = (id, changedNumber) => {

    const request = axios.put(`${baseUrl}/${id}`, changedNumber)
    return request.then(response => response.data)
  }

export default { getAll, create, deleteNumber, update}