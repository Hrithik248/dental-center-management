const seedData = {
  users: [
    { id: '1', role: 'Admin', email: 'admin@entnt.in', password: 'admin123' },
    { id: '2', role: 'Patient', email: 'john@entnt.in', password: 'patient123', patientId: 'p1' },
  ],
  patients: [
    {
      id: 'p1',
      name: 'John Doe',
      dob: '1990-01-01',
      contact: '9876543210',
      healthInfo: 'No allergies',
    },
    {
      id: 'p2',
      name: 'Priya Sharma',
      dob: '1985-06-12',
      contact: '9123456780',
      healthInfo: 'Diabetic',
    },
    {
      id: 'p3',
      name: 'Ravi Kumar',
      dob: '1992-03-24',
      contact: '9988776655',
      healthInfo: 'Fever',
    },
    {
      id: 'p4',
      name: 'Sunil Kumar',
      dob: '1993-03-24',
      contact: '9888776655',
      healthInfo: 'Dengue',
    },
    {
      id: 'p5',
      name: 'Akshay Kumar',
      dob: '1992-07-24',
      contact: '9987776655',
      healthInfo: 'High BP',
    },
    {
      id: 'p6',
      name: 'Ravi Shetty',
      dob: '1997-03-24',
      contact: '9988776555',
      healthInfo: 'ADHD',
    },
    {
      id: 'p7',
      name: 'Kunal Kumar',
      dob: '1998-09-24',
      contact: '9988776855',
      healthInfo: 'Cancer',
    },
    {
      id: 'p8',
      name: 'Ravi Kumar',
      dob: '1992-03-24',
      contact: '9988776655',
      healthInfo: 'Allergy',
    },
    {
      id: 'p9',
      name: 'Dhoni Kumar',
      dob: '1997-08-24',
      contact: '9958776655',
      healthInfo: 'Knee fracture',
    },
    {
      id: 'p10',
      name: 'Ravi Kumar',
      dob: '1992-02-24',
      contact: '9928776655',
      healthInfo: 'Hypertension',
    }
  ],
  incidents: [
    {
      id: 'i1',
      patientId: 'p1',
      title: 'Tooth Extraction',
      description: 'Wisdom tooth removal',
      comments: 'Patient experiencing pain',
      appointmentDate: '2025-05-10T11:00:00',
      cost: 100,
      treatment: 'Extraction performed',
      status: 'Completed',
      nextDate: '2025-11-10T11:00:00',
      files: [
        { name: 'invoice-may.pdf', url: 'data:application/pdf;base64,xyz' },
        { name: 'xray-may.png', url: 'data:image/png;base64,xyz' }
      ]
    },
    {
      id: 'i2',
      patientId: 'p2',
      title: 'Cleaning',
      description: 'Routine cleaning',
      comments: 'First visit',
      appointmentDate: '2025-06-15T10:30:00',
      cost: 60,
      treatment: 'Cleaning completed',
      status: 'Completed',
      nextDate: '2025-12-15T10:30:00',
      files: [
        { name: 'invoice-june.pdf', url: 'data:application/pdf;base64,abc' }
      ]
    },
    {
      id: 'i3',
      patientId: 'p3',
      title: 'Cavity Filling',
      description: 'Lower molar cavity',
      comments: 'Mild decay',
      appointmentDate: '2025-06-25T09:00:00',
      cost: 90,
      treatment: '',
      status: 'Pending',
      nextDate: '',
      files: []
    },
    {
      id: 'i4',
      patientId: 'p4',
      title: 'Cavity Filling',
      description: 'Lower molar cavity',
      comments: 'Mild decay',
      appointmentDate: '2025-04-23T09:00:00',
      cost: 90,
      treatment: '',
      status: 'Completed',
      nextDate: '',
      files: []
    },
    {
      id: 'i5',
      patientId: 'p5',
      title: 'Cavity Filling',
      description: 'Lower molar cavity',
      comments: 'Mild decay',
      appointmentDate: '2025-02-25T09:00:00',
      cost: 80,
      treatment: '',
      status: 'Completed',
      nextDate: '',
      files: []
    },
    {
      id: 'i6',
      patientId: 'p6',
      title: 'Cavity Filling',
      description: 'Lower molar cavity',
      comments: 'Mild decay',
      appointmentDate: '2025-03-25T09:00:00',
      cost: 90,
      treatment: '',
      status: 'Completed',
      nextDate: '',
      files: []
    },
    {
      id: 'i7',
      patientId: 'p7',
      title: 'Cavity Filling',
      description: 'Lower molar cavity',
      comments: 'Mild decay',
      appointmentDate: '2025-04-25T09:00:00',
      cost: 100,
      treatment: '',
      status: 'Completed',
      nextDate: '',
      files: []
    },
    {
      id: 'i8',
      patientId: 'p8',
      title: 'Cavity Filling',
      description: 'Lower molar cavity',
      comments: 'Mild decay',
      appointmentDate: '2025-05-25T09:00:00',
      cost: 60,
      treatment: '',
      status: 'Completed',
      nextDate: '',
      files: []
    },
    {
      id: 'i9',
      patientId: 'p9',
      title: 'Cavity Filling',
      description: 'Lower molar cavity',
      comments: 'Mild decay',
      appointmentDate: '2025-06-10T09:00:00',
      cost: 90,
      treatment: '',
      status: 'Completed',
      nextDate: '',
      files: []
    },
    {
      id: 'i10',
      patientId: 'p10',
      title: 'Cavity Filling',
      description: 'Lower molar cavity',
      comments: 'Mild decay',
      appointmentDate: '2025-04-20T09:00:00',
      cost: 150,
      treatment: '',
      status: 'Completed',
      nextDate: '',
      files: []
    },
    {
      id: 'i11',
      patientId: 'p10',
      title: 'Cavity Filling',
      description: 'Lower molar cavity',
      comments: 'Mild decay',
      appointmentDate: '2025-06-25T09:00:00',
      cost: 200,
      treatment: '',
      status: 'Completed',
      nextDate: '',
      files: []
    }
  ],
}

export function initializeLocalStorage() {
  if (!localStorage.getItem('users')) {
    for (const key in seedData) {
      localStorage.setItem(key, JSON.stringify(seedData[key]))
    }
  }
}
