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
export class PrintJobImpl extends EntityImpl implements Parsable, PrintJob {
    /** The configuration property */
    public configuration?: PrintJobConfiguration | undefined;
    /** Read-only. Nullable. */
    public createdBy?: UserIdentity | undefined;
    /** The DateTimeOffset when the job was created. Read-only. */
    public createdDateTime?: Date | undefined;
    /** Read-only. */
    public documents?: PrintDocument[] | undefined;
    /** If true, document can be fetched by printer. */
    public isFetchable?: boolean | undefined;
    /** Contains the source job URL, if the job has been redirected from another printer. */
    public redirectedFrom?: string | undefined;
    /** Contains the destination job URL, if the job has been redirected to another printer. */
    public redirectedTo?: string | undefined;
    /** The status property */
    public status?: PrintJobStatus | undefined;
    /** A list of printTasks that were triggered by this print job. */
    public tasks?: PrintTask[] | undefined;
    /**
     * Instantiates a new printJob and sets the default values.
     * @param printJobParameterValue 
     */
    public constructor(printJobParameterValue?: PrintJob | undefined) {
        super();
        this.configuration = printJobParameterValue?.configuration ;
        this.createdBy = printJobParameterValue?.createdBy ;
        this.createdDateTime = printJobParameterValue?.createdDateTime ;
        this.documents = printJobParameterValue?.documents ;
        this.isFetchable = printJobParameterValue?.isFetchable ;
        this.redirectedFrom = printJobParameterValue?.redirectedFrom ;
        this.redirectedTo = printJobParameterValue?.redirectedTo ;
        this.status = printJobParameterValue?.status ;
        this.tasks = printJobParameterValue?.tasks ;
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
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.configuration){
        writer.writeObjectValue<PrintJobConfigurationImpl>("configuration", new PrintJobConfigurationImpl(this.configuration));
        }
        if(this.createdBy){
        writer.writeObjectValue<UserIdentityImpl>("createdBy", new UserIdentityImpl(this.createdBy));
        }
        if(this.createdDateTime){
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        }
        if(this.documents && this.documents.length != 0){        const documentsArrValue: PrintDocumentImpl[] = []; this.documents?.forEach(element => {documentsArrValue.push(new PrintDocumentImpl(element));});
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
        writer.writeObjectValue<PrintJobStatusImpl>("status", new PrintJobStatusImpl(this.status));
        }
        if(this.tasks && this.tasks.length != 0){        const tasksArrValue: PrintTaskImpl[] = []; this.tasks?.forEach(element => {tasksArrValue.push(new PrintTaskImpl(element));});
        writer.writeCollectionOfObjectValues<PrintTaskImpl>("tasks", tasksArrValue);
        }
    };
}
