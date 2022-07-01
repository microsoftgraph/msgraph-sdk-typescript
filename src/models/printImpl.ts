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

export class PrintImpl implements Print {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData?: Record<string, unknown> | undefined;
    /** The list of available print connectors. */
    private _connectors?: PrintConnector[] | undefined;
    /** The list of print long running operations. */
    private _operations?: PrintOperation[] | undefined;
    /** The list of printers registered in the tenant. */
    private _printers?: Printer[] | undefined;
    /** The list of available Universal Print service endpoints. */
    private _services?: PrintService[] | undefined;
    /** Tenant-wide settings for the Universal Print service. */
    private _settings?: PrintSettings | undefined;
    /** The list of printer shares registered in the tenant. */
    private _shares?: PrinterShare[] | undefined;
    /** List of abstract definition for a task that can be triggered when various events occur within Universal Print. */
    private _taskDefinitions?: PrintTaskDefinition[] | undefined;
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Record<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Record<string, unknown> | undefined) {
        if(value) {
            this._additionalData = value;
        }
    };
    /**
     * Gets the connectors property value. The list of available print connectors.
     * @returns a PrintConnectorInterface
     */
    public get connectors() {
        return this._connectors;
    };
    /**
     * Sets the connectors property value. The list of available print connectors.
     * @param value Value to set for the connectors property.
     */
    public set connectors(value: PrintConnector[] | undefined) {
        if(value) {
            const connectorsArrValue: PrintConnectorImpl[] = [];
            this.connectors?.forEach(element => {
                connectorsArrValue.push((element instanceof PrintConnectorImpl? element as PrintConnectorImpl:new PrintConnectorImpl(element)));
            });
            this._connectors = connectorsArrValue;
        }
    };
    /**
     * Instantiates a new Print and sets the default values.
     * @param printParameterValue 
     */
    public constructor(printParameterValue?: Print | undefined) {
        this._additionalData = printParameterValue?.additionalData ? printParameterValue?.additionalData! : {};
        this._connectors = printParameterValue?.connectors;
        this._operations = printParameterValue?.operations;
        this._printers = printParameterValue?.printers;
        this._services = printParameterValue?.services;
        this._settings = printParameterValue?.settings;
        this._shares = printParameterValue?.shares;
        this._taskDefinitions = printParameterValue?.taskDefinitions;
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
     * Gets the operations property value. The list of print long running operations.
     * @returns a PrintOperationInterface
     */
    public get operations() {
        return this._operations;
    };
    /**
     * Sets the operations property value. The list of print long running operations.
     * @param value Value to set for the operations property.
     */
    public set operations(value: PrintOperation[] | undefined) {
        if(value) {
            const operationsArrValue: PrintOperationImpl[] = [];
            this.operations?.forEach(element => {
                operationsArrValue.push((element instanceof PrintOperationImpl? element as PrintOperationImpl:new PrintOperationImpl(element)));
            });
            this._operations = operationsArrValue;
        }
    };
    /**
     * Gets the printers property value. The list of printers registered in the tenant.
     * @returns a PrinterInterface
     */
    public get printers() {
        return this._printers;
    };
    /**
     * Sets the printers property value. The list of printers registered in the tenant.
     * @param value Value to set for the printers property.
     */
    public set printers(value: Printer[] | undefined) {
        if(value) {
            const printersArrValue: PrinterImpl[] = [];
            this.printers?.forEach(element => {
                printersArrValue.push((element instanceof PrinterImpl? element as PrinterImpl:new PrinterImpl(element)));
            });
            this._printers = printersArrValue;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.connectors && this.connectors.length != 0){        const connectorsArrValue: PrintConnectorImpl[] = [];
        this.connectors?.forEach(element => {
            connectorsArrValue.push((element instanceof PrintConnectorImpl? element as PrintConnectorImpl:new PrintConnectorImpl(element)));
        });
            writer.writeCollectionOfObjectValues<PrintConnectorImpl>("connectors", connectorsArrValue);
        }
        if(this.operations && this.operations.length != 0){        const operationsArrValue: PrintOperationImpl[] = [];
        this.operations?.forEach(element => {
            operationsArrValue.push((element instanceof PrintOperationImpl? element as PrintOperationImpl:new PrintOperationImpl(element)));
        });
            writer.writeCollectionOfObjectValues<PrintOperationImpl>("operations", operationsArrValue);
        }
        if(this.printers && this.printers.length != 0){        const printersArrValue: PrinterImpl[] = [];
        this.printers?.forEach(element => {
            printersArrValue.push((element instanceof PrinterImpl? element as PrinterImpl:new PrinterImpl(element)));
        });
            writer.writeCollectionOfObjectValues<PrinterImpl>("printers", printersArrValue);
        }
        if(this.services && this.services.length != 0){        const servicesArrValue: PrintServiceImpl[] = [];
        this.services?.forEach(element => {
            servicesArrValue.push((element instanceof PrintServiceImpl? element as PrintServiceImpl:new PrintServiceImpl(element)));
        });
            writer.writeCollectionOfObjectValues<PrintServiceImpl>("services", servicesArrValue);
        }
        if(this.settings){
            writer.writeObjectValue<PrintSettingsImpl>("settings", (this.settings instanceof PrintSettingsImpl? this.settings as PrintSettingsImpl: new PrintSettingsImpl(this.settings)));
        }
        if(this.shares && this.shares.length != 0){        const sharesArrValue: PrinterShareImpl[] = [];
        this.shares?.forEach(element => {
            sharesArrValue.push((element instanceof PrinterShareImpl? element as PrinterShareImpl:new PrinterShareImpl(element)));
        });
            writer.writeCollectionOfObjectValues<PrinterShareImpl>("shares", sharesArrValue);
        }
        if(this.taskDefinitions && this.taskDefinitions.length != 0){        const taskDefinitionsArrValue: PrintTaskDefinitionImpl[] = [];
        this.taskDefinitions?.forEach(element => {
            taskDefinitionsArrValue.push((element instanceof PrintTaskDefinitionImpl? element as PrintTaskDefinitionImpl:new PrintTaskDefinitionImpl(element)));
        });
            writer.writeCollectionOfObjectValues<PrintTaskDefinitionImpl>("taskDefinitions", taskDefinitionsArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the services property value. The list of available Universal Print service endpoints.
     * @returns a PrintServiceInterface
     */
    public get services() {
        return this._services;
    };
    /**
     * Sets the services property value. The list of available Universal Print service endpoints.
     * @param value Value to set for the services property.
     */
    public set services(value: PrintService[] | undefined) {
        if(value) {
            const servicesArrValue: PrintServiceImpl[] = [];
            this.services?.forEach(element => {
                servicesArrValue.push((element instanceof PrintServiceImpl? element as PrintServiceImpl:new PrintServiceImpl(element)));
            });
            this._services = servicesArrValue;
        }
    };
    /**
     * Gets the settings property value. Tenant-wide settings for the Universal Print service.
     * @returns a PrintSettingsInterface
     */
    public get settings() {
        return this._settings;
    };
    /**
     * Sets the settings property value. Tenant-wide settings for the Universal Print service.
     * @param value Value to set for the settings property.
     */
    public set settings(value: PrintSettings | undefined) {
        if(value) {
            this._settings = value instanceof PrintSettingsImpl? value as PrintSettingsImpl: new PrintSettingsImpl(value);
        }
    };
    /**
     * Gets the shares property value. The list of printer shares registered in the tenant.
     * @returns a PrinterShareInterface
     */
    public get shares() {
        return this._shares;
    };
    /**
     * Sets the shares property value. The list of printer shares registered in the tenant.
     * @param value Value to set for the shares property.
     */
    public set shares(value: PrinterShare[] | undefined) {
        if(value) {
            const sharesArrValue: PrinterShareImpl[] = [];
            this.shares?.forEach(element => {
                sharesArrValue.push((element instanceof PrinterShareImpl? element as PrinterShareImpl:new PrinterShareImpl(element)));
            });
            this._shares = sharesArrValue;
        }
    };
    /**
     * Gets the taskDefinitions property value. List of abstract definition for a task that can be triggered when various events occur within Universal Print.
     * @returns a PrintTaskDefinitionInterface
     */
    public get taskDefinitions() {
        return this._taskDefinitions;
    };
    /**
     * Sets the taskDefinitions property value. List of abstract definition for a task that can be triggered when various events occur within Universal Print.
     * @param value Value to set for the taskDefinitions property.
     */
    public set taskDefinitions(value: PrintTaskDefinition[] | undefined) {
        if(value) {
            const taskDefinitionsArrValue: PrintTaskDefinitionImpl[] = [];
            this.taskDefinitions?.forEach(element => {
                taskDefinitionsArrValue.push((element instanceof PrintTaskDefinitionImpl? element as PrintTaskDefinitionImpl:new PrintTaskDefinitionImpl(element)));
            });
            this._taskDefinitions = taskDefinitionsArrValue;
        }
    };
}
