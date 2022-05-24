import {createPrintConnectorFromDiscriminatorValue} from './createPrintConnectorFromDiscriminatorValue';
import {createPrinterShareFromDiscriminatorValue} from './createPrinterShareFromDiscriminatorValue';
import {createPrintTaskTriggerFromDiscriminatorValue} from './createPrintTaskTriggerFromDiscriminatorValue';
import {PrintConnectorImpl, PrinterBaseImpl, PrinterShareImpl, PrintTaskTriggerImpl} from './index';
import {PrintConnector} from './printConnector';
import {Printer} from './printer';
import {PrinterShare} from './printerShare';
import {PrintTaskTrigger} from './printTaskTrigger';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the print singleton. */
export class PrinterImpl extends PrinterBaseImpl implements Parsable, Printer {
    /** The connectors that are associated with the printer. */
    public connectors?: PrintConnector[] | undefined;
    /** True if the printer has a physical device for printing. Read-only. */
    public hasPhysicalDevice?: boolean | undefined;
    /** True if the printer is shared; false otherwise. Read-only. */
    public isShared?: boolean | undefined;
    /** The most recent dateTimeOffset when a printer interacted with Universal Print. Read-only. */
    public lastSeenDateTime?: Date | undefined;
    /** The DateTimeOffset when the printer was registered. Read-only. */
    public registeredDateTime?: Date | undefined;
    /** The list of printerShares that are associated with the printer. Currently, only one printerShare can be associated with the printer. Read-only. Nullable. */
    public shares?: PrinterShare[] | undefined;
    /** A list of task triggers that are associated with the printer. */
    public taskTriggers?: PrintTaskTrigger[] | undefined;
    /**
     * Instantiates a new printer and sets the default values.
     * @param printerParameterValue 
     */
    public constructor(printerParameterValue?: Printer | undefined) {
        super();
        this.connectors = printerParameterValue?.connectors ;
        this.hasPhysicalDevice = printerParameterValue?.hasPhysicalDevice ;
        this.isShared = printerParameterValue?.isShared ;
        this.lastSeenDateTime = printerParameterValue?.lastSeenDateTime ;
        this.registeredDateTime = printerParameterValue?.registeredDateTime ;
        this.shares = printerParameterValue?.shares ;
        this.taskTriggers = printerParameterValue?.taskTriggers ;
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
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.connectors && this.connectors.length != 0){        const connectorsArrValue: PrintConnectorImpl[] = []; this.connectors?.forEach(element => {connectorsArrValue.push(new PrintConnectorImpl(element));});
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
        if(this.shares && this.shares.length != 0){        const sharesArrValue: PrinterShareImpl[] = []; this.shares?.forEach(element => {sharesArrValue.push(new PrinterShareImpl(element));});
        writer.writeCollectionOfObjectValues<PrinterShareImpl>("shares", sharesArrValue);
        }
        if(this.taskTriggers && this.taskTriggers.length != 0){        const taskTriggersArrValue: PrintTaskTriggerImpl[] = []; this.taskTriggers?.forEach(element => {taskTriggersArrValue.push(new PrintTaskTriggerImpl(element));});
        writer.writeCollectionOfObjectValues<PrintTaskTriggerImpl>("taskTriggers", taskTriggersArrValue);
        }
    };
}
