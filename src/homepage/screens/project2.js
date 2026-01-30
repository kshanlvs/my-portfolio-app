import React from "react";
import { Grid, Typography, Button, Box, useTheme, useMediaQuery } from "@mui/material";
import LaunchIcon from "@mui/icons-material/LaunchOutlined";
import { motion } from "framer-motion";

const Project2 = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isSmallMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        py: { xs: 6, sm: 8, md: 10 },
        px: { xs: 2, sm: 3, md: 0 },
      }}
    >
      <Grid
        container
        spacing={{ xs: 4, sm: 6, md: 8 }}
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
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
          >
            <Typography
              variant="overline"
              sx={{
                color: "#ec390c",
                textTransform: "uppercase",
                letterSpacing: { xs: 0.5, sm: 1 },
                mb: { xs: 0.5, sm: 1 },
                fontWeight: 600,
                fontSize: { xs: '0.75rem', sm: '0.875rem' },
                display: 'block',
              }}
            >
              Android & iOS Application
            </Typography>

            <Typography
              variant="h3"
              sx={{
                color: "white",
                fontWeight: 800,
                mb: { xs: 2, sm: 3 },
                fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem', lg: '2.25rem' },
                lineHeight: 1.3,
              }}
            >
              Aseztak Wholesale Online App
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: "grey.400",
                lineHeight: 1.7,
                mb: { xs: 3, sm: 4 },
                maxWidth: { xs: '100%', md: '90%' },
                fontSize: { xs: '0.95rem', sm: '1rem', md: '1.05rem' },
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
              rel="noopener noreferrer"
              sx={{
                background: "linear-gradient(90deg, #ec390c 0%, #ff5c33 100%)",
                color: "white",
                px: { xs: 3, sm: 4 },
                py: { xs: 1.25, sm: 1.5 },
                borderRadius: { xs: 2, sm: 3 },
                fontWeight: 600,
                textTransform: "none",
                fontSize: { xs: '0.875rem', sm: '1rem' },
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
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
          >
            <Box
              component="img"
              src="/images/aseztak.png"
              alt="Aseztak Wholesale App"
              sx={{
                width: "100%",
                height: "auto",
                borderRadius: { xs: 2, sm: 3, md: 4 },
                boxShadow: "0px 20px 60px rgba(0, 0, 0, 0.6)",
                transition: "transform 0.4s ease, box-shadow 0.4s ease",
                "&:hover": {
                  transform: "scale(1.03)",
                  boxShadow: "0px 25px 70px rgba(236, 57, 12, 0.3)",
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