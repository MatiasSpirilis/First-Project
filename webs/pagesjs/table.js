const data = "https://jsonplaceholder.typicode.com/users";
fetch(data)
    .then((response) => response.json())
    .then((data) => {
        let persons = data.map((person) => {
            return {
                id: person.id,
                name: person.name,
                email: person.email,
                phone: person.phone,
                city: person.address.city,
            };
        });
        // console.log(persons);

        let tbody = ``;

        persons.forEach((persona) => {
            tbody +=`
                <tr>    
                    <td>${persona.id}</td>
                    <td>${persona.name}</td>
                    <td>${persona.email}</td>
                    <td>${persona.phone}</td>
                    <td>${persona.city}</td>
                </tr>            
            
            `
        });
        document.getElementById('table').innerHTML = tbody;
    });
