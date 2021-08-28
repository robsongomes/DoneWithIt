import React from 'react';
import { useFormikContext } from 'formik'

import AppTextInput from '../AppTextInput';
import ErrorMessage from './ErrorMessage';

function AppFormField({name, ...rest}) {
    const { setFieldTouched, handleChange, errors, touched } = useFormikContext()

    return (
        <>
            <AppTextInput                 
                onBlur={() => setFieldTouched(name)}
                onChangeText={handleChange(name)} 
                {...rest}               
            />
            <ErrorMessage visible={touched[name]} error={errors[name]} />  
        </>
    );
}

export default AppFormField;