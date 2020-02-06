import React from 'react';
import Categories from '../components/Categories';
import NewsList from '../components/NewsList';

const NewPages = ({match}) => {
  // 카테고리가 선택되지 않았다면, 기본값 all로 설정
  const category = match.params.category || 'all';

  return (
    <>
      <Categories />
      <NewsList category={category} />
    </>
  );
};

export default NewPages;