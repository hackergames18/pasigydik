//TODO: Add more appointments in the mock data
const now = new Date()

const appointments = {
  '12ffassf': {
    id: '12ffassf',
    patientId: 'firstUseruid',
    doctorId: 7,
    paid: true,
    startsAt: now.getTime(),
    endsAt: now.getTime(),
    createdAt: 12312312412,
    updatedAt: null,
    details: 'I think my would might be infected, i\'m worried therefore I want it to be checked out',

  }
}

const map = Object.keys(appointments).map(id => {
  if (appointments[id].patientId === 'firstUseruid') {
    return appointments[id]
  }
})

const filter = map.filter(item => {
  if (item.patientId === 'firstUseruid') {
    return {[item.id]: item}
  }
})

console.log(filter);
// .filter(id => {
//   return appointments[id].patientId === 'firstUseruid'
// }))

export default appointments


