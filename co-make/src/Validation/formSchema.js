import * as yup from 'yup';

const formSchema = yup.object().shape({
    username: yup.string().min(2,'Please enter a username').required('Please enter a username'),
    password: yup.string().min(6,'Please enter a valid password').required('Please enter a valid password'),
    // fullName: yup.string().min(3,'Please enter name that is longer than 2 characters').required('Please enter name that is longer than 2 characters'),
    phone: yup.number()
                .typeError("Please enter a valid phone number")
                .positive("A phone number can't start with a minus")
                .integer("A phone number can't include a decimal point")
                .min(8, 'Please enter a phone number with 8 or more characters')
                .required('A phone number is required'),
    primaryemail: yup.string().email('Please enter a valid email address').required('Please enter a valid email address')
});





export default formSchema;
