import {createPrintConnectorFromDiscriminatorValue} from './createPrintConnectorFromDiscriminatorValue';
import {createPrinterFromDiscriminatorValue} from './createPrinterFromDiscriminatorValue';
import {createPrinterShareFromDiscriminatorValue} from './createPrinterShareFromDiscriminatorValue';
import {createPrintOperationFromDiscriminatorValue} from './createPrintOperationFromDiscriminatorValue';
import {createPrintServiceFromDiscriminatorValue} from './createPrintServiceFromDiscriminatorValue';
import {createPrintSettingsFromDiscriminatorValue} from './createPrintSettingsFromDiscriminatorValue';
import {createPrintTaskDefinitionFromDiscriminatorValue} from './createPrintTaskDefinitionFromDiscriminatorValue';
import {PrintConnectorImpl, PrinterImpl, PrinterShareImpl, PrintOperationImpl, PrintServiceImpl, PrintSettingsImpl, PrintTaskDefinitionImpl} from './index';
import {Print} from './print';
import {PrintConnector} from './printConnector';
import {Printer} from './printer';
import {PrinterShare} from './printerShare';
import {PrintOperation} from './printOperation';
import {PrintService} from './printService';
import {PrintSettings} from './printSettings';
import {PrintTaskDefinition} from './printTaskDefinition';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PrintImpl implements AdditionalDataHolder, Parsable, Print {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The list of available print connectors. */
    public connectors?: PrintConnector[] | undefined;
    /** The list of print long running operations. */
    public operations?: PrintOperation[] | undefined;
    /** The list of printers registered in the tenant. */
    public printers?: Printer[] | undefined;
    /** The list of available Universal Print service endpoints. */
    public services?: PrintService[] | undefined;
    /** Tenant-wide settings for the Universal Print service. */
    public settings?: PrintSettings | undefined;
    /** The list of printer shares registered in the tenant. */
    public shares?: PrinterShare[] | undefined;
    /** List of abstract definition for a task that can be triggered when various events occur within Universal Print. */
    public taskDefinitions?: PrintTaskDefinition[] | undefined;
    /**
     * Instantiates a new Print and sets the default values.
     * @param printParameterValue 
     */
    public constructor(printParameterValue?: Print | undefined) {
        this.additionalData = printParameterValue?.additionalData ? printParameterValue?.additionalData! : {}
        this.connectors = printParameterValue?.connectors ;
        this.operations = printParameterValue?.operations ;
        this.printers = printParameterValue?.printers ;
        this.services = printParameterValue?.services ;
        this.settings = printParameterValue?.settings ;
        this.shares = printParameterValue?.shares ;
        this.taskDefinitions = printParameterValue?.taskDefinitions ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "connectors": n => { this.connectors = n.getCollectionOfObjectValues<PrintConnectorImpl>(createPrintConnectorFromDiscriminatorValue); },
            "operations": n => { this.operations = n.getCollectionOfObjectValues<PrintOperationImpl>(createPrintOperationFromDiscriminatorValue); },
            "printers": n => { this.printers = n.getCollectionOfObjectValues<PrinterImpl>(createPrinterFromDiscriminatorValue); },
            "services": n => { this.services = n.getCollectionOfObjectValues<PrintServiceImpl>(createPrintServiceFromDiscriminatorValue); },
            "settings": n => { this.settings = n.getObjectValue<PrintSettingsImpl>(createPrintSettingsFromDiscriminatorValue); },
            "shares": n => { this.shares = n.getCollectionOfObjectValues<PrinterShareImpl>(createPrinterShareFromDiscriminatorValue); },
            "taskDefinitions": n => { this.taskDefinitions = n.getCollectionOfObjectValues<PrintTaskDefinitionImpl>(createPrintTaskDefinitionFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.connectors && this.connectors.length != 0){        const connectorsArrValue: PrintConnectorImpl[] = []; this.connectors?.forEach(element => {connectorsArrValue.push(new PrintConnectorImpl(element));});
        writer.writeCollectionOfObjectValues<PrintConnectorImpl>("connectors", connectorsArrValue);
        }
        if(this.operations && this.operations.length != 0){        const operationsArrValue: PrintOperationImpl[] = []; this.operations?.forEach(element => {operationsArrValue.push(new PrintOperationImpl(element));});
        writer.writeCollectionOfObjectValues<PrintOperationImpl>("operations", operationsArrValue);
        }
        if(this.printers && this.printers.length != 0){        const printersArrValue: PrinterImpl[] = []; this.printers?.forEach(element => {printersArrValue.push(new PrinterImpl(element));});
        writer.writeCollectionOfObjectValues<PrinterImpl>("printers", printersArrValue);
        }
        if(this.services && this.services.length != 0){        const servicesArrValue: PrintServiceImpl[] = []; this.services?.forEach(element => {servicesArrValue.push(new PrintServiceImpl(element));});
        writer.writeCollectionOfObjectValues<PrintServiceImpl>("services", servicesArrValue);
        }
        if(this.settings){
        writer.writeObjectValue<PrintSettingsImpl>("settings", new PrintSettingsImpl(this.settings));
        }
        if(this.shares && this.shares.length != 0){        const sharesArrValue: PrinterShareImpl[] = []; this.shares?.forEach(element => {sharesArrValue.push(new PrinterShareImpl(element));});
        writer.writeCollectionOfObjectValues<PrinterShareImpl>("shares", sharesArrValue);
        }
        if(this.taskDefinitions && this.taskDefinitions.length != 0){        const taskDefinitionsArrValue: PrintTaskDefinitionImpl[] = []; this.taskDefinitions?.forEach(element => {taskDefinitionsArrValue.push(new PrintTaskDefinitionImpl(element));});
        writer.writeCollectionOfObjectValues<PrintTaskDefinitionImpl>("taskDefinitions", taskDefinitionsArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
