export function getMonthlyStats(incidents, patients) {
  const now = new Date();
  const months = [
    new Date(now.getFullYear(), now.getMonth() - 5),
    new Date(now.getFullYear(), now.getMonth() - 4),
    new Date(now.getFullYear(), now.getMonth() - 3), 
    new Date(now.getFullYear(), now.getMonth() - 2), 
    new Date(now.getFullYear(), now.getMonth() - 1), 
    new Date(now.getFullYear(), now.getMonth())];

  const data = months.map((month) => {
    const label = month.toLocaleString('default', { month: 'short' });

    const revenue = incidents
      .filter(i => new Date(i.appointmentDate).getMonth() === month.getMonth())
      .reduce((acc, curr) => acc + (curr.cost || 0), 0);

    const patientCount = patients
      .filter(p => {
        const incident = incidents.find(i => i.patientId === p.id);
        return incident && new Date(incident.appointmentDate).getMonth() === month.getMonth();
      }).length;

    return { label, revenue, patientCount };
  });

  return data;
}