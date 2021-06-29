/**
 * escopos de var
 * fora de uma função ela é global
 * dentro de uma função ela só fica visivel dentro da function
 */

{ 
    { 
        { 
            { 
                var sera = 'Será???' 
                console.log(sera)
            } 
        } 
    } 
}

console.log(sera)

function teste() {
    var local = 123
    console.log(local)
}

teste()
// console.log(local) undefined