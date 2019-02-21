

document.querySelector("#btn").addEventListener("click", () => {
  document.querySelector("#name").innerHTML = domainName();
});

let pronoun = ['the','this','that'];
let adj = ['loose','swole','green'];
let noun = ['giant','dog','goose'];
    

function domainName (){
    let i=0;
    let j=0;
    let k=0;
    
    for (let i=0;i<pronoun.length;i++)
    {
        for (let j=0;j<adj.length;j++)
        {
            for (let k=0;k<noun.length;k++)
            {
                
            }
        }
    }
    return (pronoun[i]+adj[j]+noun[k]+".com");
}

