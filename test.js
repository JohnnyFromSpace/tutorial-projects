
/*
function n(){
    let ltn_numbers = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'];
    let ltn_dozen = ['X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC', 'C']; 
    let y=0;
    for(let i=11; i<=100; i++){
        for(; y<10;){
            if(i%10!==0){
                ltn_numbers.push(ltn_dozen[y]+ltn_numbers[i%10]); 
                break;
            }
            else {
                y++;
                ltn_numbers.push(ltn_dozen[y]+ltn_numbers[i%10])
                break;
            }          
        }
    }
    return ltn_numbers;
}
*/

function f(num){   
        let ltn_numbers = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'];
        let ltn_dozen = ['X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC', 'C']; 
        let y=0;
        for(let i=11; i<=100; i++){
            for(; y<10;){
                if(i%10!==0){
                    ltn_numbers.push(ltn_dozen[y]+ltn_numbers[i%10]); 
                    break;
                }
                else {
                    y++;
                    ltn_numbers.push(ltn_dozen[y]+ltn_numbers[i%10])
                    break;
                }          
            }
        }

    let ltn_num = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'];
    let arb_num = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
    let num_arr = num.split(' ');   
        if(arb_num.includes(num_arr[0]) && arb_num.includes(num_arr[2])) {
            switch(num_arr[1]) {
                case '+':
                    return Math.floor(+num_arr[0] + +num_arr[2]);
                case '-':
                    return Math.floor(+num_arr[0] - +num_arr[2]);
                case '*':
                    return Math.floor(+num_arr[0] * +num_arr[2]);
                case '/':
                    return Math.floor(+num_arr[0] / +num_arr[2]);
            }
        }
        else if(ltn_num.includes(num_arr[0]) && ltn_num.includes(num_arr[2])) {
            let res;
            switch(num_arr[1]) {
                    case '+':
                        res = Math.floor((ltn_num.indexOf(num_arr[0]) + 1) + (ltn_num.indexOf(num_arr[2]) + 1)).toString();
                        if(!res.includes('-'))
                        return ltn_numbers[+res];
                        else return '';
                    case '-':
                        res = Math.floor((ltn_num.indexOf(num_arr[0]) + 1) - (ltn_num.indexOf(num_arr[2]) + 1)).toString();
                        if(!res.includes('-'))
                        return ltn_numbers[+res];
                        else return '';
                    case '*':
                        res = Math.floor((ltn_num.indexOf(num_arr[0]) + 1) * (ltn_num.indexOf(num_arr[2]) + 1)).toString();
                        if(!res.includes('-'))
                        return ltn_numbers[+res];
                        else return '';                    
                    case '/':
                        res = Math.floor((ltn_num.indexOf(num_arr[0]) + 1) / (ltn_num.indexOf(num_arr[2]) + 1)).toString();
                        if(!res.includes('-'))
                        return ltn_numbers[+res];
                        else return '';
            }
        }
        else return '';
}

    console.log(f('IX * IX'));
