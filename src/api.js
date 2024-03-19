function calculDpe(num_dpe){
  fetch(`https://dpe-api-service-dev-xfyprtzkyq-ew.a.run.app/calcul_dpe${num_dpe}`, {
  method: 'GET',
  headers: {
    'accept': 'application/json',
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  body: 'grant_type=&username=coda_school_student&password=XEUgknQ)GDCf%40K%3A%5D2T6%60c_Y%3Ddb%26%2BM9&scope=&client_id=&client_secret='
  });
}


