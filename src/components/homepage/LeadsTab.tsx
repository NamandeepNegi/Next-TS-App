import React from 'react';
import {
  Tabs,
  Tab,
  Card,
  CardContent,
  Button,
  Typography,
  Stack,
  Box,
} from '@mui/material';

// Define the type for a lead
interface Lead {
  id: string; // Assuming id is a string, change to number if needed
  package_id: string;
  lead_owner: string;
  lead_created_date: string; // Assuming date is a string, if it's a Date object, adjust accordingly
  lead_status: string;
}
 // Import JSON directly
import Leads from "../../../Leads.json";
// Define the props for LeadsTab
interface LeadsTabProps {
  Leads: Lead[]; // Array of lead objects
}

const LeadsTab: React.FC<LeadsTabProps> = () => {
  return (
    <Stack direction="column" spacing={3}>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 3,
          justifyContent: 'center',
        }}
      >
        {Leads.map((lead) => (
          <Card
            key={lead.id}
            sx={{
              width: '100%',
              maxWidth: '350px', // Set a fixed width for all boxes
              borderRadius: 3,
              boxShadow: 3,
              display: 'flex',
              flexDirection: 'column',
              textAlign: 'center',
            }}
          >
            <CardContent>
              <Typography
                variant="h6"
                component="div"
                sx={{
                  fontWeight: 'bold',
                  marginBottom: '1rem',
                  textTransform: 'uppercase',
                }}
              >
                Package ID: {lead.package_id}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mb: 1 }}
              >
                <strong>Lead Owner:</strong> {lead.lead_owner}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mb: 1 }}
              >
                <strong>Created:</strong> {lead.lead_created_date}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mb: 1 }}
              >
                <strong>Status:</strong> {lead.lead_status}
              </Typography>

              <Button
                variant="contained"
                color="primary"
                fullWidth
                sx={{
                  borderRadius: 1,
                  boxShadow: 1,
                  '&:hover': { boxShadow: 2 },
                }}
              >
                View More
              </Button>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Stack>
  );
};

export default LeadsTab;
