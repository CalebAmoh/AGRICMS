import React, { useState } from 'react';
import { 
  Modal, 
  Sheet, 
  Typography, 
  Box, 
  FormControl,
  Input,
  Button,
  Stack,
  Stepper,
  Step,
  StepIndicator,
  StepButton,
  CircularProgress,
  Select,
  Option,
  Divider,
  ModalOverflow,
  ModalClose,
  Textarea
} from "@mui/joy";
import { useModal } from '../../context/ModalContext';
import LooksOneTwoToneIcon from '@mui/icons-material/LooksOneTwoTone';
import LooksTwoTwoToneIcon from '@mui/icons-material/LooksTwoTwoTone';
import CheckCircleTwoToneIcon from '@mui/icons-material/CheckCircleTwoTone';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import LooksOneIcon from '@mui/icons-material/LooksOne';
import LooksTwoIcon from '@mui/icons-material/LooksTwo';
import ModalDialog, { ModalDialogProps } from '@mui/joy/ModalDialog';



// Step components for the wizard
const steps = [
  { label: 'Details', number: 1, icon: <LooksOneTwoToneIcon sx={{ fontSize: 30 }}/>, activeIcon: <LooksOneIcon sx={{ fontSize: 30 }}   /> },
  { label: 'Map Location', number: 2, icon: <LooksTwoTwoToneIcon sx={{ fontSize: 30 }}/>, activeIcon: <LooksTwoIcon sx={{ fontSize: 30 }} /> },
  { label: 'Complete', number: 3, icon: <CheckCircleTwoToneIcon sx={{ fontSize: 30 }}/>, activeIcon: <CheckCircleIcon sx={{ fontSize: 30 }} /> }
];

