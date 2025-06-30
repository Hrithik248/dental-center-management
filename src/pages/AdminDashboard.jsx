import { useEffect, useState } from "react";
import KPICard from "../components/KPICard";
import PatientChart from "../components/PatientChart";
import RevenueChart from "../components/RevenueChart";
import UpcomingAppointments from "../components/UpcomingAppointments";
import { getMonthlyStats } from "../utils/getStats";
import { Box, Grid, Typography } from "@mui/material";

const AdminDashboard = () => {
    const [stats, setStats] = useState([]);
    const [patients, setPatients] = useState([]);
    const [incidents, setIncidents] = useState([]);

    useEffect(() => {
        const p = JSON.parse(localStorage.getItem('patients') || '[]');
        const i = JSON.parse(localStorage.getItem('incidents') || '[]');
        setPatients(p);
        setIncidents(i);
        setStats(getMonthlyStats(i, p));
    }, []);

    const topPatients = [...patients].map((p) => {
        const totalSpent = incidents
            .filter((i) => i.patientId === p.id && i.status === 'Completed')
            .reduce((sum, i) => sum + (i.cost || 0), 0);
        return { ...p, totalSpent };
    })
    .sort((a, b) => b.totalSpent - a.totalSpent)
    .slice(0, 3);


    const totalRevenue = incidents.reduce((sum, i) => sum + (i.cost || 0), 0);
    const completed = incidents.filter(i => i.status === 'Completed').length;
    const pending = incidents.filter(i => i.status !== 'Completed').length;

    return (
        <Box p={2}>
        <Typography variant="h4" mb={3} color="purple" fontWeight={600}>
            Admin Dashboard
        </Typography>

        <Grid container spacing={2} mb={4}>
            <KPICard title="Total Patients" value={patients.length} />
            <KPICard title="Total Revenue" value={`$${totalRevenue}`} />
            <KPICard title="Pending Treatments" value={pending} />
            <KPICard title="Completed Treatments" value={completed} />
        </Grid>

        <Grid container spacing={2} mt={1}>
            <Grid item xs={12} md={6}>
                <PatientChart data={stats} />
            </Grid>
            <Grid item xs={12} md={6}>
                <RevenueChart data={stats} />
            </Grid>
            <Grid item xs={12} md={4}>
                <Box px={2} py={4.9} boxShadow={2} borderRadius={2} height={300} minWidth={295} width='29vw' bgcolor="#fff">
                    <Typography variant="h6" mb={3} gutterBottom color="primary">
                        Top 3 Patients
                    </Typography>
                    {topPatients.map((p, idx) => (
                        <Box key={p.id} mb={1.5} p={1.5} border="1px solid #6a1b9a" borderRadius={1}>
                            <Typography fontWeight="bold" color="#6a1b9a" >
                                {idx + 1}. {p.name}
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                                Total Spent: ${p.totalSpent}
                            </Typography>
                        </Box>
                    ))}
                </Box>
            </Grid>
        </Grid>

        <UpcomingAppointments incidents={incidents} patients={patients} />
        </Box>
    );
};

export default AdminDashboard;