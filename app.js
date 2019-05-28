fetch(

    'https://testintranat.helsingborg.se/wp-json/wp/v2/elevradsmoten?per_page=99',

    {

        method: 'GET',

        headers: {

            'Content-Type': 'application/json'

        }

    }

).then(

    function (response) {

        // Return in JSON format

        return response.json();

    }

).then(

    function (jsondata) {

 

        var markup = "";

 

        // Loop through each protocol and add some data

        for (var index = 0; index < jsondata.length; index++) {

            console.log(jsondata[index]);
        

 

            var protocol = jsondata[index];

            var content = protocol.content.rendered ;
            if(content.length > 20) {
               content =  content.substring(0, 60)  + "...";
               
            }
            var showAll = document.getElementsByClassName('item-button')
            if(content.length < 20) {
                    content =  content.substring(0, 1000)
                    button.addEventListener('click', showAll)
                 }
            


            // Create markup and add to "markup" string

            markup +=

                "<div class='grid-md-6' style='padding: 20px;' >\
                    <div class='c-card ' style='background: #0069b4; color:#fff;' data-aos='fade-up' data-aos-duration='1000' data-aos-delay='500'>\
                    <img src='"+protocol.image_url+"'  class='c-card__image' >\
                        <div class='c-card__body' >\
                <h4 class='c-card__title' >"
                + protocol.title.rendered + 
                " </h4>\
               \
                <h4 class='c-card__title protocol-content'>"
                + content +
                "</h4>\
                <p class='c-card__title '>"
                + protocol.date +
                "</p>\
                <button class='btn btn-primary item-button validated valid hf-in-range hf-user-valid' aria-invalid='false'>Read more</button>\
                        </div>\
                    </div>\
                </div>"

        }

        

 

        // Add the markup data to the HTML-div called "protocols"

        document.getElementById("protocols").innerHTML = markup;

    }

);
