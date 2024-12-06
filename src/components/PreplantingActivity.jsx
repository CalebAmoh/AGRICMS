import React, { useState, useEffect, useCallback } from 'react';
import Breadcrumbs from '@mui/joy/Breadcrumbs';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import ColorSchemeToggle from './ColorSchemeToggle';
import AddIcon from "@mui/icons-material/Add";
import AddCropModal from './modals/AddCropModal';
import Table from '@mui/joy/Table';
import SearchIcon from "@mui/icons-material/Search";
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import IconButton from '@mui/joy/IconButton';
import CircularProgress from '@mui/joy/CircularProgress';
import Link from '@mui/joy/Link';
import Tooltip from '@mui/joy/Tooltip';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Edit from '@mui/icons-material/Edit';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import CallMadeIcon from '@mui/icons-material/CallMade';
import MessageIcon from '@mui/icons-material/Message';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import BlockIcon from '@mui/icons-material/Block';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { iconButtonClasses } from '@mui/joy/IconButton';
import { Chip } from '@mui/joy';
import { Stack, Modal, ModalClose, Sheet, Divider, Typography, Box, CardActions, Button, FormControl,FormLabel
    ,Select,Option,Input,Textarea,CardOverflow,Card,CardContent,AspectRatio} from "@mui/joy";

import { useModal } from '../context/ModalContext';

