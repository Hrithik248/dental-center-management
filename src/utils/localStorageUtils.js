const seedData = {
  users: [
    { id: '1', role: 'Admin', email: 'admin@entnt.in', password: 'admin123' },
    { id: '2', role: 'Patient', email: 'john@entnt.in', password: 'patient123', patientId: 'p1' },
  ],
  patients: [
    {
      id: 'p1',
      name: 'John Doe',
      dob: '1990-05-10',
      contact: '1234567890',
      healthInfo: 'No allergies',
    },
  ],
  incidents: [],
}

export function initializeLocalStorage() {
  if (!localStorage.getItem('users')) {
    for (const key in seedData) {
      localStorage.setItem(key, JSON.stringify(seedData[key]))
    }
  }
}
