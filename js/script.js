$( document ).ready(function() {
    console.log('script is linked');

    $.ajax({
        type: "GET",
        url: "./json/data.json",
        success: function(response){
            
            // =====================================
            // start of card generator
            // =====================================
            function generateCard(x){

                $('#categoryCards').append(
                    `
                    <div id="${response.products[x].id}" class="carousel slide" data-bs-ride="carousel">
                        <h1 id="categoryHeading">${response.products[x].category}</h1>
                        <div id="items">
                            <ul class="product">
                                <li>${response.products[x].productOne}</li>
                                <li>${response.products[x].productTwo}</li>
                                <li>${response.products[x].productThree}</li>
                            </ul>
                            <ul class="price">
                                <li>${response.products[x].priceOne}</li>
                                <li>${response.products[x].priceTwo}</li>
                                <li>${response.products[x].priceThree}</li>
                            </ul>
                            <button class="orderBtn">Place Order</button>
                        </div>
                        <div class="carousel-indicators">
                        <button type="button" data-bs-target="#${response.products[x].id}" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#${response.products[x].id}" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#${response.products[x].id}" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="${response.products[x].imageOne}" class="d-block w-100" alt="Chocolate Cake">
                        </div>
                        <div class="carousel-item">
                            <img src="${response.products[x].imageTwo}" class="d-block w-100" alt="Wedding Cake">
                        </div>
                        <div class="carousel-item">
                            <img src="${response.products[x].imageThree}" class="d-block w-100" alt="Strawberry Cake">
                        </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#${response.products[x].id}" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#${response.products[x].id}" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                    `
                );
            }
            // =====================================
            // end of card generator
            // =====================================

            // ===============================
            // start of generating first cards
            // ===============================
            function objectsLoop(){
                let i = 0;
                for(i = 0; i < response.products.length; i++){
                    generateCard(i);
                }
            }
            objectsLoop();
            // ===============================
            // end of generating first cards
            // ===============================

            console.log(response.store.name);
            $('#businessInfo').append(
                `
                <p class="company">${response.store.name}</p>

                <ul class="location">
                    <li>${response.store.street}</li>
                    <li>${response.store.city}</li>
                    <li>${response.store.country}</li>
                </ul>

                <ul class="openHours">
                    <li>${response.store.bio}</li>
                    </br>
                    <li>${response.store.openingHours}</li>
                </ul>
                `
            );
        }
    });

    $('.carousel').carousel({
        interval: 7000
    });

});