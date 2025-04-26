import { useState } from 'react';
import { Box, Container, AppBar, Toolbar, Typography, CssBaseline } from '@mui/material';
import { ThemeProvider } from './context/ThemeContext';
import { IncidentFilter } from './components/IncidentFilter';
import { IncidentList } from './components/IncidentList';
import { IncidentForm } from './components/IncidentForm';
import { ThemeToggle } from './components/ThemeToggle';
import { Incident, SeverityFilter, SortOrder } from './types/incidents';
import StarsCanvas from "./components/StarsCanvas";  // <--- You already imported this

const mockIncidents: Incident[] = [
  {
    id: 1,
    title: 'Biased Recommendation Algorithm',
    description: 'Algorithm consistently favored certain demographics in job recommendations.',
    severity: 'Medium',
    reported_at: '2025-03-15T10:00:00Z',
  },
  {
    id: 2,
    title: 'LLM Hallucination in Critical Info',
    description: 'LLM provided incorrect safety procedures in healthcare context.',
    severity: 'High',
    reported_at: '2025-04-01T14:30:00Z',
  },
  {
    id: 3,
    title: 'Minor Data Leak via Chatbot',
    description: 'Chatbot exposed non-sensitive user metadata.',
    severity: 'Low',
    reported_at: '2025-03-20T09:15:00Z',
  },
];

const App = () => {
  const [incidents, setIncidents] = useState<Incident[]>(mockIncidents);
  const [severityFilter, setSeverityFilter] = useState<SeverityFilter>('All');
  const [sortOrder, setSortOrder] = useState<SortOrder>('newest');

  const handleAddIncident = (newIncident: Omit<Incident, 'id' | 'reported_at'>) => {
    const incident: Incident = {
      id: incidents.length > 0 ? Math.max(...incidents.map(i => i.id)) + 1 : 1,
      ...newIncident,
      reported_at: new Date().toISOString(),
    };
    setIncidents([incident, ...incidents]);
  };

  return (
    <ThemeProvider>
      <CssBaseline />

      {/* ✨ Add Stars Background */}
      <StarsCanvas />

      {/* ✨ Then, rest of your UI */}
      <AppBar position="sticky" elevation={1}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h6" fontWeight="bold">
            AI Safety Incidents
          </Typography>
          <ThemeToggle />
        </Toolbar>
      </AppBar>

      <Container maxWidth="md" sx={{ py: { xs: 3, md: 5 } }}>
        <IncidentForm onSubmit={handleAddIncident} />
        <IncidentFilter
          severityFilter={severityFilter}
          onSeverityFilterChange={setSeverityFilter}
          sortOrder={sortOrder}
          onSortOrderChange={setSortOrder}
        />
        <IncidentList
          incidents={incidents}
          severityFilter={severityFilter}
          sortOrder={sortOrder}
        />
      </Container>
    </ThemeProvider>
  );
};

export default App;
