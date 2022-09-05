import { faker } from '@faker-js/faker'
import fs from 'fs'

const generatePersonsData = number => {
  const persons = []
  while (number >= 0) {
    persons.push({
      id: number,
      name: faker.name.firstName(),
      country: faker.address.country()
    })
    number--
  }
  return persons
}
fs.writeFileSync(
  './db.json',
  JSON.stringify({ users: generatePersonsData(1000) })
)
