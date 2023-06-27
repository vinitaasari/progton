import { Button, InputAdornment, InputLabel, Typography } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import { makeStyles } from '@mui/styles';
import { Formik } from 'formik';
import * as React from 'react';
import images from "react-payment-inputs/images";
import CreditImage from "./png-transparent-debit-card-credit-card-computer-icons-bank-atm-card-atm-miscellaneous-angle-text-thumbnail.png";

import { usePaymentInputs } from "react-payment-inputs";

import Grid from '@mui/material/Grid';



const useStyles = makeStyles({
    inputs: {
        lineHeight: '2', fontSize: '14px', color: '#71797E', fontWeight: 500
    }
});

export default function FormDialog() {
    const classes = useStyles();

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const {
        meta,
        getCardNumberProps,
        getExpiryDateProps,
        getCVCProps,
        getCardImageProps
    } = usePaymentInputs();

    return (
        <div>
            {/* <Button variant="outlined" onClick={handleClickOpen}>
                Update Payment
            </Button> */}
            <Formik
                initialValues={{ name: '', expiry: '', number: '', cvv: '' }}
                validate={values => {
                    const errors = {};
                    if (!values.name) {
                        errors.name = 'Required';
                    }
                    if (!values.expiry) {
                        errors.expiry = 'Required';

                    }
                    if (!values.number) {
                        errors.number = 'Required';

                    }
                    if (!values.cvv) {
                        errors.cvv = 'Required';

                    }

                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {

                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    /* and other goodies */
                }) => (
                    <Dialog open={true} onClose={handleClose} maxWidth="xs">

                        <div style={{padding:'10px'}}>
                            <DialogTitle>
                                <img src={CreditImage}></img>
                                <Typography style={{ fontSize: '18px', fontWeight: 600, lineHeight: '3', fontFamily: "Lato", }}>
                                    Update payment method
                                </Typography>

                                <Typography style={{ fontSize: '14px', fontWeight: 550, color: '#899499', fontFamily: "Lato" }}>
                                    Update your card details.
                                </Typography>


                            </DialogTitle>


                            <DialogContent>
                                <Grid container spacing={2}>
                                    <Grid item xs={8}>
                                        <InputLabel style={{ lineHeight: '2', fontSize: '14px', color: '#5A5A5A', fontWeight: 500 }}>Name on card</InputLabel>

                                        <TextField
                                            InputProps={{
                                                sx: { borderRadius: '6px' },
                                                style: {
                                                    fontWeight: 500
                                                }
                                            }}
                                            name='name'
                                            onChange={handleChange}

                                            value={values.name}
                                            error={
                                                errors.name && touched.name && errors.name
                                            }
                                            helperText={
                                                errors.name && touched.name && errors.name
                                            }
                                            id="outlined-basic" variant="outlined" fullWidth size='small' />

                                    </Grid>
                                    <Grid item xs={4}>
                                        <InputLabel style={{ lineHeight: '2', fontSize: '14px', color: '#5A5A5A', fontWeight: 500 }}>Expiry</InputLabel>

                                        <TextField
                                            {...getExpiryDateProps({
                                                refKey: "inputRef",
                                                onChange: handleChange
                                            })}
                                            InputProps={{
                                                sx: { borderRadius: '6px' },
                                                style: {
                                                    fontWeight: 500
                                                }
                                            }}

                                            inputRef={getExpiryDateProps().ref}
                                            id="outlined-basic" variant="outlined" fullWidth size='small'
                                            name='expiry'
                                            // onChange={handleChange}

                                            value={values.expiry}
                                            error={
                                                errors.expiry && touched.expiry && errors.expiry
                                            }
                                            helperText={
                                                errors.expiry && touched.expiry && errors.expiry
                                            }

                                        />
                                    </Grid>
                                    <Grid item xs={8}>
                                        <InputLabel style={{ lineHeight: '2', fontSize: '14px', color: '#5A5A5A', fontWeight: 500 }}>Card number</InputLabel>

                                        <TextField
                                            {...getCardNumberProps({
                                                refKey: "inputRef",
                                                onChange: handleChange
                                            })}
                                            inputRef={getCardNumberProps().ref}
                                            id="outlined-basic" variant="outlined" fullWidth size='small'
                                            InputProps={
                                                {
                                                    startAdornment: (
                                                        <InputAdornment position="start">
                                                            <svg {...getCardImageProps({ images })} />
                                                        </InputAdornment>
                                                    ),
                                                    sx: { borderRadius: '6px' },
                                                    style: {
                                                        fontWeight: 500
                                                    }
                                                }}
                                            name='number'
                                            // onChange={handleChange}

                                            value={values.number}
                                            error={
                                                errors.number && touched.number && errors.number
                                            }
                                            helperText={
                                                errors.number && touched.number && errors.number
                                            }
                                        />
                                    </Grid>
                                    <Grid item xs={4}>
                                        <InputLabel style={{ lineHeight: '2', fontSize: '14px', color: '#5A5A5A', fontWeight: 500 }}>CVV</InputLabel>

                                        <TextField

                                            {...getCVCProps({
                                                refKey: "inputRef",
                                            })}
                                            type="password"
                                            inputRef={getCVCProps().ref}
                                            id="outlined-basic" variant="outlined" fullWidth size='small'
                                            InputProps={{
                                                sx: { borderRadius: '6px' },
                                                style: {
                                                    fontWeight: 500
                                                }
                                            }}
                                            name='cvv'
                                            onChange={handleChange}

                                            value={values.cvv}
                                            error={
                                                errors.cvv && touched.cvv && errors.cvv
                                            }
                                            helperText={
                                                errors.cvv && touched.cvv && errors.cvv
                                            }
                                        />
                                    </Grid>

                                </Grid>
                            </DialogContent>
                            <DialogActions style={{ padding: '25px' }}>
                                <Button variant='outlined' fullWidth size='large' onClick={handleClose}
                                    style={{ color: '#5A5A5A', borderRadius: '6px', borderColor: 'grey', textTransform: 'none' }}>
                                    <Typography style={{ fontWeight: 500 }}>Cancel</Typography></Button>


                                <Button variant="contained" fullWidth size="large"
                                    onClick={handleSubmit} style={{ background: '#7F00FF	', borderRadius: '6px', textTransform: 'none' }}>
                                    <Typography style={{ fontWeight: 500 }}>Update</Typography></Button>
                            </DialogActions>
                        </div>
                    </Dialog>
                )}


            </Formik>


        </div>
    );
}