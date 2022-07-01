import {createPrintDocumentFromDiscriminatorValue} from './createPrintDocumentFromDiscriminatorValue';
import {createPrintJobConfigurationFromDiscriminatorValue} from './createPrintJobConfigurationFromDiscriminatorValue';
import {createPrintJobStatusFromDiscriminatorValue} from './createPrintJobStatusFromDiscriminatorValue';
import {createPrintTaskFromDiscriminatorValue} from './createPrintTaskFromDiscriminatorValue';
import {createUserIdentityFromDiscriminatorValue} from './createUserIdentityFromDiscriminatorValue';
import {EntityImpl, PrintDocumentImpl, PrintJobConfigurationImpl, PrintJobStatusImpl, PrintTaskImpl, UserIdentityImpl} from './index';
import {PrintDocument} from './printDocument';
import {PrintJob} from './printJob';
import {PrintJobConfiguration} from './printJobConfiguration';
import {PrintJobStatus} from './printJobStatus';
import {PrintTask} from './printTask';
import {UserIdentity} from './userIdentity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the print singleton. */
export class PrintJobImpl extends EntityImpl implements PrintJob {
    /** The configuration property */
    private _configuration?: PrintJobConfiguration | undefined;
    /** The createdBy property */
    private _createdBy?: UserIdentity | undefined;
    /** The DateTimeOffset when the job was created. Read-only. */
    private _createdDateTime?: Date | undefined;
    /** The documents property */
    private _documents?: PrintDocument[] | undefined;
    /** If true, document can be fetched by printer. */
    private _isFetchable?: boolean | undefined;
    /** Contains the source job URL, if the job has been redirected from another printer. */
    private _redirectedFrom?: string | undefined;
    /** Contains the destination job URL, if the job has been redirected to another printer. */
    private _redirectedTo?: string | undefined;
    /** The status property */
    private _status?: PrintJobStatus | undefined;
    /** A list of printTasks that were triggered by this print job. */
    private _tasks?: PrintTask[] | undefined;
    /**
     * Gets the configuration property value. The configuration property
     * @returns a PrintJobConfigurationInterface
     */
    public get configuration() {
        return this._configuration;
    };
    /**
     * Sets the configuration property value. The configuration property
     * @param value Value to set for the configuration property.
     */
    public set configuration(value: PrintJobConfiguration | undefined) {
        if(value) {
            this._configuration = value instanceof PrintJobConfigurationImpl? value as PrintJobConfigurationImpl: new PrintJobConfigurationImpl(value);
        }
    };
    /**
     * Instantiates a new printJob and sets the default values.
     * @param printJobParameterValue 
     */
    public constructor(printJobParameterValue?: PrintJob | undefined) {
        super(printJobParameterValue);
        this._configuration = printJobParameterValue?.configuration;
        this._createdBy = printJobParameterValue?.createdBy;
        this._createdDateTime = printJobParameterValue?.createdDateTime;
        this._documents = printJobParameterValue?.documents;
        this._isFetchable = printJobParameterValue?.isFetchable;
        this._redirectedFrom = printJobParameterValue?.redirectedFrom;
        this._redirectedTo = printJobParameterValue?.redirectedTo;
        this._status = printJobParameterValue?.status;
        this._tasks = printJobParameterValue?.tasks;
    };
    /**
     * Gets the createdBy property value. The createdBy property
     * @returns a UserIdentityInterface
     */
    public get createdBy() {
        return this._createdBy;
    };
    /**
     * Sets the createdBy property value. The createdBy property
     * @param value Value to set for the createdBy property.
     */
    public set createdBy(value: UserIdentity | undefined) {
        if(value) {
            this._createdBy = value instanceof UserIdentityImpl? value as UserIdentityImpl: new UserIdentityImpl(value);
        }
    };
    /**
     * Gets the createdDateTime property value. The DateTimeOffset when the job was created. Read-only.
     * @returns a Date
     */
    public get createdDateTime() {
        return this._createdDateTime;
    };
    /**
     * Sets the createdDateTime property value. The DateTimeOffset when the job was created. Read-only.
     * @param value Value to set for the createdDateTime property.
     */
    public set createdDateTime(value: Date | undefined) {
        if(value) {
            this._createdDateTime = value;
        }
    };
    /**
     * Gets the documents property value. The documents property
     * @returns a PrintDocumentInterface
     */
    public get documents() {
        return this._documents;
    };
    /**
     * Sets the documents property value. The documents property
     * @param value Value to set for the documents property.
     */
    public set documents(value: PrintDocument[] | undefined) {
        if(value) {
            const documentsArrValue: PrintDocumentImpl[] = [];
            this.documents?.forEach(element => {
                documentsArrValue.push((element instanceof PrintDocumentImpl? element as PrintDocumentImpl:new PrintDocumentImpl(element)));
            });
            this._documents = documentsArrValue;
        }
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "configuration": n => { this.configuration = n.getObjectValue<PrintJobConfigurationImpl>(createPrintJobConfigurationFromDiscriminatorValue); },
            "createdBy": n => { this.createdBy = n.getObjectValue<UserIdentityImpl>(createUserIdentityFromDiscriminatorValue); },
            "createdDateTime": n => { this.createdDateTime = n.getDateValue(); },
            "documents": n => { this.documents = n.getCollectionOfObjectValues<PrintDocumentImpl>(createPrintDocumentFromDiscriminatorValue); },
            "isFetchable": n => { this.isFetchable = n.getBooleanValue(); },
            "redirectedFrom": n => { this.redirectedFrom = n.getStringValue(); },
            "redirectedTo": n => { this.redirectedTo = n.getStringValue(); },
            "status": n => { this.status = n.getObjectValue<PrintJobStatusImpl>(createPrintJobStatusFromDiscriminatorValue); },
            "tasks": n => { this.tasks = n.getCollectionOfObjectValues<PrintTaskImpl>(createPrintTaskFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the isFetchable property value. If true, document can be fetched by printer.
     * @returns a boolean
     */
    public get isFetchable() {
        return this._isFetchable;
    };
    /**
     * Sets the isFetchable property value. If true, document can be fetched by printer.
     * @param value Value to set for the isFetchable property.
     */
    public set isFetchable(value: boolean | undefined) {
        if(value) {
            this._isFetchable = value;
        }
    };
    /**
     * Gets the redirectedFrom property value. Contains the source job URL, if the job has been redirected from another printer.
     * @returns a string
     */
    public get redirectedFrom() {
        return this._redirectedFrom;
    };
    /**
     * Sets the redirectedFrom property value. Contains the source job URL, if the job has been redirected from another printer.
     * @param value Value to set for the redirectedFrom property.
     */
    public set redirectedFrom(value: string | undefined) {
        if(value) {
            this._redirectedFrom = value;
        }
    };
    /**
     * Gets the redirectedTo property value. Contains the destination job URL, if the job has been redirected to another printer.
     * @returns a string
     */
    public get redirectedTo() {
        return this._redirectedTo;
    };
    /**
     * Sets the redirectedTo property value. Contains the destination job URL, if the job has been redirected to another printer.
     * @param value Value to set for the redirectedTo property.
     */
    public set redirectedTo(value: string | undefined) {
        if(value) {
            this._redirectedTo = value;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.configuration){
            writer.writeObjectValue<PrintJobConfigurationImpl>("configuration", (this.configuration instanceof PrintJobConfigurationImpl? this.configuration as PrintJobConfigurationImpl: new PrintJobConfigurationImpl(this.configuration)));
        }
        if(this.createdBy){
            writer.writeObjectValue<UserIdentityImpl>("createdBy", (this.createdBy instanceof UserIdentityImpl? this.createdBy as UserIdentityImpl: new UserIdentityImpl(this.createdBy)));
        }
        if(this.createdDateTime){
            writer.writeDateValue("createdDateTime", this.createdDateTime);
        }
        if(this.documents && this.documents.length != 0){        const documentsArrValue: PrintDocumentImpl[] = [];
        this.documents?.forEach(element => {
            documentsArrValue.push((element instanceof PrintDocumentImpl? element as PrintDocumentImpl:new PrintDocumentImpl(element)));
        });
            writer.writeCollectionOfObjectValues<PrintDocumentImpl>("documents", documentsArrValue);
        }
        if(this.isFetchable){
            writer.writeBooleanValue("isFetchable", this.isFetchable);
        }
        if(this.redirectedFrom){
            writer.writeStringValue("redirectedFrom", this.redirectedFrom);
        }
        if(this.redirectedTo){
            writer.writeStringValue("redirectedTo", this.redirectedTo);
        }
        if(this.status){
            writer.writeObjectValue<PrintJobStatusImpl>("status", (this.status instanceof PrintJobStatusImpl? this.status as PrintJobStatusImpl: new PrintJobStatusImpl(this.status)));
        }
        if(this.tasks && this.tasks.length != 0){        const tasksArrValue: PrintTaskImpl[] = [];
        this.tasks?.forEach(element => {
            tasksArrValue.push((element instanceof PrintTaskImpl? element as PrintTaskImpl:new PrintTaskImpl(element)));
        });
            writer.writeCollectionOfObjectValues<PrintTaskImpl>("tasks", tasksArrValue);
        }
    };
    /**
     * Gets the status property value. The status property
     * @returns a PrintJobStatusInterface
     */
    public get status() {
        return this._status;
    };
    /**
     * Sets the status property value. The status property
     * @param value Value to set for the status property.
     */
    public set status(value: PrintJobStatus | undefined) {
        if(value) {
            this._status = value instanceof PrintJobStatusImpl? value as PrintJobStatusImpl: new PrintJobStatusImpl(value);
        }
    };
    /**
     * Gets the tasks property value. A list of printTasks that were triggered by this print job.
     * @returns a PrintTaskInterface
     */
    public get tasks() {
        return this._tasks;
    };
    /**
     * Sets the tasks property value. A list of printTasks that were triggered by this print job.
     * @param value Value to set for the tasks property.
     */
    public set tasks(value: PrintTask[] | undefined) {
        if(value) {
            const tasksArrValue: PrintTaskImpl[] = [];
            this.tasks?.forEach(element => {
                tasksArrValue.push((element instanceof PrintTaskImpl? element as PrintTaskImpl:new PrintTaskImpl(element)));
            });
            this._tasks = tasksArrValue;
        }
    };
}
