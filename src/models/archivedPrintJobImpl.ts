import {ArchivedPrintJob} from './archivedPrintJob';
import {createUserIdentityFromDiscriminatorValue} from './createUserIdentityFromDiscriminatorValue';
import {UserIdentityImpl} from './index';
import {PrintJobProcessingState} from './printJobProcessingState';
import {UserIdentity} from './userIdentity';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ArchivedPrintJobImpl implements AdditionalDataHolder, ArchivedPrintJob, Parsable {
    /** True if the job was acquired by a printer; false otherwise. Read-only. */
    public acquiredByPrinter?: boolean | undefined;
    /** The dateTimeOffset when the job was acquired by the printer, if any. Read-only. */
    public acquiredDateTime?: Date | undefined;
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The dateTimeOffset when the job was completed, canceled or aborted. Read-only. */
    public completionDateTime?: Date | undefined;
    /** The number of copies that were printed. Read-only. */
    public copiesPrinted?: number | undefined;
    /** The user who created the print job. Read-only. */
    public createdBy?: UserIdentity | undefined;
    /** The dateTimeOffset when the job was created. Read-only. */
    public createdDateTime?: Date | undefined;
    /** The archived print job's GUID. Read-only. */
    public id?: string | undefined;
    /** The printer ID that the job was queued for. Read-only. */
    public printerId?: string | undefined;
    /** The print job's final processing state. Read-only. */
    public processingState?: PrintJobProcessingState | undefined;
    /**
     * Instantiates a new archivedPrintJob and sets the default values.
     * @param archivedPrintJobParameterValue 
     */
    public constructor(archivedPrintJobParameterValue?: ArchivedPrintJob | undefined) {
        this.acquiredByPrinter = archivedPrintJobParameterValue?.acquiredByPrinter ;
        this.acquiredDateTime = archivedPrintJobParameterValue?.acquiredDateTime ;
        this.additionalData = archivedPrintJobParameterValue?.additionalData ? archivedPrintJobParameterValue?.additionalData! : {}
        this.completionDateTime = archivedPrintJobParameterValue?.completionDateTime ;
        this.copiesPrinted = archivedPrintJobParameterValue?.copiesPrinted ;
        this.createdBy = archivedPrintJobParameterValue?.createdBy ;
        this.createdDateTime = archivedPrintJobParameterValue?.createdDateTime ;
        this.id = archivedPrintJobParameterValue?.id ;
        this.printerId = archivedPrintJobParameterValue?.printerId ;
        this.processingState = archivedPrintJobParameterValue?.processingState ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "acquiredByPrinter": n => { this.acquiredByPrinter = n.getBooleanValue(); },
            "acquiredDateTime": n => { this.acquiredDateTime = n.getDateValue(); },
            "completionDateTime": n => { this.completionDateTime = n.getDateValue(); },
            "copiesPrinted": n => { this.copiesPrinted = n.getNumberValue(); },
            "createdBy": n => { this.createdBy = n.getObjectValue<UserIdentityImpl>(createUserIdentityFromDiscriminatorValue); },
            "createdDateTime": n => { this.createdDateTime = n.getDateValue(); },
            "id": n => { this.id = n.getStringValue(); },
            "printerId": n => { this.printerId = n.getStringValue(); },
            "processingState": n => { this.processingState = n.getEnumValue<PrintJobProcessingState>(PrintJobProcessingState); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.acquiredByPrinter){
        writer.writeBooleanValue("acquiredByPrinter", this.acquiredByPrinter);
        }
        if(this.acquiredDateTime){
        writer.writeDateValue("acquiredDateTime", this.acquiredDateTime);
        }
        if(this.completionDateTime){
        writer.writeDateValue("completionDateTime", this.completionDateTime);
        }
        if(this.copiesPrinted){
        writer.writeNumberValue("copiesPrinted", this.copiesPrinted);
        }
        if(this.createdBy){
        writer.writeObjectValue<UserIdentityImpl>("createdBy", new UserIdentityImpl(this.createdBy));
        }
        if(this.createdDateTime){
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        }
        if(this.id){
        writer.writeStringValue("id", this.id);
        }
        if(this.printerId){
        writer.writeStringValue("printerId", this.printerId);
        }
        if(this.processingState){
        writer.writeEnumValue<PrintJobProcessingState>("processingState", this.processingState);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
