fetch('json/temples.json')
  .then(function (response) {
    return response.json();
  })
  .then(function (temples) {
    
    document.querySelector("#NameM")
    .innerHTML= temples[0].templeName;
    
    document.querySelector("#StreetM")
    .innerHTML= temples[0].address.StreetLine1;
    
    document.querySelector("#CityM")
    .innerHTML= temples[0].address.City;

    document.querySelector("#StateM")
    .innerHTML= temples[0].address.State;

    document.querySelector("#ZipM")
    .innerHTML= temples[0].address.Zip;

    document.querySelector("#PhoneM")
    .innerHTML= temples[0].telePhone;
    
    document.querySelector("#Service1M")
    .innerHTML= temples[0].templeServices.service1;

    document.querySelector("#Service2M")
    .innerHTML= temples[0].templeServices.service2;

    document.querySelector("#Service3M")
    .innerHTML= temples[0].templeServices.service3;

    document.querySelector("#Service4M")
    .innerHTML= temples[0].templeServices.service4;

    document.querySelector("#announcedM")
    .innerHTML= temples[0].history.announced;

    document.querySelector("#groundBreakingM")
    .innerHTML= temples[0].history.groundBreaking;
    
    document.querySelector("#dedicatedM")
    .innerHTML= temples[0].history.dedicated;

    document.querySelector("#rededicatedM")
    .innerHTML= temples[0].history.rededicated;

    document.querySelector("#ordinance1M")
    .innerHTML= temples[0].ordinances.ordinance1;

    document.querySelector("#ordinance2M")
    .innerHTML= temples[0].ordinances.ordinance2;
    
    document.querySelector("#ordinance3M")
    .innerHTML= temples[0].ordinances.ordinance3;
    
    document.querySelector("#ordinance4M")
    .innerHTML= temples[0].ordinances.ordinance4;
    
    document.querySelector("#closure1M")
    .innerHTML= temples[0].closures.closure1;
    
    document.querySelector("#closure2M")
    .innerHTML= temples[0].closures.closure2;

    //Salt Lake 
    document.querySelector("#NameSL")
    .innerHTML= temples[1].templeName;

    document.querySelector("#StreetSL")
    .innerHTML= temples[1].address.StreetLine1;

    document.querySelector("#CitySL")
    .innerHTML= temples[1].address.City;

    document.querySelector("#StateSL")
    .innerHTML= temples[1].address.State;

    document.querySelector("#ZipSL")
    .innerHTML= temples[1].address.Zip;

    document.querySelector("#PhoneSL")
    .innerHTML= temples[1].telePhone;

    document.querySelector("#Service1SL")
    .innerHTML= temples[1].templeServices.service1;

    document.querySelector("#Service2SL")
    .innerHTML= temples[1].templeServices.service2;

    document.querySelector("#Service3SL")
    .innerHTML= temples[1].templeServices.service3;

    document.querySelector("#Service4SL")
    .innerHTML= temples[1].templeServices.service4;

    document.querySelector("#announcedSL")
    .innerHTML= temples[1].history.announced;

    document.querySelector("#groundBreakingSL")
    .innerHTML= temples[1].history.groundBreaking;

    document.querySelector("#dedicatedSL")
    .innerHTML= temples[1].history.dedicated;

    document.querySelector("#ordinance1SL")
    .innerHTML= temples[1].ordinances.ordinance1;

    document.querySelector("#ordinance2SL")
    .innerHTML= temples[1].ordinances.ordinance2;

    document.querySelector("#ordinance3SL")
    .innerHTML= temples[1].ordinances.ordinance3;

    document.querySelector("#ordinance4SL")
    .innerHTML= temples[1].ordinances.ordinance4;

    document.querySelector("#closure1SL")
    .innerHTML= temples[1].closures.closure1;

    document.querySelector("#closure2SL")
    .innerHTML= temples[1].closures.closure2;


    //San Diego

    document.querySelector("#NameSD")
    .innerHTML= temples[2].templeName;

    document.querySelector("#StreetSD")
    .innerHTML= temples[2].address.StreetLine1;

    document.querySelector("#CitySD")
    .innerHTML= temples[2].address.City;

    document.querySelector("#StateSD")
    .innerHTML= temples[2].address.State;

    document.querySelector("#ZipSD")
    .innerHTML= temples[2].address.Zip;

    document.querySelector("#PhoneSD")
    .innerHTML= temples[2].telePhone;

    document.querySelector("#Service1SD")
    .innerHTML= temples[2].templeServices.service1;

    document.querySelector("#Service2SD")
    .innerHTML= temples[2].templeServices.service2;

    document.querySelector("#Service3SD")
    .innerHTML= temples[2].templeServices.service3;

    document.querySelector("#Service4SD")
    .innerHTML= temples[2].templeServices.service4;

    document.querySelector("#announcedSD")
    .innerHTML= temples[2].history.announced;

    document.querySelector("#groundBreakingSD")
    .innerHTML= temples[2].history.groundBreaking;

    document.querySelector("#dedicatedSD")
    .innerHTML= temples[2].history.dedicated;

    document.querySelector("#ordinance1SD")
    .innerHTML= temples[2].ordinances.ordinance1;

    document.querySelector("#ordinance2SD")
    .innerHTML= temples[2].ordinances.ordinance2;

    document.querySelector("#ordinance3SD")
    .innerHTML= temples[2].ordinances.ordinance3;

    document.querySelector("#ordinance4SD")
    .innerHTML= temples[2].ordinances.ordinance4;

    document.querySelector("#closure1SD")
    .innerHTML= temples[2].closures.closure1;

    document.querySelector("#closure2SD")
    .innerHTML= temples[2].closures.closure2;

    //Manhatthan

    document.querySelector("#NameMT")
    .innerHTML= temples[3].templeName;

    document.querySelector("#StreetMT")
    .innerHTML= temples[3].address.StreetLine1;

    document.querySelector("#CityMT")
    .innerHTML= temples[3].address.City;

    document.querySelector("#StateMT")
    .innerHTML= temples[3].address.State;

    document.querySelector("#ZipMT")
    .innerHTML= temples[3].address.Zip;

    document.querySelector("#PhoneMT")
    .innerHTML= temples[3].telePhone;

    document.querySelector("#Service1MT")
    .innerHTML= temples[3].templeServices.service1;

    document.querySelector("#Service2MT")
    .innerHTML= temples[3].templeServices.service2;

    document.querySelector("#Service3MT")
    .innerHTML= temples[3].templeServices.service3;

    document.querySelector("#Service4MT")
    .innerHTML= temples[3].templeServices.service4;

    document.querySelector("#announcedMT")
    .innerHTML= temples[3].history.announced;

    document.querySelector("#groundBreakingMT")
    .innerHTML= temples[3].history.groundBreaking;

    document.querySelector("#dedicatedMT")
    .innerHTML= temples[3].history.dedicated;

    document.querySelector("#ordinance1MT")
    .innerHTML= temples[3].ordinances.ordinance1;

    document.querySelector("#ordinance2MT")
    .innerHTML= temples[3].ordinances.ordinance2;

    document.querySelector("#ordinance3MT")
    .innerHTML= temples[3].ordinances.ordinance3;

    document.querySelector("#ordinance4MT")
    .innerHTML= temples[3].ordinances.ordinance4;

    document.querySelector("#closure1MT")
    .innerHTML= temples[3].closures.closure1;

    document.querySelector("#closure2MT")
    .innerHTML= temples[3].closures.closure2;

  });
   
        
    


  