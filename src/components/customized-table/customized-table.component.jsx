import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TablePagination from '@material-ui/core/TablePagination';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(id, summary, severity, status, icon) {
  return { id, summary, severity, status, icon };
}

const rows = [
  createData('QL0001','Functionality: Missing Collision with a wall, can causing falling through the map', 'Blocker', 'Open'),
  createData('Compliance: R4201 TC failed, lorem ipsum lorem lorem lorem', 'QL0002', 'Blocker', 'Resolved'),
  createData('Switch] [GSG] - Title does not display a confirmation while taking user to main menu.', 'QL0003', 'Minor','Resolved'),
  createData('QL_PS4_Functionality_Confusing confirm and cancel buttons present in the UI', 'QL0004', 'Minor', 'Resolved'),
  createData('QL_PS4_Functionality_Larry and Yanmei voices are overlapping before the intercourse scene', 'QL0004', 'Minor', 'Open'),
  createData('Functionality: Missing Collision with a wall, can causing falling through the map', 'QL0001', 'Blocker', 'Open'),
  createData('Compliance: R4201 TC failed, lorem ipsum lorem lorem lorem', 'QL0002', 'Blocker', 'Resolved'),
  createData('Switch] [GSG] - Title does not display a confirmation while taking user to main menu.', 'QL0003', 'Minor','Resolved'),
  createData('QL_PS4_Functionality_Confusing confirm and cancel buttons present in the UI', 'QL0004', 'Minor', 'Resolved'),
  createData('QL_PS4_Functionality_Larry and Yanmei voices are overlapping before the intercourse scene', 'QL0004', 'Minor', 'Open'),
  createData('Functionality: Missing Collision with a wall, can causing falling through the map', 'QL0001', 'Blocker', 'Open'),
  createData('Compliance: R4201 TC failed, lorem ipsum lorem lorem lorem', 'QL0002', 'Blocker', 'Resolved'),
  createData('Switch] [GSG] - Title does not display a confirmation while taking user to main menu.', 'QL0003', 'Minor','Resolved'),
  createData('QL_PS4_Functionality_Confusing confirm and cancel buttons present in the UI', 'QL0004', 'Minor', 'Resolved'),
  createData('QL_PS4_Functionality_Larry and Yanmei voices are overlapping before the intercourse scene', 'QL0004', 'Minor', 'Open'),
  createData('Functionality: Missing Collision with a wall, can causing falling through the map', 'QL0001', 'Blocker', 'Open'),
  createData('Compliance: R4201 TC failed, lorem ipsum lorem lorem lorem', 'QL0002', 'Blocker', 'Resolved'),
  createData('Switch] [GSG] - Title does not display a confirmation while taking user to main menu.', 'QL0003', 'Minor','Resolved'),
  createData('QL_PS4_Functionality_Confusing confirm and cancel buttons present in the UI', 'QL0004', 'Minor', 'Resolved'),
  createData('QL_PS4_Functionality_Larry and Yanmei voices are overlapping before the intercourse scene', 'QL0004', 'Minor', 'Open'),
  createData('Functionality: Missing Collision with a wall, can causing falling through the map', 'QL0001', 'Blocker', 'Open'),
  createData('Compliance: R4201 TC failed, lorem ipsum lorem lorem lorem', 'QL0002', 'Blocker', 'Resolved'),
  createData('Switch] [GSG] - Title does not display a confirmation while taking user to main menu.', 'QL0003', 'Minor','Resolved'),
  createData('QL_PS4_Functionality_Confusing confirm and cancel buttons present in the UI', 'QL0004', 'Minor', 'Resolved'),
  createData('QL_PS4_Functionality_Larry and Yanmei voices are overlapping before the intercourse scene', 'QL0004', 'Minor', 'Open'),
  createData('Functionality: Missing Collision with a wall, can causing falling through the map', 'QL0001', 'Blocker', 'Open'),
  createData('Compliance: R4201 TC failed, lorem ipsum lorem lorem lorem', 'QL0002', 'Blocker', 'Resolved'),
  createData('Switch] [GSG] - Title does not display a confirmation while taking user to main menu.', 'QL0003', 'Minor','Resolved'),
  createData('QL_PS4_Functionality_Confusing confirm and cancel buttons present in the UI', 'QL0004', 'Minor', 'Resolved'),
  createData('QL_PS4_Functionality_Larry and Yanmei voices are overlapping before the intercourse scene', 'QL0004', 'Minor', 'Open'),
  createData('Functionality: Missing Collision with a wall, can causing falling through the map', 'QL0001', 'Blocker', 'Open'),
  createData('Compliance: R4201 TC failed, lorem ipsum lorem lorem lorem', 'QL0002', 'Blocker', 'Resolved'),
  createData('Switch] [GSG] - Title does not display a confirmation while taking user to main menu.', 'QL0003', 'Minor','Resolved'),
  createData('QL_PS4_Functionality_Confusing confirm and cancel buttons present in the UI', 'QL0004', 'Minor', 'Resolved'),
  createData('QL_PS4_Functionality_Larry and Yanmei voices are overlapping before the intercourse scene', 'QL0004', 'Minor', 'Open'),
  createData('Functionality: Missing Collision with a wall, can causing falling through the map', 'QL0001', 'Blocker', 'Open'),
  createData('Compliance: R4201 TC failed, lorem ipsum lorem lorem lorem', 'QL0002', 'Blocker', 'Resolved'),
  createData('Switch] [GSG] - Title does not display a confirmation while taking user to main menu.', 'QL0003', 'Minor','Resolved'),
  createData('QL_PS4_Functionality_Confusing confirm and cancel buttons present in the UI', 'QL0004', 'Minor', 'Resolved'),
  createData('QL_PS4_Functionality_Larry and Yanmei voices are overlapping before the intercourse scene', 'QL0004', 'Minor', 'Open'),
  createData('Functionality: Missing Collision with a wall, can causing falling through the map', 'QL0001', 'Blocker', 'Open'),
  createData('Compliance: R4201 TC failed, lorem ipsum lorem lorem lorem', 'QL0002', 'Blocker', 'Resolved'),
  createData('Switch] [GSG] - Title does not display a confirmation while taking user to main menu.', 'QL0003', 'Minor','Resolved'),
  createData('QL_PS4_Functionality_Confusing confirm and cancel buttons present in the UI', 'QL0004', 'Minor', 'Resolved'),
  createData('QL_PS4_Functionality_Larry and Yanmei voices are overlapping before the intercourse scene', 'QL0004', 'Minor', 'Open'),

];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function CustomizedTables() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="left">Bug ID</StyledTableCell>
            <StyledTableCell align="left">Summary</StyledTableCell>
            <StyledTableCell align="right">Severity</StyledTableCell>
            <StyledTableCell align="right">Status</StyledTableCell>
            <StyledTableCell align="right">Edit Icon</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="row">
                {row.id}
              </StyledTableCell>
              <StyledTableCell align="left">{row.summary}</StyledTableCell>
              <StyledTableCell align="right">{row.severity}</StyledTableCell>
              <StyledTableCell align="right">{row.status}</StyledTableCell>
              <StyledTableCell align="right">{row.icon}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}