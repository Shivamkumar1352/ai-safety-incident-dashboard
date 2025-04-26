import { Card, CardContent, Typography, Button, Collapse, Box, Chip } from '@mui/material';
import { Incident } from '../types/incidents';
import { ExpandMore, ExpandLess } from '@mui/icons-material';

interface IncidentCardProps {
  incident: Incident;
  onToggleExpand: (id: number) => void;
  expanded: boolean;
}

const severityColor = {
  Low: 'success',
  Medium: 'warning',
  High: 'error',
} as const;

export const IncidentCard = ({ incident, onToggleExpand, expanded }: IncidentCardProps) => {
  const handleExpand = () => {
    onToggleExpand(incident.id);
  };

  return (
    <Card variant="outlined" sx={{ p: 2 }}>
      <CardContent>
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
          <Typography variant="h6">
            {incident.title}
          </Typography>
          <Chip
            label={incident.severity}
            color={severityColor[incident.severity]}
            size="small"
          />
        </Box>

        <Typography variant="caption" color="text.secondary">
          Reported: {new Date(incident.reported_at).toLocaleDateString()}
        </Typography>

        <Box display="flex" justifyContent="flex-end" mt={1}>
          <Button
            size="small"
            onClick={handleExpand}
            endIcon={expanded ? <ExpandLess /> : <ExpandMore />}
          >
            {expanded ? 'Hide Details' : 'View Details'}
          </Button>
        </Box>

        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <Typography variant="body2" mt={2}>
            {incident.description}
          </Typography>
        </Collapse>
      </CardContent>
    </Card>
  );
};
