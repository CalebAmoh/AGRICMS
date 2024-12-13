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
  ModalClose
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
  { label: 'Crop Type & Location', number: 1, icon: <LooksOneTwoToneIcon sx={{ fontSize: 30 }}/>, activeIcon: <LooksOneIcon sx={{ fontSize: 30 }}   /> },
  { label: 'Planting Details', number: 2, icon: <LooksTwoTwoToneIcon sx={{ fontSize: 30 }}/>, activeIcon: <LooksTwoIcon sx={{ fontSize: 30 }} /> },
  { label: 'Complete', number: 3, icon: <CheckCircleTwoToneIcon sx={{ fontSize: 30 }}/>, activeIcon: <CheckCircleIcon sx={{ fontSize: 30 }} /> }
];

export default function AddPlantModal() {
  // State management
  const { modals, handleCloseModal } = useModal();
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    cropType: '',
    growLocation: '',
    // Add other form fields as needed
  });

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
                        <Typography level="title-sm" sx={{ textAlign: 'right', width: '100px' }}>Crop Type</Typography>
                        <Input type="text" sx={{ flex: 1 }} size="sm" />
                    </FormControl>
                    <FormControl sx={{ flex: 1, display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 2 }}>
                        <Typography level="title-sm" sx={{ textAlign: 'right', width: '100px' }}>Growth Location</Typography>
                        <Select
                          placeholder="Select Location"
                          sx={{ flex: 1 }}
                          size="sm"
                          >
                            <Option value="1">Plot 1</Option>
                            <Option value="2">Plot 2</Option>
                        </Select> 
                    </FormControl>
                </Stack>
                <Stack direction="row" spacing={2}>
                  <FormControl sx={{ flex: 1, display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 2 }}>
                      <Typography level="title-sm" sx={{ textAlign: 'right', width: '100px' }}>Planting Bed</Typography>
                      <Select
                          placeholder="Select Bed"
                          sx={{ flex: 1 }}
                          size="sm"
                          >
                            <Option value="1">Bed 1</Option>
                            <Option value="2">Bed 2</Option>
                        </Select> 
                  </FormControl>
                  <FormControl sx={{ flex: 1, display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 2, visibility: 'hidden' }}>
                      <Typography level="title-sm" sx={{ textAlign: 'right', width: '100px' }}>Rows</Typography>
                      <Input type="text" sx={{ flex: 1 }} size="sm" />
                  </FormControl>
                </Stack>
              
                <Stack direction="row" spacing={2}>
                  <FormControl sx={{ flex: 1, display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 2, visibility: 'hidden' }}>
                      <Typography level="title-sm" sx={{ textAlign: 'right', width: '100px' }}>Planted Row Length</Typography>
                      <Input type="text"  sx={{ flex: 1 }} size="sm" />
                      
                  </FormControl>
                  <FormControl sx={{ flex: 1, display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 2, visibility: 'hidden' }}>
                      <Typography level="title-sm" sx={{ textAlign: 'right', width: '100px' }}>Rows</Typography>
                      <Input type="text" sx={{ flex: 1 }} size="sm" />
                  </FormControl>
                </Stack>
             
           
               
                
            </Stack>
        );
      case 1:
        return(
            <Stack spacing={2}>
                <Typography level="h4" component="h2" sx={{ mb: 2 }}>
                    PRE PLANTING
                </Typography>
                <Box sx={{ p: 1,borderTop: '1px solid',borderColor: 'divider',bgcolor: 'background.surface',display: 'flex',flexDirection: 'column',gap: 1}}> </Box> 
                <Stack direction="row" spacing={2}>
                  <FormControl sx={{ flex: 1, display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 2 }}>
                      <Typography level="title-sm" sx={{ textAlign: 'right', width: '100px' }}>Start Method</Typography>
                      <Select
                      placeholder="Select start method"
                      sx={{ flex: 1 }}
                      size="sm"
                      >
                      <Option value="1">Start in Tray</Option>
                      <Option value="2">Root Stock</Option>
                      <Option value="3">Transplant</Option>
                      </Select> 
                  </FormControl>
                  <FormControl sx={{ flex: 1, display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 2 }}>
                      <Typography level="title-sm" sx={{ textAlign: 'right', width: '100px' }}>Growth Stage</Typography>
                      <Select
                      placeholder="Select start method"
                      sx={{ flex: 1 }}
                      size="sm"
                      >
                      <Option value="1">Seed started</Option>
                      <Option value="2">Germination</Option>
                      <Option value="3">Seedling</Option>
                      <Option value="4">Vegetative</Option>
                      <Option value="5">Flowering</Option>
                      <Option value="6">Fruiting</Option>
                      </Select> 
                  </FormControl>
                </Stack>
                <Stack direction="row" spacing={2}>
                <FormControl sx={{ flex: 1, display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 2 }}>
                    <Typography level="title-sm" sx={{ textAlign: 'right', width: '100px' }}>Planting Date</Typography>
                    <Input type="date" sx={{ flex: 1 }} size="sm" />
                </FormControl>
                <FormControl sx={{ flex: 1, visibility: 'hidden' }}>
                    <Typography level="title-sm" sx={{ textAlign: 'right', width: '100px' }}></Typography>
                    <Input sx={{ flex: 1 }} size="sm" />
                </FormControl>
                </Stack>
                <Stack direction="row" spacing={2}>
                <FormControl sx={{ flex: 1, display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 2 }}>
                    <Typography level="title-sm" sx={{ textAlign: 'right', width: '100px' }}>Plant Spacing</Typography>
                    <Input type="number" startDecorator="cm" sx={{ flex: 1 }} size="sm" />
                </FormControl>
                <FormControl sx={{ flex: 1, display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 2 }}>
                    <Typography level="title-sm" sx={{ textAlign: 'right', width: '100px' }}>Row Spacing</Typography>
                    <Input type="number" startDecorator="cm" sx={{ flex: 1 }} size="sm" />
                </FormControl>
                </Stack>
                <Stack direction="row" spacing={2}>
                <FormControl sx={{ flex: 1, display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 2 }}>
                    <Typography level="title-sm" sx={{ textAlign: 'right', width: '100px' }}>Planted Row Length</Typography>
                    <Input type="number" startDecorator="m" sx={{ flex: 1 }} size="sm" />
                </FormControl>
                <FormControl sx={{ flex: 1, display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 2 }}>
                    <Typography level="title-sm" sx={{ textAlign: 'right', width: '100px' }}>Rows</Typography>
                    <Input type="number" sx={{ flex: 1 }} size="sm" />
                </FormControl>
                </Stack>
                <Stack direction="row" spacing={2}>
                <FormControl sx={{ flex: 1, display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 2 }}>
                    <Typography level="title-sm" sx={{ textAlign: 'right', width: '100px' }}>Estimated Plants</Typography>
                    <Input type="number" sx={{ flex: 1 }} size="sm" />
                </FormControl>
                <FormControl sx={{ flex: 1, visibility: 'hidden' }}>
                    <Typography level="title-sm" sx={{ textAlign: 'right', width: '100px' }}></Typography>
                    <Input sx={{ flex: 1 }} size="sm" />
                </FormControl>
                </Stack>
                <Typography level="h4" component="h2" sx={{ mb: 2, pt: 3 }}>
                    HARVEST PLAN
                </Typography>
                <Box sx={{ p: 1,borderTop: '1px solid',borderColor: 'divider',bgcolor: 'background.surface',display: 'flex',flexDirection: 'column',gap: 1}}> </Box> 
                <Stack direction="row" spacing={2}>
                    <FormControl sx={{ flex: 1, display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 2 }}>
                        <Typography level="title-sm" sx={{ textAlign: 'right', width: '100px' }}>Planned First Harvest</Typography>
                        <Input type="date" sx={{ flex: 1 }} size="sm" />
                    </FormControl>
                    <FormControl sx={{ flex: 1, display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 2 }}>
                        <Typography level="title-sm" sx={{ textAlign: 'right', width: '100px' }}>Expected Yield</Typography>
                        <Input type="number" startDecorator="bales" sx={{ flex: 1 }} size="sm" />
                    </FormControl>
                </Stack>
                <Typography level="h4" component="h2" sx={{ mb: 2,pt: 3 }}>
                    SEED DETAILS
                </Typography>
                <Box sx={{ p: 1,borderTop: '1px solid',borderColor: 'divider',bgcolor: 'background.surface',display: 'flex',flexDirection: 'column',gap: 1}}> </Box> 
                <Stack direction="row" spacing={2}>
                    <FormControl sx={{ flex: 1, display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 2 }}>
                        <Typography level="title-sm" sx={{ textAlign: 'right', width: '100px' }}>Seed Company</Typography>
                        <Input type="text" sx={{ flex: 1 }} size="sm" />
                    </FormControl>
                    <FormControl sx={{ flex: 1, display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 2 }}>
                        <Typography level="title-sm" sx={{ textAlign: 'right', width: '100px' }}>Seed Type</Typography>
                        <Select
                    placeholder="Select seed type"
                    sx={{ flex: 1 }}
                    size="sm"
                    >
                    <Option value="1">GMO</Option>
                    <Option value="2">Hierloom</Option>
                    </Select> 
                    </FormControl>
                </Stack>
                <Stack direction="row" spacing={2}>
                    <FormControl sx={{ flex: 1, display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 2 }}>
                        <Typography level="title-sm" sx={{ textAlign: 'right', width: '100px' }}>Seed Per Hole</Typography>
                        <Input type="number" sx={{ flex: 1 }} size="sm" />
                    </FormControl>
                    <FormControl sx={{ flex: 1, visibility: 'hidden' }}>
                        <Typography level="title-sm" sx={{ textAlign: 'right', width: '100px' }}></Typography>
                        <Input sx={{ flex: 1 }} size="sm" />
                    </FormControl>
                </Stack>
            </Stack>
        );
      // Add cases for other steps
      default:
        return null;
    }
  };

  return (
    // <Modal
    //   open={modals.addPlant}
    //   onClose={() => handleCloseModal("addPlant")}
    //   sx={{
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //   }}
    // >
    //   <Sheet
    //     variant="outlined"
    //     sx={{
    //         maxWidth: 800,
    //         width: '90%',
    //         borderRadius: 'md',
    //         p: 3,
    //         boxShadow: 'lg',
    //         maxHeight: '80vh',
    //         position: 'relative', // Add relative positioning
    //         display: 'flex',      // Add flex display
    //         flexDirection: 'column'
    //     }}
    //   >
    //     <Typography level="h4" component="h2" sx={{ mb: 2 }}>
    //       Planting Details
    //     </Typography>

    //     {/* Stepper component */}
    //     <Stepper sx={{ my: 3 }}>
    //       {steps.map((step, index) => (
    //         <Step
    //           key={step.label}
    //           completed={index < activeStep}
    //           active={index === activeStep}
    //         >
    //           <StepButton>
    //             {/* <StepIndicator>
    //               {index < activeStep ? (
    //                 <CheckCircleTwoToneIcon />
    //               ) : (
    //                 step.icon
    //               )}
    //             </StepIndicator> */}
    //             <Typography sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
    //               {index === activeStep ? step.activeIcon : step.icon} {step.label}
    //             </Typography>
    //           </StepButton>
    //         </Step>
    //       ))}
    //     </Stepper>

    //     {/* Step content */}
    //     <Box sx={{mt: 4, 
    //     overflowY: 'auto',
    //     pb: '80px'  }}>
    //       {renderStepContent()}
    //     </Box>

    //     {/* Navigation buttons */}
    //     <Stack direction="row" spacing={2} justifyContent="flex-end">
    //        {/* Fixed navigation buttons */}
    //   <Box sx={{
    //     position: 'absolute',
    //     bottom: 0,
    //     left: 0,
    //     right: 0,
    //     p: 3,
    //     borderTop: '1px solid',
    //     borderColor: 'divider',
    //     bgcolor: 'background.surface',
    //     display: 'flex',
    //     justifyContent: 'flex-end',
    //     gap: 2
    //   }}>
    //     <Button
    //       variant="outlined"
    //       color="neutral"
    //       onClick={() => handleCloseModal("addPlant")}
    //     >
    //       Cancel
    //     </Button>
    //     {activeStep > 0 && (
    //       <Button onClick={handleBack}>
    //         Back
    //       </Button>
    //     )}
    //     <Button
    //       variant="solid"
    //       onClick={activeStep === steps.length - 1 ? () => handleCloseModal("addPlant") : handleNext}
    //     >
    //       {activeStep === steps.length - 1 ? 'Complete' : 'Next'}
    //     </Button>
    //   </Box>
    //     </Stack>
    //   </Sheet>
    // </Modal>
    <Modal
      open={modals.addPlant}
      onClose={() => handleCloseModal("addPlant")}
      >
        <ModalOverflow>
          <ModalDialog aria-labelledby="modal-dialog-overflow">
            <ModalClose />
            
            <Typography level="h4" component="h2" sx={{ mb: 2 }}>
              Planting Details
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
            <Box sx={{mt: 4, overflowY: 'auto',pb: '80px'  }}>
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
                  gap: 2
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