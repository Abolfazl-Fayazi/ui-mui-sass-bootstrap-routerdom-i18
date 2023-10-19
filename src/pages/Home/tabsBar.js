import { useState } from "react";
//--------------------------------------------
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

//////////////////////////////////////////////////////////////////////////

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

//--------------------------------------------

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

//--------------------------------------------

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

//--------------------------------------------

const TabsBar = () => {
  //--------------------------------------------
  const theme = useTheme();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };
  //--------------------------------------------
  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        width: "100%",
   
      }}
    >
      <AppBar
        position="static"
        sx={{ boxShadow: "2px 5px 5px silver"}}
      >
        <Tabs
          sx={{
            height: "30px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "whitesmoke",
            color: "black",
    
          }}
          value={value}
          onChange={handleChange}
          indicatorColor=""
          textColor=""
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          {/* //-------------------------------------------- */}
          <Tab
            label="New"
            icon={<ExpandMoreIcon sx={{ paddingTop: "5px" }} />}
            sx={{
              display: "flex",
              flexDirection: "row-reverse",
              alignItems: "center",
              justifyContent: "center",
              ":hover": { color: "red" },
            }}
            href="#"
          ></Tab>
          <Tab
            label="Women"
            icon={<ExpandMoreIcon sx={{ paddingTop: "5px" }} />}
            sx={{
              display: "flex",
              flexDirection: "row-reverse",
              alignItems: "center",
              justifyContent: "center",
              ":hover": { color: "red" },
            }}
            href="#"
          ></Tab>
          <Tab
            label="Men"
            icon={<ExpandMoreIcon sx={{ paddingTop: "5px" }} />}
            sx={{
              display: "flex",
              flexDirection: "row-reverse",
              alignItems: "center",
              justifyContent: "center",
              ":hover": { color: "red" },
            }}
            href="#"
          ></Tab>
          <Tab
            label="Kids"
            icon={<ExpandMoreIcon sx={{ paddingTop: "5px" }} />}
            sx={{
              display: "flex",
              flexDirection: "row-reverse",
              alignItems: "center",
              justifyContent: "center",
              ":hover": { color: "red" },
            }}
            href="#"
          ></Tab>
          <Tab
            label="Accessories"
            icon={<ExpandMoreIcon sx={{ paddingTop: "5px" }} />}
            sx={{
              display: "flex",
              flexDirection: "row-reverse",
              alignItems: "center",
              justifyContent: "center",
              ":hover": { color: "red" },
            }}
            href="#"
          ></Tab>
          <Tab
            label="Sale"
            sx={{
              display: "flex",
              flexDirection: "row-reverse",
              alignItems: "center",
              justifyContent: "center",
              color: "red",
            }}
            href="#"
          ></Tab>
          {/* //-------------------------------------------- */}
        </Tabs>
      </AppBar>

      {/* //-------------------------------------------- */}

      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}></TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}></TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}></TabPanel>
      </SwipeableViews>

      {/* //-------------------------------------------- */}
    </Box>
  );
};

export default TabsBar;
