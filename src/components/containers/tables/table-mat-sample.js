import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TablePagination from "@material-ui/core/TablePagination";
import Paper from "@material-ui/core/Paper";
import officials_service from "../../../services/officials_service";
import Chips from "../chips/chips";
import Loadder from "../loadder/loadder";


const useStyles = makeStyles({
  table: {
    minWidth: 650,
    overflow: 'hidden'
  }
});

export default function SampleTable() {
  const classes = useStyles();
  var [rows, setRows] = useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const getData = async () => {
    await officials_service.getOfficials().then((users)=>{
        setRows(users);
        
    })
  }

  useEffect(() => {
    getData();
    return () => {
      
    }
  }, [])

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  return (
    <>
    
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>No.</TableCell>
            <TableCell align="left">Contact No. (Username)</TableCell>
            <TableCell align="left">Name</TableCell>
            <TableCell align="left">NIC No.</TableCell>
            <TableCell align="left">User Status</TableCell>
          </TableRow>
        </TableHead>
        
        <TableBody>
          {rows&&rows.length>0&&rows
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((row, index) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {index+1}
                </TableCell>
                <TableCell align="left">{row.contactno}</TableCell>
                <TableCell align="left">{row.username}</TableCell>
                <TableCell align="left">{row.nic}</TableCell>
                <TableCell align="left"><Chips type="tag" color="primary" values={[{title: row.status, link: '/users/{ID}'}]} /></TableCell>
              </TableRow>
            ))}
          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </TableContainer>
    {
        rows.length===0?
        <Loadder/>
        :null
    }
    </>
  );
}
