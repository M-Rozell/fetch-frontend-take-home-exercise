{
    "occupations": [
        "occupation1",
        "occupation2",
        ...
    ],
    "states": [
        {
            "name": "Alabama",
            "abbreviation": "AL"
        },
        ...
    ]
}
Frontend Take-Home Exercise
Your task is to build a webpage with a user creation form. The form should take the following required inputs:

Full Name
Email
Password
Occupation
State
Occupation and State should allow users to select from options returned by an endpoint. Users should only be able to select one occupation and one state. A GET request to https://frontend-take-home.fetchrewards.com/form will return a JSON body with the following format:

You should submit the results of the form to the same endpoint (https://frontend-take-home.fetchrewards.com/form) via a POST request with a JSON body of the following format:

{
    "name": "???",
    "email": "???",
    "password": "???",
    "occupation": "???",
    "state": "???"
}
The POST endpoint will return a 201 status code if all fields are provided. The response body will be the created user object. It does not perform any validation beyond this.

Minimum Requirements
Your site must:

Display a form with inputs for each field outlined above
Allow a user to complete and submit the form
Do not allow form submission without completing the entire form
Provide feedback upon successful form submission
You may complete this exercise using any languages or frameworks you'd like.

How do I submit it?
Please submit to the Greenhouse submission link provided by your recruiter.

How will this exercise be evaluated?
An engineer will review the code you submit. You will be evaluated based on:

Code quality
Use of best practices
Fulfillment of minimum requirements
Site usability/UX
You should provide any necessary documentation within the repository.

Can I provide a private repository?
If at all possible, we prefer a public repository because we do not know which engineer will be evaluating your submission. If you are still uncomfortable providing a public repository, you can work with your recruiter to provide access to the reviewing engineer.

How long do I have to complete the exercise?
There is no time limit for the exercise. Out of respect for your time, we designed this exercise with the intent that it should take you a few hours. However, you may take as much time as you need to complete the work. If you are able to complete the minimum requirements fairly quickly, we recommend spending some additional time improving upon your submission in any ways that you see fit.

For any further questions or clarifications, please reach out to your recruiter.