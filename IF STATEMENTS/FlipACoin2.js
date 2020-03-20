var answer = pickRandom([
  'heads',
  'tails',
]);
print(answer);
if (answer === 'heads') {
  drawBoxes('gwg ggg gwg');
} else {
  drawBoxes('rrr wrw wrw');
}
