import * as yup from 'yup';

const formSchema = yup.object().shape({
    username: yup.string().min(2,'Please enter a username').required('Please enter a username'),
    password: yup.string().min(6,'Please enter a valid password').required('Please enter a valid password'),
    fullName: yup.string().min(3,'Please etner name that is longer than 2 characters').required('Please etner name that is longer than 2 characters'),
});





export default formSchema;
