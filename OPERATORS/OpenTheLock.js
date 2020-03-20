print('pinNumber is ' + pinNumber);
print('foundKey is ' + foundKey);
if (foundKey === 'yes' && pinNumber === 10) {
  print('You openned the lock!');
}
if (foundKey === 'no' && pinNumber === 10) {
  print('The pin number is right, but you are missing the key.'
);
}
