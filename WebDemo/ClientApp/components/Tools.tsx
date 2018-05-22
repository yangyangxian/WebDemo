import * as React from 'react';
import { RouteComponentProps } from 'react-router';

import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


interface ToolsState {
    CarImportTaxCal: CarImportTaxState
}

interface CarImportTaxState {
    carPrice: string,
    tariff: string,
    addedTax: string
}

export class Tools extends React.Component<RouteComponentProps<{}>, CarImportTaxState> {
    constructor() {
        super();      
    }

    public render() {
        //const { classes } = this.props;

        return <div>
            <MuiThemeProvider>
                <div>
                    <TextField
                        id="carPrice"
                        floatingLabelText="Car Price"
                        type="number"
                        //className={classes.textField}
                        onChange={this.handleChange('carPrice')}
                    />
                    <TextField
                        id="tariff"
                        floatingLabelText="Tariff"
                        type="number"
                        onChange={this.handleChange('tariff')}
                    />
                    <TextField
                        id="addedTax"
                        floatingLabelText="Added Tax"
                        type="number"
                        onChange={this.handleChange('addedTax')}
                    />
                </div>
            </MuiThemeProvider>
        </div>
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
        console.log(this.state)
    };
}
