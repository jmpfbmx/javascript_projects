var answer = pickRandom([
  'heads',
  'tails',
]);
print(answer);
if (answer === 'heads') {
  drawBoxes('gwg ggg gwg');
}
if (answer === 'tails') {
  drawBoxes('wgw www wgw');
}
