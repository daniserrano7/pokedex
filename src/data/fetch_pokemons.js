fetch('https://pokeapi.co/api/v2/pokemon?limit=251', {
      method: 'GET'
    })
      .then(response => response.json())
      .then(data => {
        const promises = [];
        data.results.forEach(pokemon => {
          promises.push(fetch(pokemon.url));
        });

        this.state.test = data.results;

        Promise.all(promises)
          .then(response => {
            response.forEach(async(r, i) => {
              let d = await r.json();
              //console.log(this.state.test[i]);
              this.state.test[i].types = [];
              d.types.forEach(type => {
                this.state.test[i].types.push(type.type.name);
                console.log(type.type.name);
              });
            });

            setTimeout(() => {
              console.log(JSON.stringify(this.state.test));
            }, 5000);
          })
      });