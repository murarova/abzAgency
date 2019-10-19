import React from 'react';
import Select from 'react-select';
import styles from './Selector.module.css';

const options = [
  { value: 'Front-End Developer', label: 'Front-End Developer' },
  { value: 'FullStack Developer', label: 'FullStack Developer' },
  { value: 'DevOps Engineer', label: 'DevOps Engineer' }
];

const customStyles = {
  container: provided => ({
    ...provided,
    width: 290,
    height: 56
  }),
  control: provided => ({
    ...provided,
    // none of react-select's styles are passed to <Control />
    width: 290,
    height: 56
  })
};

const Selector = () => (
  <div className={styles.selectorWrap}>
    <Select
      options={options}
      defaultValue={{ value: 'Select your position', label: 'Select your position' }}
      styles={customStyles}
    />
  </div>
);

export default Selector;
