import React from "react";
import { Tabs, Tab, Typography, Box } from "@mui/material";
import PropTypes from "prop-types";
import Products from "./products";
import Faker from "faker";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
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

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Typography
        variant="h6"
        component="h6"
        align="left"
        sx={{ marginTop: 11 }}
      >
        Browse our Categories
      </Typography>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Item One" {...a11yProps(0)} />
            <Tab label="Item Two" {...a11yProps(1)} />
            <Tab label="Item Three" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <Box
            sx={{
              display: "grid",
              columnGap: 3,
              rowGap: 1,
              gridTemplateColumns: "repeat(4, 1fr)",
            }}
          >
            {new Array(8).fill(0).map((ele) => (
              <Products
                img={`${Faker.image.abstract()}?random=${Math.round(
                  Math.random() * 1000
                )}`}
                des={Faker.commerce.productDescription()}
                name={Faker.commerce.productName()}
              />
            ))}
          </Box>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Box
            sx={{
              display: "grid",
              columnGap: 3,
              rowGap: 1,
              gridTemplateColumns: "repeat(4, 1fr)",
            }}
          >
            {new Array(8).fill(0).map((ele) => (
              <Products
                img={`${Faker.image.abstract()}?random=${Math.round(
                  Math.random() * 1000
                )}`}
                des={Faker.commerce.productDescription()}
                name={Faker.commerce.productName()}
              />
            ))}
          </Box>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Box
            sx={{
              display: "grid",
              columnGap: 3,
              rowGap: 1,
              gridTemplateColumns: "repeat(4, 1fr)",
            }}
          >
            {new Array(8).fill(0).map((ele) => (
              <Products
                img={`${Faker.image.abstract()}?random=${Math.round(
                  Math.random() * 1000
                )}`}
                des={Faker.commerce.productDescription()}
                name={Faker.commerce.productName()}
              />
            ))}
          </Box>
        </TabPanel>
      </Box>
    </>
  );
}
