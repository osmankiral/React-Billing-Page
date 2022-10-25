import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import profilPhoto from '../assets/osmankiral.png'
import '../components/Navbar.css'
import EventNoteOutlinedIcon from '@material-ui/icons/EventNoteOutlined';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import AppsOutlinedIcon from '@material-ui/icons/AppsOutlined';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';




const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
    large: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
  }));

const Navbar = ({data}) => {
    const classes = useStyles();
  return (
    <div className='left-side' style={{backgroundColor: "#F8F8FF"}}>
        <div className="row ms-3 avatar">
            <div className="col-sm-4 mt-1">
                <div className={classes.root}>
                    <Avatar alt="Remy Sharp" src={profilPhoto} className={classes.large} />
                </div>
            </div>
            <div className="col-sm-8 mt-3">
                <h5 style={{marginBottom:"0", color:"#1D1C4E"}}><b>{data.name}</b></h5>
                <p style={{color:"#7E7DA4"}}>{data.adress}</p>
            </div>
        </div>
        

        <div className='menu'>
            <ul className="nav flex-column ms-4" >
                <li className="nav-item">
                    <HomeOutlinedIcon className='ms-3 mt-2' style={{color: "#7E7DA4", fontSize:"30px"}}/>
                    <a className="nav-link active" style={{color: "#7E7DA4"}} aria-current="page" href="#">General</a>
                </li>
                <li className="nav-item">
                    <LockOutlinedIcon className='ms-3 mt-2' style={{color: "#7E7DA4", fontSize:"30px"}}/>
                    <a className="nav-link" style={{color: "#7E7DA4"}} href="#">Password</a>
                </li>
                <li className="nav-item">
                    <EmailOutlinedIcon className='ms-3 mt-2' style={{color: "#7E7DA4", fontSize:"30px"}}/>
                    <a className="nav-link" style={{color: "#7E7DA4"}} href="#">Invitations</a>
                </li>
                <li className="nav-item">
                    <EventNoteOutlinedIcon className='ms-3 mt-2' style={{color: "#7E7DA4", fontSize:"30px"}}/>
                    <a className="nav-link" style={{color: "#7E7DA4"}} href="#">Billing</a>
                </li>
                <li className="nav-item">
                    <AppsOutlinedIcon className='ms-3 mt-2' style={{color: "#7E7DA4", fontSize:"30px"}}/>
                    <a className="nav-link" style={{color: "#7E7DA4"}} href="#">Apps</a>
                </li>
                <li className="nav-item" style={{marginTop:"163%"}}>
                    <ExitToAppOutlinedIcon className='ms-3 mt-2' style={{color: "#7E7DA4", fontSize:"30px"}}/>
                    <a className="nav-link pb-4" style={{color: "#7E7DA4"}} href="#">Logout</a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar