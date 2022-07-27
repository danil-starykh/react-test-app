import React from 'react';
import MyInput from '../UI/input/MyInput';
import MySelect from '../UI/select/MySelect';

const PostFilter = ({filter, setFilter}) => {
	return (
		<>
			<MyInput 
                        value={filter.search}
                        type="text" 
                        onChange={(e) => setFilter({...filter, search: e.target.value})} 
                        placeholder="Найти пост" 
                  />
			<MySelect
				value={filter.sort}
				onOptionSelect={selectedSort => setFilter({...filter, sort: selectedSort})}
				defaultValue="Сортировка"
				options={[ { value: 'title', name: 'По названию' }, { value: 'body', name: 'По описанию' } ]}
			/>
		</>
	);
};

export default PostFilter;
