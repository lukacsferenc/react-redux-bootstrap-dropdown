import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { DropdownButton, MenuItem, FormControl } from 'react-bootstrap';
import { actionCreators } from '../store/dropdownStore';

class CustomizedDropdown extends Component{
    render(){
        return(
            <div>
                <div>
                    <p>Example data source: <pre> {JSON.stringify(this.props.dropdownData,null,2)}</pre></p>
                    <p>Selected report id: <b> {this.props.selectedId}</b></p>
                </div>
                <div>
                    <DropdownButton title={this.getSelectedItemTitle()} onSelect={this.props.dropdownChanged}>
                    {this.props.dropdownData.map(item => <MenuItem key={item.id} eventKey={item.id}>{item.title}</MenuItem>)}                
                    </DropdownButton>   
                </div>
                <div>
                    <FormControl onChange={this.props.formcontrolChanged} type="text" value={this.props.selectedId} ></FormControl>     
                </div>
            </div>           
        );
    }

    getSelectedItemTitle() {
        var selected = this.props.dropdownData.filter(item => item.id == this.props.selectedId)[0];
        if(typeof selected == "undefined"){
            return "not valid id";
        }
        return selected.title;
     }
}

export default connect(
     state => state.dropdownReducer,
     dispatch => bindActionCreators(actionCreators, dispatch)
)(CustomizedDropdown);
