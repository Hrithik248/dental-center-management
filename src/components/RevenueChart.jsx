import { AreaChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area } from 'recharts';
import { Typography, Card, CardContent } from '@mui/material';

const RevenueChart = ({ data }) => (
  <Card sx={{ flex: 1, width:'30vw', minWidth:'325px' }}>
    <CardContent>
      <Typography variant="h6" gutterBottom>
        Monthly Revenue
      </Typography>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip />
          <defs>
            <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#9c27b0" stopOpacity={0.6}/>
              <stop offset="95%" stopColor="#9c27b0" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <Area type="monotone" dataKey="revenue" stroke="none" fill="url(#colorRevenue)" />
          <Line type="monotone" dataKey="revenue" stroke="#9c27b0" />
        </AreaChart>
      </ResponsiveContainer>
    </CardContent>
  </Card>
);

export default RevenueChart;