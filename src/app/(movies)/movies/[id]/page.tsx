import React from 'react';

export default function page({ params: { id } }: { params: { id: string } }) {
  console.log('props', id);
  return (
    <div>
      <h1>{id}Movies</h1>
    </div>
  );
}
