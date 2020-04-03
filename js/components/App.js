import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Merriweather from '../../public/fonts/merriweather/Merriweather-Regular.ttf'
import MerriweatherBold from '../../public/fonts/merriweather/Merriweather-Bold.ttf'
import Roboto from '../../public/fonts/roboto/Roboto-Regular.ttf'
import LogoImage from '../../public/images/image.png'
import Paper from '@material-ui/core/Paper';

const roboto = {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontDisplay: 'swap',
    fontWeight: 400,
    src: `url('${Roboto}')`
}

const merriweatherRegular = {
    fontFamily: 'Merriweather',
    fontStyle: 'normal',
    fontDisplay: 'swap',
    fontWeight: 400,
    src: `url('${Merriweather}')`
}

const merriweatherBold = {
    fontFamily: 'Merriweather',
    fontStyle: 'normal',
    fontDisplay: 'swap',
    fontWeight: 700,
    src: `url('${MerriweatherBold}')`
}

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#5e1fbc'
        },
        secondary: {
            main: '#7dbc1f'
        },
        contrastThreshold: 3,
        tonalOffset: 0.2,
    },
    typography: {

    }
})

const useStyles = makeStyles(theme => ({
    '@global': {
        ':root': {
            fontSize: 'calc(1vw + 0.6em)',
            boxSizing: 'border-box'
        },

        '*,::before,::after': {
            boxSizing: 'inherit'
        },

        body: {
            display: '',
            fontFamily: 'Roboto,Merriweather',
            margin: 0,
        },

        '@font-face': [roboto, merriweatherRegular, merriweatherBold]
    },

    '@keyframes changeBackgroundColor': {
        '0%': {
            backgroundColor: theme.palette.primary.light
        },
        '50%': {
            backgroundColor: 'gainsboro'
        },
        '100%': {
            backgroundColor: theme.palette.primary.light
        }
    },

    '@keyframes changeTextColor': {
        '0%': {
            color: 'blue',
        },
        '50%': {
            color: 'black'
        },
        '100%': {
            color: 'blue',
        }
    },

    '@keyframes fly-in': {
        '0%': {
            transform: 'translateZ(-800px) rotateY(90deg)',
            opacity: 0,
        },

        '20%':{
            transform:'translateZ(-640px) rotateY(0deg)'
        },

        '40%': {
            transform: 'translateZ(-480px) rotateY(-90deg)',
            
        },

        '60%':{
            transform:'translateZ(-320px) rotateY(-180deg)',
            opacity: 1
        },

        '80%':{
            transform:'translateZ(-160px) rotateY(-270deg)'
        },

        '100%': {
            transform: 'translateZ(0) rotateY(-360deg)',
        }
    },

    '@keyframes headingSlideLeft': {
        '0%': {
            opacity: 0
        },
        '100%': {
            opacity: 1
        },
    },

    overallContainer: {
        minHeight: '100vh',
        maxHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        //backgroundColor: 'gainsboro',
        backgroundImage: 'linear-gradient(135deg, blue, white, black)',
        perspective: '1000px'
        //animation: '$changeBackgroundColor 5s linear infinite',
        //animationFillMode: 'both'
    },

    paperContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0.4em 1em 0.6em',
        margin: '0.2em 2%',
        animation: '$fly-in 1s ease-out',
        animationFillMode: 'backwards',
        overflowX: 'hidden'
    },

    pageHeading: {
        width: '100%',
        textAlign: 'center',
        fontFamily: 'Merriweather',
        fontWeight: 'bold',
        fontSize: '1.5rem',
        flex:'0',
        textTransform: 'uppercase',
        animation: '$changeTextColor 3s linear infinite,$headingSlideLeft 1s ease-in',
        animationFillMode: 'both,both',
        animationDelay: '1s',

        '&:nth-child(2)':{
            animationDelay:'1.4s'
        },
        '&:nth-child(3)':{
            animationDelay:'1.8s'
        }
    },

    headingContainer:{
        display:'flex',
        width:'100%',
        justifyContent:'center',

        '& > $pageHeading + $pageHeading':{
            marginLeft:'1rem'
        },
    },

    logoImage: {
        objectFit: 'cover',
        width: '100%',
        height: 'auto',
        maxWidth: '450px',
    },

    '@media (min-width: 35em)': {
        pageHeading: {
            fontSize: '2.25rem',
        },

        headingContainer:{
            '& > $pageHeading + $pageHeading':{
                marginLeft:'0.8rem'
            },
        }
    }
}))

const App = () => {
    const classes = useStyles()

    return (
        <div className={classes.overallContainer}>
            <Paper className={classes.paperContainer} elevation={8}>

                {/*<h1 className={classes.pageHeading}>Watch This Space!</h1>*/}
                <div className={classes.headingContainer}>
                <h1 className={classes.pageHeading}>Watch</h1>
                <h1 className={classes.pageHeading}>This</h1>
                <h1 className={classes.pageHeading}>Space!</h1>
                </div>

                <img className={classes.logoImage} src={LogoImage}></img>
            </Paper>
        </div>
    )
}

export default App