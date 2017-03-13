<img align="center" src="https://raw.githubusercontent.com/chriscerk/studymc/master/public/studymc/studymc-logo.jpg" alt="Logo">

StudyMC (Study Medicinal Chemistry) is a College of Pharmacy web application to help graduate students learn, test, and review their course materials.

# Overview

[Organization](https://github.com/chriscerk/studymc#organization)

[Installation](https://github.com/chriscerk/studymc#installation)

[UM Access](https://github.com/chriscerk/studymc#um-access)

[Other Info.](https://github.com/chriscerk/studymc#other-information)

[Screenshots](https://github.com/chriscerk/studymc#screenshots)

## Quicklinks
App: https://apps.phar.umich.edu/studymc/

Sprint Planning: https://trello.com/studymc

Virtual Lib: https://pharmacy.umich.edu/mcvl/


# Organization
<strong>Learn</strong>
Content provided to help expand the student's knowledge along with practice problems which include feedback.

<strong>Test</strong>
Example test questions to gauge a student's knowledge on a particular topic.

<strong>Review</strong>
A review sheet which students can fill out online then print upon completion.


# Installation

<strong>Dependencies</strong>
`composer`, `nodejs` & `typescript`

<strong>Environment Setup</strong>
Laravel Homestead: https://www.laravel.com/docs/5.3/homestead

# Running the Environment

1. `cd Homestead`
2. `vagrant up`
3. Go to http://study.mc/ in your browser. 

(Or the domain setup for Homestead at C:\Windows\System32\drivers\etc\hosts)

# Building

1. `cd studymc`
2. `gulp`

# UM Access

The live version of this application is currently "bodyless" (without Laravel) due to inability to update the UM server version of PHP and install dependencies for Laravel. The "bodyless" application is located at: `studymc/public/studymc`.

<strong>Dev Environment</strong>: http://dev-apps.phar.umich.edu/studymc/

`/afs/umich.edu/group/acadaff/pharmacy/devapps/studymc`

`/afs/umich.edu/group/acadaff/pharmacy/devapps/studymc-media`

<strong>Production Environment</strong>: https://apps.phar.umich.edu/studymc/

`/afs/umich.edu/group/acadaff/pharmacy/Private/html/studymc`

`/afs/umich.edu/group/acadaff/pharmacy/Private/html/studymc-media`

# Other Information

`studymc\public\documents` contains all of the raw documents given by Mustapha Beleh upon which this application was built.


JSON files are recommended to be under 1.55MB. As of 2017 the largest file is > 300 KB.

Source: http://josh.zeigler.us/technology/web-development/how-big-is-too-big-for-json/


# Screenshots

![Home Screen](/readme/HomeScreen.png?raw=true "Home Screen")

![Example Test Question](/readme/TestQuestion.png?raw=true "Example Test Question")