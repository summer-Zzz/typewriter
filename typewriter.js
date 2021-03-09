const sentence = "hello there from lighthouse labs";

let seconds = 0;

const typeWriter = function(sentence){
  for (let i = 0; i < sentence.length; i++){
    if (i !== sentence.length){
      seconds += 50;
      setTimeout(() => {
        process.stdout.write(sentence[i]);
      }, seconds);
    }
  }
};
typeWriter(sentence + '\n');