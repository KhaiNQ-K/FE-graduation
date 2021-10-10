import { Box, Button, makeStyles, Paper, Typography } from '@material-ui/core';
import { InputField } from 'components/FormFields';
import { User } from 'models';
import React from 'react';
import { useForm } from 'react-hook-form';

export interface LoginFromProps {
  initialValue?: User;
  onSubmit?: (formValues: User) => void;
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundImage: 'linear-gradient(45deg, #8b5aed 0%, #78ebfc 100%)',
  },
  box: {
    width: '1000px',
    padding: theme.spacing(3),
    borderRadius: theme.spacing(2),
    boxShadow: '0 45px 63px rgba(0, 0, 0, 0.26)',
    backgroundColor: 'white',
  },
  side_form: {
    width: '400px',
    boxShadow: '0 45px 63px rgba(0, 0, 0, 0.26)',
  },
  main_form: {
    width: '600px',
    float: 'right',
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '30px',
  },
}));

export const LoginPage = ({ initialValue, onSubmit }: LoginFromProps) => {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<User>({
    defaultValues: initialValue,
  });
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box className={classes.box}>
        <Box className={classes.side_form}>Side form</Box>
        <Box className={classes.main_form}>
          <Typography className={classes.title}>Login Form</Typography>
          <Box>
            <InputField
              name="email"
              control={control}
              label="Email"
              placeholder="Enter your email"
            />
            <InputField
              name="password"
              control={control}
              type="password"
              label="Password"
              placeholder="Enter your password"
            />
          </Box>
          <Box mt={3}>
            <Button type="submit" variant="contained" color="primary">
              Login
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
