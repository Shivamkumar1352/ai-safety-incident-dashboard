import { Box, ButtonGroup, Button, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { SeverityFilter, SortOrder } from '../types/incidents';

interface IncidentFilterProps {
  severityFilter: SeverityFilter;
  onSeverityFilterChange: (severity: SeverityFilter) => void;
  sortOrder: SortOrder;
  onSortOrderChange: (order: SortOrder) => void;
}

export const IncidentFilter = ({
  severityFilter,
  onSeverityFilterChange,
  sortOrder,
  onSortOrderChange,
}: IncidentFilterProps) => {
  return (
    <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} justifyContent="space-between" alignItems="center" mb={3} gap={2}>
      <ButtonGroup variant="outlined" color="primary">
        {(['All', 'Low', 'Medium', 'High'] as SeverityFilter[]).map((severity) => (
          <Button
            key={severity}
            variant={severity === severityFilter ? 'contained' : 'outlined'}
            onClick={() => onSeverityFilterChange(severity)}
          >
            {severity}
          </Button>
        ))}
      </ButtonGroup>

      <FormControl sx={{ minWidth: 180 }}>
        <InputLabel id="sort-order-label">Sort By</InputLabel>
        <Select
          labelId="sort-order-label"
          value={sortOrder}
          onChange={(e) => onSortOrderChange(e.target.value as SortOrder)}
          label="Sort By"
        >
          <MenuItem value="newest">Newest First</MenuItem>
          <MenuItem value="oldest">Oldest First</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};
