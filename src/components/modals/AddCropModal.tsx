import React from 'react';
import { Modal, ModalClose, Sheet, Divider, Typography, Box, FormControl, FormLabel, Input, Select, Option, Stack, Button } from "@mui/joy";
import { useModal } from '../../context/ModalContext';

export default function AddCropModal() {
  const { modals, handleCloseModal } = useModal();

  return (
    <Modal
      aria-labelledby="modal-title"
      aria-describedby="modal-desc"
      open={modals.add}
      onClose={() => handleCloseModal("add")}
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
        margin: {xs: '16px', sm: '32px', md: '64px'},
      }}
    >
      <Sheet variant="outlined"
        sx={{
          maxWidth: {xs: '90%', sm: '70%', md: '50%'},
          width: {xs: '90%', sm: '70%', md: '50%'},
          borderRadius: "md",
          p: {xs: 2, sm: 3},
          boxShadow: "lg",
          overflowY: 'auto',
          maxHeight: '90vh',
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
            
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2, mt: 2 }}>
              <Button 
                variant="outlined" 
                color="neutral" 
                onClick={() => handleCloseModal("add")}
              >
                Cancel
              </Button>
              <Button 
                variant="solid" 
                color="primary"
                onClick={() => {
                  console.log('Form submitted');
                  handleCloseModal("add");
                }}
              >
                Submit
              </Button>
            </Box>
          </Stack>
        </Typography>
      </Sheet>
    </Modal>
  );
}