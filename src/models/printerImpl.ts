import {createPrintConnectorFromDiscriminatorValue} from './createPrintConnectorFromDiscriminatorValue';
import {createPrinterShareFromDiscriminatorValue} from './createPrinterShareFromDiscriminatorValue';
import {createPrintTaskTriggerFromDiscriminatorValue} from './createPrintTaskTriggerFromDiscriminatorValue';
import {PrintConnectorImpl, PrinterBaseImpl, PrinterShareImpl, PrintTaskTriggerImpl} from './index';
import {PrintConnector} from './printConnector';
import {Printer} from './printer';
import {PrinterShare} from './printerShare';
import {PrintTaskTrigger} from './printTaskTrigger';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PrinterImpl extends PrinterBaseImpl implements Printer {
    /** The connectors that are associated with the printer. */
    private _connectors?: PrintConnector[] | undefined;
    /** True if the printer has a physical device for printing. Read-only. */
    private _hasPhysicalDevice?: boolean | undefined;
    /** True if the printer is shared; false otherwise. Read-only. */
    private _isShared?: boolean | undefined;
    /** The most recent dateTimeOffset when a printer interacted with Universal Print. Read-only. */
    private _lastSeenDateTime?: Date | undefined;
    /** The DateTimeOffset when the printer was registered. Read-only. */
    private _registeredDateTime?: Date | undefined;
    /** The list of printerShares that are associated with the printer. Currently, only one printerShare can be associated with the printer. Read-only. Nullable. */
    private _shares?: PrinterShare[] | undefined;
    /** A list of task triggers that are associated with the printer. */
    private _taskTriggers?: PrintTaskTrigger[] | undefined;
    /**
     * Gets the connectors property value. The connectors that are associated with the printer.
     * @returns a PrintConnectorInterface
     */
    public get connectors() {
        return this._connectors;
    };
    /**
     * Sets the connectors property value. The connectors that are associated with the printer.
     * @param value Value to set for the connectors property.
     */
    public set connectors(value: PrintConnector[] | undefined) {
        if(value) {
            const connectorsArrValue: PrintConnectorImpl[] = [];
            this.connectors?.forEach(element => {
                connectorsArrValue.push((element instanceof PrintConnectorImpl? element:new PrintConnectorImpl(element)));
            });
            this._connectors = connectorsArrValue;
        }
    };
    /**
     * Instantiates a new Printer and sets the default values.
     * @param printerParameterValue 
     */
    public constructor(printerParameterValue?: Printer | undefined) {
        super(printerParameterValue);
        this._connectors = printerParameterValue?.connectors;
        this._hasPhysicalDevice = printerParameterValue?.hasPhysicalDevice;
        this._isShared = printerParameterValue?.isShared;
        this._lastSeenDateTime = printerParameterValue?.lastSeenDateTime;
        this._registeredDateTime = printerParameterValue?.registeredDateTime;
        this._shares = printerParameterValue?.shares;
        this._taskTriggers = printerParameterValue?.taskTriggers;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "connectors": n => { this.connectors = n.getCollectionOfObjectValues<PrintConnectorImpl>(createPrintConnectorFromDiscriminatorValue); },
            "hasPhysicalDevice": n => { this.hasPhysicalDevice = n.getBooleanValue(); },
            "isShared": n => { this.isShared = n.getBooleanValue(); },
            "lastSeenDateTime": n => { this.lastSeenDateTime = n.getDateValue(); },
            "registeredDateTime": n => { this.registeredDateTime = n.getDateValue(); },
            "shares": n => { this.shares = n.getCollectionOfObjectValues<PrinterShareImpl>(createPrinterShareFromDiscriminatorValue); },
            "taskTriggers": n => { this.taskTriggers = n.getCollectionOfObjectValues<PrintTaskTriggerImpl>(createPrintTaskTriggerFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the hasPhysicalDevice property value. True if the printer has a physical device for printing. Read-only.
     * @returns a boolean
     */
    public get hasPhysicalDevice() {
        return this._hasPhysicalDevice;
    };
    /**
     * Sets the hasPhysicalDevice property value. True if the printer has a physical device for printing. Read-only.
     * @param value Value to set for the hasPhysicalDevice property.
     */
    public set hasPhysicalDevice(value: boolean | undefined) {
        if(value) {
            this._hasPhysicalDevice = value;
        }
    };
    /**
     * Gets the isShared property value. True if the printer is shared; false otherwise. Read-only.
     * @returns a boolean
     */
    public get isShared() {
        return this._isShared;
    };
    /**
     * Sets the isShared property value. True if the printer is shared; false otherwise. Read-only.
     * @param value Value to set for the isShared property.
     */
    public set isShared(value: boolean | undefined) {
        if(value) {
            this._isShared = value;
        }
    };
    /**
     * Gets the lastSeenDateTime property value. The most recent dateTimeOffset when a printer interacted with Universal Print. Read-only.
     * @returns a Date
     */
    public get lastSeenDateTime() {
        return this._lastSeenDateTime;
    };
    /**
     * Sets the lastSeenDateTime property value. The most recent dateTimeOffset when a printer interacted with Universal Print. Read-only.
     * @param value Value to set for the lastSeenDateTime property.
     */
    public set lastSeenDateTime(value: Date | undefined) {
        if(value) {
            this._lastSeenDateTime = value;
        }
    };
    /**
     * Gets the registeredDateTime property value. The DateTimeOffset when the printer was registered. Read-only.
     * @returns a Date
     */
    public get registeredDateTime() {
        return this._registeredDateTime;
    };
    /**
     * Sets the registeredDateTime property value. The DateTimeOffset when the printer was registered. Read-only.
     * @param value Value to set for the registeredDateTime property.
     */
    public set registeredDateTime(value: Date | undefined) {
        if(value) {
            this._registeredDateTime = value;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.connectors && this.connectors.length != 0){        const connectorsArrValue: PrintConnectorImpl[] = [];
        this.connectors?.forEach(element => {
            connectorsArrValue.push((element instanceof PrintConnectorImpl? element:new PrintConnectorImpl(element)));
        });
            writer.writeCollectionOfObjectValues<PrintConnectorImpl>("connectors", connectorsArrValue);
        }
        if(this.hasPhysicalDevice){
            writer.writeBooleanValue("hasPhysicalDevice", this.hasPhysicalDevice);
        }
        if(this.isShared){
            writer.writeBooleanValue("isShared", this.isShared);
        }
        if(this.lastSeenDateTime){
            writer.writeDateValue("lastSeenDateTime", this.lastSeenDateTime);
        }
        if(this.registeredDateTime){
            writer.writeDateValue("registeredDateTime", this.registeredDateTime);
        }
        if(this.shares && this.shares.length != 0){        const sharesArrValue: PrinterShareImpl[] = [];
        this.shares?.forEach(element => {
            sharesArrValue.push((element instanceof PrinterShareImpl? element:new PrinterShareImpl(element)));
        });
            writer.writeCollectionOfObjectValues<PrinterShareImpl>("shares", sharesArrValue);
        }
        if(this.taskTriggers && this.taskTriggers.length != 0){        const taskTriggersArrValue: PrintTaskTriggerImpl[] = [];
        this.taskTriggers?.forEach(element => {
            taskTriggersArrValue.push((element instanceof PrintTaskTriggerImpl? element:new PrintTaskTriggerImpl(element)));
        });
            writer.writeCollectionOfObjectValues<PrintTaskTriggerImpl>("taskTriggers", taskTriggersArrValue);
        }
    };
    /**
     * Gets the shares property value. The list of printerShares that are associated with the printer. Currently, only one printerShare can be associated with the printer. Read-only. Nullable.
     * @returns a PrinterShareInterface
     */
    public get shares() {
        return this._shares;
    };
    /**
     * Sets the shares property value. The list of printerShares that are associated with the printer. Currently, only one printerShare can be associated with the printer. Read-only. Nullable.
     * @param value Value to set for the shares property.
     */
    public set shares(value: PrinterShare[] | undefined) {
        if(value) {
            const sharesArrValue: PrinterShareImpl[] = [];
            this.shares?.forEach(element => {
                sharesArrValue.push((element instanceof PrinterShareImpl? element:new PrinterShareImpl(element)));
            });
            this._shares = sharesArrValue;
        }
    };
    /**
     * Gets the taskTriggers property value. A list of task triggers that are associated with the printer.
     * @returns a PrintTaskTriggerInterface
     */
    public get taskTriggers() {
        return this._taskTriggers;
    };
    /**
     * Sets the taskTriggers property value. A list of task triggers that are associated with the printer.
     * @param value Value to set for the taskTriggers property.
     */
    public set taskTriggers(value: PrintTaskTrigger[] | undefined) {
        if(value) {
            const taskTriggersArrValue: PrintTaskTriggerImpl[] = [];
            this.taskTriggers?.forEach(element => {
                taskTriggersArrValue.push((element instanceof PrintTaskTriggerImpl? element:new PrintTaskTriggerImpl(element)));
            });
            this._taskTriggers = taskTriggersArrValue;
        }
    };
}
