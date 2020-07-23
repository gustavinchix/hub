var pronoun = ['the','our','your','my'];
var adj = ['great', 'big','small','giant' ];
var noun = ['jogger','racoon','sun','moon', 'pionn'];
var extension = ['.es','.com', '.ve','.org'];
var extensionhack = ['.eer','.ess'];

pronoun.forEach(ele1 => 
    {
    adj.forEach(ele2 =>
        {
            noun.forEach(ele3 =>
                {
                    if (ele3 === 'jogger')
                    {
                        console.log(ele1 + ele2 + ele3 + extensionhack[1]);
                    }
                    else if (ele3 === 'pionn')
                    {
                        console.log(ele1 + ele2 + ele3 + extensionhack[0]);
                    }
                    else
                    {
                        extension.forEach(ele4 =>
                        {
                           console.log(ele1 + ele2 + ele3 + ele4);
                        })
                        ;}
                    
                });
        });
    });










                           

    
/*
    
    let pronoun = ["the","our","their"];
    for (let pron of pronoun){
        console.log(pron);
    }
    let adj = ["good", "great", "amazing","bad"];
    for (let adjj of adj){
        console.log(adjj);
    }
    let noum = ["raccoon","doggy","cat", "penguin"];
    for (let nou of noum){
        console.log(nou);
    }
    let domain =[".com",".us",".ve"];
    for (let doma of domain){
        console.log(doma);
    }
    function generation()
    {
        let pron= Math.floor(Math.random()*pronoun.length);
        let adjj= Math.floor(Math.random()*adj.length);
        let nou= Math.floor(Math.random()*noum.length);
        let doma= Math.floor(Math.random()*domain.length);    
        return (pronoun[pron]+ ' ' +adj[adjj]+ ' ' +noum[nou]+ ' ' +domain[doma]);
    }
    console.log(generation());
    */