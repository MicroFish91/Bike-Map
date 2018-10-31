import React, { Component } from 'react';
import {connect} from 'react-redux';

import * as actions from '../Actions';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';

class myNavbar extends Component {

    constructor(props) {

        super(props);
        this.toggle = this.toggle.bind(this);

        this.state = {
            isOpen: false
        };
    }
        
    toggle() {

        this.setState({
            isOpen: !this.state.isOpen
        });

    }

    // Clear Existing Bike Data
    resetData(e){

        e.preventDefault();

        // Actions
        this.props.bikeClear();
        this.props.toggleAdd();

        if(this.props.scatterDisplay === true){
            this.props.toggleScatter();
        }

    }
        
    render() {

        return (    

            <Navbar className="Nav" color="light" light expand="md">

                <NavbarBrand href="/">Bike Map</NavbarBrand>

                <NavbarToggler onClick={this.toggle} />

                <Collapse isOpen={this.state.isOpen} navbar>

                <Nav className="ml-auto" navbar>
                    <NavItem>
                    <NavLink href="https://github.com/MicroFish91/Bike-Map">GitHub</NavLink>
                    </NavItem>
                    <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                        Map Actions
                    </DropdownToggle>

                    <DropdownMenu right>
            
                    {/* Add/Remove */}
                    {   
                        (this.props.addDisplay)
                        ? <DropdownItem onClick=
                        {(e) => {e.preventDefault()
                        this.props.toggleForm()}}>
                        Add Data
                        </DropdownItem>
                        : <DropdownItem onClick=
                        {(e) => {this.resetData(e)}}>
                        Remove Data
                        </DropdownItem>

                    }

                    {/* Cluster */}
                    {   
                        (this.props.scatterDisplay && !this.props.addDisplay)
                        ? <DropdownItem onClick=
                        {(e) => {e.preventDefault()
                        this.props.toggleScatter()}}>
                        Cluster Data
                        </DropdownItem>
                        : <div></div>
                    } 

                    {/* Scatter */}
                    {   
                        (!this.props.scatterDisplay && !this.props.addDisplay)
                        ? <DropdownItem onClick=
                        {(e) => {e.preventDefault()
                        this.props.toggleScatter()}}>
                        Scatter Data
                        </DropdownItem>
                        : <div></div>
                    }    

                    </DropdownMenu>
                    </UncontrolledDropdown>
                </Nav>
                </Collapse>
            </Navbar>

        );
        }
    }

function mapStateToProps(state){

    return {
        addDisplay: state.addDisplay, 
        scatterDisplay: state.scatterDisplay,
        formDisplay: state.formDisplay
    }
}

export default connect(mapStateToProps, actions)(myNavbar)