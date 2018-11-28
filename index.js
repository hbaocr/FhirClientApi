var FhirApi = require("./FhirApi");
var host = "http://127.0.0.1:3000/3_0_1/";
var fhir = new FhirApi(host);
let searchparas={"patient":"Patient/12345"};
fhir.search_data_fhir(fhir.FHIRservice.ImagingStudy,searchparas).then((res)=>{
    console.log(res.data)
});
