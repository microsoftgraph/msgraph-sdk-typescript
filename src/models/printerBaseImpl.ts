import {createPrinterCapabilitiesFromDiscriminatorValue} from './createPrinterCapabilitiesFromDiscriminatorValue';
import {createPrinterDefaultsFromDiscriminatorValue} from './createPrinterDefaultsFromDiscriminatorValue';
import {createPrinterLocationFromDiscriminatorValue} from './createPrinterLocationFromDiscriminatorValue';
import {createPrinterStatusFromDiscriminatorValue} from './createPrinterStatusFromDiscriminatorValue';
import {createPrintJobFromDiscriminatorValue} from './createPrintJobFromDiscriminatorValue';
import {EntityImpl, PrinterCapabilitiesImpl, PrinterDefaultsImpl, PrinterLocationImpl, PrinterStatusImpl, PrintJobImpl} from './index';
import {PrinterBase} from './printerBase';
import {PrinterCapabilities} from './printerCapabilities';
import {PrinterDefaults} from './printerDefaults';
import {PrinterLocation} from './printerLocation';
import {PrinterStatus} from './printerStatus';
import {PrintJob} from './printJob';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the print singleton. */
export class PrinterBaseImpl extends EntityImpl implements Parsable, PrinterBase {
    /** The capabilities of the printer/printerShare. */
    public capabilities?: PrinterCapabilities | undefined;
    /** The default print settings of printer/printerShare. */
    public defaults?: PrinterDefaults | undefined;
    /** The name of the printer/printerShare. */
    public displayName?: string | undefined;
    /** Whether the printer/printerShare is currently accepting new print jobs. */
    public isAcceptingJobs?: boolean | undefined;
    /** The list of jobs that are queued for printing by the printer/printerShare. */
    public jobs?: PrintJob[] | undefined;
    /** The physical and/or organizational location of the printer/printerShare. */
    public location?: PrinterLocation | undefined;
    /** The manufacturer of the printer/printerShare. */
    public manufacturer?: string | undefined;
    /** The model name of the printer/printerShare. */
    public model?: string | undefined;
    /** The status property */
    public status?: PrinterStatus | undefined;
    /**
     * Instantiates a new printerBase and sets the default values.
     * @param printerBaseParameterValue 
     */
    public constructor(printerBaseParameterValue?: PrinterBase | undefined) {
        super();
        this.capabilities = printerBaseParameterValue?.capabilities ;
        this.defaults = printerBaseParameterValue?.defaults ;
        this.displayName = printerBaseParameterValue?.displayName ;
        this.isAcceptingJobs = printerBaseParameterValue?.isAcceptingJobs ;
        this.jobs = printerBaseParameterValue?.jobs ;
        this.location = printerBaseParameterValue?.location ;
        this.manufacturer = printerBaseParameterValue?.manufacturer ;
        this.model = printerBaseParameterValue?.model ;
        this.status = printerBaseParameterValue?.status ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "capabilities": n => { this.capabilities = n.getObjectValue<PrinterCapabilitiesImpl>(createPrinterCapabilitiesFromDiscriminatorValue); },
            "defaults": n => { this.defaults = n.getObjectValue<PrinterDefaultsImpl>(createPrinterDefaultsFromDiscriminatorValue); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "isAcceptingJobs": n => { this.isAcceptingJobs = n.getBooleanValue(); },
            "jobs": n => { this.jobs = n.getCollectionOfObjectValues<PrintJobImpl>(createPrintJobFromDiscriminatorValue); },
            "location": n => { this.location = n.getObjectValue<PrinterLocationImpl>(createPrinterLocationFromDiscriminatorValue); },
            "manufacturer": n => { this.manufacturer = n.getStringValue(); },
            "model": n => { this.model = n.getStringValue(); },
            "status": n => { this.status = n.getObjectValue<PrinterStatusImpl>(createPrinterStatusFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.capabilities){
        writer.writeObjectValue<PrinterCapabilitiesImpl>("capabilities", new PrinterCapabilitiesImpl(this.capabilities));
        }
        if(this.defaults){
        writer.writeObjectValue<PrinterDefaultsImpl>("defaults", new PrinterDefaultsImpl(this.defaults));
        }
        if(this.displayName){
        writer.writeStringValue("displayName", this.displayName);
        }
        if(this.isAcceptingJobs){
        writer.writeBooleanValue("isAcceptingJobs", this.isAcceptingJobs);
        }
        if(this.jobs && this.jobs.length != 0){        const jobsArrValue: PrintJobImpl[] = []; this.jobs?.forEach(element => {jobsArrValue.push(new PrintJobImpl(element));});
        writer.writeCollectionOfObjectValues<PrintJobImpl>("jobs", jobsArrValue);
        }
        if(this.location){
        writer.writeObjectValue<PrinterLocationImpl>("location", new PrinterLocationImpl(this.location));
        }
        if(this.manufacturer){
        writer.writeStringValue("manufacturer", this.manufacturer);
        }
        if(this.model){
        writer.writeStringValue("model", this.model);
        }
        if(this.status){
        writer.writeObjectValue<PrinterStatusImpl>("status", new PrinterStatusImpl(this.status));
        }
    };
}
