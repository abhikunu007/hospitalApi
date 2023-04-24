# hospitalApi

A hospital api app in which we design the server side for a hospital Only the API needs to be designed.


## Author

- [@Abhishek Kumar](https://www.github.com/abhikunu007)




## Deployment

To see this project live click below
 Link:- 


## Features

I have designed an API for the doctors of a Hospital which can be used by the
govt for testing and quarantine + well being of COVID-19 patients
- There can be 2 types of Users
- Doctors
- Patients
- Doctors can log in
- Each time a patient visits, the doctor will follow 2 steps
- Register the patient in the app (using phone number, if the patient already exists, just
return the patient info in the API)
- After the checkup, create a Report
- Patient Report will have the following fields
- Created by doctor
- Status (You can use enums if you want to):
- Can be either of: [Negative, Travelled-Quarantine, Symptoms-Quarantine,
Positive-Admit]

- Date

- Required Routes
- /doctors/register → with username and password
- /doctors/login → returns the JWT to be used
- /patients/register
- /patients/:id/create_report
- /patients/:id/all_reports → List all the reports of a patient oldest to latest
- /reports/:status → List all the reports of all the patients filtered by a specific status



## Support

For support, email abhishekkumaras007@gmail.com


## Feedback

If you have any feedback, please reach out to me at abhishekkumaras007@gmail.com
