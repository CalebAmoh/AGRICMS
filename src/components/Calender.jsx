import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import {Typography, Box, Button} from "@mui/joy";
import './Calendar.css';

// Component to render custom title in the header
const CustomTitle = ({ text }) => (
  <Typography level="h3" sx={{ fontWeight: 'bold' }}>
    {text}
  </Typography>
);

export default function Calendar() {
  return (
    <Box sx={{ flex: 1, width: '100%', position: 'relative' }}>

      {/* MAIN BODY */}
      <Box
        sx={{
          position: 'sticky',
          top: { sm: -100, md: -110 },
          bgcolor: 'background.body',
          zIndex: 100,
        }}
      >
        <Box sx={{ px: { xs: 2, md: 6 } }}>
            <FullCalendar
              plugins={[dayGridPlugin]}
              initialView="dayGridMonth"
              // Add header toolbar configuration
              headerToolbar={{
                left: 'prev,next today',
                center: 'title',
                right: 'dayGridMonth,dayGridWeek'
              }}
              // Add custom styling
              height="auto"
              dayMaxEvents={true}
              // Calendar styling
              contentHeight={800}
              aspectRatio={1.5}
              // Custom class names for styling
              dayHeaderClassNames="calendar-header"
              // Event styling
              eventDisplay="block"
              // Add more styling through CSS classes
              className="custom-calendar"
              // Add some view-specific options
              views={{
                dayGridMonth: {
                  titleFormat: { year: 'numeric', month: 'long' }
                }
              }}
            />
        </Box>
    </Box>
    </Box>
  )
}