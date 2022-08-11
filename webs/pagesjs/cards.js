const data = "https://rickandmortyapi.com/api/character";
fetch(data)
    .then((Response) => Response.json())
    .then((data) => {

        const mapped = data.results.map((characters)=>{
            return {
                name: characters.name,
                status: characters.status,
                gender: characters.gender,
                pic: characters.image,
                specie: characters.species,
            }
        })
        console.log(mapped);

        let tbody = ``;

        mapped.forEach(element => { 
            tbody += `
            
                <div class="cards">
                    <div class="cards__one">
                        <div class="cards__one--name">
                            <h1>${element.name}</h1>
                        </div>
                        <img class="cards__one--img" src=${element.pic} alt="pic" />
                    </div>
                    <div class="cards__two">
                        <h3 class="cards__two--status"><span class=${element.status === "Alive" ? "dot" : "dot2"}></span> ${element.status}</h3>
                        <h3 class="cards__two--gender">Gender: ${element.gender}</h3>
                        <h3 class="cards__two--species">${element.specie}</h3>
                    </div>
                </div>  
            
            `;
            
            
        });
        document.getElementById("cards").innerHTML = tbody;



    });
