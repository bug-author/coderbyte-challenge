function SearchingChallenge(str) { 

  // code goes here  
  // this is a nightmare
  // dynamic sliding window
  // example aabecaa
  // sliding window of size 2
  // aa: 2, ab be, ec, ca 1 

  // sskfssbbb9bbb
  // ss sk kf fs ss sb bb bb b9 9b bb -> bb has freq of 3
  // so we move from opposite direction
  // n-1, n-2, n-3 until 2 where n is length of string

  // link to chatgpt https://chatgpt.com/share/67811598-eb7c-8011-8328-9df2a8a12ba8


  for (let windowSize = str.length - 1; windowSize > 1; windowSize--){
    
    let start = 0;
    let end = windowSize;

    let freqMap = {}
    
    while (end <= str.length){
      let substring = str.slice(start, end)
      if(substring in freqMap) return `yes ${substring}`
    
      else freqMap[substring] = 1;

      start+=1
      end+=1
    }
  }

  return `no null`; 

}
