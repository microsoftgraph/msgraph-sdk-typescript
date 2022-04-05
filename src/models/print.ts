import {createPrintConnectorFromDiscriminatorValue} from './createPrintConnectorFromDiscriminatorValue';
import {createPrinterFromDiscriminatorValue} from './createPrinterFromDiscriminatorValue';
import {createPrinterShareFromDiscriminatorValue} from './createPrinterShareFromDiscriminatorValue';
import {createPrintOperationFromDiscriminatorValue} from './createPrintOperationFromDiscriminatorValue';
import {createPrintServiceFromDiscriminatorValue} from './createPrintServiceFromDiscriminatorValue';
import {createPrintSettingsFromDiscriminatorValue} from './createPrintSettingsFromDiscriminatorValue';
import {createPrintTaskDefinitionFromDiscriminatorValue} from './createPrintTaskDefinitionFromDiscriminatorValue';
import {PrintConnector, Printer, PrinterShare, PrintOperation, PrintService, PrintSettings, PrintTaskDefinition} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Print implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Record<string, unknown>;
    /** The list of available print connectors.  */
    private _connectors?: PrintConnector[] | undefined;
    /** The list of print long running operations.  */
    private _operations?: PrintOperation[] | undefined;
    /** The list of printers registered in the tenant.  */
    private _printers?: Printer[] | undefined;
    /** The list of available Universal Print service endpoints.  */
    private _services?: PrintService[] | undefined;
    /** Tenant-wide settings for the Universal Print service.  */
    private _settings?: PrintSettings | undefined;
    /** The list of printer shares registered in the tenant.  */
    private _shares?: PrinterShare[] | undefined;
    /** List of abstract definition for a task that can be triggered when various events occur within Universal Print.  */
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
    public set additionalData(value: Record<string, unknown>) {
        this._additionalData = value;
    };
    /**
     * Gets the connectors property value. The list of available print connectors.
     * @returns a printConnector
     */
    public get connectors() {
        return this._connectors;
    };
    /**
     * Sets the connectors property value. The list of available print connectors.
     * @param value Value to set for the connectors property.
     */
    public set connectors(value: PrintConnector[] | undefined) {
        this._connectors = value;
    };
    /**
     * Instantiates a new Print and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {
            "connectors": (o, n) => { (o as unknown as Print).connectors = n.getCollectionOfObjectValues<PrintConnector>(createPrintConnectorFromDiscriminatorValue); },
            "operations": (o, n) => { (o as unknown as Print).operations = n.getCollectionOfObjectValues<PrintOperation>(createPrintOperationFromDiscriminatorValue); },
            "printers": (o, n) => { (o as unknown as Print).printers = n.getCollectionOfObjectValues<Printer>(createPrinterFromDiscriminatorValue); },
            "services": (o, n) => { (o as unknown as Print).services = n.getCollectionOfObjectValues<PrintService>(createPrintServiceFromDiscriminatorValue); },
            "settings": (o, n) => { (o as unknown as Print).settings = n.getObjectValue<PrintSettings>(createPrintSettingsFromDiscriminatorValue); },
            "shares": (o, n) => { (o as unknown as Print).shares = n.getCollectionOfObjectValues<PrinterShare>(createPrinterShareFromDiscriminatorValue); },
            "taskDefinitions": (o, n) => { (o as unknown as Print).taskDefinitions = n.getCollectionOfObjectValues<PrintTaskDefinition>(createPrintTaskDefinitionFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the operations property value. The list of print long running operations.
     * @returns a printOperation
     */
    public get operations() {
        return this._operations;
    };
    /**
     * Sets the operations property value. The list of print long running operations.
     * @param value Value to set for the operations property.
     */
    public set operations(value: PrintOperation[] | undefined) {
        this._operations = value;
    };
    /**
     * Gets the printers property value. The list of printers registered in the tenant.
     * @returns a printer
     */
    public get printers() {
        return this._printers;
    };
    /**
     * Sets the printers property value. The list of printers registered in the tenant.
     * @param value Value to set for the printers property.
     */
    public set printers(value: Printer[] | undefined) {
        this._printers = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeCollectionOfObjectValues<PrintConnector>("connectors", this.connectors);
        writer.writeCollectionOfObjectValues<PrintOperation>("operations", this.operations);
        writer.writeCollectionOfObjectValues<Printer>("printers", this.printers);
        writer.writeCollectionOfObjectValues<PrintService>("services", this.services);
        writer.writeObjectValue<PrintSettings>("settings", this.settings);
        writer.writeCollectionOfObjectValues<PrinterShare>("shares", this.shares);
        writer.writeCollectionOfObjectValues<PrintTaskDefinition>("taskDefinitions", this.taskDefinitions);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the services property value. The list of available Universal Print service endpoints.
     * @returns a printService
     */
    public get services() {
        return this._services;
    };
    /**
     * Sets the services property value. The list of available Universal Print service endpoints.
     * @param value Value to set for the services property.
     */
    public set services(value: PrintService[] | undefined) {
        this._services = value;
    };
    /**
     * Gets the settings property value. Tenant-wide settings for the Universal Print service.
     * @returns a printSettings
     */
    public get settings() {
        return this._settings;
    };
    /**
     * Sets the settings property value. Tenant-wide settings for the Universal Print service.
     * @param value Value to set for the settings property.
     */
    public set settings(value: PrintSettings | undefined) {
        this._settings = value;
    };
    /**
     * Gets the shares property value. The list of printer shares registered in the tenant.
     * @returns a printerShare
     */
    public get shares() {
        return this._shares;
    };
    /**
     * Sets the shares property value. The list of printer shares registered in the tenant.
     * @param value Value to set for the shares property.
     */
    public set shares(value: PrinterShare[] | undefined) {
        this._shares = value;
    };
    /**
     * Gets the taskDefinitions property value. List of abstract definition for a task that can be triggered when various events occur within Universal Print.
     * @returns a printTaskDefinition
     */
    public get taskDefinitions() {
        return this._taskDefinitions;
    };
    /**
     * Sets the taskDefinitions property value. List of abstract definition for a task that can be triggered when various events occur within Universal Print.
     * @param value Value to set for the taskDefinitions property.
     */
    public set taskDefinitions(value: PrintTaskDefinition[] | undefined) {
        this._taskDefinitions = value;
    };
}
