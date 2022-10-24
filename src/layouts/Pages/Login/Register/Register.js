import React, { useContext, useState } from 'react';
import  { toast } from 'react-hot-toast';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../Context/AuthProvider/AuthProvider';


const Register = () => {
     const {createUser, updateUserProfile, verifyEmail} = useContext(AuthContext);
    const [error, setError] = useState('');
    const [accepted, setAccepted] = useState(false);
    const handelRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);
        createUser(email, password)

        
        .then(result => {
            const user = result.user;
            console.log(user)
            form.reset();
            setError('');
            handelUpdateUserProfile(name);
            handelEmailVerification();
            toast.success('Successfully toasted!')
        })
        .catch(error => {
            console.error(error)
            setError(error.message);
        })
    }

    const handelUpdateUserProfile = (name) => {
        const profile = {
            displayName: name
            // photoURL: photoURL
        }
        updateUserProfile(profile)
        .then(() => {})
        .catch(error => console.error(error))
    }

    const handelAccepted = event => {
        setAccepted(event.target.checked);
    }

    const handelEmailVerification = () => {
        verifyEmail()
        .then(() => {})
        .catch(error => console.log(error))
    }
    return (
        <div>
             <Form onSubmit={handelRegister}>
             <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Enter email" />
                </Form.Group>
             

                <Form.Group className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Check
                    type="checkbox"
                    onClick={handelAccepted}
                    label={<> Accept <Link to ='/terms'>Accept Terms And Condition</Link></>}
                    >
                    </Form.Check>
                </Form.Group>
                <Button className='mb-3' variant="primary" type="submit" disabled={!accepted}>
                    Submit
                </Button>
                <Form.Text className='text-danger'>
                    {error}
                </Form.Text>
            </Form>
        </div>
    );
};

export default Register;