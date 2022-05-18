$(document).ready(function () {

    axios({
        method: 'get',
        url: 'https://restcountries.com/v3.1/all',

    })
        .then(function (response) {
            let countries = response.data;
            countries.forEach(e => {
                // console.log(e.flags.png);
                $(".galery").append(`
       
                    <div class="card col-3 my-5" style="width: 18rem">
                   <img src="${e.flags.png}" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${e.name.common}</h5>
                      <h6 class="population">population: ${e.population}</h6>
                      <h6 class="region">Region: ${e.region}</h6>
                      <h6 class="capital">Capital: ${e.capital}</h6> 
                    </div>
                    </div>


                 `
                )
                // console.log(e.flags.png);
            });
        })

        $(".form-select").change(function(e){
            if(e.target.value=="Africa"){
                $(".galery").html("")
                axios({
                    method: 'get',
                    url: 'https://restcountries.com/v3.1/region/africa',
            
                })
                    .then(function (response) {
                        let countries = response.data;
                        countries.forEach(e => {
                            // console.log(e.flags.png);
                            $(".galery").append(`
                   
                                <div class="card col-3 my-5" style="width: 18rem">
                               <img src="${e.flags.png}" class="card-img-top" alt="...">
                                <div class="card-body">
                                  <h5 class="card-title">${e.name.common}</h5>
                                  <h6 class="population">population: ${e.population}</h6>
                                  <h6 class="region">Region: ${e.region}</h6>
                                  <h6 class="capital">Capital: ${e.capital}</h6> 
                                </div>
                                </div>
            
            
                             `
                            )
                            // console.log(e.flags.png);
                        });
                    })
            }
        })

        $(".form-select").change(function(e){
            if(e.target.value=="America"){
                $(".galery").html("")
                axios({
                    method: 'get',
                    url: 'https://restcountries.com/v3.1/region/america',
            
                })
                    .then(function (response) {
                        let countries = response.data;
                        countries.forEach(e => {
                            // console.log(e.flags.png);
                            $(".galery").append(`
                   
                                <div class="card col-3 my-5" style="width: 18rem">
                               <img src="${e.flags.png}" class="card-img-top" alt="...">
                                <div class="card-body">
                                  <h5 class="card-title">${e.name.common}</h5>
                                  <h6 class="population">population: ${e.population}</h6>
                                  <h6 class="region">Region: ${e.region}</h6>
                                  <h6 class="capital">Capital: ${e.capital}</h6> 
                                </div>
                                </div>
            
            
                             `
                            )
                            // console.log(e.flags.png);
                        });
                    })
            }
        })

        $(".form-select").change(function(e){
            if(e.target.value=="Asia"){
                $(".galery").html("")
                axios({
                    method: 'get',
                    url: 'https://restcountries.com/v3.1/region/asia',
            
                })
                    .then(function (response) {
                        let countries = response.data;
                        countries.forEach(e => {
                            // console.log(e.flags.png);
                            $(".galery").append(`
                   
                                <div class="card col-3 my-5" style="width: 18rem">
                               <img src="${e.flags.png}" class="card-img-top" alt="...">
                                <div class="card-body">
                                  <h5 class="card-title">${e.name.common}</h5>
                                  <h6 class="population">population: ${e.population}</h6>
                                  <h6 class="region">Region: ${e.region}</h6>
                                  <h6 class="capital">Capital: ${e.capital}</h6> 
                                </div>
                                </div>
            
            
                             `
                            )
                            // console.log(e.flags.png);
                        });
                    })
            }
        })

        (".form-select").change(function(e){
            if(e.target.value=="Oceania"){
                $(".galery").html("")
                axios({
                    method: 'get',
                    url: 'https://restcountries.com/v3.1/region/oceania',
            
                })
                    .then(function (response) {
                        let countries = response.data;
                        countries.forEach(e => {
                            // console.log(e.flags.png);
                            $(".galery").append(`
                   
                                <div class="card col-3 my-5" style="width: 18rem">
                               <img src="${e.flags.png}" class="card-img-top" alt="...">
                                <div class="card-body">
                                  <h5 class="card-title">${e.name.common}</h5>
                                  <h6 class="population">population: ${e.population}</h6>
                                  <h6 class="region">Region: ${e.region}</h6>
                                  <h6 class="capital">Capital: ${e.capital}</h6> 
                                </div>
                                </div>
            
            
                             `
                            )
                            // console.log(e.flags.png);
                        });
                    })
            }
        })

        (".form-select").change(function(e){
            if(e.target.value=="Europe"){
                $(".galery").html("")
                axios({
                    method: 'get',
                    url: 'https://restcountries.com/v3.1/region/europe',
            
                })
                    .then(function (response) {
                        let countries = response.data;
                        countries.forEach(e => {
                            // console.log(e.flags.png);
                            $(".galery").append(`
                   
                                <div class="card col-3 my-5" style="width: 18rem">
                               <img src="${e.flags.png}" class="card-img-top" alt="...">
                                <div class="card-body">
                                  <h5 class="card-title">${e.name.common}</h5>
                                  <h6 class="population">population: ${e.population}</h6>
                                  <h6 class="region">Region: ${e.region}</h6>
                                  <h6 class="capital">Capital: ${e.capital}</h6> 
                                </div>
                                </div>
            
            
                             `
                            )
                            // console.log(e.flags.png);
                        });
                    })
            }
        })





})

// fetch("https://restcountries.com/v3.1/all").then(response => response.json()).then(data => console.log(data))