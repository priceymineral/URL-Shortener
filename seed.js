import faker from 'faker';

let count = 10;
for (let i = 0; i < count; i++) {
  console.log(faker.internet.url());
}
// let url = faker.internet.url();
// console.log(url);