# TEST DATA CREATOR BACK END

## DATA BASE
### DATA BASE USED
* PostgreSQL
* LINK TO WEBSITE: https://www.postgresql.org/
### ORM / ODM USED
* Sequelize
* LINK TO WEBSITE: https://sequelize.org/
### DATA BASE LOGICAL STRUCTURES

* TABLE: HANDLE (APPLICATION USER)

| COLUMN        | DATA TYPE | LENGTH | REQUIRED |
|---------------|-----------|--------|----------|  
| HANDLE_ID     | NUMBER    | N/A    | YES / PK |
| HANDLE_NAME   | TEXT      | 250    | YES      |
| LOGIN_CODE    | TEXT      | 250    | YES      |
| PASSWORD      | TEXT      | 250    | YES      |
| MODIFIED_DATE | DATE      | N/A    | YES      |

* TABLE: INQUEST (TEST PROJECT)

| COLUMN        | DATA TYPE | LENGTH | REQUIRED |
|---------------|-----------|--------|----------|  
| INQUEST_ID    | NUMBER    | N/A    | YES / PK |
| INQUEST_NAME  | TEXT      | 250    | YES      |
| INQUEST_DESC  | TEXT      | 1000   | NO       |
| INQUEST_NOTES | TEXT      | 2000   | NO       |
| MODIFIED_DATE | DATE      | N/A    | YES      |
| HANDLE_ID     | NUMBER    | N/A    | YES / FK |

* TABLE: ARTIFACT (TEST DATA POINTS)

| COLUMN        | DATA TYPE | LENGTH | REQUIRED |
|---------------|-----------|--------|----------|  
| ARTIFACT_ID   | NUMBER    | N/A    | YES / PK |
| ARTIFACT_NAME | TEXT      | 250    | YES      |
| ARTIFACT_TYPE | TEXT      | 50     | YES      |
| ARTIFACT_VALUE| TEXT      | 2000   | NO       |
| MODIFIED_DATE | DATE      | N/A    | YES      |
| INQUEST_ID    | NUMBER    | N/A    | YES / FK |

## PROJECT STATUS LOGS
* CREATED READ ME FILE (07/05/2022)