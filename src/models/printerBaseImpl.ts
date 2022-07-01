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
export class PrinterBaseImpl extends EntityImpl implements PrinterBase {
    /** The capabilities of the printer/printerShare. */
    private _capabilities?: PrinterCapabilities | undefined;
    /** The default print settings of printer/printerShare. */
    private _defaults?: PrinterDefaults | undefined;
    /** The name of the printer/printerShare. */
    private _displayName?: string | undefined;
    /** Whether the printer/printerShare is currently accepting new print jobs. */
    private _isAcceptingJobs?: boolean | undefined;
    /** The list of jobs that are queued for printing by the printer/printerShare. */
    private _jobs?: PrintJob[] | undefined;
    /** The physical and/or organizational location of the printer/printerShare. */
    private _location?: PrinterLocation | undefined;
    /** The manufacturer of the printer/printerShare. */
    private _manufacturer?: string | undefined;
    /** The model name of the printer/printerShare. */
    private _model?: string | undefined;
    /** The status property */
    private _status?: PrinterStatus | undefined;
    /**
     * Gets the capabilities property value. The capabilities of the printer/printerShare.
     * @returns a PrinterCapabilitiesInterface
     */
    public get capabilities() {
        return this._capabilities;
    };
    /**
     * Sets the capabilities property value. The capabilities of the printer/printerShare.
     * @param value Value to set for the capabilities property.
     */
    public set capabilities(value: PrinterCapabilities | undefined) {
        if(value) {
            this._capabilities = value instanceof PrinterCapabilitiesImpl? value as PrinterCapabilitiesImpl: new PrinterCapabilitiesImpl(value);
        }
    };
    /**
     * Instantiates a new printerBase and sets the default values.
     * @param printerBaseParameterValue 
     */
    public constructor(printerBaseParameterValue?: PrinterBase | undefined) {
        super(printerBaseParameterValue);
        this._capabilities = printerBaseParameterValue?.capabilities;
        this._defaults = printerBaseParameterValue?.defaults;
        this._displayName = printerBaseParameterValue?.displayName;
        this._isAcceptingJobs = printerBaseParameterValue?.isAcceptingJobs;
        this._jobs = printerBaseParameterValue?.jobs;
        this._location = printerBaseParameterValue?.location;
        this._manufacturer = printerBaseParameterValue?.manufacturer;
        this._model = printerBaseParameterValue?.model;
        this._status = printerBaseParameterValue?.status;
    };
    /**
     * Gets the defaults property value. The default print settings of printer/printerShare.
     * @returns a PrinterDefaultsInterface
     */
    public get defaults() {
        return this._defaults;
    };
    /**
     * Sets the defaults property value. The default print settings of printer/printerShare.
     * @param value Value to set for the defaults property.
     */
    public set defaults(value: PrinterDefaults | undefined) {
        if(value) {
            this._defaults = value instanceof PrinterDefaultsImpl? value as PrinterDefaultsImpl: new PrinterDefaultsImpl(value);
        }
    };
    /**
     * Gets the displayName property value. The name of the printer/printerShare.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. The name of the printer/printerShare.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        if(value) {
            this._displayName = value;
        }
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
     * Gets the isAcceptingJobs property value. Whether the printer/printerShare is currently accepting new print jobs.
     * @returns a boolean
     */
    public get isAcceptingJobs() {
        return this._isAcceptingJobs;
    };
    /**
     * Sets the isAcceptingJobs property value. Whether the printer/printerShare is currently accepting new print jobs.
     * @param value Value to set for the isAcceptingJobs property.
     */
    public set isAcceptingJobs(value: boolean | undefined) {
        if(value) {
            this._isAcceptingJobs = value;
        }
    };
    /**
     * Gets the jobs property value. The list of jobs that are queued for printing by the printer/printerShare.
     * @returns a PrintJobInterface
     */
    public get jobs() {
        return this._jobs;
    };
    /**
     * Sets the jobs property value. The list of jobs that are queued for printing by the printer/printerShare.
     * @param value Value to set for the jobs property.
     */
    public set jobs(value: PrintJob[] | undefined) {
        if(value) {
            const jobsArrValue: PrintJobImpl[] = [];
            this.jobs?.forEach(element => {
                jobsArrValue.push((element instanceof PrintJobImpl? element as PrintJobImpl:new PrintJobImpl(element)));
            });
            this._jobs = jobsArrValue;
        }
    };
    /**
     * Gets the location property value. The physical and/or organizational location of the printer/printerShare.
     * @returns a PrinterLocationInterface
     */
    public get location() {
        return this._location;
    };
    /**
     * Sets the location property value. The physical and/or organizational location of the printer/printerShare.
     * @param value Value to set for the location property.
     */
    public set location(value: PrinterLocation | undefined) {
        if(value) {
            this._location = value instanceof PrinterLocationImpl? value as PrinterLocationImpl: new PrinterLocationImpl(value);
        }
    };
    /**
     * Gets the manufacturer property value. The manufacturer of the printer/printerShare.
     * @returns a string
     */
    public get manufacturer() {
        return this._manufacturer;
    };
    /**
     * Sets the manufacturer property value. The manufacturer of the printer/printerShare.
     * @param value Value to set for the manufacturer property.
     */
    public set manufacturer(value: string | undefined) {
        if(value) {
            this._manufacturer = value;
        }
    };
    /**
     * Gets the model property value. The model name of the printer/printerShare.
     * @returns a string
     */
    public get model() {
        return this._model;
    };
    /**
     * Sets the model property value. The model name of the printer/printerShare.
     * @param value Value to set for the model property.
     */
    public set model(value: string | undefined) {
        if(value) {
            this._model = value;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.capabilities){
            writer.writeObjectValue<PrinterCapabilitiesImpl>("capabilities", (this.capabilities instanceof PrinterCapabilitiesImpl? this.capabilities as PrinterCapabilitiesImpl: new PrinterCapabilitiesImpl(this.capabilities)));
        }
        if(this.defaults){
            writer.writeObjectValue<PrinterDefaultsImpl>("defaults", (this.defaults instanceof PrinterDefaultsImpl? this.defaults as PrinterDefaultsImpl: new PrinterDefaultsImpl(this.defaults)));
        }
        if(this.displayName){
            writer.writeStringValue("displayName", this.displayName);
        }
        if(this.isAcceptingJobs){
            writer.writeBooleanValue("isAcceptingJobs", this.isAcceptingJobs);
        }
        if(this.jobs && this.jobs.length != 0){        const jobsArrValue: PrintJobImpl[] = [];
        this.jobs?.forEach(element => {
            jobsArrValue.push((element instanceof PrintJobImpl? element as PrintJobImpl:new PrintJobImpl(element)));
        });
            writer.writeCollectionOfObjectValues<PrintJobImpl>("jobs", jobsArrValue);
        }
        if(this.location){
            writer.writeObjectValue<PrinterLocationImpl>("location", (this.location instanceof PrinterLocationImpl? this.location as PrinterLocationImpl: new PrinterLocationImpl(this.location)));
        }
        if(this.manufacturer){
            writer.writeStringValue("manufacturer", this.manufacturer);
        }
        if(this.model){
            writer.writeStringValue("model", this.model);
        }
        if(this.status){
            writer.writeObjectValue<PrinterStatusImpl>("status", (this.status instanceof PrinterStatusImpl? this.status as PrinterStatusImpl: new PrinterStatusImpl(this.status)));
        }
    };
    /**
     * Gets the status property value. The status property
     * @returns a PrinterStatusInterface
     */
    public get status() {
        return this._status;
    };
    /**
     * Sets the status property value. The status property
     * @param value Value to set for the status property.
     */
    public set status(value: PrinterStatus | undefined) {
        if(value) {
            this._status = value instanceof PrinterStatusImpl? value as PrinterStatusImpl: new PrinterStatusImpl(value);
        }
    };
}
