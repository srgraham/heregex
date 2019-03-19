
expect = require('chai').expect;

heregex = require('../index.js');

it('should remove whitespace', ()=>{

  let actual = heregex`
    a a a a
    b b b b
    c c c c
    ${'gi'}
  `;
  let expected = /aaaabbbbcccc/gi;

  expect(actual).to.eql(expected);
});


it('should remove comments', ()=>{

  let actual = heregex`
    a          # here is a comment
    b          # here is another comment
    c #comment right next to text
    d \#       # literal # on this line
# comment at beginning of line
    e#1        # the #1 here is not a comment since theres not whitespace before it
    f
    ${'gi'}
  `;
  let expected = /abcd\#e#1f/gi;

  expect(actual).to.eql(expected);
});


