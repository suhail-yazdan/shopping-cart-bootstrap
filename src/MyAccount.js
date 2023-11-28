import React from 'react'
import "./styles/myAccount.css"

const MyAccount = () => {
  return (
    <div className='account-container'>
        <div className="account-box">
            <h1>My Account</h1>

            <div className="user-info">
                <p><strong>Name:</strong> John Doe</p>
                <p><strong>Email:</strong> john.doe@example.com</p>
                <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                <p><strong>Marital Status:</strong> Married</p>
                <p><strong>Workplace:</strong> R V College, Jayanagara 9th Block, Bangalore</p>
                <p><strong>Job Status:</strong> Assistant Professor</p>
                <p><strong>Address:</strong> 123, Main Street, Shanti Nagar, Bangalore</p>
                <p><strong>Birthdate:</strong> January 1, 1990</p>
                <p><strong>Membership:</strong> Gold</p>
            </div>

            <h2>My Interests</h2>

            <div className="interests">
                <button>Photography</button>
                <button>Digital Art </button>
                <button>Blogging and Writing</button>
                <button>Learning New Technologies</button>
                <button>Fitness and Sports</button>
                <button>Traveling</button>
                <button>DIY Projects</button>
                <button>Environmental Sustainability</button>
            </div>
            
            <a href="/" className="edit-profile-link">Edit Account</a>

            </div>
    </div>
  )
}

export default MyAccount