import * as React from 'react';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import Breadcrumbs from '@mui/joy/Breadcrumbs';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import ColorSchemeToggle from '../components/ColorSchemeToggle';
import Card from '@mui/joy/Card';
import Button from '@mui/joy/Button';
import IconButton from '@mui/joy/IconButton';
import GrassTwoToneIcon from '@mui/icons-material/GrassTwoTone';
import CardContent from '@mui/joy/CardContent';
import CardActions from '@mui/joy/CardActions';
import Grid2 from '@mui/material/Grid';
import TerrainTwoToneIcon from '@mui/icons-material/TerrainTwoTone';
import { useNavigate } from 'react-router-dom';



export default function Settings() {
  const navigate = useNavigate(); // Initialize the navigate function
  
  return (
    <Box sx={{ flex: 1, width: '100%' }}>
      <Box
        sx={{
          position: 'sticky',
          top: { sm: -100, md: -110 },
          bgcolor: 'background.body',
          zIndex: 9995,
        }}>
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
          <Typography level="h2" component="h1" sx={{ mt: 1, mb: 2 }}>
            Settings
          </Typography>
        </Box>

        <Box component="main" className="MainContent"
        sx={{
          px: { xs: 2, md: 3 },
          pt: {
            xs: "calc(12px + var(--Header-height))",
            sm: "calc(12px + var(--Header-height))",
            md: 3,
          },
          pb: { xs: 2, sm: 2, md: 3 },
          flex: 1,
          display: "flex",
          flexDirection: "column",
          minWidth: 0,
          height: "100dvh",
          gap: 1,
        }}
      >
            <Grid2 container spacing={2}>
                <Grid2 item xs={3}>
                    <Card variant="outlined"
                        sx={{
                            width: 300,
                            resize: 'horizontal',
                        }}>
                        <Box
                            sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            }}
                        >
                            <TerrainTwoToneIcon/>
                            
                        </Box>
                        <CardContent>
                            <Typography level="title-lg">Plots Setup</Typography>
                            <Typography level="body-sm">
                                Add plot size and other related details...
                            </Typography>
                        </CardContent>
                        <CardActions buttonFlex="0 1 120px">
                            {/* <Button variant="outlined" color="neutral">
                            View
                            </Button> */}
                            <Button 
                            variant="solid"
                             color="primary"
                            //  onClick={() => navigate('/your-target-page')} // Add onClick handler to navigate
                             >
                            Add Plots
                            </Button>
                        </CardActions>
                    </Card>
                </Grid2>
                <Grid2 item xs={3}>
                    <Card variant="outlined"
                        sx={{
                            width: 300,
                            resize: 'horizontal',
                        }}>
                        <Box
                            sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            }}
                        >
                            <GrassTwoToneIcon/>
                            
                        </Box>
                        <CardContent>
                            <Typography level="title-lg">Crop Setup</Typography>
                            <Typography level="body-sm">
                                Add crops and related details
                            </Typography>
                        </CardContent>
                        <CardActions buttonFlex="0 1 120px">
                            {/* <Button variant="outlined" color="neutral">
                            View
                            </Button> */}
                            <Button variant="solid" color="primary">
                            Add Crop
                            </Button>
                        </CardActions>
                    </Card>
                </Grid2>
                <Grid2 item xs={3}>
                    <Card variant="outlined"
                        sx={{
                            width: 300,
                            // resize: 'horizontal',
                            marginRight: 2
                        }}>
                        <Box
                            sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            }}
                        >
                            <GrassTwoToneIcon/>
                            
                        </Box>
                        <CardContent>
                            <Typography level="title-lg">Other Setups</Typography>
                            <Typography level="body-sm">
                                Will be decided
                            </Typography>
                        </CardContent>
                        <CardActions buttonFlex="0 1 120px">
                            {/* <Button variant="outlined" color="neutral">
                            View
                            </Button> */}
                            <Button variant="solid" color="primary">
                            Add Crop
                            </Button>
                        </CardActions>
                    </Card>
                </Grid2>
                <Grid2 item xs={3}>
                    <Card variant="outlined"
                        sx={{
                            width: 300,
                            // resize: 'horizontal',
                            marginRight: 2
                        }}>
                        <Box
                            sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            }}
                        >
                            <GrassTwoToneIcon/>
                            
                        </Box>
                        <CardContent>
                            <Typography level="title-lg">Other Setups</Typography>
                            <Typography level="body-sm">
                                Will be decided
                            </Typography>
                        </CardContent>
                        <CardActions buttonFlex="0 1 120px">
                            {/* <Button variant="outlined" color="neutral">
                            View
                            </Button> */}
                            <Button variant="solid" color="primary">
                            Add Crop
                            </Button>
                        </CardActions>
                    </Card>
                </Grid2>
            </Grid2>
        </Box>
        
            
      </Box>
      
    </Box>
  );
}
