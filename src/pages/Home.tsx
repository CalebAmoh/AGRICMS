import * as React from 'react';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import Breadcrumbs from '@mui/joy/Breadcrumbs';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import ColorSchemeToggle from '../components/ColorSchemeToggle';

import AspectRatio from '@mui/joy/AspectRatio';
import Avatar from '@mui/joy/Avatar';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import IconButton from '@mui/joy/IconButton';
import Link from '@mui/joy/Link';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';

// import DropZone from './DropZone';
// import FileUpload from './FileUpload';
// import CountrySelector from './CountrySelector';
// import EditorToolbar from './EditorToolbar';

export default function Home() {
  return (
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
            AGRICMS
          </Typography>
          {/* <Typography
            color="neutral"
            level="h4"
            
            variant="plain"
          >Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
          </Typography> */}

          <Card
              color="primary"
              invertedColors
              orientation="vertical"
              size="lg"
              variant="plain"
              sx={{ height: 400 }} // Set a fixed height for the entire card
            >
            <CardCover sx={{ height: '100%' }}>
              <img
                src="https://plus.unsplash.com/premium_photo-1678655852216-4f94312ad871?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                srcSet="https://plus.unsplash.com/premium_photo-1678655852216-4f94312ad871?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 2x"
                loading="lazy"
                alt="FARMING MADE EASY"
                style={{
                  width: '100%', // Ensures the image takes up the full width
                  height: '100%', // Ensures the image takes up the full height of CardCover
                  objectFit: 'cover', // Ensures the image covers the area without distortion
                }}
              />
            </CardCover>
            <CardCover
              sx={{
                background:
                  'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)',
                position: 'absolute', // Overlay the gradient on top of the image
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: 1,
              }}
            />
            <CardContent sx={{ justifyContent: 'flex-end', position: 'relative', zIndex: 2 }}>
              <Typography level="title-lg" textColor="#fff">
                A PRODUCT BY SAA
              </Typography>
              {/* <Typography textColor="neutral.300">
                ACCRA, GHANA
              </Typography> */}
            </CardContent>
          </Card>

        </Box>
        
      </Box>
     
    </Box>

  );
}
