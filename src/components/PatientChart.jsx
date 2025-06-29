import { AreaChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area } from 'recharts';
import { Typography, Card, CardContent } from '@mui/material';

const PatientChart = ({ data }) => (
  <Card sx={{ flex: 1, mb: 2, width:'30vw', minWidth:'300px' }}>
    <CardContent>
      <Typography variant="h6" gutterBottom>
        Monthly Patient Count
      </Typography>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis allowDecimals={false} />
          <Tooltip />
          <defs>
            <linearGradient id="colorPatientCount" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#6a1b9a" stopOpacity={0.6}/>
              <stop offset="95%" stopColor="#6a1b9a" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <Area type="monotone" dataKey="patientCount" stroke="none" fill="url(#colorPatientCount)" />
          <Line type="monotone" dataKey="patientCount" stroke="#6a1b9a" />
        </AreaChart>
      </ResponsiveContainer>
    </CardContent>
  </Card>
);

export default PatientChart;
