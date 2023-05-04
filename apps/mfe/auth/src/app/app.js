import { useGetAllUserQuery } from '@workspace/redux/auth/demo-slice';
// import {DataTable} from '@workspace/compt/table'
// import {Button} from '@workspace/compt/button'
import { Button, Table } from '@workspace/components';
import { useEffect, useState } from 'react';

export function App() {
  const { data: user = [] } = useGetAllUserQuery();

  console.log(user);
  const [click, setClick] = useState(false);

  const save = () => {
    setClick(true);
  };
  const hide = () => {
    setClick(false);
  };

  //delete function
  const [del, setDel] = useState([]);

  useEffect(() => {
    setDel(user);
  }, [user]);

  console.table(del);
  const handleDelete = (e) => {
    setDel(del.filter((u) => u.id !== e));
  };

  return (
    <div>
      <h1> User Details</h1>
      {!click && <Button label="Show Table" handleClick={save} bgcolor='#3ddf87' />}
      {click && (
        <Table
          coloums={[
            { title: 'Id',     key: 'id' },
            { title: 'Name',   key: 'name' },
            { title: 'Email',  key: 'email' },
            { title: 'Phone',  key: 'phone' },
            { title: 'Action', key: 'action' },
          ]}
          row={del}
          handleClick={handleDelete}
        />
      )}
      {/* {click && ( <Table/>)} */}
      {click && <Button label="Hide Table" handleClick={hide} bgcolor='#3ddf87'/>}
    </div>
  );
}
export default App;
