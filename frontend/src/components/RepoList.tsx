import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from '@material-ui/core';
import { BeatLoader } from 'react-spinners';

interface Column {
  id: 'name' | 'description' | 'owner';
  label: string;
  minWidth?: number;
  align?: 'right';
  format?: (value: number) => string;
}

const columns: Column[] = [
  { id: 'name', label: 'Name', minWidth: 90 },
  {
    id: 'description',
    label: 'Description',
    minWidth: 170,
    align: 'right',
    format: (value: number) => value.toLocaleString('en-US'),
  },
  {
    id: 'owner',
    label: 'Owner',
    minWidth: 100,
    align: 'right',
    format: (value: number) => value.toLocaleString('en-US'),
  },
];

interface Data {
  name: string;
  description: string;
  owner: string;
}

interface ItemData {
  name: string;
  description: string;
  owner: {
    login: string;
  };
}

function createData(name: string, description: string, owner: string): Data {
  return { name, description, owner };
}

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 570,
  },
});

interface Props {
  data: any;
  loading: boolean;
  page: number;
  setPage: Function;
  per_page: number;
  setPerPage: Function;
}

export default function RepoList({
  data,
  loading,
  page,
  setPage,
  per_page,
  setPerPage,
}: Props) {
  const classes = useStyles();

  const rows: Array<Data> = [];
  data.map((item: ItemData) => {
    return rows.push(createData(item.name, item.description, item.owner.login));
  });

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
      {loading ? (
        <BeatLoader />
      ) : (
        <>
          <TableContainer className={classes.container}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row: Data) => {
                  return (
                    <TableRow hover tabIndex={-1} key={row.name}>
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={-1}
            rowsPerPage={per_page}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />
        </>
      )}
    </Paper>
  );
}
