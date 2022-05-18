import { useCallback } from "react"
import ResponseJSON from "../../../@types/ResponseJSON";
import API from "../../api/api";
import Section from "../../components/Section"

const ListUsers = () => {
  const deleteUserButton = useCallback(async () => {
    const response: ResponseJSON = await API.delete('user').json()
  }, []);
  const blockUserButton = useCallback(async () => {
    const response: ResponseJSON = await API.patch('user').json()
  }, []);
  return (
    <Section title="List of all users">
      <div className="user-table-container">
        <table>
          <thead>
            <tr>
              <td>Name</td>
              <td>Email</td>
              <td>Active</td>
              <td>Block</td>
              <td>Delete</td>
            </tr>
          </thead>
          <tbody>
          </tbody>
        </table>
      </div>
    </Section>
  )
}

export default ListUsers