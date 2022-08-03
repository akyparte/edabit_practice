


function join(strArr,n){
    let resultArr = [];
    let i = 0;
    while (i < strArr.length) {
         if(i == 0){
            resultStr = connect(strArr[i],'');
         }else {
            resultStr = connect(resultArr,strArr[i]);
         }
    }
}


function connect(str1,str2){
    [str1] = str1;
    if(str1.length != 0 && str2.length != 0){
            let dublicateCharacterIndex = 0;
            for(let i = 0;i <= str1.length;i++){
                if(str1.endsWith(str2.substring(0,i))){
                    dublicateCharacterIndex = i;
                }
            }
    
            return [str1+(str2.substring(dublicateCharacterIndex)),dublicateCharacterIndex];
    }else {
        return [str1+str2,dublicateCharacterIndex];
    }
}

let object = {
    "0": { age: 18, name: "john", marks: "400" },
    "1": { age: 17, name: "julie", marks: "400" },
    "2": { age: 16, name: "Robin", marks: "200" },
    "3": { age: 16, name: "Bella", marks: "300" }
  };



function lllfreqCount(arr,n) {
    function filter(arr,n,level){
        let currentCounter = 0;
        let result = [];
        let i = 0;
        while(i < arr.length){
             let value = arr[i];
             if(value instanceof Array){
                   if(level == undefined){
                    result.push(...filter(value,n,1));
                   }else {
                        result.push(...filter(value,n,level+1));
                   }
                     if(i === arr.length-1){
                         level == undefined ? result.push([0,currentCounter])
                         : result.push([level,currentCounter]);
                    
                         return result;
                     }
    
             }else {
                 if(value === n){
                     currentCounter++;
                 }
                 if(i === arr.length-1){
                         level == undefined ? result.push([0,currentCounter])
                         : result.push([level,currentCounter]);
                         
                         return result;
                 }
             }
             
        i++;    
        }
    console.log('ccc');
         let t  = merge(result)
        return t;
    }
    
    function merge(arrt) {
        let resultObj = {};
        let i = 0;
        
        while(i < arrt.length){
               let currentArr = arrt[i];
            if(currentArr[0] in resultObj){
                 resultObj[currentArr[0]][1] = (resultObj[currentArr[0]][1] + currentArr[1]);
            }else {
                resultObj[currentArr[0]] = currentArr;
            }
        
            i++;
        }
        
        return Object.values(resultObj);
        
    }

    let result = filter(arr,n);

    return merge(result);
}



const freqCount = (arr, el, depth = 0) => !arr.length ? [] : [
    [depth, arr.filter(e => e === el).length],
	...freqCount(arr.filter(Array.isArray).flat(), el, depth + 1)
];

let time = new Date();

// console.log(freqCount([1, 4, 4, [1, 1, [1, 2, 1, 1]]], 1)
// );


// console.log(new Date() - time);


function threeSum(arr) {
    let result = [];
    if(arr.length >= 3){
        for(let i = 0;i < arr.length-2;i++){
              if( (arr[i] + arr[i+1] + arr[i+2]) === 0){
                result.push([arr[i],arr[i+1],arr[i+2]])
              }
        }
        return result;
    }else {
        return [];
    }
}

// console.log(threeSum([0, -1, 1, 0, -1, 1]));


'[[0, -1, 1], [0, 1, -1], [-1, 1, 0], [-1, 0, 1], [1, 0, -1]]'

const months = { 1: "A", 2: "B", 3: "C", 4: "D", 5: "E", 6: "H",
7: "L", 8: "M", 9: "P", 10: "R", 11: "S", 12: "T" }


function fiscalCode(person) {
    let resultStr = '';
    if(person.surname){
        let surname = person.surname;
        let consonantCount = 0;
        let con_arr = [];
        let vo_arr = [];

        for(let i = 0;i < surname.length;i++){
        

            if(!isVovel(surname[i])){
                 con_arr.push(surname[i]);
                 consonantCount++;
            }else {
                vo_arr.push(surname[i]);
            }

            if(consonantCount === 3){
                resultStr = con_arr.join('');
                break;
            }

            if(i == surname.length-1){
                resultStr = `${con_arr.join('')}${vo_arr.join('').substring(0,(3-con_arr.length))}`

                if(resultStr.length < 3){
                    resultStr = resultStr + 'X';
                }
            }

        }


        
    }
    if(person.name){
        let name = person.name;
        let consonantCharacters = [];
        let vovelCharacters = [];

        for(let i = 0;i < name.length;i++){
           if(!isVovel(name[i])){
              consonantCharacters.push(name[i]); 
           }else {
              vovelCharacters.push(name[i]);
           }
           if((consonantCharacters.length === 3) && (i === name.length-1)){
            resultStr = resultStr + consonantCharacters.join('').substring(0,3);
            break;
           }

           if(i === name.length-1 && consonantCharacters.length >= 3){
              resultStr = resultStr + consonantCharacters[0] + consonantCharacters[1] + consonantCharacters[2];
              break;
           }
           if(i === name.length-1 && consonantCharacters.length < 3){
               resultStr = resultStr + consonantCharacters.join('') + vovelCharacters.join('').substring(0,3 - consonantCharacters.length);
               if(resultStr.length < 3){
                resultStr = resultStr + 'X';
               }
               break;
           }
        }
    }

    // console.log(resultStr);
    if(person.dob && person.gender){
         let dobArr = person.dob.split('/'); 
        resultStr = resultStr + dobArr[2].substring(2);
        resultStr = resultStr + months[dobArr[1]];
        if(person.gender && person.gender === 'M'){
              if(dobArr[0].length === 1){
                resultStr = resultStr + `0${dobArr[0]}`;
              }else {
                resultStr = resultStr + dobArr[0];
              }
        }else if(person.gender && person.gender === 'F'){
            resultStr = resultStr + (Number(dobArr[0]) + 40); 
        }
    }


    console.log(resultStr.toUpperCase());
}


function isVovel(character) {
    character = character.toLowerCase();
    if(character === 'a' || character === 'e' || character === 'i' || character === 'o' || character === 'u'){
        return true;
    }else {
        return false;
    }
}


fiscalCode({
    name: "Mickey",
    surname: "Mouse",
    gender: "M",
    dob: "16/1/1928"
  })