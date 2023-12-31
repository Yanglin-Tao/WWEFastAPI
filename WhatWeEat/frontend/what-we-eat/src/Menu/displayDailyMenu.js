import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import WidgetsIcon from '@mui/icons-material/Widgets';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
/* TODO: This component should display a list of menuItems in dailyMenu. 
    Each item displays a name, customer rating, food warning/recommendation and a button to add 
    the menuItem to shopping cart. 
    When click on the menuItem, it should show displayMenuItem component.
    */

function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                What We Eat
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();
function DisplayDailyMenu() {
    const [cartItems, setCartItems] = React.useState([]);
    const [totalCalories, setTotalCalories] = React.useState(0);

    const handleAddToCart = (foodItem) => {
        // Add the selected food item to the cart
        setCartItems([...cartItems, foodItem]);
        // Update the total calories
        setTotalCalories(totalCalories + foodItem.calories);
    };
    const dashboard = () => {
        window.open("/displayCommonUserDashboard", "_self");
    };
    const shop = () => {
        window.open("/mealShoppingCart", "_self");
    };
    const item = () => {
        window.open("/displayMenuItem", "_self");
    };
    return (
        <ThemeProvider theme={defaultTheme}>
            <CssBaseline />
            <AppBar position="relative">
                <Toolbar>
                    <MenuBookIcon sx={{ mr: 2 }} />
                    <Typography component="h1"
                        variant="h6"
                        color="inherit"
                        noWrap
                        sx={{ flexGrow: 1 }}>
                        Today's Menu
                    </Typography>
                    <IconButton size="large" color="inherit" onClick={shop}>
                        <ShoppingCartIcon />
                    </IconButton>
                    <IconButton color="inherit" onClick={dashboard}>
                        <WidgetsIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <main>
                {/* Hero unit */}
                <Box
                    sx={{
                        bgcolor: 'background.paper',
                        pt: 8,
                        pb: 6,
                    }}
                >
                    <Container maxWidth="sm">
                        <Typography
                            component="h1"
                            variant="h2"
                            align="center"
                            color="text.primary"
                        >
                            Today's Menu
                        </Typography>
                        {/* <Typography variant="h5" align="center" color="text.secondary" paragraph>
                Something short and leading about the collection below—its contents,
                the creator, etc. Make it short and sweet, but not too short so folks
                don&apos;t simply skip over it entirely.
                </Typography> */}
                        {/* <Stack
                sx={{ pt: 4 }}
                direction="row"
                spacing={2}
                justifyContent="center"
                > 
                <Button variant="contained">Main call to action</Button>
                <Button variant="outlined">Secondary action</Button>
                </Stack> */}
                    </Container>
                </Box>
                <Container sx={{ py: 1 }} maxWidth="md">
                    {/* End hero unit */}
                    <Grid container spacing={4}>
                        {cards.map((card) => (
                            <Grid item key={card} xs={12} sm={6} md={4}>
                                <Card
                                    sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                                >
                                    <CardMedia
                                        component="div"
                                        sx={{
                                            // 16:9
                                            pt: '56.25%',
                                        }}
                                        image="https://source.unsplash.com/random?food"
                                    />
                                    <CardContent sx={{ flexGrow: 1 }}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Food Item Name
                                        </Typography>
                                        <Typography>
                                            Rating: 5 stars
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" onClick={item}>View Details</Button>
                                        <Button size="small">Edit</Button>
                                        <Button
                                            size="small"
                                            onClick={() => handleAddToCart({ name: 'Food Item Name', calories: 300 })}
                                        >
                                            Add to Cart
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </main>
            {/* Footer */}
            <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
                <Typography variant="h6" align="center" gutterBottom>
                    Footer
                </Typography>
                <Typography
                    variant="subtitle1"
                    align="center"
                    color="text.secondary"
                    component="p"
                >
                    Something here to give the footer a purpose!
                </Typography>
                <Copyright />
            </Box>
            {/* End footer */}
        </ThemeProvider>
    );

}

export default DisplayDailyMenu;