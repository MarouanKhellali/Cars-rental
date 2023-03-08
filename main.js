let contacts = [{
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "Curabitur.egestas.nunc@nonummyac.co.uk"
    }, {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere.vulputate@sed.com"
    }, {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu"
    }];
    let contact = prompt("Choose contact: first,last, or add  " );
    
    switch (contact) {
         case "first": {
            let message = (`name: (${contacts[0].name}). phone: (${contacts[0].phone}). email: (${contacts[0].email}).`);
            console.log(message);
            break;
        }
       
        case "last": {
            let message = (`name: (${contacts[2].name}). phone: (${contacts[2].phone}). email: (${contacts[2].email}).`);
            console.log(message);
            break;
        }
      
        
        
        default:
            alert("No contact " + String(contact));
    }