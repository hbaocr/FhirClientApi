module.exports = {
    "resourceType": "Patient",
    "id": "pat1",
    "text": {
        "status": "generated",
        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n      \n      <p>Patient Donald DUCK @ Acme Healthcare, Inc. MR = 654321</p>\n    \n    </div>"
    },
    "identifier": [
        {
            "use": "usual",
            "type": {
                "coding": [
                    {
                        "system": "http://hl7.org/fhir/v2/0203",
                        "code": "MR"
                    }
                ]
            },
            "system": "urn:oid:0.1.2.3.4.5.6.7",
            "value": "654321"
        }
    ],
    "active": true,
    "name": [
        {
            "use": "official",
            "family": "Donald",
            "given": [
                "Duck"
            ]
        }
    ],
    "gender": "male",
    // "photo": [
    //   {
    //     "contentType": "image/gif",
    //     "data": "R0lGODlhEwARAPcAAAAAAAAA/+9aAO+1AP/WAP/eAP/eCP/eEP/eGP/nAP/nCP/nEP/nIf/nKf/nUv/nWv/vAP/vCP/vEP/vGP/vIf/vKf/vMf/vOf/vWv/vY//va//vjP/3c//3lP/3nP//tf//vf///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////yH5BAEAAAEALAAAAAATABEAAAi+AAMIDDCgYMGBCBMSvMCQ4QCFCQcwDBGCA4cLDyEGECDxAoAQHjxwyKhQAMeGIUOSJJjRpIAGDS5wCDly4AALFlYOgHlBwwOSNydM0AmzwYGjBi8IHWoTgQYORg8QIGDAwAKhESI8HIDgwQaRDI1WXXAhK9MBBzZ8/XDxQoUFZC9IiCBh6wEHGz6IbNuwQoSpWxEgyLCXL8O/gAnylNlW6AUEBRIL7Og3KwQIiCXb9HsZQoIEUzUjNEiaNMKAAAA7"
    //   }
    // ],
    // "contact": [
    //   {
    //     "relationship": [
    //       {
    //         "coding": [
    //           {
    //             "system": "http://hl7.org/fhir/v2/0131",
    //             "code": "E"
    //           }
    //         ]
    //       }
    //     ],
    //     "organization": {
    //       "reference": "Organization/1",
    //       "display": "Walt Disney Corporation"
    //     }
    //   }
    // ],
    "telecom": [
        {
            "system": "phone",
            "value": "+31612345678",
            "use": "mobile"
        },
        {
            "system": "email",
            "value": "contact@labs.acme.org",
            "use": "work"
        }
    ],
    "address": {
        "line": [
            "South Wing, floor 2"
        ]
    },
    "managingOrganization": {
        "reference": "Organization/1",
        "display": "ACME Healthcare, Inc"
    }
    // "link": [
    //     {
    //         "other": {
    //             "reference": "Patient/pat2"
    //         },
    //         "type": "seealso"
    //     }
    // ]
}