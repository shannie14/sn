document.getElementById('search').addEventListener('click', function () {

    // Grab the value of the search input
    let term = document.getElementById('term').value
    console.log(term)

    axios.get('/read?term=' + term)
        .then(res => {
            console.log(res);
            res.data.sort((a, b) => (a.clip > b.clip) ? 1 : -1);

            // Append the information of each object returned from the search onto the page
            const search_results_section = document.getElementById('search_results');

            for (let i = 0; i < res.data.length; i = i + 1) {
                // first loop: i = 0
                // second loop: i = 1 
                console.log('value of i', i)
                const show = res.data[i]
                console.log(show)

                const div = document.createElement("a")
                div.setAttribute('href', './views/show.html?id=' + show._id)
                div.innerText = show.clip + " " + show.title
                search_results_section.append(div)


            }
        })
})

document.getElementById('Ambush').addEventListener('click', function () {

    axios.get('/read?term=AWDF')
        .then(res => {
            console.log(res);
            res.data.sort((a, b) => (a.clip > b.clip) ? 1 : -1);

            // Append the information of each object returned from the search onto the page
            const search_results_section = document.getElementById('search_results');

            for (let i = 0; i < res.data.length; i = i + 1) {
                // first loop: i = 0
                // second loop: i = 1 
                console.log('value of i', i)
                const show = res.data[i]
                console.log(show)

                const div = document.createElement("a")
                div.setAttribute('href', './views/show.html?id=' + show._id)
                div.innerText = show.clip + " " + show.title
                search_results_section.append(div)


            }
        })
})

document.getElementById('Barons').addEventListener('click', function () {

    axios.get('/read?term=GB')
        .then(res => {
            console.log(res);
            res.data.sort((a, b) => (a.clip > b.clip) ? 1 : -1);

            // Append the information of each object returned from the search onto the page
            const search_results_section = document.getElementById('search_results');

            for (let i = 0; i < res.data.length; i = i + 1) {
                // first loop: i = 0
                // second loop: i = 1 
                console.log('value of i', i)
                const show = res.data[i]
                console.log(show)

                const div = document.createElement("a")
                div.setAttribute('href', './views/show.html?id=' + show._id)
                div.innerText = show.clip + " " + show.title
                search_results_section.append(div)


            }
        })
})

document.getElementById('Challengers').addEventListener('click', function () {
    axios.get('/read?term=TCG')
        .then(res => {
            console.log(res);
            res.data.sort((a, b) => (a.clip > b.clip) ? 1 : -1);

            // Append the information of each object returned from the search onto the page
            const search_results_section = document.getElementById('search_results');

            for (let i = 0; i < res.data.length; i = i + 1) {
                // first loop: i = 0
                // second loop: i = 1 
                console.log('value of i', i)
                const show = res.data[i]
                console.log(show)

                const div = document.createElement("a")
                div.setAttribute('href', './views/show.html?id=' + show._id)
                div.innerText = show.clip + " " + show.title
                search_results_section.append(div)


            }
        })
})

document.getElementById('Finding').addEventListener('click', function () {

    axios.get('/read?term=FTF')
        .then(res => {
            console.log(res);
            res.data.sort((a, b) => (a.clip > b.clip) ? 1 : -1);

            // Append the information of each object returned from the search onto the page
            const search_results_section = document.getElementById('search_results');

            for (let i = 0; i < res.data.length; i = i + 1) {
                // first loop: i = 0
                // second loop: i = 1 
                console.log('value of i', i)
                const show = res.data[i]
                console.log(show)

                const div = document.createElement("a")
                div.setAttribute('href', './views/show.html?id=' + show._id)
                div.innerText = show.clip + " " + show.title
                search_results_section.append(div)


            }
        })
})

document.getElementById('Golficity').addEventListener('click', function () {

    axios.get('/read?term=GFC')
        .then(res => {
            console.log(res);
            res.data.sort((a, b) => (a.clip > b.clip) ? 1 : -1);

            // Append the information of each object returned from the search onto the page
            const search_results_section = document.getElementById('search_results');

            for (let i = 0; i < res.data.length; i = i + 1) {
                // first loop: i = 0
                // second loop: i = 1 
                console.log('value of i', i)
                const show = res.data[i]
                console.log(show)

                const div = document.createElement("a")
                div.setAttribute('href', './views/show.html?id=' + show._id)
                div.innerText = show.clip + " " + show.title
                search_results_section.append(div)


            }
        })
})