export default function AddPlantModal() {
  // State management
  const inputRef = React.useRef<HTMLInputElement>(null);
  const { modals, handleCloseModal } = useModal();
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    cropType: '',
    growLocation: '',
    // Add other form fields as needed
  });

  const [selectedFormat, setSelectedFormat] = useState('beds');
  // Handler for step navigation
  const handleNext = () => setActiveStep((prev) => prev + 1);
  const handleBack = () => setActiveStep((prev) => prev - 1);

  // Render the current step content
  const renderStepContent = () => {
    switch (activeStep) {
      case 0:
        return (
          <Stack spacing={2}>
                 <Stack direction="row" spacing={2}>
                    <FormControl sx={{ flex: 1, display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 2 }}>
                        <Typography level="title-sm" sx={{ textAlign: 'right', width: '100px' }}>Location Name</Typography>
                        <Input type="text" sx={{ flex: 1 }} size="sm" />
                    </FormControl>
                    <FormControl sx={{ flex: 1, display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 2 }}>
                        <Typography level="title-sm" sx={{ textAlign: 'right', width: '100px' }}>Location Type</Typography>
                        <Select
                          placeholder="Select Location Type"
                          sx={{ flex: 1 }}
                          size="sm"
                          >
                            <Option value="1">Greenhouse</Option>
                            <Option value="2">Field</Option>
                        </Select> 
                    </FormControl>
                </Stack>
                <Stack direction="row" spacing={2}>
                    <FormControl sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 2 }}>
                        <Typography level="title-sm">Planting Format</Typography>
                        <Stack direction="row" spacing={2}>
                            {/* Planted in Beds */}
                            <Button
                                variant={selectedFormat === 'beds' ? 'solid' : 'outlined'}
                                onClick={() => setSelectedFormat('beds')}
                                sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 1, p: 2 }}
                            >
                                <Typography startDecorator="≡" >Planted in Beds</Typography>
                                <Typography level="body-xs">
                                    Distinct number of beds for diverse crops. Often 100' length. Example: Carrots, Tomatos, Spinach, etc.
                                </Typography>
                            </Button>

                            {/* Cover Crop */}
                            <Button
                                variant={selectedFormat === 'cover' ? 'solid' : 'outlined'}
                                onClick={() => setSelectedFormat('cover')}
                                sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 1, p: 2 }}
                            >
                                <Typography startDecorator="■">Cover Crop</Typography>
                                <Typography level="body-xs">
                                    Complete crop coverage or grazing location. Example: Alfalfa, Hay, Rye, Wheat, Pasture, etc.
                                </Typography>
                            </Button>

                            {/* Row Crop */}
                            <Button
                                variant={selectedFormat === 'row' ? 'solid' : 'outlined'}
                                onClick={() => setSelectedFormat('row')}
                                sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 1, p: 2 }}
                            >
                                <Typography startDecorator="▣">Row Crop</Typography>
                                <Typography level="body-xs">
                                    One crop planted in rows wide enough to be cultivated by machinery. Example: Corn, Soy Beans, Hemp, Potatos, etc.
                                </Typography>
                            </Button>

                            {/* Other */}
                            <Button
                                variant={selectedFormat === 'other' ? 'solid' : 'outlined'}
                                onClick={() => setSelectedFormat('other')}
                                sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 1, p: 2 }}
                            >
                                <Typography startDecorator="#">Other</Typography>
                                <Typography level="body-xs">
                                    Any alternative growing method. Example: Shelves, aquaponics, trays, etc.
                                </Typography>
                            </Button>
                        </Stack>
                    </FormControl>
                </Stack>
              
                <Stack direction="row" spacing={2}>
                  <FormControl sx={{ flex: 1, display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 2,  }}>
                      <Typography level="title-sm" sx={{ textAlign: 'right', width: '100px' }}>Number of Beds</Typography>
                      <Input type="number"  sx={{ flex: 1 }} size="sm" />
                      
                  </FormControl>
                  <FormControl sx={{ flex: 1, display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 2,  }}>
                      <Typography level="title-sm" sx={{ textAlign: 'right', width: '100px' }}>Bed Length</Typography>
                      <Input startDecorator="m" type="number" sx={{ flex: 1 }} size="sm" />
                  </FormControl>
                </Stack>
                <Stack direction="row" spacing={2}>
                  <FormControl sx={{ flex: 1, display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 2,  }}>
                      <Typography level="title-sm" sx={{ textAlign: 'right', width: '100px' }}>Bed Width</Typography>
                      <Input type="number"  sx={{ flex: 1 }} size="sm" />
                      
                  </FormControl>
                  <FormControl sx={{ flex: 1, display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 2, visibility:'hidden'  }}>
                      <Typography level="title-sm" sx={{ textAlign: 'right', width: '100px' }}>empty field</Typography>
                      <Input startDecorator="m" type="number" sx={{ flex: 1 }} size="sm" />
                  </FormControl>
                </Stack>
                <Stack direction="row" spacing={2}>
                  <FormControl sx={{ flex: 1, display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 2,  }}>
                      <Typography level="title-sm" sx={{ textAlign: 'right', width: '100px' }}>Estimated Land Value</Typography>
                      <Input type="number" startDecorator="¢" defaultValue={0.0} slotProps={{input: {ref: inputRef,min: 1,max: 5,step: 0.1,},}} sx={{ flex: 1 }} size="sm" />
                      
                  </FormControl>
                  <FormControl sx={{ flex: 1, display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 2,  }}>
                      <Typography level="title-sm" sx={{ textAlign: 'right', width: '100px' }}>Grazing Rest Days</Typography>
                      <Input  type="number" sx={{ flex: 1 }} size="sm" />
                  </FormControl>
                </Stack>
                <Stack direction="row" spacing={2}>
                  <FormControl sx={{ flex: 1, display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 2,  }}>
                      <Typography level="title-sm" sx={{ textAlign: 'right', width: '100px' }}>Description</Typography>
                      <Textarea sx={{ flex: 2 }} minRows={2} size="sm" />
                  </FormControl>
                </Stack> 
               
                
            </Stack>
        );
      case 1:
        return(
            <Stack>
                <Typography>Map Location</Typography>
            </Stack>
        );
      // Add cases for other steps
      default:
        return null;
    }
  };

  return (
      <Modal
      open={modals.addLand}
      onClose={() => handleCloseModal("addLand")}
      sx={{
        zIndex: 10001,
        position: 'fixed',
        inset: 0
      }}
      >
        <ModalOverflow>
          <ModalDialog 
            aria-labelledby="modal-dialog-overflow"
            sx={{
              width: '80vw',
              maxWidth: '800px',
              height: '80vh',
              maxHeight: '800px',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <ModalClose />
            
            <Typography level="h4" component="h2" sx={{ mb: 2 }}>
              Grow Location Details
            </Typography>

            {/* Stepper component */}
            <Stepper sx={{ my: 3 }}>
              {steps.map((step, index) => (
                <Step
                  key={step.label}
                  completed={index < activeStep}
                  active={index === activeStep}
                >
                  <StepButton>
                    {/* <StepIndicator>
                      {index < activeStep ? (
                        <CheckCircleTwoToneIcon />
                      ) : (
                        step.icon
                      )}
                    </StepIndicator> */}
                    <Typography sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      {index === activeStep ? step.activeIcon : step.icon} {step.label}
                    </Typography>
                  </StepButton>
                </Step>
              ))}
            </Stepper>

            {/* Step content */}
            <Box sx={{
              mt: 4,
              flex: 1,
              overflowY: 'auto',
              mb: '80px',
              position: 'relative'
            }}>
              {renderStepContent()}
            </Box>

            {/* Navigation buttons */}
            <Stack direction="row" spacing={2} justifyContent="flex-end">
              {/* Fixed navigation buttons */}
                <Box sx={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  p: 3,
                  borderTop: '1px solid',
                  borderColor: 'divider',
                  bgcolor: 'background.surface',
                  display: 'flex',
                  justifyContent: 'flex-end',
                  gap: 2,
                  zIndex: 1
                }}>
                  <Button
                    variant="outlined"
                    color="neutral"
                    onClick={() => handleCloseModal("addPlant")}
                  >
                    Cancel
                  </Button>
                  {activeStep > 0 && (
                    <Button onClick={handleBack}>
                      Back
                    </Button>
                  )}
                  <Button
                    variant="solid"
                    onClick={activeStep === steps.length - 1 ? () => handleCloseModal("addPlant") : handleNext}
                  >
                    {activeStep === steps.length - 1 ? 'Complete' : 'Next'}
                  </Button>
                </Box>
            </Stack>
          </ModalDialog>
        </ModalOverflow>
      </Modal>
  );
}