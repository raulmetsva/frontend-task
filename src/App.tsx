import { useState } from 'react';

import DeleteModal from './components/DeleteModal/DeleteModal';

export function App() {
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);

  const showDeleteModalHandler = () => {
    setDeleteModalVisible(true);
  };

  const hideDeleteModalHandler = () => {
    setDeleteModalVisible(false);
  };

  return (
    <>
      <h1>Frontend task</h1>
      <button onClick={showDeleteModalHandler}>Open modal</button>
      {deleteModalVisible && <DeleteModal onClose={hideDeleteModalHandler} />}
    </>
  );
}
