# TEST DATA CREATOR BACK END

## DATA BASE
### DATA BASE USED
* PostgreSQL
* LINK TO WEBSITE: https://www.postgresql.org/
### ORM / ODM USED
* Sequelize
* LINK TO WEBSITE: https://sequelize.org/
### DATA BASE LOGICAL TABLE STRUCTURES
*****
| TABLE NAME     | TABLE DESCRIPTION  |
|----------------|--------------------|
| HANDLE         | APPLICATION USER   |

| COLUMN         | DATA TYPE | LENGTH | REQUIRED |
|----------------|-----------|--------|----------|  
| HANDLE_ID      | NUMBER    | N/A    | YES / PK |
| HANDLE_NAME    | TEXT      | 255    | YES      |
| LOGIN_CODE     | TEXT      | 255    | YES      |
| PASSWORD       | TEXT      | 255    | YES      |
| MODIFIED_DATE  | DATE      | N/A    | YES      |
*****
| TABLE NAME     | TABLE DESCRIPTION  |
|----------------|--------------------|
| INQUEST        | TEST PROJECT       |

| COLUMN         | DATA TYPE | LENGTH | REQUIRED |
|----------------|-----------|--------|----------|  
| INQUEST_ID     | NUMBER    | N/A    | YES / PK |
| INQUEST_NAME   | TEXT      | 255    | YES      |
| INQUEST_DESC   | TEXT      | 255    | NO       |
| INQUEST_NOTE   | TEXT      | 255    | NO       |
| MODIFIED_DATE  | DATE      | N/A    | YES      |
| HANDLE_ID      | NUMBER    | N/A    | YES / FK |
*****
| TABLE NAME     | TABLE DESCRIPTION  |
|----------------|--------------------|
| ARTIFACT       | TEST DATA POINTS   |

| COLUMN         | DATA TYPE | LENGTH | REQUIRED |
|----------------|-----------|--------|----------|  
| ARTIFACT_ID    | NUMBER    | N/A    | YES / PK |
| ARTIFACT_NAME  | TEXT      | 255    | YES      |
| ARTIFACT_TYPE  | TEXT      | 255    | YES      |
| ARTIFACT_VALUE | TEXT      | 255    | NO       |
| ARTIFACT_CODE  | TEXT      | 255    | NO       |
| MODIFIED_DATE  | DATE      | N/A    | YES      |
| INQUEST_ID     | NUMBER    | N/A    | YES / FK |
*****

## PROJECT STATUS LOGS
* CREATED READ ME FILE (07/05/2022)