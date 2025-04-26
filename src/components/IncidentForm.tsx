import { useState } from 'react';
import { Box, TextField, Button, Select, MenuItem, InputLabel, FormControl, Typography, Paper } from '@mui/material';
import { Incident, SeverityFilter } from '../types/incidents';

interface IncidentFormProps {
  onSubmit: (incident: Omit<Incident, 'id' | 'reported_at'>) => void;
}

export const IncidentForm = ({ onSubmit }: IncidentFormProps) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [severity, setSeverity] = useState<SeverityFilter>('Medium');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) return;
    
    onSubmit({
      title,
      description,
      severity: severity as 'Low' | 'Medium' | 'High',
    });
    
    setTitle('');
    setDescription('');
    setSeverity('Medium');
  };

  return (
    <Paper elevation={3} sx={{ mb: 4, p: { xs: 2, md: 3 }, borderRadius: 2 }}>
      <Typography variant="h6" gutterBottom>
        Report New Incident
      </Typography>

      <Box component="form" onSubmit={handleSubmit}>
        <TextField
          label="Title"
          fullWidth
          margin="normal"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <TextField
          label="Description"
          fullWidth
          margin="normal"
          multiline
          rows={4}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <FormControl fullWidth margin="normal">
          <InputLabel id="severity-label">Severity</InputLabel>
          <Select
            labelId="severity-label"
            value={severity}
            onChange={(e) => setSeverity(e.target.value as SeverityFilter)}
            label="Severity"
          >
            <MenuItem value="Low">Low</MenuItem>
            <MenuItem value="Medium">Medium</MenuItem>
            <MenuItem value="High">High</MenuItem>
          </Select>
        </FormControl>
        <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
          Submit Incident
        </Button>
      </Box>
    </Paper>
  );
};
