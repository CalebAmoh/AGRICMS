import React, { useState, useEffect, useCallback } from 'react';
import Breadcrumbs from '@mui/joy/Breadcrumbs';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import ColorSchemeToggle from './ColorSchemeToggle';
import AddIcon from "@mui/icons-material/Add";
import AddCropModal from './modals/AddCropModal';
import AddPlantModal from './modals/AddPlantModal';
import AddGrowLocation from './modals/AddGrowLocation';
import Tooltip from '@mui/joy/Tooltip';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import {Typography, Box, Button} from "@mui/joy";
import { useModal } from '../context/ModalContext';   
import SearchFilterBar from './SearchFilterBar';
import DataTable from './DataTable';
import EditIcon from '@mui/icons-material/Edit';

export default function PreplantingActivity() {

  // Modal functions
  const { modals, handleOpenModal, handleCloseModal } = useModal();

  // Filter options
  const filterOptions = [
    {
      label: "Status",
      placeholder: "Filter by status",
      options: [
        { value: "active", label: "Active" },
        { value: "inactive", label: "Inactive" }
      ],
      onChange: (value) => handleStatusFilter(value)
    },
    {
      label: "Document Type",
      placeholder: "All",
      options: [
        { value: "all", label: "All" },
        { value: "invoice", label: "Invoice" },
        { value: "projects", label: "Projects" }
      ],
      onChange: (value) => handleDocTypeFilter(value)
    }
  ];

  // Columns for the table
  const columns = [
    { 
      field: 'internal_id', 
      header: 'ID', 
      width: 140 
    },
    { 
      field: 'location_name', 
      header: 'Location Name', 
      width: 140 
    },
    { 
      field: 'location_type', 
      header: 'Location Type', 
      width: 140 
    },
    { 
      field: 'planting_format', 
      header: 'Planting Format', 
      width: 140 
    },
    // ... more columns
  ];

  // Actions for the table
  const actions = [
    {
      render: (row) => (
        <Tooltip title="Edit Land Details">
        <Button onClick={() => handleOpenModal("addLand")}>
          <EditIcon />
        </Button>
        </Tooltip>
      )
    },
    {
      render: (row) => (
        <Tooltip title="View Planting Details">
        <Button onClick={() => handleView(row.id)}>
          <RemoveRedEyeIcon />
        </Button>
        </Tooltip>
      )
    },
    // ... more actions
  ];

  const yourData = [
    {
      internal_id: 1,
      location_name: "North West",
      location_type: "Field",
      planting_format: "Square"
    },
    {
      internal_id: 2,
      location_name: "South East",
      location_type: "Field",
      planting_format: "Square"
    },
    {
      internal_id: 3,
      location_name: "East",
      location_type: "Field",
      planting_format: "Square"
    }
  ];
  


  

  return (
    <Box sx={{ flex: 1, width: '100%', position: 'relative' }}>

      {/* MAIN BODY */}
      <Box
        sx={{
          position: 'sticky',
          top: { sm: -100, md: -110 },
          bgcolor: 'background.body',
          zIndex: 100,
        }}
      >
        <Box sx={{ px: { xs: 2, md: 6 } }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            {/* Breadcrumbs on the left */}
            <Breadcrumbs
              size="sm"
              aria-label="breadcrumbs"
              separator={<ChevronRightRoundedIcon />}
              sx={{
                pl: 0,
                display: 'flex',
                alignItems: 'center',
                flexGrow: 1,  // Ensures it takes all available space
              }}
            >
              <Typography color="primary" sx={{ display: 'flex', alignItems: 'center' }}>
                <HomeRoundedIcon />
              </Typography>
            </Breadcrumbs>

            {/* ColorSchemeToggle at the far right */}
            <ColorSchemeToggle sx={{ display: 'flex', alignItems: 'center', marginTop:'5px'}} />
          </Box>
          <Box
            sx={{
              display: "flex",
              mb: 1,
              gap: 1,
              flexDirection: { xs: "column", sm: "row" },
              alignItems: { xs: "start", sm: "center" },
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            <Typography level="h2" component="h1" sx={{ mt: 1, mb: 2 }}>
              Grow Locations
            </Typography>
            <Button
              sx={{ backgroundColor: "#00357A" }}
              onClick={() => handleOpenModal("addLand")}
              startDecorator={<AddIcon />}
              size="md"
            >
              Add Location
            </Button>

            <SearchFilterBar filterOptions={filterOptions} onSearch={(value) => console.log('Search:', value)}/>

           
         
            <DataTable
              columns={columns}
              data={yourData}
              actions={actions}
            />
            
          </Box>
        </Box>
      </Box>

      {/* Move crop adding modal here, outside of other containers */}
      <Box sx={{ 
        position: 'relative', 
        zIndex: 9999 // Ensure modal appears above other content
      }}>
        <AddCropModal />
      </Box>
      {/* Move planting modal here, outside of other containers */}
      <Box sx={{ 
        position: 'relative', 
        zIndex: 9999 // Ensure modal appears above other content
      }}>
        <AddGrowLocation />
      </Box>
    </Box>
  );
}
