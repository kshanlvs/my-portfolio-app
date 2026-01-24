import React from "react";
import { Grid, Typography, Button, Box } from "@mui/material";
import LaunchIcon from "@mui/icons-material/LaunchOutlined";
import { motion } from "framer-motion";

const Project2 = () => {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        px: { xs: 3, md: 0 },
      }}
    >
      <Grid
        container
        spacing={6}
        alignItems="center"
        sx={{
          flexDirection: { xs: "column-reverse", md: "row" },
        }}
      >
        {/* Text Section */}
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Typography
              variant="h6"
              sx={{
                color: "#ec390c",
                textTransform: "uppercase",
                letterSpacing: "1px",
                mb: 1,
                fontWeight: 600,
              }}
            >
              Android & iOS Application
            </Typography>

            <Typography
              variant="h3"
              sx={{
                color: "white",
                fontWeight: 700,
                mb: 3,
              }}
            >
              Aseztak Wholesale Online App
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: "grey.400",
                fontSize: "1.1rem",
                lineHeight: 1.7,
                mb: 4,
                maxWidth: "90%",
              }}
            >
              A modern B2B e-commerce platform for wholesalers and retailers. Manage bulk
              orders, live inventory, and supplier–buyer interactions seamlessly.
            </Typography>

            <Button
              endIcon={<LaunchIcon />}
              variant="contained"
              href="https://aseztak.com"
              target="_blank"
              sx={{
                background: "linear-gradient(90deg, #ec390c 0%, #ff5c33 100%)",
                color: "white",
                px: 4,
                py: 1.5,
                borderRadius: "10px",
                fontWeight: 600,
                textTransform: "none",
                fontSize: "1rem",
                "&:hover": {
                  background: "linear-gradient(90deg, #ff5c33 0%, #ec390c 100%)",
                  transform: "translateY(-2px)",
                  boxShadow: "0 10px 25px rgba(236, 57, 12, 0.4)",
                  transition: "all 0.3s ease",
                },
              }}
            >
              View Project
            </Button>
          </motion.div>
        </Grid>

        {/* Image Section */}
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Box
              component="img"
              src="/images/aseztak.png"
              alt="Aseztak Wholesale App"
              sx={{
                width: "100%",
                height: "auto",
                borderRadius: "20px",
                boxShadow: "0px 20px 60px rgba(0, 0, 0, 0.6)",
                transition: "transform 0.4s ease, box-shadow 0.4s ease",
                "&:hover": {
                  transform: "scale(1.03)",
                  boxShadow: "0px 25px 70px rgba(0, 0, 0, 0.7)",
                },
              }}
            />
          </motion.div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Project2;
