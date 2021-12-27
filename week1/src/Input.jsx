import React from 'react';

export default function Input({ value, onClick, onChange }) {
  return(
    <p>
      <input 
        type="text" 
        placeholder="할일을 입력해 주세요"
        value={value}
        onChange={onChange}
      />
      <button type="button" onClick={onClick}>추가</button>
    </p>
  );
}
