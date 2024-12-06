import React, { useState, useEffect, useCallback } from 'react';
import Breadcrumbs from '@mui/joy/Breadcrumbs';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import ColorSchemeToggle from './ColorSchemeToggle';
import AddIcon from "@mui/icons-material/Add";
import AddCropModal from './modals/AddCropModal';

import { Stack, Modal, ModalClose, Sheet, Divider, Typography, Box, CardActions, Button, FormControl,FormLabel
    ,Select,Option,Input,Textarea,CardOverflow,Card,CardContent,AspectRatio} from "@mui/joy";

import { useModal } from '../context/ModalContext';

export default function PreplantingActivity() {
  const { modals, handleOpenModal, handleCloseModal } = useModal();

  return (
    <Box sx={{ flex: 1, width: '100%' }}>

      {/* MAIN BODY */}
      <Box
        sx={{
          position: 'sticky',
          top: { sm: -100, md: -110 },
          bgcolor: 'background.body',
          zIndex: 9995,
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
              Crop planting
            </Typography>
            <Button
              sx={{ backgroundColor: "#00357A" }}
              onClick={() => handleOpenModal("add")}
              startDecorator={<AddIcon />}
              size="md"
            >
              Add Crop
            </Button>
          </Box>
        </Box>
      </Box>

      {/* Handles pre-planting on boarding */}
      <AddCropModal />
    </Box>
  );
}
