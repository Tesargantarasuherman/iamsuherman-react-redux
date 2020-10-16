import { faEdit, faInfo, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import { Button, Container, Spinner } from 'reactstrap';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import paginationFactory from 'react-bootstrap-table2-paginator';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'

const { SearchBar } = Search;


const columns = [
    {
        dataField: 'id',
        text: 'ID'
    }, {
        dataField: 'nama',
        text: 'Nama',
        sort: true
    }, {
        dataField: 'alamat',
        text: 'Alamat',
        sort: true
    }, {
        dataField: 'umur',
        text: 'Umur',
        sort: true
    }, {
        dataField: 'email',
        text: 'Email',
        sort: true
    },
    {
        dataField: 'link',
        text: 'Action',
        formatter: (rowContent, row) => {
            return (
                <>
                    <Link to={`detail/${row.id}`}>
                        <Button color="dark" className="mr-2">
                            <FontAwesomeIcon icon={faInfo} /> Detail
                        </Button>
                    </Link>
                    <Link to={`edit/${row.id}`}>
                        <Button color="primary" className="mr-2">
                            <FontAwesomeIcon icon={faEdit} /> Edit
                    </Button>
                    </Link>
                    <Link to={`detail/${row.id}`}>
                        <Button color="danger" className="mr-2">
                            <FontAwesomeIcon icon={faTrash} /> Hapus
                    </Button>
                    </Link>
                </>
            )
        },
    },

];
const defaultSorted = [{
    dataField: 'id',
    order: 'asc'
}];

const mapStateToProps = (state) => {
    return {
        getUsersList: state.users.getUsersList, /*users dari index reducers users */
        errorUsersList: state.users.errorUsersList
    }
}

const TabelComponent = (props) => {
    return (
        <Container>
            {
                props.getUsersList 
                    ?

                    <ToolkitProvider
                        bootstrap4 defaultSorted={defaultSorted} keyField='id' data={props.getUsersList} columns={columns} search
                    >
                        {
                            props => (
                                <div>
                                    <div className="d-flex justify-content-between">
                                        <Button color="danger" className="mb-2">
                                            <FontAwesomeIcon icon={faPlus} /> Tambah
                                </Button>
                                        <SearchBar {...props.searchProps} placeholder="Cari.." />
                                    </div>
                                    <BootstrapTable
                                        {...props.baseProps}
                                        pagination={paginationFactory()}
                                    />
                                </div>
                            )
                        }
                    </ToolkitProvider>

                    :
                    <div className="text-center">
                        {
                            props.errorUsersList 
                            ? <h1>{props.errorUsersList}</h1>
                            : <Spinner color="dark" />
                        }
                    </div>
            }

        </Container>
    )
}

export default connect(mapStateToProps, null)(TabelComponent)
