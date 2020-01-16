function getMinimumDifference(a, b) {
    let numChanges = []
    
    for (let i = 0; i < a.length; i++) {
        if (a[i].length !== b[i].length) {
            numChanges.push(-1)
        } else {
            a[i].toLowerCase()
            b[i].toLowerCase()
            let wordA = a[i].split('')
            let wordB = b[i].split('')
            wordA.sort()
            wordB.sort()
            let count = wordA.length
            while(wordA.length > 0) {
                for (let j = 0; j < wordA.length; j++) {
                    if (b[i].includes(wordA[j])) {
                        wordB.splice(wordB.indexOf(wordA[j]), 1)
                        wordA.splice(j, 1)
                        count--
                    } else {
                        wordA.splice(j, 1)
                    }
                }
            }
                numChanges.push(count)
        } 
            
    }
        return numChanges
}


console.log(getMinimumDifference(['a', 'jk', 'abb', 'mn', 'abc'], ['bb', 'kj', 'bbc', 'op', 'def']))
// console.log(getMinimumDifference(['aaa', 'jk', 'abbab', 'mnr', 'abc'], ['bb', 'kj', 'bbcbb', 'opr', 'def']))
// console.log(getMinimumDifference(['ab', 'j', 'abba', 'mn', 'abc'], ['bb', 'kj', 'bbcc', 'op', 'def']))



//-1, 0, 1, 2, 3
//-1, 0, 2, 2, 3
//1, -1, 2, 2, 3
