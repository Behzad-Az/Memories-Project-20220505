import React, { FC } from 'react';

import useStyles from './styles';

interface Props {};

const Form: FC<Props> = () : JSX.Element => {
  const classes = useStyles();
  return (
    <h1>Form</h1>
  );
};

export default Form;