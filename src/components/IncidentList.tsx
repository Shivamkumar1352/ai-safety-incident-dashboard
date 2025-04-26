import { useState } from 'react';
import { Box, Typography, Fade } from '@mui/material';
import { Incident, SeverityFilter, SortOrder } from '../types/incidents';
import { IncidentCard } from './IncidentCard';

interface IncidentListProps {
  incidents: Incident[];
  severityFilter: SeverityFilter;
  sortOrder: SortOrder;
}

export const IncidentList = ({ incidents, severityFilter, sortOrder }: IncidentListProps) => {
  const [expandedIncidentId, setExpandedIncidentId] = useState<number | null>(null);

  const handleToggleExpand = (id: number) => {
    setExpandedIncidentId(expandedIncidentId === id ? null : id);
  };

  const filteredIncidents = incidents.filter(
    (incident) => severityFilter === 'All' || incident.severity === severityFilter
  );

  const sortedIncidents = [...filteredIncidents].sort((a, b) => {
    const dateA = new Date(a.reported_at).getTime();
    const dateB = new Date(b.reported_at).getTime();
    return sortOrder === 'newest' ? dateB - dateA : dateA - dateB;
  });

  if (sortedIncidents.length === 0) {
    return (
      <Typography variant="body1" sx={{ textAlign: 'center', mt: 4 }}>
        No incidents found.
      </Typography>
    );
  }

  return (
    <Box display="grid" gap={2}>
      {sortedIncidents.map((incident) => (
        <Fade in key={incident.id}>
          <div>
            <IncidentCard
              incident={incident}
              onToggleExpand={handleToggleExpand}
              expanded={expandedIncidentId === incident.id}
            />
          </div>
        </Fade>
      ))}
    </Box>
  );
};
