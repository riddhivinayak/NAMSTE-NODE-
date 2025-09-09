import validator from 'validator';

const validateSignupData = (data) => {
    const errors = {};

    // Name validation
    if (!data.name || validator.isEmpty(data.name.trim())) {
        errors.name = 'Name is required';
    }

    // Email validation
    if (!data.email || validator.isEmpty(data.email.trim())) {
        errors.email = 'Email is required';
    } else if (!validator.isEmail(data.email.trim())) {
        errors.email = 'Invalid email address';
    }

    // Password validation
    if (!data.password || validator.isEmpty(data.password)) {
        errors.password = 'Password is required';
    } else if (!validator.isLength(data.password, { min: 6 })) {
        errors.password = 'Password must be at least 6 characters';
    }

    // Confirm password validation
    if (!data.confirmPassword || validator.isEmpty(data.confirmPassword)) {
        errors.confirmPassword = 'Confirm password is required';
    } else if (data.password !== data.confirmPassword) {
        errors.confirmPassword = 'Passwords do not match';
    }

    // Additional fields can be validated here

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    };
};

export default validateSignupData;