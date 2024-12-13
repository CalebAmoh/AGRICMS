import React from 'react';
import SearchIcon from "@mui/icons-material/Search";
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { Box, FormControl, FormLabel, Select, Option, Input, IconButton, Sheet } from "@mui/joy";

// Reusable search and filter component that can be customized through props
const SearchFilterBar = ({ 
  filterOptions = [], // Array of filter configurations
  onSearch,
  showMobileView = true,
}) => {
  return (
    <>
      {/* Desktop Search and Filters */}
      <Box
        className="SearchAndFilters-tabletUp"
        sx={{
          width: '83.33%',
          margin: '0 auto',
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
        {/* Search Input */}
        <FormControl sx={{ flex: 1 }} size="sm">
          <FormLabel>Search for documents</FormLabel>
          <Input
            size="sm"
            placeholder="Search"
            startDecorator={<SearchIcon />}
            onChange={(e) => onSearch?.(e.target.value)}
          />
        </FormControl>

        {/* Render dynamic filters */}
        {filterOptions.map((filter, index) => (
          <FormControl key={index} size="sm">
            <FormLabel>{filter.label}</FormLabel>
            <Select
              size="sm"
              placeholder={filter.placeholder}
              onChange={(_, value) => filter.onChange?.(value)}
              slotProps={{ button: { sx: { whiteSpace: "nowrap" } } }}
            >
              {filter.options.map((option) => (
                <Option key={option.value} value={option.value}>
                  {option.label}
                </Option>
              ))}
            </Select>
          </FormControl>
        ))}
      </Box>

      {/* Mobile Search */}
      {showMobileView && (
        <Sheet
          className="SearchAndFilters-mobile"
          sx={{
            display: { xs: "flex", sm: "none" },
            width: '83.33%',
            margin: '0 auto',
            my: 1,
            gap: 1,
          }}
        >
          <Input
            size="sm"
            placeholder="Search"
            startDecorator={<SearchIcon />}
            sx={{ flexGrow: 1 }}
            onChange={(e) => onSearch?.(e.target.value)}
          />
          <IconButton
            size="sm"
            variant="outlined"
            color="neutral"
          >
            <FilterAltIcon />
          </IconButton>
        </Sheet>
      )}
    </>
  );
};

export default SearchFilterBar;