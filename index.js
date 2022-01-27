let opt = document.getElementById("opt")


function getData() {

    opt.innerText = '';

    axios.get('https://the-server-1.herokuapp.com/posts')
        .then(function (response) {
            // handle success
            // console.log(response.data);
            // opt.innerText = response.data;
            for (const key in response.data) {
                //console.log(response.data[key]['text']);

                opt.innerText += `${response.data[key]['text']} \n`

            }
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .then(function () {
            // always executed
        });

}


function postData() {

    opt.innerText = '';

    let val = document.getElementById("txt").value;
    console.log(val === "")

    if (val !== "" && val !== ' ') {

        axios.post('https://the-server-1.herokuapp.com/post', {
            "text": val
        })
            .then(function (response) {
                console.log(response);
                opt.innerText = 'Value added sucessfully';
                document.getElementById("txt").value = ""
            })

    } else {
        opt.innerHTML = "Please add some value"
    }

    
}