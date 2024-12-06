import React, { useState, useEffect } from "react";
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import Breadcrumbs from '@mui/joy/Breadcrumbs';
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';

const Dashboard = () => {
    return(
        <Box sx={{ flex: 1, width: '100%' }}>
      <Box
        sx={{
          position: 'sticky',
          top: { sm: -100, md: -110 },
          bgcolor: 'background.body',
          zIndex: 9995,
        }}
      >
        <Box sx={{ px: { xs: 2, md: 6 } }}>
          <Breadcrumbs
            size="sm"
            aria-label="breadcrumbs"
            separator={<ChevronRightRoundedIcon />}
            sx={{ pl: 0 }}
          >
            <Typography color="primary">
              <DashboardRoundedIcon />
            </Typography>
          </Breadcrumbs>
          <Typography level="h2" component="h1" sx={{ mt: 1, mb: 2 }}>
            Dashboard
          </Typography>
        </Box>
        
      </Box>
      
    </Box>
    )
};

export default Dashboard;
