import React from 'react';

export default function Item({ task: {id, title}, onClickDelete }) {
  return (
    <li>
      힘내요!:
      {id}
      -
      {title}
      <button type="button" onClick={() => onClickDelete(id)}>
        Done
      </button>
    </li>
  );
}
