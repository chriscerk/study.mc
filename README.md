# StudyMC
StudyMC (Study Medicinal Chemistry) is a College of Pharmacy web application to help students in studying their course materials.

# Organization
<strong>Learn</strong>
Content provided to help expand the student's knowledge along with practice problems which include feedback.

<strong>Test</strong>
Example test questions to gauge a student's knowledge on a particular topic.

<strong>Review</strong>
A review sheet which students can fill out online then print upon completion.

![Home Screen](/readme/HomeScreen.png?raw=true "Home Screen")

![Example Test Question](/readme/TestQuestion.png?raw=true "Example Test Question")

# Installation

<strong>Dependencies</strong>
`composer`, `nodejs` & `typescript`

<strong>Environment Setup</strong>
Laravel Homestead: https://www.laravel.com/docs/5.3/homestead

# Running the Environment

1. `cd Homestead`
2. `vagrant up`
3. Go to http://study.mc/ in your browser. (Or whatever domain is setup for Homestead at C:\Windows\System32\drivers\etc\hosts)

# Building

1. `cd studymc`
2. `gulp`

# UM Access

The application is currently "bodyless" (without Laravel) due to inability to update their version of PHP and install dependencies for Laravel.

<strong>Dev Environment</strong>: http://dev-apps.phar.umich.edu/studymc/

`/afs/umich.edu/group/acadaff/pharmacy/devapps/studymc`

`/afs/umich.edu/group/acadaff/pharmacy/devapps/studymc-media`

<strong>Prod Environment</strong>: https://apps.phar.umich.edu/studymc/

`/afs/umich.edu/group/acadaff/pharmacy/Private/html/studymc`

`/afs/umich.edu/group/acadaff/pharmacy/Private/html/studymc-media`

# Other Information

Originally forked from: https://github.com/axiskafi/angular2-laravel5