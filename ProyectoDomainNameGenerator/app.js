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