import React from "react";
import { Grid, Typography, Button, Box } from "@mui/material";
import LaunchIcon from "@mui/icons-material/LaunchOutlined";
import { motion } from "framer-motion";

const Project2 = () => {
  return (
    <Box
      sx={{
        py: 10,
      }}
    >
      <Grid
        container
        spacing={6}
        alignItems="center"
        sx={{
          flexDirection: { xs: "column-reverse", md: "row" }, // swap order on mobile
        }}
      >
        {/* 🧠 Text Section */}
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
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
                mb: 2,
              }}
            >
              Aseztak Wholesale Online App
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: "grey.400",
                fontSize: "1.1rem",
                lineHeight: 1.6,
                mb: 3,
                maxWidth: "90%",
              }}
            >
              A modern B2B e-commerce platform designed for wholesalers and
              retailers. This app enables easy bulk ordering, live inventory
              tracking, and seamless supplier–buyer interactions.
            </Typography>

            <Button
              endIcon={<LaunchIcon />}
              variant="contained"
              href="https://example.com"
              target="_blank"
              sx={{
                backgroundColor: "#ec390c",
                color: "white",
                px: 4,
                py: 1.2,
                borderRadius: "8px",
                fontWeight: "bold",
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "#ff4b1f",
                  transform: "translateY(-2px)",
                  transition: "all 0.3s ease",
                },
              }}
            >
              View Project
            </Button>
          </motion.div>
        </Grid>

        {/* 🖼 Image Section */}
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Box
              component="img"
              src="/images/aseztak.png"
              alt="Aseztak Wholesale App"
              sx={{
                width: "100%",
                height: "auto",
                borderRadius: "16px",
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