export default function PreplantingActivity() {
  const { modals, handleOpenModal, handleCloseModal } = useModal();

  // Helper function to render filter controls
  const renderFilters = () => (
    <React.Fragment>
      <FormControl size="sm">
        <FormLabel>Status</FormLabel>
        <Select
          size="sm"
          placeholder="Filter by status"
          slotProps={{ button: { sx: { whiteSpace: "nowrap" } } }}
        >
          <Option value="active">Active</Option>
          <Option value="inactive">Inactive</Option>
        </Select>
      </FormControl>
      <FormControl size="sm">
        <FormLabel>Document Type</FormLabel>
        <Select size="sm" placeholder="All">
          <Option value="all">All</Option>
          <Option value="Bank of America">Invoice</Option>
          <Option value="Chase Bank">Projects</Option>
          <Option value="Wells Fargo">Loans</Option>
        </Select>
      </FormControl>
    </React.Fragment>
  );

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

            {/* Search and Filter Section */}
            <Box
              className="SearchAndFilters-tabletUp"
              sx={{
                width: '83.33%',  // 10/12 columns
                margin: '0 auto', // Center the container
                borderRadius: "sm",
                py: 2,
                display: { xs: "none", sm: "flex" },
                flexWrap: "wrap",
                gap: 1.5,
                "& > *": {
                  minWidth: { xs: "120px", md: "160px" },
                },
              }}
            >
              <FormControl sx={{ flex: 1 }} size="sm">
                <FormLabel>Search for documents</FormLabel>
                <Input
                  size="sm"
                  placeholder="Search"
                  startDecorator={<SearchIcon />}
                />
              </FormControl>
              {renderFilters()}
            </Box>

            {/* Mobile Search */}
            <Sheet
              className="SearchAndFilters-mobile"
              sx={{
                display: { xs: "flex", sm: "none" },
                width: '83.33%',  // 10/12 columns
                margin: '0 auto', // Center the container
                my: 1,
                gap: 1,
              }}
            >
              <Input
                size="sm"
                placeholder="Search"
                startDecorator={<SearchIcon />}
                sx={{ flexGrow: 1 }}
              />
              <IconButton
                size="sm"
                variant="outlined"
                color="neutral"
                onClick={() => setOpen(true)}
              >
                <FilterAltIcon />
              </IconButton>
            </Sheet>

            <Sheet
            className="BankTableContainer"
            variant="outlined"
            sx={{
                display: { xs: "none", sm: "initial" },
                width: "83.33%", // 10/12 columns
                margin: "0 auto", // Center the table
                borderRadius: "sm",
                flexShrink: 1,
                overflow: "auto",
                minHeight: 0,
            }}
            >
                <Table
                    aria-labelledby="tableTitle"
                    stickyHeader
                    hoverRow
                    sx={{
                    "--TableCell-headBackground":
                        "var(--joy-palette-background-level1)",
                    "--Table-headerUnderlineThickness": "1px",
                    "--TableRow-hoverBackground":
                        "var(--joy-palette-background-level1)",
                    "--TableCell-paddingY": "4px",
                    "--TableCell-paddingX": "8px",
                    }}
                >
                    <thead>
                    <tr>
                        <th
                        style={{ width: 48, textAlign: "center", padding: "12px 6px" }}
                        ></th>
                        <th style={{ width: 120, padding: "12px 6px" }}>
                        <Link
                            underline="none"
                            color="primary"
                            component="button"
                            fontWeight="lg"
                            endDecorator={<ArrowDropDownIcon />}
                        >
                            ID
                        </Link>
                        </th>
                        <th style={{ width: 140, padding: "12px 6px" }}>Document ID</th>
                        <th style={{ width: 140, padding: "12px 6px" }}>Document Type</th>
                        <th style={{ width: 140, padding: "12px 6px" }}>Description</th>
                        <th style={{ width: 140, padding: "12px 6px" }}>Status</th>
                        <th style={{ width: 140, padding: "12px 6px" }}>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                
                        
                        <tr>
                        <td style={{ textAlign: "center", width: 120 }}></td>
                        <td className="font-semibold text-sm ">
                            <Typography level="body-sm">id</Typography>
                        </td>
                        <td className="font-semibold text-sm ">
                            <Typography level="body-sm">doc_id</Typography>
                        </td>
                        <td className="font-semibold text-sm ">
                            <Typography level="body-sm">doctype_name</Typography>
                        </td>
                        <td className="font-semibold text-sm ">
                            <Typography level="body-sm">details</Typography>
                        </td>
                        <td>
                            <Chip
                            variant="soft"
                            size="sm"
                            startDecorator={
                                {
                                draft: <CheckRoundedIcon />,
                                declined: <BlockIcon />,
                                }[status]
                            }
                            
                            >
                            status
                            </Chip>
                        </td>
                        
                        <td>
                            <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                            <Link level="body-xs" component="button">
                            <Tooltip title="View">
                                <Button
                                sx={{ backgroundColor: "#d4ac0d", width: 35, marginRight: 1 }}
                                //   onClick={() => handleOpen("view",id)}
                                size="sm"
                                variant="solid"
                                >
                                <RemoveRedEyeIcon />
                                
                                </Button>
                                </Tooltip>
                            <Tooltip title="Edit">
                                <Button
                                sx={{ backgroundColor: "#00357A", width: 35, marginRight: 1 }}
                                //   onClick={() => handleOpen("update",id)}
                                size="sm"
                                variant="solid"
                                >
                                <Edit />
                                
                                </Button>
                                </Tooltip>
                                {status === "draft" ? (
                                <Tooltip title="Submit">
                                    <Button
                                    sx={{ backgroundColor: "#4CAF50", width: 35 }}
                                    //   onClick={() => handleOpen("submit",id)}
                                    size="sm"
                                    variant="solid"
                                    >
                                    <CallMadeIcon />
                                    
                                    </Button>
                                </Tooltip>
                                ):(
                                <Tooltip title="Declined Reason">
                                    <Button
                                    sx={{ backgroundColor: "#839192", width: 35 }}
                                    //   onClick={() => handleMessage(id)}
                                    size="sm"
                                    variant="solid"
                                    >
                                    <MessageIcon/>
                                </Button>
                                </Tooltip>
                                )}
                                
                            
                            </Link>
                            </Box>
                        </td>
                        </tr>
                    </tbody>
                </Table>
            </Sheet>
         

            
          </Box>
        </Box>
      </Box>

      {/* Handles pre-planting on boarding */}
      <AddCropModal />
    </Box>
  );
}
