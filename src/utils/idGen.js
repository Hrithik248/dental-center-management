export function getNextPatientId(patients) {
  const usedIds = new Set(
    patients.map(p => parseInt(p.id.replace('p', ''), 10)).filter(Number.isInteger)
  );

  let nextId = 1;
  while (usedIds.has(nextId)) {
    nextId++;
  }
  return `p${nextId}`;
}

export function getNextIncidentId(incidents) {
  const usedIds = new Set(
    incidents.map(i => parseInt(i.id.replace('i', ''), 10)).filter(Number.isInteger)
  );

  let nextId = 1;
  while (usedIds.has(nextId)) {
    nextId++;
  }
  return `i${nextId}`;
}
