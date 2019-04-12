import React, {Component } from 'react'
import validator from 'validator'

class ProfileForm extends Component {
state = {
    name:'',
    nameError: '',
    nameClass: '',
    email: '',
    emailError: '',
    emailClass: '',
    username: '',
    usernameError: '',
    usernameClass: '',
    password: '',
    passwordError: '',
    passwordClass: '',
    confpassword: '',
    confpasswordError: '',
    confpasswordClass: '',
    url:'',
    urlError: '',
    urlClass: '',


}

handleChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    })
}

handleSubmit = (e) => {
    e.preventDefault()
    let valid = true

    if (this.state.name !=='') {
        this.setState({
            nameError: '',
            nameClass: '',
        })

    } else {
        valid=false
        this.setState ({
            nameError: " - Cannot be blank",
            nameClass: 'error'
        })
    }

    if (validator.isEmail(this.state.email)) {
        this.setState({
            emailError: '',
            emailClass: '',
        })

    } else {
        valid=false
        this.setState ({
            emailError: " - Please enter a valid email",
            emailClass: 'error'
        })
    }

    if (this.state.username !=='') {
        this.setState({
            usernameError: '',
            usernameClass: '',
        })

    } else {
        valid=false
        this.setState ({
            usernameError: " - Cannot be blank",
            usernameClass: 'error'
        })
    }

    if (this.state.password !=='') {
        this.setState({
            passwordError: '',
            passwordClass: '',
        })

    } else {
        valid=false
        this.setState ({
            passwordError: " - Cannot be blank",
            passwordClass: 'error'
        })
    }

    if (validator.matches(this.state.confpassword, this.state.password) && this.state.password !== '') {
        this.setState({
            confpasswordError: '',
            confpasswordClass: '',
        })

    } else if (this.state.password !== '' && !validator.matches(this.state.confpassword, this.state.password)) {
        this.setState({
        confpasswordError: ' - Passwords must match',
        confpasswordClass: 'error'
    })

    } else {
        valid=false
        this.setState ({
            confpasswordError: " - Cannot be blank",
            confpasswordClass: 'error'
        })
    }

    if (validator.isURL(this.state.url)) {
        this.setState({
            urlError: '',
            urlClass: '',
        })

    } else {
        valid=false
        this.setState ({
            urlError: " - Please enter a valid url",
            urlClass: 'error'
        })
    }



    if (valid) {
    this.props.history.push('/thanks')
    }
    
}

    render () {
        return (
            <div>
                <h1>Profile Form - All Fields Required</h1>
                <form id="theForm" onSubmit={this.handleSubmit}>
                    <label 
                    htmlFor="name" 
                    className={this.state.nameClass}>
                    Name {this.state.nameError}
                    </label>
                    <input 
                    type="text"
                    name="name" 
                    id="name" 
                    className={this.state.nameClass} 
                    value={this.state.name} 
                    onChange={this.handleChange}>
                    </input>

                    <label 
                    htmlFor="email" 
                    className={this.state.emailClass}>
                    Email {this.state.emailError}
                    </label>
                    <input 
                    type="text"
                    name="email" 
                    id="email" 
                    className={this.state.emailClass} 
                    value={this.state.email} 
                    onChange={this.handleChange}>
                    </input>

                    <label 
                    htmlFor="username" 
                    className={this.state.usernameClass}>
                    Username {this.state.usernameError}
                    </label>
                    <input 
                    type="text"
                    name="username" 
                    id="username" 
                    className={this.state.usernameClass} 
                    value={this.state.username} 
                    onChange={this.handleChange}>
                    </input>

                    <label 
                    htmlFor="password" 
                    className={this.state.passwordClass}>
                    Password {this.state.passwordError}
                    </label>
                    <input 
                    type="password"
                    name="password" 
                    id="password" 
                    className={this.state.passwordClass} 
                    value={this.state.password} 
                    onChange={this.handleChange}>
                    </input>

                    <label 
                    htmlFor="confpassword" 
                    className={this.state.confpasswordClass}>
                    Confirm Password {this.state.confpasswordError}
                    </label>
                    <input 
                    type="password"
                    name="confpassword" 
                    id="confpassword" 
                    className={this.state.confpasswordClass} 
                    value={this.state.confpassword} 
                    onChange={this.handleChange}>
                    </input>

                    <label 
                    htmlFor="url" 
                    className={this.state.urlClass}>
                    Website {this.state.urlError}
                    </label>
                    <input 
                    type="text"
                    name="url" 
                    id="url" 
                    className={this.state.urlClass} 
                    value={this.state.url} 
                    onChange={this.handleChange}>
                    </input>

                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}


export default ProfileForm