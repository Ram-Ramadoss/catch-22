# Catch-22

## Motivation
Catch-22 is a data visualization tool to see who supports and funds the "Yes" and "No" coalitions for California Proposition 22. 

Prop 22, the App-Based Drivers as Contractors and Labor Policies Initiative, is on the 2020 California ballot. It establishes different criteria for determining whether app-based transportation (rideshare) and delivery drivers are “employees” or “independent contractors.” The Yes Coalition suppports this initiative, which would classify app-based drivers as "independent contractors" and adopt labor and wage policies specific to app-based drivers and companies. The No Coalition opposes this initiative, which would mean California Assembly Bill 5 (2019) will be used to decide whether app-based drivers are employees or independent contractors. Courts in California as recently as August 2020 ruled that that AB5 requires these companies to classify their drivers as "employees."

We thought this topic, who supports and funds each side, was an important question to investigate for a couple reasons. For one, left-leaning groups & individuals are divided on this issue. Many high-profile Democrats such as Kamala Harris and Joe Biden publicly oppose Prop 22 while some well-known civil rights groups such as NAACP chapters support it. Secondly, this proposition is one of the most funded in California history. As you will see in the tool, over $300M has been raised combined by the two coalitions.

## Data Visualization Tool


[![logo](https://raw.githubusercontent.com/tramadoss/catch-22/master/catch22/webapp/assets/logo.png)](https://tramadoss.github.io/catch-22/catch22/webapp/index.html)

## Definitions and Data Sources
Endorsers/Coalition: List of all groups and people who either support or oppose Prop 22 but do not necessarily contribute money to supporting/opposing Prop 22.
<br/>Committee: Official groups formed to support or oppose ballot measures, financial contributions received and spent by these groups are publicly available data.
<br/>Contributors: List of all groups and people who financially support the coalitions to support or oppose Prop 22

Contributor data was collected from: http://cal-access.sos.ca.gov/Campaign/Measures/
<br/>Coalition lists were gathered from each coalition's website:
<br/>Yes Coalition: https://yeson22.com/coalition/ Download Link> https://yeson22.com/wp-content/uploads/2020/09/Yes-Prop-22-Coalition-List-DESIGNED-_Updated-9.16-1.pdf
<br/>No Coalition: https://nooncaprop22.com/our_coalition

## Data Collection Process

### Contributor Data
Data was collected through web-scraping with the Python/Juptyter notebook: data/data-collector.ipynb

Only contributor data from the highest collecting committees for each side was considered in this project. From the Cal-Access webpage (http://cal-access.sos.ca.gov/Campaign/Measures/Detail.aspx?id=1423938&session=2019), it was determined that the main committees were:
<br/>Yes: Committee ID 1422181 (SUPPORT)
<br/>No:  Committee ID 1424537 (OPPOSE)

Excel files from the "Contributions Received" and "Late and $5000+ Contributions Received" tabs for each committee were stored as follows:
<br/>data/1422181_SUPPORT/contributions_received.xls
<br/>data/1422181_SUPPORT/late_5000_contributions_received.xls
<br/>data/1424537_OPPOSE/contributions_received.xls
<br/>data/1424537_OPPOSE/late_5000_contributions_received.xls

### Coalition Data
Coalition lists were scraped from each coalition's webpage into text files and stored as follows:
<br/>data/coalition-lists/YesOnProp22.txt
<br/>data/coalition-lists/NoOnProp22.txt

### Date Collected
Data was collected on these days:
<br/>Contributions received files on 9/18/2020
<br/>Late contributions received files refreshed on 9/26/2020
<br/>Coalition lists on 9/22

## Data Processing
Python/Jupyter Notebook was used to process the data. 
<br/>Contributor data was parsed from two files for each committee, the contributions received and late contriutions received files and organized:
<br/> 1. By Contributor: The aggregate contributions made by each contributor is summarized
<br/> 2. By Date: The total contributions made per day is summarized
<br/>Coalition lists were parsed by term and every term and its frequency was calculated (discounting conjunctions, locations, and general terms for group that appear in both coalitions).

Here's a list of all the data collected:
1. Total contributions received
2. Total contributors 
3. Total endorsers
4. Contributions grouped by contributor. For “No” the additional step was taken to divide contributors into 3 groups:  
    1. If the word “teamster” found -> “Teamster” 
    2. Else if the words (“union,” “labor ”,“work”) found -> “Other Union/Labor/Workers”  
    3. Else “Other”
5.Contributions grouped by date
6.Most frequent terms in the coalition member lists 
    1. Extra fun: users can explore how these terms appear in coalition member names


All generated tables are saved as CSV files by the Notebook here. The guide.csv file stores key facts for each coalition and indexes the file name for each data category.
<br/>data/processed-data

Additionally, the Notebook was also used to automatically generate the javascript for the data visualization tool

Launch the Jupyter Notebook here to view the detailed data processing steps:

[![Binder](https://mybinder.org/badge_logo.svg)](https://mybinder.org/v2/gh/tramadoss/catch-22/master?filepath=data%2Fdata-processor.ipynb)

## Repo Architecture
/catch22/webapp stores the frontend data visualization tool created, a webpage, along with associated css, script, and image files
<br/>/data stores the collected data, the data processing scripts and the processed data

## Contributors

Trisha Ramadoss, UC Davis Transportation Technology & Policy PhD student, BSE Electical Engineerng & Physics 
- Data collection, data processing, planning, graphic design

Nitin Ramadoss, University of Florida, Candidate for BS in Computer Science
- Web backend development & git version control
