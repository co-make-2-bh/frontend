import * as yup from 'yup';


const IssueSchema = yup.object().shape({
    title: yup.string().min(3,'Please enter a title').required('Please enter a title'),
    // name: yup.string().min(2,'Please enter your name').required('Please enter your name'),
    description: yup.string().min(8,'Please enter a description').required('Please enter a description')
})

export default IssueSchema;