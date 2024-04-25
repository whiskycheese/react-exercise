import users from "./table";

const Table = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>lastName</th>
          <th>firstName</th>
          <th>lastNameKana</th>
          <th>firstNameKana</th>
        </tr>
      </thead>
      <tbody>
        {users.map(
          ({ ID, lastName, firstName, lastNameKana, firstNameKana }) => (
            <tr key={ID}>
              <td>{ID}</td>
              <td>{lastName}</td>
              <td>{firstName}</td>
              <td>{lastNameKana}</td>
              <td>{firstNameKana}</td>
            </tr>
          )
        )}
      </tbody>
    </table>
  );
};

export default Table;
