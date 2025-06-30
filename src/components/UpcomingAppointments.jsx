import { Typography, List, ListItem, ListItemText } from '@mui/material';

const UpcomingAppointments = ({ incidents, patients }) => {
  const upcoming = incidents
    .filter(i => new Date(i.appointmentDate) > new Date() || new Date(i.nextDate) > new Date())
    .sort((a, b) => new Date(a.appointmentDate) - new Date(b.appointmentDate))
    .slice(0, 10);

  return (
    <>
      <Typography variant="h5" mt={5} mb={1}>Upcoming Appointments</Typography>
      <List>
        {upcoming.map(i => {
          const patient = patients.find(p => p.id === i.patientId);
          return (
            <ListItem key={i.id} sx={{ borderBottom: '1px solid #ddd' }}>
              <ListItemText
                primary={`${i.title} with ${patient?.name}`}
                secondary={new Date(i.appointmentDate).toLocaleString()}
                slotProps={{
                  primary: { sx: { fontWeight: 'bolder' } },
                }}
              />
            </ListItem>
          );
        })}
      </List>
    </>
  );
};

export default UpcomingAppointments;
