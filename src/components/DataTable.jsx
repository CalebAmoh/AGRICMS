import React from 'react';
import Table from '@mui/joy/Table';
import { Sheet, Link, Typography, Chip, Box, Button, Tooltip } from "@mui/joy";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import Edit from '@mui/icons-material/Edit';
import CallMadeIcon from '@mui/icons-material/CallMade';
import MessageIcon from '@mui/icons-material/Message';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import BlockIcon from '@mui/icons-material/Block';

// Enhanced DataTable component with specific styling and structure
const DataTable = ({ 
  columns, 
  data, 
  actions,
  stickyHeader = true,
  sx = {} 
}) => {
  return (
    <Sheet
      className="BankTableContainer"
      variant="outlined"
      sx={{
        width: { xs: '100%', sm: '83.33%' },
        margin: "0 auto",
        borderRadius: "sm",
        flexShrink: 1,
        overflow: "auto",
        minHeight: 0,
        display: 'block',
        ...sx
      }}
    >
      <Box sx={{ overflowX: 'auto' }}>
        <Table
          aria-labelledby="tableTitle"
          stickyHeader={stickyHeader}
          hoverRow
          sx={{
            "--TableCell-headBackground": "var(--joy-palette-background-level1)",
            "--Table-headerUnderlineThickness": "1px",
            "--TableRow-hoverBackground": "var(--joy-palette-background-level1)",
            "--TableCell-paddingY": "4px",
            "--TableCell-paddingX": "8px",
            minWidth: { xs: '800px', sm: '100%' },
          }}
        >
          <thead>
            <tr>
              <th style={{ width: 48, textAlign: "center", padding: "12px 6px" }}></th>
              {columns.map((column, index) => (
                <th key={index} style={{ 
                  width: column.width || 140, 
                  padding: "12px 6px",
                  whiteSpace: 'nowrap'
                }}>
                  {column.header}
                </th>
              ))}
              <th style={{ 
                width: 140, 
                padding: "12px 6px",
                whiteSpace: 'nowrap'
              }}>
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr key={rowIndex}>
                <td style={{ textAlign: "center", width: 120 }}></td>
                {columns.map((column, colIndex) => (
                  <td key={colIndex} className="font-semibold text-sm">
                    <Typography 
                      level="body-sm"
                      sx={{ 
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        maxWidth: '200px'
                      }}
                    >
                      {row[column.field]}
                    </Typography>
                  </td>
                ))}
                {actions && (
                  <td>
                    <Box sx={{ 
                      display: "flex", 
                      gap: { xs: 1, sm: 2 },
                      alignItems: "center",
                      flexWrap: 'nowrap'
                    }}>
                      {actions.map((action, actionIndex) => (
                        <React.Fragment key={actionIndex}>
                          {action.render(row)}
                        </React.Fragment>
                      ))}
                    </Box>
                  </td>
                )}          
              </tr>
            ))}
          </tbody>
        </Table>
      </Box>
    </Sheet>
  );
};

export default DataTable;