import React, {useEffect, useState}  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 1000,
        margin: '0 auto',
        marginTop: 50
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    title:{
        color: "#3f51b5",
    }
}));

export default function AllCountries() {
    const [globalData, setGlobalData] = useState({});
    useEffect(()=>{
      async function getData(){
        const response = await fetch('https://api.covid19api.com/summary');
        let data = await response.json();
        // console.log(data.Countries[0]);
        // delete data.Countries[0].Premium;
        // delete data.Countries[0].Slug;
        // setGlobalData(data.Countries[0]);
        console.log(Object.values(data.Countries));
        setGlobalData(Object.values(data.Countries));
      }
      getData();
    },[])
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <table>
                <tr>
                    <th>Country Name</th>
                    <th>New Confirmed</th>
                    <th>New Deaths</th>
                    <th>New Recovered</th>
                    <th>Country Code</th>
                </tr>
            {Object.keys(globalData).map((key, index) => {
                    return(
                        <tr key={index}>
                            <td>{globalData[index].Country}</td>
                            <td>{globalData[index].NewConfirmed}</td>
                            <td>{globalData[index].NewDeaths}</td>
                            <td>{globalData[index].NewRecovered}</td>
                            <td>{globalData[index].CountryCode}</td>
                       </tr>   
                    )
                })}
            </table>
        </div>
    );
}
