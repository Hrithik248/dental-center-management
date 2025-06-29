import { Card, CardContent, Typography } from '@mui/material';

const KPICard = ({ title, value }) => (
  <Card sx={{ flex: 1, minWidth: 200, backgroundColor: '#f3e5f5' }}>
    <CardContent>
      <Typography variant="subtitle1" color="purple">
        {title}
      </Typography>
      <Typography variant="h5" fontWeight={600}>
        {value}
      </Typography>
    </CardContent>
  </Card>
);

export default KPICard;
