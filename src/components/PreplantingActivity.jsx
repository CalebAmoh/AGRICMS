import React, { useState, useEffect, useCallback } from 'react';
import Breadcrumbs from '@mui/joy/Breadcrumbs';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import ColorSchemeToggle from './ColorSchemeToggle';
import AddIcon from "@mui/icons-material/Add";

import { Stack, Modal, ModalClose, Sheet, Divider, Typography, Box, CardActions, Button, FormControl,FormLabel
    ,Select,Option,Input,Textarea,CardOverflow,Card,CardContent,AspectRatio} from "@mui/joy";


export default function PreplantingActivity() {

    // Initialize state with an object to track modals
    const [modals, setModals] = useState({
        view: false,
        viewDoc: false,
        decline: false,
        response: false,
    });


    //to open modal
    // to toggle modals
    const handleOpenModals = useCallback((modalType, id) => {
        setModals((prevModals) => ({
        ...prevModals,
        [modalType]: true,
        }));
    }, []);

    // handleClose to close all modals when called without an argument
    const handleClose = useCallback((modalType) => {
        if (modalType) {
          setModals((prevModals) => ({
            ...prevModals,
            [modalType]: false,
          }));
        } else {
          // Close all modals
          setModals({
            view: false,
            viewDoc: false,
            decline: false,
            response: false,
          });
        }
      }, []);


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
                    // color="#00357A"
                    sx={{ backgroundColor: "#00357A" }}
                    onClick={() => handleOpenModals("add")}
                    startDecorator={<AddIcon />}
                    size="md"
                >
                    Add Crop
                </Button>
                </Box>
                </Box>
                
            </Box>
        

            {/* Handles pre-planting on boarding */}
            <Modal
                aria-labelledby="modal-title"
                aria-describedby="modal-desc"
                open={modals.add} 
                onClose={() => handleClose("add")}
                slotProps={{
                backdrop: {
                    sx: {
                    backgroundColor: "rgba(0, 0, 0, 0.1)",
                    backdropFilter: "none",
                    },
                },
                }}
                sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: {xs: '16px', sm: '32px', md: '64px'}, // Responsive margins
                }}
            >
                <Sheet variant="outlined"
                    sx={{
                        maxWidth: {xs: '90%', sm: '70%', md: '50%'}, // Reduced max width
                        width: {xs: '90%', sm: '70%', md: '50%'}, // Reduced width
                        borderRadius: "md",
                        p: {xs: 2, sm: 3}, // Responsive padding
                        boxShadow: "lg",
                        overflowY: 'auto', // Enable scrolling for overflow content
                        maxHeight: '90vh', // Maximum height relative to viewport
                    }}
                    >
                    <ModalClose variant="plain" sx={{ m: 1 }} />
                    <Typography id="modal-desc" textColor="text.tertiary">
                        
                        <Box sx={{ mb: 1 }}>
                            <Typography level="title-md" sx={{fontSize: {xs: '1.2rem', sm: '1.5rem'}}}>
                            Add Crop
                            </Typography>
                        </Box>
                        <Divider sx={{ marginBottom: 2 }} />
                        <Stack spacing={{xs: 2, sm: 4}}>
                            <Stack direction={{xs: "column", sm: "row"}} spacing={{xs: 2, sm: 4}} sx={{display: "flex", justifyContent: "center"}}>
                                <FormControl sx={{ width: "70%", margin: "0 auto" }}>
                                    {/* Form group for crop name with label above */}
                                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, mb: 2 }}>
                                        <FormLabel sx={{ ml: 1 }}>Crop Name</FormLabel>
                                        <Input
                                            placeholder="Enter crop name"
                                            variant="outlined"
                                            size="md" 
                                            sx={{
                                                '& .MuiInput-root': {
                                                    borderRadius: 'sm',
                                                }
                                            }}
                                        />
                                    </Box>

                                    {/* Form group for crop type with label above */}
                                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                                        <FormLabel sx={{ ml: 1 }}>Crop Type</FormLabel>
                                        <Select
                                            placeholder="Select crop type"
                                            variant="outlined"
                                            size="md"
                                            sx={{
                                                '& .MuiSelect-root': {
                                                    borderRadius: 'sm',
                                                }
                                            }}
                                        >
                                            <Option value="cereals">Cereals</Option>
                                            <Option value="vegetables">Vegetables</Option>
                                            <Option value="fruits">Fruits</Option>
                                            <Option value="legumes">Legumes</Option>
                                            <Option value="tubers">Tubers</Option>
                                        </Select>
                                    </Box>
                                </FormControl>
                            </Stack>
                        </Stack>
                    </Typography>
                </Sheet>
            </Modal>
        </Box>
    );
}
