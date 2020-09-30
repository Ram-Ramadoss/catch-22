# Catch-22

## Motivation
Catch 22 is a data visualization tool to see who supports and funds the "Yes" and "No" coalitions for California Proposition 22. 

Prop 22, the App-Based Drivers as Contractors and Labor Policies Initiative, is on the 2020 California ballot. It establishes different criteria for determining whether app-based transportation (rideshare) and delivery drivers are “employees” or “independent contractors.” The Yes Coalition suppports this initiative, which would classify app-based drivers as "independent contractors" and adopt labor and wage policies specific to app-based drivers and companies. The No Coalition opposes this initiative, which would mean California Assembly Bill 5 (2019) will be used to decide whether app-based drivers are employees or independent contractors. Courts in California as recently as August 2020 ruled that that AB5 requires these companies to classify their drivers as "employees."

## Data Visualization Tool
https://tramadoss.github.io/catch-22/catch22/webapp/index.html

## Definitions and Data Sources
Coalition: List of all groups and people who either support or oppose Prop 22 but do not necessarily contribute money to supporting/opposing Prop 22
<br/>Committee: Official groups formed to support or oppose ballot measures, financial contributions received and spent by these groups are publicly available data.
<br/>Contributors: List of all groups and people who financially support the coalitions to support or oppose Prop 22


Contributor data was collected from: http://cal-access.sos.ca.gov/Campaign/Measures/
<br/>Coalition lists were gathered from each coalition's website:
<br/>Yes Coalition: https://yeson22.com/coalition/
<br/>No Coalition: https://nooncaprop22.com/our_coalition

## Data Collection Process

### Contributor Data
Only contributor data from the highest collecting committees for each side was considered in this project. From the Cal-Access webpage (http://cal-access.sos.ca.gov/Campaign/Measures/Detail.aspx?id=1423938&session=2019), it was determined that the main committees were:
<br/>Yes: Committee ID 1422181 (SUPPORT)
<br/>No:  Committee ID 1424537 (OPPOSE)

Excel files from the "Contributions Received" and "Late and $5000+ Contributions Received" tabs for each committee were stored as follows:
<br/>data/1422181_SUPPORT/contributions_received.xls
<br/>data/1422181_SUPPORT/late_5000_contributions_received.xls
<br/>data/1424537_OPPOSE/contributions_received.xls
<br/>data/1424537_OPPOSE/late_5000_contributions_received.xls

### Coalition Data
Coalition lists were manually copied from each coalition's webpage into text files and stored as follows:
<br/>data/coalition-lists/YesOnProp22.txt
<br/>data/coalition-lists/NoOnProp22.txt

### Date Collected
Data was collected on these days:
<br/>Contributions received files on 9/18/2020
<br/>Late contributions received files refreshed on 9/26/2020
<br/>Coalition lists on 9/22

## Data Processing
iPython & Jupyter Notebook was used to process the data. 
<br/>Contributor data was parsed from two files for each committee, the contributions received and late contriutions received files and organized in 3 ways:
<br/>
<br/>Coalition lists were parsed by term and every term and its frequency was calculated.

All generated tables are saved as CSV files by the Notebook here:
<br/>data/processed-data

Additionally, the Notebook was also used to automatically generate the javascript for the data visualization tool

Launch the Jupyter Notebook here to view the detailed data processing steps:
[![Binder](https://mybinder.org/badge_logo.svg)](https://mybinder.org/v2/gh/tramadoss/catch-22/master?filepath=data%2Fdata-processor.ipynb)

## Repo Architecture
/catch22/webapp stores the frontend data visualization tool created, a webpage, along with associated css, script, and image files
<br/>/data stores the collected data, the data processing scripts and the processed data

## Contributors

Trisha Ramadoss, UC Davis Transportation Technology & Policy PhD student, BSE Electical Engineerng & Physics 
<br/>Nitin Ramadoss, University of Florida, Candidate for BS in Computer Science
