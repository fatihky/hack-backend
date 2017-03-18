### rest api backend for hackathon app

#### enpoints

`POST /getRecord`
Description: get record by key field<br/>
<br/>
Accepted parameters:
- `key`: string, key of the record<br/>

<br/>
Return value: `object({key: String, value: String, date: Date})`
